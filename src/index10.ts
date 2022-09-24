interface Electronic
{
    nameE:string,
    total:number,
    greet(word:string):void

}

type Elctronic1={
    
    nameE:string,
    total:number,
    greet(word:string):void
}

let user:Electronic={
    nameE:'laptop',
    total:22,
    greet(word:string):void
    {
        console.log(word)
    }


}
user.greet('shop')


let user2:Elctronic1={
nameE:'Tv',
total:11,
greet(word:string):void{
    console.log(word)
}
}
user.greet('TV shop')