"use strict";
//array declaration ts
let number = [11, 22, 33, 44, 55];
let string = ['arya', 'diya'];
let demos = [11, 22];
let rat = [11, 'supriya', true];
console.log(rat);
rat.push(11, 'sara', false);
console.log(rat);
let infos = {
    firstname: "aa",
    lastname: 'bb',
    age: 22,
    skills: [1, 'java']
};
console.log(infos);
infos.skills.push('cpp');
//union type
//either pass two values
function additionA(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
additionA('2', '3');
additionA(88, 22);
let ams = 'aman';
let ram = true;
let dance = 22;
console.log(dance);
let obje = {
    firstname: 'rani',
    lastname: 'tajane'
};
console.log(obje);
console.log(obje.firstname);
let fam = {
    mother: 'dipali',
    father: 'sunil'
};
console.log(fam);
//
var Roles;
(function (Roles) {
    Roles[Roles["read_write"] = 1] = "read_write";
    Roles[Roles["write"] = 2] = "write";
    Roles[Roles["admin"] = 3] = "admin";
    Roles[Roles["customer"] = 4] = "customer";
})(Roles || (Roles = {}));
var account;
(function (account) {
    account[account["saving"] = 1] = "saving";
    account[account["current"] = 2] = "current";
})(account || (account = {}));
if (Roles.read_write) {
    console.log('read write');
}
if (Roles.admin) {
    console.log('admin enter');
}
if (account.current) {
    console.log('current staus');
}
