# FizzBuzz
About this Kata
This Kata was posted here by someone anonymously. Michael Feathers and EmilyBache performed it at agile2008 when competing in “Programming with the stars” in python, in 4 minutes.

## Difficulty: Easy Good for teaching: TDD , BabySteps

## Problem Description

Imagine the scene. You are eleven years old, and in the five minutes before the end of the lesson, your Maths teacher decides he should make his class more “fun” by introducing a “game”. He explains that he is going to point at each pupil in turn and ask them to say the next number in sequence, starting from one. The “fun” part is that if the number is divisible by three, you instead say “Fizz” and if it is divisible by five you say “Buzz”. So now your maths teacher is pointing at all of your classmates in turn, and they happily shout “one!”, “two!”, “Fizz!”, “four!”, “Buzz!”… until he very deliberately points at you, fixing you with a steely gaze… time stands still, your mouth dries up, your palms become sweatier and sweatier until you finally manage to croak “Fizz!”. Doom is avoided, and the pointing finger moves on.

So of course in order to avoid embarassment infront of your whole class, you have to get the full list printed out so you know what to say. Your class has about 33 pupils and he might go round three times before the bell rings for breaktime. Next maths lesson is on Thursday. Get coding!

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz “.

Sample output:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
... etc up to 100
```

Final result:

```typescript
[
	1,
	2,
	"Fizz",
	4,
	"Buzz",
	"Fizz",
	7,
	8,
	"Fizz",
	"Buzz",
	11,
	"Fizz",
	13,
	14,
	"FizzBuzz",
	16,
	17,
	"Fizz",
	19,
	"Buzz",
	"Fizz",
	22,
	23,
	"Fizz",
	"Buzz",
	26,
	"Fizz",
	28,
	29,
	"FizzBuzz",
	31,
	32,
	"Fizz",
	34,
	"Buzz",
	"Fizz",
	37,
	38,
	"Fizz",
	"Buzz",
	41,
	"Fizz",
	43,
	44,
	"FizzBuzz",
	46,
	47,
	"Fizz",
	49,
	"Buzz",
	"Fizz",
	52,
	53,
	"Fizz",
	"Buzz",
	56,
	"Fizz",
	58,
	59,
	"FizzBuzz",
	61,
	62,
	"Fizz",
	64,
	"Buzz",
	"Fizz",
	67,
	68,
	"Fizz",
	"Buzz",
	71,
	"Fizz",
	73,
	74,
	"FizzBuzz",
	76,
	77,
	"Fizz",
	79,
	"Buzz",
	"Fizz",
	82,
	83,
	"Fizz",
	"Buzz",
	86,
	"Fizz",
	88,
	89,
	"FizzBuzz",
	91,
	92,
	"Fizz",
	94,
	"Buzz",
	"Fizz",
	97,
	98,
	"Fizz",
	"Buzz",
];
```

## Stage 2 - new requirements

- A number is fizz if it is divisible by 3 or if it has a 3 in it
- A number is buzz if it is divisible by 5 or if it has a 5 in it

[Original Kata from Code wars](https://codingdojo.org/kata/FizzBuzz/)
