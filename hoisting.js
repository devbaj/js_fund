// 1
// console.log(example)
// let example = "I'm the example";
// AFTER HOISTING
console.log(example);
let example = "I'm the example"

// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// AFTER HOISTING
var needle;
needle = "haystack";
function test(){
    var needle;
    needle = "magnet";
    console.log(needle)
}

// 3
// var brendan = "super cool";
// function print(){
//     brendan = "only okay";
//     console.log(brendan);
// }
// console.log(brendan);
// AFTER HOISTING
var brendan;
brendan = "super cool";
function print(){
    brendan = "only okay";
    console.log(brendan); // prints "only okay"
}
console.log(brendan); // prints "super cool"

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// AFTER HOISTING
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // prints "half-chicken"
    food = "gone";
}
food = "chicken";
console.log(food) // prints "chicken"
eat();

// 5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// AFTER HOISTING
var mean;
mean = function() {
    var food;
    food = "chicken";
    console.log(food); // prints "chicken"
    food = "fish";
    console.log(food); // prints "fish"
}
console.log(food) // variable doesn't exist
console.log(food) // variable doesn't exist

// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
// AFTER HOISTING 
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // prints "rock"
    genre = "r&b";
    console.log(genre); // prints "r&b"
}
console.log(genre); // undefined
genre = "disco";
rewind();
console.log(genre); // prints "disco"

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
// AFTER HOISTING
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); // prints "seattle"
    dojo = "burbank";
    console.log(dojo); // prints "burbank"
}
dojo = "san jose"; // missing declaration
console.log(dojo) // error
learn();
console.log(dojo); // error