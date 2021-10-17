import express from "express";

const PORT = 4000;

const app = express(); // making application

// configuration application

const handleHome = (req, res) => {
  return res.send("i still love you");
};

const handleLogin = (req, res) => {
  return res.send("Login here");
};

app.get("/", handleHome); // how to response
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`); // open application to the outside of world and listen
// callback function

app.listen(PORT, handleListening);
