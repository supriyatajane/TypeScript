"use strict";
class Array1 {
    constructor(method, name) {
        this.method = method;
        this.name = name;
    }
    greet(word) {
        console.log(`${word} ${this.method}`);
    }
    display(type) {
        console.log(`${type}`);
    }
}
let arrs = new Array1('push', 'pop');
arrs.greet('hii');
arrs.display('number');
