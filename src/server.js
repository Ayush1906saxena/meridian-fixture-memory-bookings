const express = require("express");
const bookings = require("./bookings");

const server = express();
server.use(express.json());

server.post("/bookings", (req, res) => {
  const { room, guest, startsAt } = req.body || {};
  if (!room || !guest || !Number.isFinite(startsAt)) {
    return res.status(400).json({ error: "room, guest and startsAt (UTC ms) are required" });
  }
  res.status(201).json(bookings.book(room, guest, startsAt));
});

server.get("/bookings/:id", (req, res) => {
  const booking = bookings.byId(Number(req.params.id));
  if (!booking) return res.status(404).json({ error: "no such booking" });
  res.json(booking);
});

server.get("/rooms/:room/bookings", (req, res) => res.json(bookings.forRoom(req.params.room)));

module.exports = server;
