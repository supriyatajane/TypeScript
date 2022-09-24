"use strict";
class Demos {
    constructor(name) {
        this.name = name;
    }
    greet(word) {
        console.log(word);
    }
    updadateNme(word) {
        this.name = word;
    }
}
let dd = new Demos('Mumbai');
dd.greet('Local');
dd.updadateNme('dream');
console.log(dd.name);
