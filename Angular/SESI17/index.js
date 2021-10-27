//process.argv //mengambil inputan pada saat run


//String
var greeting = "Selamat Datang,";
let name = "Bayu";
const pi2 = "3.14";

//Boolean

let isPresent = false;

//Number
const pi = 3.14;

//undefined
let address;
let phoneNumber;

//Print in console
// console.log(greeting, name);
// console.log(isPresent);
// console.log(pi);
// console.log(address, phoneNumber);

//Check type of variable
// console.log(typeof greeting);
// console.log(typeof isPresent);
// console.log(typeof pi);
// console.log(typeof phoneNumber);


//=============================================================================
//Operasi Matematik
// + - * / %
//console.log(4 % 2);
//=============================================================================
//Operasi Perbandingan
// console.log(4 === 4);
//=============================================================================
//Conditional

// kondisi = 50;

// if(kondisi > 80){
//     console.log("Anda Berhasil");

// }

// if(kondisi > 80){
//     console.log("Anda Berhasil");
// } else {
//     console.log("Anda Gagal");
// }

// if(kondisi > 80){
//     console.log("Anda Berhasil");
// } else if (kondisi = 50) {
//     console.log("Anda Average");
// } else {
//     console.log("Anda Gagal");
// }
//=============================================================================
//Operasi Logika
// && ||

// console.log(true && true);

//Truthy & Falsy
// Truthy = semua nilai yang tidak bersifat falsy
// Falsy = false, 0, "", undefined, NaN, Null


//=============================================================================
//Iteration

//let i = 1;
//const interations = 20;
// while (i<=interations){
//     console.log(i);
//     i++;
// }

// for(let a = 1; a <= interations; a++){
//     console.log(a);
// }


//=============================================================================
//Array

let arr = ["Kucing", 345, "Kuda", 123, true];
// console.log(arr[4]);

//Array Method
// arr[4] = false //Mengganti isi array
// console.log(arr[4]);
// arr.push("Tambah"); //menambahkan nilai di belakang nilai terakhir di array.
// console.log(arr);
// arr.pop(); // menghapus nilai paling belakang / terakhir dari array
// console.log(arr);
// arr.unshift(3); // menambah nilai ke depan array 
// console.log(arr);
// arr.shift(); //menghapus nilai paling depan dari array
// console.log(arr);
// const arrString = arr.join(','); //Menggabungkan semua elemen array menjadi string dengan delimiter
// console.log(arrString);
// console.log(arrString.split(',')); //Memecah string menjadi array


// const numbers = [1,2,15,43,23];
// const setOfNumber = numbers.splice(2);
// console.log(numbers);
// console.log(setOfNumber);

//Sort
// let arrNum = [3,5,7,1,2];
// arrNum.sort();
// console.log(arrNum);

// let arrChar = ["Toma", "Budi", "Gusti", "Ahmad"];
// arrChar.sort();
// console.log(arrChar);

//Sort pada angka
// var arrNum2 = [1,2,15,43,23];
// arrNum2.sort(function(value1, value2){ //Function untuk sort angka dengan benar
//     return value1 - value2;
// });
// console.log(arrNum2);