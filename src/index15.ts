type emp={
    name:string
    privillage:string[]

}

type com={
    name:string,
    startDate:Date
}
//or me do not use the common value
type employement=emp|com

function printInfo(power:employement)
{
if('privillage' in power)
{
    console.log(power)
}
else{
    if('startDate' in power)
    {
        console.log(power)
    }
}
}
printInfo({name:'supriya',privillage:['Tcs','wipro']})
printInfo({name:'abhijit',startDate:new Date()})


//program 2
class Truck{
    drive()
    {
        console.log('Driving .....Truck')
    }

    loadTruck(quantity:number)
    {
   console.log(quantity)
    }
}

class Car{
    drive()
    {
   console.log('Driving ............car')
    }
}



type VehicleQ=Truck|Car

let v1=new Truck()
let v2=new Car()


function Drivings(vc:VehicleQ)
{
// if('loadTruck' in vc)
// {
//     vc.loadTruck(1000)
// }
if(vc instanceof Truck)
{
    vc.loadTruck(1000)
}
else{
    if(vc instanceof Car)
    {
vc.drive()
    }
}


}
Drivings(v1)
Drivings(v2)


interface Bird{
    type:'bird',
    flyingSpeed:number
}

interface Tiger{
    type:'tiger',
    runningSpeed:number
}

type Animal=Bird|Tiger

function AnimalD(animal:Animal)
{
    let speed
    switch (animal.type) {
        case 'bird':
            speed=animal.flyingSpeed
            break;

        case 'tiger':
            speed=animal.runningSpeed    
    
        default:
            console.log('Incorrect')
            break;
    }

    console.log(speed)
}

AnimalD({type:'bird','flyingSpeed':2000})
AnimalD({type:'tiger','runningSpeed':1000})
