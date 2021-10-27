var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = 'Hello World';
console.log(hello);
//====================================================================================
//Penulisan anotasi di variabel
var address = 'Kebayoran';
var age = 10;
var item = 105;
var isActive;
//====================================================================================
//penulisan anotasi tipe di parameter function
//UNTUK DAPAT MEMASUKKAN VARIABEL KE STRING MENGGUNAKAN BACKTICK
function getProfileTS(name, age) {
    if (age === void 0) { age = 17; }
    console.log("Hello, " + name + "!, your age is " + age + " old");
}
getProfileTS('Bobi');
//====================================================================================
//cara anotasi tipe di array
var itemTS;
itemTS = ['Sepatu', 'Sendal', 'Tas'];
var itemTS2;
itemTS2 = ['Sepatu', 'Sendal', false, 1, 2];
//array multi dimensi
var student = [
    ['Bayu', true, 'Laki-Laki'],
    ['Bayu', true]
];
//====================================================================================
//cara anotasi di object
var personTS = {
    name: 'Maryam',
    age: 10
};
var personTS2;
personTS2 = {
    name: 'Maryam',
    age: '10'
};
//====================================================================================
//opsional property menggunakan '?' setelah nama variabel
var personTS3 = {
    name: 'Maryam'
};
//deklarasi variable dengan menggunakan interface
var myPhone = {
    brand: "Apple",
    merk: "Iphone",
    type: "Iphone 12 Pro",
    price: 20000000,
    features: ["iOS 14", "Super Retina Display"]
};
var phones = [
    {
        brand: "Apple",
        merk: "Iphone",
        type: "Iphone 12 Pro",
        price: 20000000,
        features: ["iOS 14", "Super Retina Display"]
    },
    {
        brand: "Samsung",
        merk: "Samsung",
        type: "Samsung Note Galaxy",
        price: 20000000
    }
];
//====================================================================================
//Anotasi tipe dalam property class
var Customer = /** @class */ (function () {
    function Customer(name, age, money) {
        this.items = ['buku', 'laptop'];
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Customer.prototype.updateDataMoney = function (money) {
        this.money = money;
    };
    Customer.prototype.addItem = function (itemName) {
        this.items.push(itemName);
    };
    return Customer;
}());
var raihan = new Customer('raihan', 12, 50000);
raihan.updateDataMoney(100000);
raihan.addItem('smartphone');
console.log(raihan);
//suatu class juga dapat digunakan untuk property class yang lain
var Shop = /** @class */ (function () {
    function Shop() {
        this.customers = [];
    }
    Shop.prototype.addCustomer = function (newCustomer) {
        this.customers.push(newCustomer);
    };
    return Shop;
}());
var shopE = new Shop();
shopE.addCustomer(raihan);
console.log(shopE);
//====================================================================================
//Data Modifier
//Public
// class Employee{
//     public code:string;
//     constructor(public name:string){
//         this.name = name;
//     }
//     getCode(){
//         return this.code;
//     }
// }
// class SalesEmployee extends Employee{
//     getSalesCode(){
//         return `Sales ${this.name} ${this.code}`;
//     }
// }
// let emp = new SalesEmployee('Mawar');
// emp.code = "123";
// console.log("======================================\nData Modifier");
// console.log(emp.name);
//Private
// class Employee{
//     private code:string;
//     constructor(private name:string){
//         this.name = name;
//     }
//     getCode(){
//         return this.code;
//     }
// }
// class SalesEmployee extends Employee{
//     getSalesCode(){
//         return `Sales ${this.name} ${this.code}`;
//     }
// }
// let emp = new SalesEmployee('Mawar');
// emp.code = "123";
// console.log("======================================\nData Modifier");
// console.log(emp.name);
//Protected
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        this.name = name;
    }
    Employee.prototype.getCode = function () {
        return this.code;
    };
    Employee.prototype.setCode = function (code) {
        this.code = code;
    };
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesEmployee.prototype.getSalesCode = function () {
        return "Sales " + this.name + " " + this.code;
    };
    return SalesEmployee;
}(Employee));
var emp = new SalesEmployee('Mawar');
emp.setCode("123");
console.log("======================================\nData Modifier");
console.log(emp.getSalesCode());
//====================================================================================
//====================================================================================
//Inheritance in typescript
var Person = /** @class */ (function () {
    //private age:number;
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "personAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, score, mentors) {
        var _this = _super.call(this, name, age) || this;
        _this.mentors = [];
        _this.score = score;
        _this.mentors.push(mentors);
        return _this;
    }
    Student.prototype.changeScore = function (score) {
        this.score = score;
    };
    Student.prototype.addMentor = function (mentor) {
        this.mentors.push(mentor);
    };
    Object.defineProperty(Student.prototype, "studentName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person));
var riyan = new Student('Riyan', 22, 100, 'Arif');
console.log(riyan);
riyan.changeScore(105);
riyan.addMentor('Eas');
console.log(riyan);
