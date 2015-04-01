// Simple test: 5 + 5
// Interesting test: 1 + 5 * 5

// create function calculator
	// function accepts one argument, a string with the full equation to be solved

	// create equation, set to input string stripped of whitespaces
	// create resultStorage, set to null
	// create runningTotal, set to null
	// create runningNext, set to null
	// create runningOperator, set to null
	// create nextVal, set to null
	// create operator, set to null
	// create operatorObject, to track all operators

	// edge case detection:
		// if string is 0 length, return error
		// if string is a number, return number

	// create function math, which takes the current evaluated string position
		// if runningTotal is not null
			// set temp to runningTotal calculated with runningOperator and runningNext
			// if next character in string is * or /
				// runningTotal is temp
			// else, if resultStorage is null, set it to temp
			// else, if resultStorage is not null
				// resultStorage set to resultStorage calculated with operator and runningTotal

	// create for loop that iterates over each character in equation
		// BASE CASE: if character is the last character in string
			// if last character is an operator, return error
			// if resultStorage is null, concat last character to nextVal
				// set resultStorage to nextVal
			// if resultStorage is not null

		// if character is number
			// check if operator is null
				// if not, add character to second
				// if so, add character to nextVal

		// if character is not in operatorObject, return error

		// if character is an operator

	// return resultStorage
