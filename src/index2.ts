function adds(z:number,v:number)
{
    console.log(z+v)
}
adds(50,20)


function adds2(x,y)
{
    if(x=='number'&&y=='number')
    {
        console.log(x+y)
    }
    else{
        console.log('invalid')
    }
}
adds(2,5)

//program 2
//void deoes not return anything thre is no return type

function adds3(q:number,w:number):void
{
    console.log(q+w)



}
let s=adds3(7,9)
console.log(s)


//undefined is need to be something return

function adds4(a:number,w:number):undefined
{
console.log(a+w)
return 

}
let d=adds4(22,22)


//console.log(d)


//program 3
function greet(x:number,y:number,result:boolean,message:string)
{
    if(result)
    {
        console.log(x+y)
        console.log(message)
    }

}
greet(1,2,true,'Automation testing')

//program 4
let obj:object={
    firstname:"supriya",
    lastname:"tajane"
}
console.log(obj)

let obj2:{
    firstname:string,
    lastname:string,
    age:22

}={
    firstname:"sara",
    lastname:"desai",
    age:22
}
console.log(obj2)


//program 5
//object
type a={
firstname:string,
lastname:string,
age:number
}

let demo:a={
    firstname:"samira",
    lastname:'shrma',
    age:22
}
console.log(demo)


type id={
    no:number,
    value:boolean
}

let demo2:id={
    no:45,
    value:true

}
console.log(demo2)

//array
//program 5
let arr:number[]=[1,2,3]
let name1:string[]=['devanshi',"diya"]

console.log(arr)
console.log(name1)

//only some value
let marks:[x:number,y:number]=[11,22]
marks.push(11)
console.log(marks)
//marks.push('sarika')



