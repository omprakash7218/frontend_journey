// functions in js 
// block of code that can perform a specific task , and can be involked whenever needed 


function myFunc() {
    console.log("Welcome to Apna College. Today we are learning JS and adv.CSS!");
}


function input(msg) {
    console.log(msg);
}


input("I hate JS")

function sum(a, b) {
    s = `Sum of ${a},${b} is ${a + b}`;
    return s;
}
// NaN - Not a  number  if we multiply string To a number
console.log(sum(1, 2));


// ARROW FUNCITON =>

const sums = (a, b) => {
    console.log(a + b);
}

sums(23, 323);


// Modern JS me arrow function hi jyada use hoti hai agar 2 se 3 line of code ho 

const multiplication = (a, b) => {
    return (`Multiplication of ${a} and ${b} : ${a * b}`);
}

console.log(multiplication(123, 1))

// Practice Questions 

// Q1. Create a function that takes in a string and gives the number of vowels in it 

function numVowels(word) {
    word = word.toLowerCase()
    let count = 0;
    for (let i of word) {
        if (i === "a" ,
             i === "e" ,

             i === "i" ,

             i === "o" ,

             i === "u") {

            count += 1;
        }
    }

    return count
}

console.log(numVowels("OMPRAKaSH"))


// Q2. Create the arrow funciton for the same 
' [p0ed'
let vowel = (word) => {
    word = word.toLowerCase()
    count = 0;
    for (let i of word) {
        if (i === "a" ,
             i === "u" ,

             i === "o" ,

             i === "i" ,

             i === "e") {

            count += 1;
        }
    }
}



// forEach method 
// HIGHER ORDER FUNCTION OR METHODS 

function xyz() {
    console.log("main hoon don !");

}
let arr = [1,2,3,4,5];
arr.forEach(element => {
    let square = element ** 2;
    console.log(square);
});


let arr1 = [1,2,3,4,3,4,46,3,535,34]

let arr2 = arr1.filter((val) => {
    return val % 2 === 0;
})

console.log(arr2)

let arr3 = arr1.map((val) => {
    return val ** 2 ;
})

console.log(arr3)

arr1.forEach((val,idx,arr) => {
    console.log(val**2,idx,arr);
})

console.log("------------------------------------------")

function numSqr(val) {
    return (val **2) ;
}

console.log(arr1.map(numSqr));
console.log("------------------------------------------")

let numSqrr = (val) => {
    return (val ** 2) ;
}

console.log(arr1.map(numSqrr));

let  even = (val)  => {
    return val % 2 === 0;
    }

let arrEven = arr1.filter(even);

console.log(arrEven);



// Let's Practice 
// Practice Questions 

// Q1 We are given array of marks of students . find out of the marks of students that scored more thatn 90 
let marks = [12,78,98,89,78,98,97,100,99,91,90,92,93,13,45,67,87,54];

let goodMarks = marks.filter((val) => {
    return val > 90 ;
})

console.log(goodMarks);

// REDUCE 

const ar = [1,2,3,4];

const sumArray = ar.reduce((start , current) => {
    return start + current ;
})
console.log(sumArray);

// Q2. Take a number n as an input from the user. Then create a array from 1 to n .

n = prompt("Please enter your number : ");

function arrN(n){
    arr = [];
    for (let i = 1; i <=n ; i++) {
        arr[i-1] = i;
}
    return arr;
}

const  arrayN = arrN(n);

console.log(arrayN);


// use the reduce method to get the sum of all marks 


total = arrayN.reduce((start,current) => {
    return start + current;
})

console.log(total);

// use the reduce method to find the product of the numbers


totalMultiplication = arrayN.reduce((start,current) => {
    return start * current;
})

console.log(totalMultiplication);
