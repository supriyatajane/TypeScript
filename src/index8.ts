class Parent{

    constructor(private name:string,private firstname:string)
    {
        this.name=name
        this.firstname=firstname
        
    }

    displays()
    {
        console.log(this.name+this.name)
    }
}
let par=new Parent('Dr','Patil')
par.displays()


class ParentD{
    constructor(private firstname:string,private lastname:string)
    {
        this.firstname=firstname
        this.lastname=lastname
    }
    display()
    {
        console.log(this.firstname+this.lastname)
    }


    //way to achive private varible outside the classs
    getName()
    {
       return this.firstname
    }
    setName(firstname:string)
    {
        this.firstname=firstname
    }


    //second way
    get getNam()
    {
       return this.firstname
    }
   set setNam(firstname:string)
    {
        this.firstname=firstname
    }


}
let pet=new ParentD('maya','shrama')
//pet.display()
console.log(pet.getName())//first way to retrive private value outside the class
pet.setName('nayan')
console.log(pet.getName())//updte private varible

console.log(pet.getNam)
pet.setNam="POONAM"
console.log(pet.getNam)


class Fashion{
    constructor(private color:string)
    {
        this.color=color
    }
//second way achive private varibl outside class using 
    get getColor()
    {
        return this.color
    }
    set setColor(color:string)
    {
     this.color=color
    }
}
let fs=new Fashion('Black')

console.log(fs.getColor)
fs.setColor='Pink'
console.log(fs.getColor)


//inheritance

class King{
    constructor(protected firstname:string,protected lastname:string)
    {
        this.firstname=firstname
        this.lastname=lastname
    }
    displyee()
    {
        console.log(this.firstname+this.lastname)
    }
}

class Prince extends King
{
    constructor(protected firstname:string,protected lastname:string,protected sname:string)
    {
    super(firstname,lastname)
    this.sname=sname
    }
    displyee() {
        super.displyee()
        console.log(this.sname)
    }
}
let pp=new Prince('shivaji','bhosle','sambhaji')
pp.displyee()

//abstract class

abstract class IDBI{
    abstract loan(intrest:number):void
    abstract save(intrest:number):void
 country()
 {
    console.log('india')
 }
}

class Sbi extends IDBI{
     loan(intrest:number) {
        console.log(` i am sbi loan ${intrest}`)
    }
    save(intrest: number) {
        console.log(` i am sbi save,${intrest}`)
    }

}

class BCI extends IDBI{
    loan(intrest:number) {
       console.log(` i am bci loan ${intrest}`)
   }
   save(intrest: number) {
       console.log(` i am bci save,${intrest}`)
   }

}
//let ww=new IDBI()--we not create abstract class object
let bb=new BCI()
bb.loan(32)
bb.save(23)

















