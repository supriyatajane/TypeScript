interface shop
{
    name:string
    greet(word:string):void
}

class shopping implements shop
{
 name:string
 no=22
    
 constructor(name:string)
 {
    this.name=name
 }
 greet(word: string): void {
     console.log(`${word} ${this.name}`)
 }

 display()
 {
    console.log('hello')
 }
}
let sh=new shopping('Diamond shop')
sh.greet('Rich')
sh.display()