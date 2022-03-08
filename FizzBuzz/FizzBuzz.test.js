const fizzBuzz = require("./FizzBuzz");

test("number multiple of 3 and 5 return FIzzBuzz", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(13)).not.toBe("FizzBuzz");
});

test("number multiple of 3 return Fizz", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(9)).toBe("Fizz");
  expect(fizzBuzz(13)).not.toBe("Fizz");
});

test("number multiple of 5 return Buzz", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(25)).toBe("Buzz");
  expect(fizzBuzz(13)).not.toBe("Buzz");
});
