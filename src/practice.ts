//function

function sum(x: number, y: number) {
    console.log(x + y)
}
sum(1, 2)


function sum1(x: number, y: number, c: string, d: boolean) {
    if (d) {
        console.log(x + y)
        console.log(c)
    }
}
sum1(1,2,'hii',false)


//object

let infoss:object={
    firstname:'mira',
    lastname:'rajput'

}

let typess:{
    firstname:string,
    lastname:string,
    age:number
}={
    firstname:'riya',
    lastname:'kapoor',
    age:22
}

 type dd={
    firstname:string,
    id:number,
    desg:string

}
let yyy:dd={
    firstname:'diya',
    id:123,
    desg:'tester'

}

//array

let some:number[]=[1,3,3]

let come:string[]=['wel','hii']


//unique array
let unique:[x:number,y:string,z:boolean,]=[1,'supriya',true]



//union 
function union(x:number|string,y:number|string)
{
if(typeof(x)=='number' && typeof(y)=='number')
{
    console.log(x+y)
}
else{
    console.log(Number(x)+Number(y))
}
}
union('2','3')

//we can also declare type

type ds=string|number

let qa:ds='aman'

//literal
type familys='supriya'|'diya'


//enum
enum account{
    'saing'=1,
    'buy'
}

if(account.saing)
{
    console.log('ss')
}
