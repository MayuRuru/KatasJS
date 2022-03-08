const sum = require("./sum");

test("sum two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
