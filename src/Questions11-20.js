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
	var result = array[0].length;
	var len = array.length;
	var ans = array[0];
	for (i = 1; i < len ; i++) {
		if (array[i].length <= result) {
			ans = array[i]; } else {
			ans = array[i-1];}
			}
	return ans
}

// Question 14

function longestWordInArray(array) {
	var result = array[0].length;
	var len = array.length;
	var ans = array[0];
	for (i = 1; i < len ; i++) {
		if (array[i].length >= result) {
			ans = array[i]; } else {
			ans = array[i-1];}
			}
	return ans
};

// Question 15

function arrayTotal(array) {

};

// Question 16

function doubleArray(array) {

};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {

};

// Question 20

function getLettersInArrayOfWords(array) {

};
