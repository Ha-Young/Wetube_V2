"use strict";

const express = require("express");

const app = express();
const PORT = 4000;

function handleListening() {
  console.log("Listening on : http://localhost:".concat(PORT));
}

function handleHome(req, res) {
  res.send("Hello From Home!");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

app.get('/', handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);