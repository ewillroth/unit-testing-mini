const {add, subtract, multiply, divide, returnTwo, greeting} = require('./functions')

describe('returnTwo', ()=>{
	it('should return 2', ()=>{
		const expectedResult = 2

		const actualResult = returnTwo()

		expect(actualResult).toBe(expectedResult);
	})
})

describe('greeting', ()=>{
	it('should return a greeting with a given name', ()=>{
		const expectedResult = "Hello, James."

		const actualResult = greeting('James')
		
		expect(actualResult).toBe(expectedResult);

		const expectedResult2 = "Hello, Jill."

		const actualResult2 = greeting('Jill')
		
		expect(actualResult2).toBe(expectedResult2);
	})
})

describe('Math functions', ()=>{
	it('should add two numbers', () => {
		const expectedResult = 3

		const actualResult = add(1, 2)

		expect(actualResult).toBe(expectedResult);

		const expectedResult2 = 14

		const actualResult2 = add(5, 9)

		expect(actualResult2).toBe(expectedResult2);
	})
	it('should subtract two numbers', () => {
		const expectedResult = -1

		const actualResult = subtract(1, 2)

		expect(actualResult).toBe(expectedResult);

		const expectedResult2 = -4

		const actualResult2 = subtract(5, 9)

		expect(actualResult2).toBe(expectedResult2);
	})
	it('should divide two numbers', () => {
		const expectedResult = 2

		const actualResult = divide(2, 1)

		expect(actualResult).toBe(expectedResult);

		const expectedResult2 = 10

		const actualResult2 = divide(90, 9)

		expect(actualResult2).toBe(expectedResult2);
	})
	it('should multiply two numbers', () => {
		const expectedResult = 2

		const actualResult = multiply(1, 2)

		expect(actualResult).toBe(expectedResult);

		const expectedResult2 = 45

		const actualResult2 = multiply(5, 9)

		expect(actualResult2).toBe(expectedResult2);
	})

})