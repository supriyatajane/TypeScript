interface pop{
    method:string,
    greet(word:string):void
    display(type:string):void
}

interface push{
    name:string
    display(name:string):void
}

class Array1 implements pop,push{
    method: string
    name: string
    constructor(method:string,name:string)
    {
        this.method=method
        this.name=name
    }
    greet(word: string): void {
        console.log(`${word} ${this.method}`)
    }
    display(type: string): void {
        console.log(`${type}`)
    }
}
let arrs=new Array1('push','pop')
arrs.greet('hii')
arrs.display('number')