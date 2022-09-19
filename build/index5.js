"use strict";
class department {
    constructor(fm) {
        this.country = 'INDIA';
        this.name = [];
        this.fullname = fm;
    }
    describe() {
        console.log(`department ${this.fullname}`);
    }
    addEmployee(employee) {
        this.name.push(employee);
    }
    information() {
        console.log(this.name.length);
        console.log(this.name);
    }
}
let dep = new department('IT');
dep.addEmployee('sarika');
dep.addEmployee('supriya');
dep.addEmployee('sara');
dep.information();
console.log(dep.country); //only acess the readonly prperty
//dep.country='AMERICA'//we cannot update readonly prperty 
//ReadOnly is a runtime constant. The value of readonly field can be changed.readonly is for class properties.
//Const is a compile time constant. The value of the const field can not be changed. const is for variables
let admin = {
    name: 'bill gates',
    information: dep.information
};
admin.information();
