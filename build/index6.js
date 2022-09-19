"use strict";
class father {
    constructor(fn, sn) {
        this.age = 25;
        this.fname = fn;
        this.sname = sn;
    }
    display() {
        console.log(`${this.fname} ${this.sname}`);
    }
}
class Son extends father {
    constructor(fname, sname, sonme) {
        super(fname, sname);
        this.sonme = sonme;
    }
    display() {
        super.display();
        console.log(`${this.sonme}`);
    }
}
let abhi = new Son('sunil', 'tajane', 'abhijit');
console.log(abhi);
