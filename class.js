class B{
    constructor(b){
        this.b = b;
    }
}

class A extends B{
    constructor(a,b){
        super(b);
        this.x =a;
    }

    play(){
        console.log(this.x , this.b);
    }

    All(){
        this.play();
    }
} 


let me = new A(2,4);

// me = new (2,4) and me = new B(4)

me.All();


// extends will take data from parent B if not found on A . to call parent constructor we can use super keyword.

// making variable is done only in costructir
// maethods fun(){}
// this means className new Binded
// super is calling the constructor of b
// use variable this.var 
// use function this.f() 