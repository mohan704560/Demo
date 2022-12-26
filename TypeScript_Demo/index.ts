let a:number =5;
console.log(a);

let fullName:string = "mohan";
fullName = "mohan1";

let num:number;
num=45;

const names:string[] = [];
names.push("mohan");

function sum(a:number, b:string):string{
    return a+b;
}

// Tuples
var address:[number,string,number];
address=[111,"mohan",233,];

let person : {name:string};
person={name:"mohan"};

var person2:{name:string,age?:10};
person2={name:"prassan",age:10};
person2={name:"prashan"};

function add(a:number,b?:number){
    return b? a+b :a;
}
console.log(add(2,3));

interface Person{
    name:string;
    id:number;
    age:number;
};

let p:Person;
p={name:"mohan",id:1,age:23};
console.log(p);

interface Student{
    name:string;
    rollNo:number;
    age:number;
}

let p1:Person|Student;  // Union
p1={name:"mohan",age:23,id:3,rollNo:4};

let p2:Person & Student;   //Intersection
p2 = {name:"jack",age:23,id:3,rollNo:23};

// Type alias
type Count = string | number; //String or Number
let c:Count;
c=1;
c="one";

type X=string & number;  //never
let n:[];   //never

// Class
class Car{
    brand;
    constructor(brand){
        this.brand = brand;
    }
    getBrand(){
        console.log(this.brand); 
    }
}

let c1 = new Car("Audi");
c1.getBrand();

// Class with typeScript
class CarX{
    constructor(public brand){
    }
    getBrand(){
        console.log(this.brand); 
    } 
}

let c2= new CarX("TATA");
c2.getBrand();

// Private
class CarY{
    constructor(private brand){
    }
    getBrand(){
        console.log(this.brand);
        
    }
}
let c3 = new CarY("Mahindra");
c3.getBrand();

//Protected
class CarZ{
    constructor(protected brand){
    }
    getBrand(){
        console.log(this.brand);
        
    }
}
let c4 = new CarZ("Maruti");
c4.getBrand();

// implements
interface Icar{
    brand:string;
    model:string;
}

interface Icar2{
    release:number;
}

class CarA implements Icar,Icar2{
   constructor(public brand,public model,public release){};
}

//Generics
function gen<T>(a:T,b:T):T[]{
    return [a,b];
}

console.log(gen<string>("1","2"));
console.log(gen<number>(1,2));
console.log(gen<Array<number>>([1],[2]));

function addUser<T extends {id:string}>(user:T){
    return user.id;
}

// any time
function noRestriction(a:any,b:any){
    return a+b;
}

console.log(noRestriction(2,3));



