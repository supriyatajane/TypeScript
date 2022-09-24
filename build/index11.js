"use strict";
class shopping {
    constructor(name) {
        this.no = 22;
        this.name = name;
    }
    greet(word) {
        console.log(`${word} ${this.name}`);
    }
    display() {
        console.log('hello');
    }
}
let sh = new shopping('Diamond shop');
sh.greet('Rich');
sh.display();
