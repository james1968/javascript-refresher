// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
	var even = [];
	var odd =[];
	for (i = 0; i < array.length; i++) {
		if (array[i]%2 === 0) {
			even.push(array[i]);
		} else {
			odd.push(array[i]);
		}
	}
	return [even, odd]
};

// Question 12

function numberOfElementsThatArePalindromes(array) {
	var count = 0;
	for (i = 0; i < array.length; i++) {
		var str = array[i];
		var strRev = array[i].split('').reverse().join('')
		if (str === strRev) { 
		count++; }
	}
	return count;
};

// Question 13

function shortestWordInArray(array) {
	return array.reduce((a, b) => a.length <= b.length ? a : b);
}

// Question 14

function longestWordInArray(array) {
	return array.reduce((a, b) => a.length >= b.length ? a : b);
}

// Question 15

function arrayTotal(array) {
	return array.reduce((a, b) => a + b, 0);
}

// Question 16

function doubleArray(array) {
	var result = [];
	result = [1, 2, 3, ];
	for (i = 0; i < array.length; i++) {
	result.push(array[i]);
}
	return result;
}

// Question 17

function averageOfArray(array) {
	return Math.round(((array.reduce((a, b) => a + b, 0)) / array.length) * 10) / 10;
}

// Question 18

function removeElementsGreaterThanFive(array) {
	var result = []
	for (i = 0; i < testArray.length; i++) {
		if (array[i] < 6) {
			result.push(array[i])
		}
		}
	return result;
};

// Question 19

function convertArrayToObject(array) {
	var rv = {};
	for (var i = 0; i < array.length; ++i)
	rv[i] = array[i];
	return rv;
}

// Question 20

function getLettersInArrayOfWords(array) {
	var str = array.toString();
	var ans = str.replace(/[,]/g, "").split('').sort().join('');
	return ans.split('');
}
