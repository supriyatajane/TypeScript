"use strict";
function printInfo(power) {
    if ('privillage' in power) {
        console.log(power);
    }
    else {
        if ('startDate' in power) {
            console.log(power);
        }
    }
}
printInfo({ name: 'supriya', privillage: ['Tcs', 'wipro'] });
printInfo({ name: 'abhijit', startDate: new Date() });
//program 2
class Truck {
    drive() {
        console.log('Driving .....Truck');
    }
    loadTruck(quantity) {
        console.log(quantity);
    }
}
class Car {
    drive() {
        console.log('Driving ............car');
    }
}
let v1 = new Truck();
let v2 = new Car();
function Drivings(vc) {
    // if('loadTruck' in vc)
    // {
    //     vc.loadTruck(1000)
    // }
    if (vc instanceof Truck) {
        vc.loadTruck(1000);
    }
    else {
        if (vc instanceof Car) {
            vc.drive();
        }
    }
}
Drivings(v1);
Drivings(v2);
function AnimalD(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'tiger':
            speed = animal.runningSpeed;
        default:
            console.log('Incorrect');
            break;
    }
    console.log(speed);
}
AnimalD({ type: 'bird', 'flyingSpeed': 2000 });
AnimalD({ type: 'tiger', 'runningSpeed': 1000 });
