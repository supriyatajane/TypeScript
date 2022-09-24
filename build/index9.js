"use strict";
//static method
class employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static EmployeeName(name) {
        return { fullName: name };
    }
}
employee.state = "Maharashtra";
console.log(employee.state);
console.log(employee.EmployeeName('supriya')); //static method or properties call only the classname
// Singleton pattern
//means we can create only one time object
class Vegetable {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    static getIntance() {
        if (Vegetable.instance) {
            return this.instance;
        }
        else {
            this.instance = new Vegetable('green', 'palak');
        }
    }
}
let b2 = Vegetable.getIntance();
let b3 = Vegetable.getIntance();
console.log(b2);
console.log(b3);
// private constructor are not accessible outside the class
// private constructor 
// instance variable which is of type class
// write a static method to check same instance value 
//(undefined)
// call the static method on class name
