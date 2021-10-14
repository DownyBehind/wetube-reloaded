import express from "express";

const PORT = 4000;

const app = express(); // making application

// configuration application

const handleHome = () => console.log("sombody is trying to go home.");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`); // open application and listen
// callback function

app.listen(PORT, handleListening);
