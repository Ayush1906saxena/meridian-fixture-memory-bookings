// Room bookings, in memory. startsAt is a UTC timestamp in milliseconds.
const all = [];

function book(room, guest, startsAt) {
  const booking = { id: all.length + 1, room, guest, startsAt };
  all.push(booking);
  return booking;
}

function byId(id) {
  return all.find((b) => b.id === id) || null;
}

function forRoom(room) {
  return all.filter((b) => b.room === room);
}

function clear() {
  all.length = 0;
}

module.exports = { book, byId, forRoom, clear };
