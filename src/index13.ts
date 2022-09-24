interface Named{
    readonly name:string
}

interface greet extends Named
{
    greet(word:string):void
}

class Demos implements Named
{
 name: string
 constructor(name:string)
 {
    this.name=name
 }   

 greet(word:string)
 {
    console.log(word)
 }

 updadateNme(word:string)
 {
    this.name=word
 }
}
let dd=new Demos('Mumbai')
dd.greet('Local')
dd.updadateNme('dream')
console.log(dd.name)