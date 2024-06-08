//Arithmatic opperators
//let a = 5;
//let b = 6;
//console.log("a = ", a,"& b =", b )
//console.log("a + b =" , a + b);
//console.log("a - b =" , a - b);
//console.log("a * b =" , a * b);
//console.log("a / b =" , a / b);
//console.log("a % b =" , a % b);
//console.log("a ** b =" , a ** b);




//unary operators
//let a = 5;
//let b = 6;
//console.log(" a =", a, " b =", b)
//a--;
//console.log("a-- =  ",a--); //6
//console.log("a =",a)


//Asigment operators
//let a = 5;
//let b = 6;

//a **= 4; //a = a ** 4
//console.log("a =",a);//1


//comparison operators
//let a = 5;
//let b = 3;
//console.log("5 <= 3" , a <= 3); 

//logical operators
/*let a = 6;
let b = 5;
console.log("!(6<5) = ",!(a === 6) );*/
//conditional statements

/*let age = 18;
if (age >= 18) {
    console.log(" you can vote");
}
if (age < 18) {
    console.log(" you cannot vote");
}*/
/*let age = 25;


if (age >= 18){
    console.log("vote");
} else{
    console.log("Not vote");
}*/

//odd ar even
/*let num = 7;
if(num%2 === 0){
    console.log(num ,"is even");
}else {
    console.log(num ,"is odd");
}*/
//syntax -> Rules
/*let mode = "red";
 let color;

 if(mode === "dark"){
    color = "black";
 }else if (mode === "blue"){
     color = "blue";
 }
 else if (mode === "pink"){
    color = "pink";
}else{
    color = "white";
}
console.log(color)

if (mode === "dark") console.log(mode);*/
/*let age = 16;
  age >=  18 ? console.log("adult") : console.log("Not adult");*/
  /*const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}*/


/*const foo = -1;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}*/
// Logs 0 and 1
 /*let name = prompt("Hello Hammad!");
 console.log(name);*/
 /*let num = prompt("Enter a number:");
 if (num % 3 === 0){
    console.log(num , "is  amultiple of 3")
 }else{
    console.log(num , "is Not a multiple of 3")
 }*/
 //practice Qs2! - js program
 /*let score = prompt("enter your score (0-100):");
 let grade;
 if(score >= 90 && score <=100){
    grade = "A";
 }else if(score >= 70 && score <=89){
    grade = "B";
 }else if(score >= 60 && score <=69){
    grade = "C";
 } else if(score >= 50 && score <=59){
    grade = "D";
 } else if(score >= 0 && score <=49){
    grade = "F";
 }
 console.log("according to your score, your grade was :",grade);*/
 /*console.log("Hammad Adnan");
 console.log("Hammad Adnan");
 console.log("Hammad Adnan");
 console.log("Hammad Adnan");
 console.log("Hammad Adnan");*/
/*for (let count = 1; count<= 5; count++){
console.log("loop has ended"); 
}*/
//calculate to sum of first  n to 5
/*let sum = 0;
let n = 100;
for(let i=1; i<=n; i++){
  sum = sum + i;
}
console.log("sum = ", sum);
console.log("loop has ended");*/
/*let i = 1;
while(i<=15){
  console.log("Hammad.A",i);
  i++;
}*/
/*let i = 1;
do {
  console.log("i=",i);
  i++;
}while(i <= 10);*/
//for-of-loop
/*let str = "Java Script";

let size = 0;
for(let val of str){
  console.log("i=" ,val);
  size++;
}
console.log("string size =",size);*/
//for-in-loop
/*let student = {
  name: "Hammad Adnan",
  age: 16,
  cgpa: 7.5,
  ispass:true
};
for(let key in student){
  console.log("key=",key, "value=", student[key]);
}*/
//practice num 1
/*for(let num=0; num<=100; num++){
  if(num%2 === 0){
    console.log("num=",num);
  }
}*/
//practice num2
/*let gameNum = 25;
 let userNum = prompt("guess the  game number : ");

while (userNum != gameNum){
userNum = prompt("you entered wrong number.Guess again:")
} s is a template literal  ${ 1+2+3}` ;
console.log(  sentence);*/
/*let str = "Hammadii\tAdnan";
console.log(str.length);*/
/*console.log("Note: View Files from this Repl to Access the Source Code")
console.log("This program adds 1, 2 and 54")

function addThreeNumbers(a, b, c) {
    return a + b + c;
}
let c = addThreeNumbers(1, 2, 1, 54)
console.log(c)*/
/*let a = 67;//A contain 67
console.log(a);
let a = 67 //A contain 67
console.log(a)
a = "hammad"
console.log(a)*/
/*console.log("thid code creat by hammad adnan")
/*var  a = 12;
var a  = 'p'*/
/*let b = "hammad";
const author = "Hammad"

let  c = null;
let d = undefined
let  e = true
{
  let b = 'This'
  console.log(b)
}
console.log(b)*/
//nn bb ss u
/*let a = "Null"
let b = 345 + 1;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "Hammad"
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof a)
//object
const item = {
  "hammad":true,
  "bilal":false,
"saad":67,
"shazad":undefined
}
console.log(item["hammad"]);*/
/*// chapter 1 Q1
let a = "hammad"
let b = 6
console.log( a + b)
//chapter q2
console.log(typeof (a+b))
const a1 = {
 name: "hammad",
  section: 1,
  isprinciple: false
}
//q4
a1['friend'] = "Hammad"
a1['name'] = "Hammadi"

 console.log(a1)*/
//Q3

//Q5
/*const dict = { 
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka:"worke,espicially hard work."

}
console.log(dict["yakka"]);*/
//77;
//"Hammad bahi"
//false
/*
console.log("operators in js")
let a = 10
let b = 4;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulo (remainder)
console.log(a ** b); // exponentiation
console.log(a++); // increment (post-increment)
console.log(a++); // increment (post-increment)
console.log(++a); // increment (pre-increment)
console.log(a--); // decrement (post-decrement)
console.log(--a); // decrement (pre-decrement)*/

//let comp1 = 5;
//let comp2 = 6;
/*console.log("comp1 == comp2",comp1 == comp2) 
console.log("comp1 == comp2",comp1 === comp2) 
console.log("comp1 == comp2",comp1 == comp2) 
console.log("comp1 == comp2",comp1 !== comp2) */
//console.log("comp1 > comp2",comp1 > comp2) 
// let x = 5;
// let y = 6;
// console.log(x<y && x==5); 
// console.log(x<y || x==5); 
// console.log(!false); 

// let a = prompt("Hey whats your age ?");
// console.log(typeof a);
// let a = prompt("Hey whats your age ?");
// a =Number.EPSILON.persInt(a);
// console.log(typeof a);
/*let a = prompt("Hey whats your age ?");
a = Number.persInt(a);
console.log(typeof a);
if(a>0){
  alert("this age vaild")
}*/