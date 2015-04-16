// #1 -----------------------------------------------
// var getName = function(obj) {
// 	return obj.name;

// } ;

//console.log(getName({ name: 'Luisa', age: 25 }));

//#2 ==--------------------------------------------

// var totalLetters = function(myArray) {
// 	return myArray.join("").length;
// };



// console.log(totalLetters(['javascript', 'is', 'awesome']));


// #3----------------------------------------------------

// var keyvalue = function(k, v) {

// 	var obj = {};
// 	obj[k] = v;

// 	return obj;
// };

// console.log(keyvalue("cat", "calico"));

// #4-------------------------------------------------------

// var negativeIndex = function(myArray, negNum) {
// 	ind = myArray.length + negNum;
// 	return myArray[ind];

// };

// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
// console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

// #5 ----------------------------------------------------------

// var removeM = function(str) {
// 	var myArray = str.split("");
// 	var newArray = [];
// 	for(var i=0; i < myArray.length; i++){

// 		if(myArray[i] === "m") {

// 		} else {
// 		var include = myArray[i];	
// 		newArray.push(include);		
// 		}

// 	}

// 	return newArray.join("");
// };

// console.log(removeM("mark"));
// console.log(removeM("memory"));

// #6--------------------------------------------------------------------

// var printObject = function(obj) {
// 	for(var propName in obj) {
// 		console.log(propName + " is " + obj[propName]);

// 	}
// };

// printObject({ firstName: 'pork', lastName: 'chops' });

// #7 ----------------------------------------------------------------

// var vowels = function(str) {
// 	var newArray = [];
// 	var myArray = str.split("");
// 	for(var i=0; i < myArray.length; i++){
// 		if (myArray[i] === "a" || myArray[i] === "e" || myArray[i] === "i" || myArray[i] === "o" || myArray[i] === "u") {
// 			var include = myArray[i];
// 			newArray.push(include);
// 		}
// 	}
// 	return newArray;
// };


// console.log(vowels("alabama"));
// console.log(vowels("mercury"));
// console.log(vowels("What evil old ducks"));



// #8 -------------------------------------------------------------------------------

// 	var twins = function(myArray) {

// 		if(myArray.length % 2) {
// 			return false;
// 			}  
// 			else {
// 					for(var i=0; i < myArray.length; i = i+2) {
// 					if (myArray[i] === myArray[i+1]) {
// 					return true;
// 					}

// 			 		}
// 			 	}
// 			return false;
// 	};
// console.log("Hi " + twins(['a', 'a', 'b', 'c', 'd', 'd']));
// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));


// 	var twins = function(myArray) {

// 		if(myArray.length % 2) {
// 			return false;
// 			}  
// 			else {
// 					for(var i=0; i < myArray.length; i = i+2) {
// 					if (myArray[i] !== myArray[i+1]) {
// 					return false;
// 					}

// 			 		}
// 			 	}
// 			return true;
// 	};
// console.log("Hi " + twins(['a', 'a', 'b', 'c', 'd', 'd']));
// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
// console.log(twins(['a', 'a', undefined]) );
// #9 ------------------------------------------------------------------------------

// var or = function(myArray) {
// 	for(var i = 0; i < myArray.length; i++) {
// 		if (myArray[i] === true) {
// 			return true;
// 		} 
		
// 	}
// 	return false;
// };

// console.log(or([true]));

// #10 -----------------------------------------------------------------------------

var unique = function(arr){

	var ansArray = [];

for(var i=0 ; i<arr.length ; i++){
	if(ansArray.indexOf(arr[i]) === -1){
		ansArray.push(arr[i]);
	}



}
return ansArray;
};

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));






