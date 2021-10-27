const hello: string = 'Hello World';
console.log(hello);
//====================================================================================
//Penulisan anotasi di variabel
let address: string = 'Kebayoran';
let age: number = 10;
let item: number | string = 105;
let isActive: boolean;
//====================================================================================
//penulisan anotasi tipe di parameter function
//UNTUK DAPAT MEMASUKKAN VARIABEL KE STRING MENGGUNAKAN BACKTICK
function getProfileTS(name:string, age:number = 17)
{
    console.log(`Hello, ${name}!, your age is ${age} old`);
}

getProfileTS('Bobi');
//====================================================================================
//cara anotasi tipe di array
let itemTS:string[];
itemTS = ['Sepatu', 'Sendal','Tas'];

let itemTS2:(string|number|boolean)[];
itemTS2 = ['Sepatu', 'Sendal',false,1,2];

//array multi dimensi
let student: (string|boolean)[][] = [
    ['Bayu', true, 'Laki-Laki'],
    ['Bayu', true]
]
//====================================================================================
//cara anotasi di object
let personTS:{
    name:string,
    age:number
} = {
    name: 'Maryam',
    age : 10
}

let personTS2:{
    name:string,
    age:number|string
}

personTS2 = {
    name: 'Maryam',
    age : '10'
}

//====================================================================================
//opsional property menggunakan '?' setelah nama variabel
let personTS3:{
    name:string,
    age?:number|string
} = {
    name: 'Maryam',
}

//====================================================================================
//Interface
interface Phone{
    brand:string,
    merk:string,
    type:string,
    price:number,
    features?:string[]
}

//deklarasi variable dengan menggunakan interface
let myPhone: Phone = {
    brand: "Apple",
    merk: "Iphone",
    type: "Iphone 12 Pro",
    price: 20000000,
    features: ["iOS 14","Super Retina Display"]
};



let phones: Phone[] = [
    {
        brand: "Apple",
        merk: "Iphone",
        type: "Iphone 12 Pro",
        price: 20000000,
        features: ["iOS 14","Super Retina Display"]
    },
    {
        brand: "Samsung",
        merk: "Samsung",
        type: "Samsung Note Galaxy",
        price: 20000000,
    }
]
//====================================================================================
//Anotasi tipe dalam property class
class Customer{
    name:string
    age:number
    money:number
    items:string[] = ['buku', 'laptop']

    constructor(name:string,age:number,money:number){   
        this.name = name;
        this.age = age;
        this.money = money;
    }

    updateDataMoney(money:number){
        this.money = money;
    }

    addItem(itemName:any){
        this.items.push(itemName);
    }
}

const raihan = new Customer('raihan',12,50000);
raihan.updateDataMoney(100000);
raihan.addItem('smartphone');
console.log(raihan);

//suatu class juga dapat digunakan untuk property class yang lain
class Shop{
    customers: Customer[] = []
    addCustomer(newCustomer : Customer){
        this.customers.push(newCustomer);
    }
}

const shopE = new Shop();
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
class Employee{
    protected code:string;

    constructor(protected name:string){
        this.name = name;
    }

    getCode(){
        return this.code;
    }

    setCode(code:string){
        this.code = code;
    }
}

class SalesEmployee extends Employee{
    getSalesCode(){
        return `Sales ${this.name} ${this.code}`;
    }
}

let emp = new SalesEmployee('Mawar');
emp.setCode("123")
console.log("======================================\nData Modifier");
console.log(emp.getSalesCode());

//====================================================================================
//====================================================================================
//Inheritance in typescript
class Person{
    name: string;
    //private age:number;

    constructor(protected name:string, private age:number){
        this.name = name;
        this.age = age;
    }

    get personAge(): number{
        return this.age;
    }
}

class Student extends Person{
    score:number;
    mentors: string[] = [];
    constructor(name:string,age:number,score:number, mentors:string){
        super(name,age);
        this.score = score;
        this.mentors.push(mentors);
    }

    changeScore(score:number){
        this.score = score;
    }

    addMentor(mentor:string){
        this.mentors.push(mentor);
    }
    get studentName () {
        return this.name
    }
}

const riyan = new Student('Riyan', 22, 100, 'Arif')

console.log(riyan)

riyan.changeScore(105)
riyan.addMentor('Eas')

console.log(riyan)