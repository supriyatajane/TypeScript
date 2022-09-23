"use strict";
//short hand
class College {
    constructor(Id, cname) {
        this.Id = Id;
        this.cname = cname;
        this.student = 22;
        //not need to =>this.number=number
    }
    show() {
        console.log(this.Id, this.cname);
    }
}
let student = new College(12, 'INDIRA COLLEGE');
student.show();
//student.student=2 we cannot update the readonly variable outside class
//inheitance
class Tree {
    constructor(leaf, color) {
        this.leaf = leaf;
        this.color = color;
    }
    show() {
        console.log(this.leaf, this.color);
    }
}
class Branches extends Tree {
    constructor(leaf, color, branch) {
        super(leaf, color);
        this.leaf = leaf;
        this.color = color;
        this.branch = branch;
    }
    show() {
        super.show();
        console.log(this.branch);
    }
}
let tr = new Branches(2, 'green', 'strong');
tr.show();
//set get method and function
class Company {
    constructor(cname, employee) {
        this.cname = cname;
        this.employee = employee;
    }
    //get set function
    setDisplay(employee) {
        this.employee = employee;
    }
    getDisplay() {
        return this.employee;
    }
    //get set method
    set setDisplays(cname) {
        this.cname = cname;
    }
    get getDisplays() {
        return this.cname;
    }
}
let co = new Company('TCS', 10000);
console.log(co.getDisplay());
co.setDisplay(5000);
console.log(co.getDisplay());
//second way to acess private varible using set get
console.log(co.getDisplays);
co.setDisplays = 'Wipro';
console.log(co.getDisplays);
//abstract class
class Arrays {
}
class Method extends Arrays {
    push() {
        console.log('method push');
    }
    pop() {
        console.log('methods pop');
    }
}
class Properties extends Arrays {
    push() {
        console.log('properties push');
    }
    pop() {
        console.log('properties pop');
    }
}
let prop = new Properties();
let me = new Method();
prop.push();
prop.pop();
me.pop();
me.push();
