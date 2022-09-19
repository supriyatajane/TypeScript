"use strict";
//program1
function adds(x, y) {
    console.log(x + y);
}
adds(2, 3);
function adds2(v, z) {
    console.log(v + z);
    return;
}
adds2(20, 10);
//program 2
function names(firstname, lasname) {
    console.log(`${firstname} ${lasname}`);
}
names('supriya', 'tajane');
//program 3
function additions(x, y) {
    return x + y;
}
function displayResult(x, y, fn) {
    console.log(`result ${fn(x)}`); //here problem we pass one varible but no error compilation time
}
displayResult(1, 2, additions);
//program 4
function display(x, y, fn) {
    console.log(`result ${fn(x, y)}`); //here error show during compilation time
}
display(2, 3, additions);
class Person {
    constructor() {
        this.firstname = 'supriya';
    }
}
let ss = new Person();
console.log(ss.firstname);
//thre are three acess specifier
class Person1 {
    constructor(name) {
        this.age = 23;
        this.firstname = name;
    }
    //setter
    //getter
    getName() {
        return this.firstname;
    }
    setName(j) {
        return this.firstname = j;
    }
}
let mani = new Person1('sara');
console.log(mani);
console.log(mani.getName());
console.log(mani.setName('aru'));
console.log(mani);
//we can acess private varible outside the class
