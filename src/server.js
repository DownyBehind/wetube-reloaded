import express from "express";

const PORT = 4000;

const app = express(); // making application

// configuration application

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") return res.send("<h1>Not Allowed</h1>");
  console.log("You may allowed");
  next();
};

const routerLogger = (req, res, next) => {
  console.log(req.path);
  next();
};

const methodLogger = (req, res, next) => {
  console.log(req.method);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", methodLogger, routerLogger, handleHome); // how to response
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`); // open application to the outside of world and listen
// callback function

app.listen(PORT, handleListening);
