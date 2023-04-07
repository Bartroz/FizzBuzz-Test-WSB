const fizzBuzz = require('./fizzbuzz')

describe.only('FizzBuzz', () => {
	it('should return fizz when intiger is divided by 3', () => {
		expect(fizzBuzz.divByThree(15)).toBe(0)
	})
	it('should return buzz when intiger is divided by 5', () => {
		expect(fizzBuzz.divByFive(15)).toBe(0)
	})
	it('should return fizzbuzz when intiger is divided by 3 and by 5', () => {
		expect(fizzBuzz.divByThree(15)).toBe(0)
		expect(fizzBuzz.divByFive(15)).toBe(0)
	})
})
