import toFizzBuzzNumber from "./index";

describe("Testing the toFizzBuzzNumber", () => {
	it("should return 2 when receive as param 2", () => {
		expect(toFizzBuzzNumber(2)).toBe(2);
	});

	it.each([3, 12, 42, 63, 3, 83, 23, 13, 31, 38, 39])(
		"should return fizz when number is divisible by 3 or contain a 3 and the argument %s",
		(number: number) => {
			expect(toFizzBuzzNumber(number)).toBe("Fizz");
		}
	);

	it.each([5, 80, 65, 40, 10, 52, 56])(
		"should return Buzz when number is divisible by 5 or contain a 5 and argument is %s",
		(number: number) => {
			expect(toFizzBuzzNumber(number)).toBe("Buzz");
		}
	);

	it.each([15, 30, 60, 75, 90, 35, 51, 45, 53])(
		"should return FizzBuzz when the number met the rules of both Fizz and buzz and argument is %s",
		(number: number) => {
			expect(toFizzBuzzNumber(number)).toBe("FizzBuzz");
		}
	);
});
