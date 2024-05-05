import { Server } from "socket.io";

const handleSockets = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
  });
};

export { handleSockets };
