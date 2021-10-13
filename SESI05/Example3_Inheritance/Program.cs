using System;

namespace Example3_Inheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            pesawat pesawat = new pesawat();
            pesawat_tempur pswttempur = new pesawat_tempur();


            pesawat.nama = "Helly";
            pesawat.jumlahRoda = 3;
            pesawat.ketinggian = "1000 kaki";
            pesawat.jumlahPenumpang = 3;
            pswttempur.nama = "AZ500TPU";
            pswttempur.jumlahRoda = 5;
            pswttempur.ketinggian = "200 kaki";
            pswttempur.jumlahPenumpang = 2;

            pesawat.terbang();
            pswttempur.terbangTinggi();
        }
    }
}
