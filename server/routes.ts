import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import nodemailer from "nodemailer";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const data = contactSchema.parse(req.body);
      
      // In a production environment, you would use a real email service
      // This is a test/dev configuration that outputs to console
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || "ethereal.user@ethereal.email",
          pass: process.env.EMAIL_PASS || "ethereal_pass",
        },
      });
      
      // Log instead of actually sending in development
      console.log("Contact form submission:", {
        from: data.email,
        name: data.name,
        subject: data.subject,
        message: data.message,
      });
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
