import { FizzBuzzNumber } from "./types";

function toFizzBuzzNumber(number: number): FizzBuzzNumber {
  const isFizz =
    number % 3 === 0 || number % 10 === 3 || (number >= 30 && number < 40);
  const isBuzz = number % 5 === 0 || (number >= 50 && number < 60);
  const isFizzBuzz = isFizz && isBuzz;

  if (isFizzBuzz) return "FizzBuzz";
  if (isBuzz) return "Buzz";
  if (isFizz) return "Fizz";

  return number;
}

export default toFizzBuzzNumber;
