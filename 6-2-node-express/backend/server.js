// backend/server.js
import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// Initialize app + middleware (CORS)
const app = express();
app.use(cors());              // Enable cross-origin requests (frontend -> backend)
app.use(express.json());      // If you add POST routes later

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Quote Generator API");
});

app.get("/api/quote", (_req, res) => {
  res.json({ quote: getRandomQuote() });
});


// Start server
const PORT = 3000; // or: process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const { getRandomQuote } = require("./quotes");
