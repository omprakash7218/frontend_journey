let students = ["Hulk","Spider-man","Thor","Iron-man","Black-widow"];

let students_marks = [95,100,85,111,79];

console.log(students_marks);
console.log(students);
console.log(typeof students_marks);

students_marks[0] = 12;   // arrays in js are mutable it will change the memory itself permanant after this point onwards

console.log(students_marks);

console.log(students_marks[120]);   //udefined


// LOOPING OVER AN ARRAY 

for (let i of students) {
    console.log(i);
}

for (let index = 0; index < students.length; index++) {
    console.log(`At index ${index} student name is : ${students[index]}`);
}

for (let student in students) {
    console.log(`${student} ${students[student].toUpperCase()}`);
}


// PRACTICE QUESTIONS 
// Q1. Find the average marks

marks = [85,97,44,37,76,60];

let total = 0;
for (let mark of marks) {
    total += mark;
}
let average = total / marks.length;
console.log(`Average marks : ${average}`);

// Q2. For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF on them . Change the array to store final price after applying offer. 

let mrp = [250,645,300,900,50];

for (let i = 0; i < mrp.length; i++) {
    mrp[i] = mrp[i] * 0.90;
}
console.log(`Array with new selling price : ${mrp}`);



// ARRAY METHODS 
// push() : add to end 

// pop() : delete from end & return 

// toString() : converts array to string 

let foodItems = ["tomato","potato","chilli","apple","burger"];

foodItems.push("sandwich");

console.log(foodItems);

foodItems.pop();

console.log(foodItems);

let deletedItem = foodItems.pop();

console.log(deletedItem);


let new_array = foodItems.toString();  // no change in the actual array.

console.log(new_array);
console.log(foodItems);

let markss = [97,87,85,86,45,54];

let string_marks = markss.toString();
console.log(markss);
console.log(string_marks);

let marvelHeroes = ["Thor","Iron-Man","Dr. Strange","Spider-Man", "Hulk"];

let dcHeroes = ["Super-Man","Bat-Man","Flash"];

let indianHeroes = ["Hanuman","Shaktiman","Krrish"];

let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);

let str1 = "man ";
let str3 = " mans ";
let str2 = "massn";

console.log(str1.concat(str2,str3));


// unshift() : adds to the start 
heroes.unshift("antman");
console.log(heroes);
// shift() : delete from start & return 
let deleted = heroes.shift() ;

console.log(deleted);
console.log(heroes);


// slice()  returns a piece fo the array 
console.log(heroes.slice(1,5));


// splice() : change original array (add , remove , replace)

// splice(start-index , delcount , new-element)
let arraay = [0,1,2,3,4,5,6,7,8,9];
arraay.splice(1,2,11,12,13);

// delcount will help us with delete replace and add  0 = only add , 1 only delete , 1 , new-element for replace 1 item or 2 items you can replace as many items you want and as many as you want to replace them with , also if we donot give any new-element it will just delete no. of elements after the start-index.

console.log(arraay);


// PRACTICE QUESTIONS 
// Q1. Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix" 

// a. Remove first company from the array 
// b. Remove Uber & add Ola in its place 
// c. Add amazon at the end 

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

console.log(companies);

companies.shift();

console.log(companies);

companies.splice(1,1,"Ola");

console.log(companies);

companies.push("Amazon");

console.log(companies);