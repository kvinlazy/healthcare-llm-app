const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 5001;
const HF_API_URL = "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium";
const HF_API_TOKEN = "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";

app.use(cors());
app.use(express.json());

// WebSocket connection
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (msg) => {
    console.log("Message received:", msg);
    io.emit("message", msg); // Broadcast message to all users
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Chatbot endpoint
app.post("/chatbot", async (req, res) => {
  const userMessage = req.body.message;
  try {
    const response = await axios.post(
      HF_API_URL,
      { inputs: userMessage },
      { headers: { Authorization: `Bearer ${HF_API_TOKEN}` } }
    );
    res.json({ reply: response.data.generated_text || "I'm sorry, I didn't understand that." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error connecting to chatbot API" });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
