// Simple test: 5 + 5
// Interesting test: 1 + 5 * 5

// create function calculator
	// function accepts one argument, a string with the full equation to be solved
var function = calculator(str) {

	// create equation, set to input string stripped of whitespaces
	var equation = str.split(/[\s,]+/).join('');
	// create resultStorage, set to null
	var resultStorage = null;
	// create runningTotal to track running totals of ongoing * or / operations
	var runningTotal = null;
	// create runningNext to track the next value to be calculated with runningTotal
	var runningNext = null;
	// create runningOperator, set to null
	var runningOperator = null;
	// create nextVal, set to null
	var nextVal = null;
	// create operator, set to null
	var operator = null;
	// create operatorObject, to track all operators
	var operators = {
		'+': true,
		'-': true,
		'*': true,
		'/': true
	};

	// edge case detection:
		// if string is 0 length, return error
	if (str.length === 0) {
		return -1;
	}

	// create function math
	var math = function() {
		// if runningTotal is not null
		if (runningTotal) {
			// set temp to runningTotal calculated with runningOperator and runningNext
			// if next character in string is NOT * or /
				// if no runningOperator, set resultStorage to temp
				// else, calculate resultStorage with runningOperator and temp
		}
		// if resultStorage is null, set it to nextVal
		if (!resultStorage) {
			resultStorage = parseInt(nextVal);
		}
		// else, if resultStorage is not null
		else {
			// resultStorage set to resultStorage calculated with operator and runningTotal
		}
	};

	// create for loop that iterates over each character in equation
	var (for i = 0; i < str.length; i++) {
		var currChar = str[i];
		// BASE CASE: if character is the last character in string
		if (i === str.length - 1) {
			// if last character is an operator, return error
			if (operators[currChar] === true) {
				return -1;
			}
			// if resultStorage is null
			else if (resultStorage === null) {
				// concat last character to nextVal
				nextval = nextval + currChar;
				// set resultStorage to nextVal
				resultStorage = parseInt(nextVal);
			}
			// if resultStorage is not null
			else {
				// do math here
			}
		}

		// if character is number
		if (typeof currChar === 'number') {
			nextVal = nextVal + currChar;
		}
		// if character is not in operatorObject, return error
		if (!operators[currChar]) {
			return -1;
		}
		// if character is an operator
		else {
			// do math here
			operator = currChar;
		}
	};

	return resultStorage;
};
