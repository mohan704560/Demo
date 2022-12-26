var a = 5;
console.log(a);
var fullName = "mohan";
fullName = "mohan1";
var num;
num = 45;
var names = [];
names.push("mohan");
function sum(a, b) {
    return a + b;
}
// Tuples
var address;
address = [111, "mohan", 233,];
var person;
person = { name: "mohan" };
var person2;
person2 = { name: "prassan", age: 10 };
person2 = { name: "prashan" };
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(2, 3));
;
var p;
p = { name: "mohan", id: 1, age: 23 };
console.log(p);
var p1; // Union
p1 = { name: "mohan", age: 23, id: 3, rollNo: 4 };
var p2; //Intersection
p2 = { name: "jack", age: 23, id: 3, rollNo: 23 };
var c;
c = 1;
c = "one";
var n; //never
// Class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car("Audi");
c1.getBrand();
// Class with typeScript
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX("TATA");
c2.getBrand();
// Private
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY("Mahindra");
c3.getBrand();
//Protected
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    }
    CarZ.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var c4 = new CarZ("Maruti");
c4.getBrand();
var CarA = /** @class */ (function () {
    function CarA(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    ;
    return CarA;
}());
//Generics
function gen(a, b) {
    return [a, b];
}
console.log(gen("1", "2"));
console.log(gen(1, 2));
console.log(gen([1], [2]));
function addUser(user) {
    return user.id;
}
// any time
function noRestriction(a, b) {
    return a + b;
}
console.log(noRestriction(2, 3));
