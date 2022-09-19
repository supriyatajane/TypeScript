//program1

function adds(x:number,y:number):void
{
console.log(x+y)

}
adds(2,3)


function adds2(v:number,z:number):undefined
{
console.log(v+z)
return
}
adds2(20,10)

//program 2

function names(firstname:string,lasname:string)
{
console.log(`${firstname} ${lasname}`)
}
names('supriya','tajane')


//program 3

function additions(x:number,y:number)
{
    return x+y
}

function displayResult(x:number,y:number,fn:Function) {

    console.log(`result ${fn(x)}`)   //here problem we pass one varible but no error compilation time

}
displayResult(1,2,additions)

//program 4
function display(x:number,y:number,fn:(x:number,y:number)=>number) {
    console.log(`result ${fn(x,y)}`)//here error show during compilation time

}
display(2,3,additions)



class Person{
    firstname:string='supriya'
}
let ss=new Person()
console.log(ss.firstname)

//thre are three acess specifier

class Person1{
    private age:number=23
    private firstname:string
    public constructor(name:string)
    {
    this.firstname=name
    }

    //setter
    //getter
    


    public getName():string{
        return this.firstname
    }
    public setName(j:string){
        return this.firstname=j
    }

}
let mani=new Person1('sara')
console.log(mani)
console.log(mani.getName())
console.log(mani.setName('aru'))
console.log(mani)

//we can acess private varible outside the class