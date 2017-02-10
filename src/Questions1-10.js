// Question 1

function selectElementsStartingWithE(testArray) {
	eArray = [];
	for (i = 0; i < testArray.length; i++) {
		if (testArray[i].charAt(0) === 'e') {
			eArray.push(testArray[i]);
        }
	}
	return eArray;
}

// Question 2

function selectElementsStartingWithVowel(array) {
eArray = [];
	for (i = 0; i < testArray.length; i++) {
		if (testArray[i].charAt(0) === 'e' ||
			testArray[i].charAt(0) === 'a' ||
			testArray[i].charAt(0) === 'i' ||
			testArray[i].charAt(0) === 'o' ||
			testArray[i].charAt(0) === 'u') {

				eArray.push(testArray[i]);
        }
	}
	return eArray;
}

// Question 3

function removeNullsFromArray(array) {
	eArray = [];
	for (i = 0; i < testArray.length; i++) {
		if (testArray[i] !== null) {
			eArray.push(testArray[i]);
        }
	}
	return eArray;
};

// Question 4

function removeNullsAndFalseFromArray(array) {
	eArray = [];
	for (i = 0; i < testArray.length; i++) {
		if (testArray[i] !== null && testArray[i] !== false) {
			eArray.push(testArray[i]);
        }
	}
	return eArray;
};

// Question 5

function reverseEveryElementInArray(testArray) {
	var result = [];
	for (i = 0; i < testArray.length; i++) {
		result.push(testArray[i].split('').reverse().join(''));
	}
	return result;
}



// Question 6

function dropFirstThreeElements(array) {
	return testArray.slice(3, 6);
};

// Question 7

function addElementToBeginningOfArray(array, element) {
	array.unshift(element);
	return array;
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
var result = [];
	for (i = 0; i < testArray.length; i++) {
		result.push(testArray[i].split('').reverse().join(''));
	}
	var ans = [];
	result.sort();
	for (i = 0; i < result.length; i++) {
		ans.push(result[i].split('').reverse().join(''));
	}
	return ans;
};

// Question 9

function returnFirstHalfOfString(string) {
	return string.slice(0, 3);

};

// Question 10

function makeNumberNegative(number) {
	if(number > 0) {
		return number * -1;
	} else {
		return number;
	} 
};
