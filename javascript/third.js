console.log('Hello world!');

for (let i = 0; i <= 10; i ++) {
    console.log("Welcome to Apna Collage");
}


// calculate the sum of 1 to n 

let sum = 0
for (let i = 1; i <= 10 ; i ++) {
    sum += i;
}

console.log(sum);


let i = 0;
while (i < 5) {
    console.log("Hello Apna College");
    i += 1;
}

// do while loop 

let z = 0 ;
do {
    console.log("i = ", z );
    z ++;
} while (z <= 5)


// for of loop for array and strings  

str = "Python";
for (let letter of str) {
    console.log("Letter = " , letter);
}


// for in loop for objects or arrays 
student = {
    fullName : "Rahul Kumar",
    grade : "f",
    marks : 22
}

for (let key in student) {
    console.log(student[key]);
}

// Practice Questions 
// print all the even numbers from 0 to 100

for (let i = 0 ; i <= 100 ; i ++ ) {
    if (i%2 === 0) {
        console.log(i);
    }
}

// create a guess game 
// let guessNumber = 25 ;

// let userNumber = prompt("Guess the Game Number : ");

// while (userNumber != guessNumber){
//     userNumber = prompt("Wrong! try again: ")
// }
// alert("CONGRATULATIONS ! YOU GUESSED THE CORRECT NUMBER. ")


// STRINGS IN JAVASCRIPT
// IN BUILT FUNCTIONS ===== METHODS
word = "Omprakash chaudhary";

console.log(word[0]);


// TEMPLATE LITERALS 

let template_literals = `This is a Template Literals. (Backtick)`;

console.log(typeof template_literals);

// so why is this used  
// like python we need a way to do this print(f"My name is {name}")
// In JavaScript we do this instead 

actualName = "omprakash Chaudhary";
marks = 476;

// String Interpolation 
// to create strings by doing substitution of placeholders
// some text ${expression} some text  
console.log(`My name is ${actualName}. I have got ${marks} marks.`);   //This makes number to a strings

console.log(`sum of 1 , 2 , 3 is ${1+2+3}`);  // but this 6 will be a string


// Escape characters 
// for next line \n 
console.log("Apna\nCollege");
console.log(`Apna\nCollege`);
let string1 = 'Apna\nCollege';
console.log(string1.length);


// for tab space \t 
console.log("Apna\tCollege");
let string2 = `Apna\tCollege`;
console.log(string2.length);


// String Methods 
// these methods gives an entirely new value , original value will not be changed 

// one important thing : in javascript strings are immutable 
let strn = '          apna     college   ';
console.log(strn.toUpperCase());
console.log(strn.toLowerCase());
console.log(strn.length);
console.log(strn.trim());
console.log(strn.trim().length);

// slice method str.slice(start,end)

let slicestr = "0123456789";
let str5 = "Helloworld";
console.log(slicestr.slice(1,5));
console.log(str5.slice(0,5));
console.log(str5.slice(5)); // position 5 onward 

// concatenate 
let str11 = "Hello";
let str12 = "world";
console.log(str11.concat(str12));
// or 
console.log(str11 + str12);


// replace and replaceAll

let str21 = 'HelloWorld';
console.log(str21.replace("H","Ye"));
console.log(str21.replaceAll("o","r"));

// character at index ? charAt

let str22 = "IloveJs";
console.log(str22.charAt(0));  // I


// Practice Questions 

let strName = prompt("Please Enter Your Full Name : ");
let lenName = strName.length;
let username = `@${strName}${lenName}`;
console.log(`your username could be : ${username}`);