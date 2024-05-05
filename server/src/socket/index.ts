import { Server, Socket } from "socket.io";
import { ptyProcess } from "../terminal";

const handleSockets = (io: Server) => {
  ptyProcess.onData((data) => {
    console.log("ptyProcess", data);
    io.emit("terminal:data", data);
  });

  io.on("connection", (socket: Socket) => {
    console.log("New client connected", socket.id);

    socket.on("terminal:write", (data) => {
      console.log("terminal:write", data);
      ptyProcess.write(data);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  });
};

export { handleSockets };
