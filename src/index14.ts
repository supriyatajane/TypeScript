//program 1

type calender = {
    name: string,
    privalige: string[]
}


type client = {
    name: string,
    strtdate: Date

}
type people = client & calender

let objs: people = {
    name: 'supriya',
    privalige: ['abhijit', 'supriya', 'dipali', 'sunil'],
    strtdate: new Date()
}
console.log(objs)

//program 2

type c1 = string | number
type c2 = boolean | number

type c3 = c1 & c2     //& and so the they get common of two types
let don: c3 = 22
console.log(don)


//program 3
//provide the function type
function adds(a: number, b: number): number
function adds(a: string, b: string): string
function adds(a: number, b: string): string
function adds(a: string, b: number): string
function adds(a: c1, b: c1) {
    if (typeof (a) === 'string' && typeof (b) === "string") {

        return a.toString() + b.toString()
    }
    else {
        if (typeof (a) == 'number' && typeof (b) == 'number') {
            return a + b
        }

    }




}
let a11 = adds('swara', 'devanshi')//thy do not know exactly type so write function overloading
let a12 = adds(12, 23)
console.log(a11)
console.log(a12)


//program 4

// type calender1 = {
//     name: string,
//     privalige: string[]
// }


// type client1 = {
//     name: string,
//     strtdate: Date

// }
// type people1 = client1 & calender1

// function getInfoPeople(p: people1) {
//     console.log(p)
// }
//getInfoPeople({name:'sama',privalige:['priyanka','rani'],strtdate:new Date()})



//program 4
type calender1 = {
    name: string,
    privalige: string[]
}


type client1 = {
    name: string,
    strtdate: Date

}
type people1 = client1 | calender1  //or propey do nay check the common prperty


function getDisplay(em:people1)
{
if('privalige' in em)
{
console.log(em.privalige)
}
else if('strtdate' in em)
{
    console.log(em.strtdate)
}
}
getDisplay({name:'shyam',strtdate:new Date()})
getDisplay({name:'poonam',privalige:['rani']})