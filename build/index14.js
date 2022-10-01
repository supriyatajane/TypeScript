"use strict";
//program 1
let objs = {
    name: 'supriya',
    privalige: ['abhijit', 'supriya', 'dipali', 'sunil'],
    strtdate: new Date()
};
console.log(objs);
let don = 22;
console.log(don);
function adds(a, b) {
    if (typeof (a) === 'string' && typeof (b) === "string") {
        return a.toString() + b.toString();
    }
    else {
        if (typeof (a) == 'number' && typeof (b) == 'number') {
            return a + b;
        }
    }
}
let a11 = adds('swara', 'devanshi'); //thy do not know exactly type so write function overloading
let a12 = adds(12, 23);
console.log(a11);
console.log(a12);
function getDisplay(em) {
    if ('privalige' in em) {
        console.log(em.privalige);
    }
    else if ('strtdate' in em) {
        console.log(em.strtdate);
    }
}
getDisplay({ name: 'shyam', strtdate: new Date() });
getDisplay({ name: 'poonam', privalige: ['rani'] });
