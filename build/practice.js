"use strict";
//function
function sum(x, y) {
    console.log(x + y);
}
sum(1, 2);
function sum1(x, y, c, d) {
    if (d) {
        console.log(x + y);
        console.log(c);
    }
}
sum1(1, 2, 'hii', false);
//object
let infoss = {
    firstname: 'mira',
    lastname: 'rajput'
};
let typess = {
    firstname: 'riya',
    lastname: 'kapoor',
    age: 22
};
let yyy = {
    firstname: 'diya',
    id: 123,
    desg: 'tester'
};
//array
let some = [1, 3, 3];
let come = ['wel', 'hii'];
//unique array
let unique = [1, 'supriya', true];
//union 
function union(x, y) {
    if (typeof (x) == 'number' && typeof (y) == 'number') {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
union('2', '3');
let qa = 'aman';
//enum
var account;
(function (account) {
    account[account["saing"] = 1] = "saing";
    account[account["buy"] = 2] = "buy";
})(account || (account = {}));
if (account.saing) {
    console.log('ss');
}
