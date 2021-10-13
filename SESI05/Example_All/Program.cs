using System;

namespace Example_All
{
    class Program
    {
        static void Main(string[] args)
        {
            bool ulang = true;
            string choice;
            do{
                Console.WriteLine("=====PROGRAM=====");
                Console.WriteLine("1. Pesawat Tempur");
                Console.WriteLine("2. Overloading");
                Console.WriteLine("3. Overiding");
                Console.WriteLine("4. Tentang Saya");
                Console.WriteLine("5. Exit");
                Console.WriteLine("Apakah pilihan anda");
                choice = Console.ReadLine();
                switch(choice)
                {
                    case "1":
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
                        break;
                    case "2":
                        Data datanew = new Data();
                        datanew.print("Foxy");
                        datanew.print(081381365423);
                        break;
                    case "3":
                        overide1 overriding = new overide1();
                        Console.WriteLine("Bilangan 1: ");
                        int num1 = int.Parse(Console.ReadLine());
                        Console.WriteLine("Bilangan 2: ");
                        int num2 = int.Parse(Console.ReadLine());
                        overriding.bilangan(num1,num2);
                        overriding.penjumlahanperkaliandll();
                        override2 overiding = new override2();
                        overiding.bilangan(num1,num2);
                        overiding.penjumlahanperkaliandll();
                        break;
                    case "4":
                        Console.WriteLine("Halo nama saya Cahyadi Bayu Saputro, saya tinggal di Jakarta");
                        Console.WriteLine("saya bertinggal di jakarta");
                        Console.WriteLine("pengalaman saya belajar C# selama pertemuan 1-5 sejauh ini sangat menarik.");
                        Console.WriteLine("Terima kasih!.");
                        break;
                    case "5":
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("Input tidak sesuai");
                        Environment.Exit(0);
                        break;
                }
                Console.WriteLine("apakah mau mengulang (y/n)?");
                ulang = ((Console.ReadLine()).ToLower() == "y" ? true : false);
            } while(ulang);
            Console.WriteLine("Terima kasih!!!");
        }
    }
}
