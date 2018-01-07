// Question 21

function swapKeysAndValuesInObject(object) {
	var new_obj = {};

  	for (var prop in object) {
      if(object.hasOwnProperty(prop)) {
      new_obj[object[prop]] = prop;
      }
  	}
		for (var key in new_obj) {
    	new_obj[key] = Number(new_obj[key])
    	}
  return new_obj;
}

// Question 22

function addKeysAndValues(object) {
  var array = [];
  var arr = [];
  var ans = [];
  for (var key in object) {
      array.push(Number(key))
      arr.push(object[key])
      }
      return (array.reduce((a, b) => a + b, 0) + arr.reduce((a, b) => a + b, 0));
    };

// Question 23

function removeCapitalLettersFromString(string) {
  return string.replace( /[A-Z]/g, '' );
};

// Question 24

function everyPossiblePairing(array) {
   var res = [],
    l = array.length;
    for(var i=0; i<l; ++i) {
        for(var j=i+1; j<l; ++j) {
            res.push([array[i], array[j]]);
    }
  }return res;
}

// Question 25

function roundUpNumber(number) {
  return Math.ceil(number);
}

// Question 26

function roundDownNumber(number) {
  return Math.floor(number);
}

// Question 27

function formatDateNicely(date) {

  };

// Question 28

function getDomainNameFromEmailAddress(email) {

};

// Question 29

function titleizeString(string) {

};

// Question 30

function checkStringForSpecialCharacters(string) {

};
