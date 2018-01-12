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
  var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
  var d = new Date(date);
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();
  return (curr_date + "-" + m_names[curr_month] + "-" + curr_year);
  }

// Question 28

function getDomainNameFromEmailAddress(email) {
  var name   = email.substring(0, email.lastIndexOf("@"));
  var domain = email.substring(email.lastIndexOf("@") +1);
  return domain.split(/[/.]/)[0];
}

// Question 29

function titleizeString(string) {
  var ans = string.split(" ");
  var result = [];
  for (i = 0; i < ans.length; i++) {
    result.push(ans[i][0].toUpperCase() + ans[i].slice(1));
  }
  return result.join(" ");
}

// Question 30

function checkStringForSpecialCharacters(string) {
  if (string.match(/^[a-z0-9]+$/i))  { return false }
    else { return true }
}
