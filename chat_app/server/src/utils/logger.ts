import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "pid,hostname",
    },
  },
  timestamp: () => `,"time":"${dayjs().format(`YYYY-MM-DDTHH:mm:ss [Z] A`)}"`,
});

export default log;
