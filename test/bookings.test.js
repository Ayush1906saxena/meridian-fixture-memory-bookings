const test = require("node:test");
const assert = require("node:assert");
const bookings = require("../src/bookings");

test("books a room and finds the booking", () => {
  bookings.clear();
  const b = bookings.book("101", "Ravi", Date.UTC(2026, 4, 10, 9));
  assert.deepStrictEqual(bookings.byId(b.id), b);
});

test("lists a room's bookings", () => {
  bookings.clear();
  bookings.book("101", "A", 1);
  bookings.book("102", "B", 2);
  bookings.book("101", "C", 3);
  assert.deepStrictEqual(bookings.forRoom("101").map((b) => b.guest), ["A", "C"]);
});
