newname = "Hemant Kumar Chaudhary";
newname = "Hello world!";
console.log(newname);


a = 5;
b = 2 ;
console.log(a*b);

price = 99.09;
console.log(price);

console.log(a-b);

radius = 14;
console.log('Area of circle with radius 14 is: ',radius*3.14*radius);


var pi = 3.14
pi = 12
console.log(pi);

// data types 
// 7 Primitive DataTypes (fixed)
// String, Number, Boolean, Undefined, Null, BigInt, Symbol

// Non-Primitive DataTypes are user made  
// Objects

let age = 23 ;
let fullName = 'Stark';
console.log(age);
console.log(fullName);

let isFollow = true;
console.log(isFollow);
let y ;
console.log(typeof y);


// Important
let x = null ;
console.log(typeof x);


let nums = Number("1234");
console.log(nums);
console.log(typeof nums);

let numss = BigInt("1233552");
console.log(numss);
console.log(typeof numss);

let symbl = Symbol("hello!");
console.log(symbl);
console.log(typeof symbl);


// Non-Primitive datatypes
// objects : array & functions
// objects : it is a collection of values 


const student = {
    fullName:"Rahul Kumar",
    age : 20 ,
    isPass:true,
    cgpa : 8.0
};

console.log(student);
console.log(student.cgpa);
console.log(typeof student);
console.log(typeof student.cgpa);

console.log(student.age);
console.log(student["age"]);

student.age = 12;
console.log(student.age);

// Q1  first practice question 

const product = {
    title : "Parker Ball Pen",
    rating : 4,
    offer : 5,
    price : 270
};
console.log(product);
console.log(typeof product);

// Q2. practice question 

// const profile ={
//     userName : "Shradhakhapra",
//     isFollow : false,
//     posts : 195,
//     followers : 545045,
//     following : 4,
//     fullName : "Shradha Khapra",
//     handle : "@shradhadidiisthebest",
//     about : "Tutor at Apana College "
// };

console.log(typeof profile);
console.log(typeof profile.following);

