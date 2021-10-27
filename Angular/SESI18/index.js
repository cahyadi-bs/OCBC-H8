
//==================================================================================
//==================================================================================
//OBJECT
//Membuat object
let orang = {
    nama : "Hanna",
    warnaRambut : "multi-color",
    berkacamata : true,
    umur : 33
};
//Cara akses object
//cara 1 : object.property
console.log(orang.nama);

//cara 2 : object["property"]
let somekey = "umur";
console.log(orang[somekey]);
console.log(orang["berkacamata"]);

//Menambahkan properti
orang.nilai = [100, 28, 99];

//Mengubah value pada object
orang["berkacamata"] = false
console.log(orang);

//menghapus property pada object
delete orang.umur;
console.log(orang);

//==================================================================================
//FUNCTION

//1. Menggunakaan cara biasa
function namaFungsi(){
    console.log("Hello World");
}

//2. Menggunakan ekspresi
var namaFungsi2 = function(){
    console.log("Hello World");
}

//3. menggunakan tanda panah (Arrow Function)
var namaFungsi3 = () => {
    console.log("Hello World");
}

var namaFungsi4 = () => console.log("Hello World");


//==================================================================================
//JQUERY DOM



