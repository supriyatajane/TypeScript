//short hand
class College {
    readonly student: number = 22
    constructor(private Id: number, public cname: string)//short hand
    {
        //not need to =>this.number=number
    }
    show() {
        console.log(this.Id, this.cname)
    }
}
let student = new College(12, 'INDIRA COLLEGE')
student.show()
//student.student=2 we cannot update the readonly variable outside class


//inheitance

class Tree {
    constructor(protected leaf: number, protected color: string) {

    }
    show() {
        console.log(this.leaf, this.color)
    }
}

class Branches extends Tree {
    constructor(protected leaf: number, protected color: string, private branch: string) {
        super(leaf, color)
    }
    show() {
        super.show()
        console.log(this.branch)
    }
}
let tr=new Branches(2,'green','strong')
tr.show()


//set get method and function

class Company{
    constructor(private cname:string,private employee:number)
    {

    }
    //get set function
    setDisplay(employee:number)
    {
        this.employee=employee
    }
    getDisplay()
    {
        return this.employee
    }


    //get set method
    set setDisplays(cname:string)
    {
        this.cname=cname
    }

   get getDisplays()
    {
        return this.cname
    }

}

let co=new Company('TCS',10000)
console.log(co.getDisplay())
co.setDisplay(5000)
console.log(co.getDisplay())

//second way to acess private varible using set get
console.log(co.getDisplays)
co.setDisplays='Wipro'
console.log(co.getDisplays)


//abstract class

 abstract class Arrays{
    abstract push():void
    abstract pop():void
}
class Method extends Arrays{
     push():void
    {
    console.log('method push')
    }
    pop(): void {
        console.log('methods pop')
    }
}

class Properties extends Arrays{
    push():void
    {
    console.log('properties push')
    }
    pop(): void {
        console.log('properties pop')
    }

}

let prop=new Properties()
let me=new Method()


prop.push()
prop.pop()

me.pop()
me.push()


