import express from "express";
import http from "http";
import { Server } from "socket.io";
import { handleSockets } from "./socket";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Use sockets
handleSockets(io);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
