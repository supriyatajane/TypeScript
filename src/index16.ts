//Generic
//program1
let ab:Array<string>=['supriya','rani']
let bc=ab[0].toUpperCase()
console.log(bc)

let cc:Array<number>=[11,22,33]
console.log(cc)
let nn=cc.map(function(el){
    return el*2
})
console.log(nn)


//program 2
//promise
//here we strictly define the promise type string

let pro=new Promise<string>(function(resolve,reject){
    setTimeout(function(){
  resolve('hello')
    },2000)

}).then(function(el){
    console.log(el.includes('h'))
})

//program 3
//two object merging
function merge<T extends Object,U extends Object>(objOne:T,objTwo:U)
{
console.log(objOne,objTwo)
}
merge({name:'TCS'},{field:'IT'})
merge({name:'Wipro'},{field:'business'})



//program 4

interface lenthy{
    length:number
}

function countNo<T  extends lenthy>(element:T)
{
console.log(element.length)
}
countNo('supriya')
countNo([11,22,33,44])
countNo([11,22])


console.log("---------------------------------------------------------------------------------------")

//program 5
interface sizing{
    size:number
}

function numberss<T extends sizing>(obj:T)
{
console.log(obj.size)
}
numberss(new Set([11,22,22,33,44,55]))
numberss(new Map([[1,'supriya'],[7,'yes']]))

const bv=22//this refers const type

//resticted type array 
type chain=any[]|string

function chainnnig<T extends chain>(info:T)
{
console.log(info.length)
}
chainnnig('Bappa')
chainnnig([88,99,34,88])