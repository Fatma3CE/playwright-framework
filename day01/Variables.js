let studentName = "James";
let studentAge = 25;
let isFullTime = true;
console.log(studentName);
console.log(studentAge);
console.log(typeof isFullTime);
//console.log(typeof studentName);
//console.log(typeof studentAge);
/*comment 1
comment 2*/

studentName = "Bella";
console.log(studentName);
console.log("----------------------------------------------");

if (true) {
  //let a = 100; // not accessible outside blocks
  var a = 100 // accessible outside the blocks , global keyword
}console.log(a);

console.log("----------------------------------------------");
var x= 300;

var x=500;
// when we use let keyword the variable names should be unique
console.log(x);
console.log("----------------------------------------------");

const PI =3.14;
//PI=5.25; 
/* when we use let keyword we can reassign a value to the valuable 
 but if we want it to be unchangable we need to use const keyword
 IT SHOULD BE ALL UPPERCASE*/
 console.log(PI);

console.log("----------------------------------------------");

const MAXIMUM_LIMIT =100_000; // ALWAYS USE UNDERSCORE
console.log(MAXIMUM_LIMIT);