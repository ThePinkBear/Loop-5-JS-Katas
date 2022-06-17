//Fizzbuzz Kata

console.log("Waddup planet");

function isNumberValid(a) {
 
  if ( typeof a !== 'number' ) {
    throw new Error('Only numbers are allowed');;
  } 
  return true;
}

function fizz(n){
  if(n % 3 == 0){
    return true;
  }
  return false;
}

function buzz(n){
  if(n % 5 == 0){
    return true;
  }
  return false;
}

function fizzBuzz(n){
  if(fizz(n) && buzz(n)){
    return true;
  }
  return false;
}

function arrayer (n) { 
  return [...Array(n).keys()].map(i => i + 1); 
}

function fizzBuzzer (n) {
  let theArray = arrayer(n);
  let example = ['pop', 'corn', 'fizz', 'bob'];
  let newArray = [];
  for (let i = 0; i < n; i++) {
    if ( fizzBuzz(theArray[i]) ) {
      newArray.push('fizzBuzz');}
    else if ( buzz(theArray[i]) )  {
      newArray.push('buzz');}
    else if ( fizz(theArray[i]) ) {
       newArray.push('fizz')}
    else {
      newArray.push(theArray[i]);
    }
  }
  console.log(newArray);
}


export default function cunt() {
  return 'Damn world';
}

module.exports.isNumberValid = isNumberValid;
module.exports.fizz = fizz;
module.exports.buzz = buzz;
module.exports.fizzBuzzer = fizzBuzzer;
module.exports.arrayer = arrayer;

//Symbol	I	  V	  X	  L	  C	  D 	M
//Value	  1	  5   10  50	100	500	1,000

/// Roman numerals Kata