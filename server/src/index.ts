import express from "express";
import http from "http";
import { Server } from "socket.io";
import routes from "./routes";
import { handleSockets } from "./socket";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Use routes
app.use("/", routes);

// Use sockets
handleSockets(io);

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
