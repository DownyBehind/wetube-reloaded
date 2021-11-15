import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import morgan from "morgan"; // for middleware

const PORT = 4000;

const app = express(); // making application
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// configuration application

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`); // open application to the outside of world and listen
// callback function

app.listen(PORT, handleListening);
