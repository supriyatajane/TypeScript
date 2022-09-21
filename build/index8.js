"use strict";
class Parent {
    constructor(name, firstname) {
        this.name = name;
        this.firstname = firstname;
        this.name = name;
        this.firstname = firstname;
    }
    displays() {
        console.log(this.name + this.name);
    }
}
let par = new Parent('Dr', 'Patil');
par.displays();
class ParentD {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    display() {
        console.log(this.firstname + this.lastname);
    }
    //way to achive private varible outside the classs
    getName() {
        return this.firstname;
    }
    setName(firstname) {
        this.firstname = firstname;
    }
    //second way
    get getNam() {
        return this.firstname;
    }
    set setNam(firstname) {
        this.firstname = firstname;
    }
}
let pet = new ParentD('maya', 'shrama');
//pet.display()
console.log(pet.getName()); //first way to retrive private value outside the class
pet.setName('nayan');
console.log(pet.getName()); //updte private varible
console.log(pet.getNam);
pet.setNam = "POONAM";
console.log(pet.getNam);
class Fashion {
    constructor(color) {
        this.color = color;
        this.color = color;
    }
    //second way achive private varibl outside class using 
    get getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color;
    }
}
let fs = new Fashion('Black');
console.log(fs.getColor);
fs.setColor = 'Pink';
console.log(fs.getColor);
//inheritance
class King {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    displyee() {
        console.log(this.firstname + this.lastname);
    }
}
class Prince extends King {
    constructor(firstname, lastname, sname) {
        super(firstname, lastname);
        this.firstname = firstname;
        this.lastname = lastname;
        this.sname = sname;
        this.sname = sname;
    }
    displyee() {
        super.displyee();
        console.log(this.sname);
    }
}
let pp = new Prince('shivaji', 'bhosle', 'sambhaji');
pp.displyee();
//abstract class
class IDBI {
    country() {
        console.log('india');
    }
}
class Sbi extends IDBI {
    loan(intrest) {
        console.log(` i am sbi loan ${intrest}`);
    }
    save(intrest) {
        console.log(` i am sbi save,${intrest}`);
    }
}
class BCI extends IDBI {
    loan(intrest) {
        console.log(` i am bci loan ${intrest}`);
    }
    save(intrest) {
        console.log(` i am bci save,${intrest}`);
    }
}
//let ww=new IDBI()--we not create abstract class object
let bb = new BCI();
bb.loan(32);
bb.save(23);
