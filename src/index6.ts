class father{
    public fname:string
    protected sname:string
    private age:number=25

    constructor(fn:string,sn:string)
    {
        this.fname=fn
        this.sname=sn
    }

    display()
    {
        console.log(`${this.fname} ${this.sname}`)
    }
}

class Son extends father{
    sonme:string
    constructor(fname:string,sname:string,sonme:string)
    {
        super(fname,sname)
        this.sonme=sonme


    }
    
    display(){
        super.display()
        console.log(`${this.sonme}`)
        
    }
}
let abhi=new Son('sunil','tajane','abhijit')
console.log(abhi)