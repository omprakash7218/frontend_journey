console.log("Hello World!");

// operators in js 

// i have already learnt most of the operators so i am not going to write any code , i did revised by just watching the lecture 

// Logical operators (true or false)

// && and 
// || or 
/* ! not */

let a = 2 ;
let b = 3 ;

let cond1 = a == b ;
let cond2 = a <= b ;

console.log(cond1 || cond2);


// not operator 
console.log("!cond1 i.e !(a==b) -- true means !(true) -- false : "  , !cond1);


console.log(!true);   // false
console.log(!false);  // true 


// conditional statements
let age = 19 ;
if (age > 1) {
    console.log("You can go!");
}



let mode = "dark";
let color;
if (mode === "dark"){
    color = "black";
}else{
    color = "white";
}

console.log(color);

let num = 10 ;
let odd_even ;
if (num % 2 === 0) {
    odd_even = "even"
} else {
    odd_even = "odd"
}
console.log(odd_even);

// else if statement 

marks = 102; 

if (marks === 33) {
    console.log("Grade D (pass)");
} else if (marks > 33 && marks < 80) {
    console.log("Grade B");
} else if (marks < 33) {
    console.log("Failed !!");
}else {
    console.log("Grade A")
}


// Operators in js 
// ternary operators 


ram = 12 ;
let result = ram > 19 ? "adult":"Not adult";  // simple or compact if else 
console.log(result);


alert ("Hello !!!!!")    // gives some kind of alert one time 

// Practice questions
// Q1. Get user to input a number using prompt("Enter a number: "). Check if the number is a multiple of 5 or not 

num = prompt("Enter a number: ");

if (num % 5 === 0) {
    console.log(num , " - Yes it is a multple of 5.");
} else {
    console.log(num , "Not a multple of 5.");
}


// Q2 grade system maker 

let mark = prompt("Enter the Marks: ");

if (mark >= 90 && mark <= 100) {
    console.log("A");
} else if (mark >= 70 && mark <= 89) {
    console.log("B");
} else if (mark >= 60 && mark <= 69) {
    console.log("C");
} else if (mark >= 50 && mark <= 59) {
    console.log("D");
} else if (mark >= 0 && mark <= 49) {
    console.log("F");
} else {
    console.log("Please Enter a valid number.");
}
