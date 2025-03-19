import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add global CSS for custom styling
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }
  .code {
    font-family: 'JetBrains Mono', monospace;
  }
  .bg-grid {
    background-size: 20px 20px;
    background-image: 
      linear-gradient(to right, rgba(229, 231, 235, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229, 231, 235, 0.1) 1px, transparent 1px);
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
