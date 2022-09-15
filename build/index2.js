"use strict";
function adds(z, v) {
    console.log(z + v);
}
adds(50, 20);
function adds2(x, y) {
    if (x == 'number' && y == 'number') {
        console.log(x + y);
    }
    else {
        console.log('invalid');
    }
}
adds(2, 5);
//program 2
//void deoes not return anything thre is no return type
function adds3(q, w) {
    console.log(q + w);
}
let s = adds3(7, 9);
console.log(s);
//undefined is need to be something return
function adds4(a, w) {
    console.log(a + w);
    return;
}
let d = adds4(22, 22);
//console.log(d)
//program 3
function greet(x, y, result, message) {
    if (result) {
        console.log(x + y);
        console.log(message);
    }
}
greet(1, 2, true, 'Automation testing');
//program 4
let obj = {
    firstname: "supriya",
    lastname: "tajane"
};
console.log(obj);
let obj2 = {
    firstname: "sara",
    lastname: "desai",
    age: 22
};
console.log(obj2);
let demo = {
    firstname: "samira",
    lastname: 'shrma',
    age: 22
};
console.log(demo);
let demo2 = {
    no: 45,
    value: true
};
console.log(demo2);
//array
//program 5
let arr = [1, 2, 3];
let name1 = ['devanshi', "diya"];
console.log(arr);
console.log(name1);
//only some value
let marks = [11, 22];
marks.push(11);
console.log(marks);
//marks.push('sarika')
