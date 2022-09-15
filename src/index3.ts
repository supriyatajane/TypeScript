//array declaration ts
let number:number[]=[11,22,33,44,55]

let string:string[]=['arya','diya']

let demos:[x:number,y:number]=[11,22]

let rat:[x:number,y:string,c:boolean]=[11,'supriya',true]

console.log(rat)


rat.push(11,'sara',false)
console.log(rat)

//object

type types={
    firstname:string,
    lastname:string,
    age:number,
    skills:[number,string]
}

let infos:types={
    firstname:"aa",
    lastname:'bb',
    age:22,
    skills:[1,'java']

}

console.log(infos)
infos.skills.push('cpp')


//union type
//either pass two values

function additionA(x:number|string,y:number|string)
{
if(typeof x=='number' && typeof y=='number')
{
console.log(x+y)
}
else{
    console.log(Number(x)+Number(y))
}
}
additionA('2','3')
additionA(88,22)

type k=string|number|boolean

let ams:k='aman'

let ram:k=true

let dance:k=22

console.log(dance)


//literal

type firstname='supriya'|'rani'

type lastname='tajane'|'sharma'


let obje:{
    firstname:firstname,
    lastname:lastname

}={
    firstname:'rani',
    lastname:'tajane'
}
console.log(obje)
console.log(obje.firstname)

type family={mother:string,father:string}

let fam:family={
    mother:'dipali',
    father:'sunil'
}
console.log(fam)


//
enum Roles{
    "read_write"=1,
    "write",
    "admin",
    "customer"

}
 enum account{
    "saving"=1,
    "current"
 }

 if(Roles.read_write)
 {
    console.log('read write')
 }

 if(Roles.admin)
 {
    console.log('admin enter')
 }

 if(account.current)
 {
    console.log('current staus')
 }
 