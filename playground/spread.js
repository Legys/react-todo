/*
function add(a, b) {
    return a + b ;
}

console.log(add(3,1));

var toAdd = [9, 5];
console.log(add(...toAdd));*/

/*
var groupA = ['Bogd', 'Art'];
var groupB = ['Alex', 'Dima'];
var final = [3,...groupA,...groupB];

console.log(final)*/

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function persons(name, age) {
    return `Hi ${name}, you are ${age}`;
}
console.log(persons(...person));
console.log(persons(...personTwo));


var names = ['Mike', 'Ben'];
var final = [...names, 'Andrew'];

final.forEach((item) => console.log(item))