import { Server, Socket } from "socket.io";
import logger from "./utils/logger";

const EVENTS = {
  connection: "connection",
};

const socket = ({ io }: { io: Server }) => {
  logger.info(`Socket enalbed`);

  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`User conneted ${socket.id}`);
  });
};

export default socket;
