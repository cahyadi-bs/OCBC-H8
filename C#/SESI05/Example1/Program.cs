using System;

namespace Example1
{
    class Program
    {
        static void Main(string[] args)
        {
            //instansi objek
            Laptop laptop1 = new Laptop();

            //inisialisasi property
            // laptop1.merk = "Lenovo";
            // laptop1.ram = 4;
            // laptop1.memory = 128;

            Console.Write("Merknya apa: ");
            laptop1.merk = Console.ReadLine();
            Console.Write("Ramnya berapa: ");
            laptop1.ram = int.Parse(Console.ReadLine());
            Console.Write("Memorynya berapa: ");
            laptop1.memory = int.Parse(Console.ReadLine());

            //Tampilkan
            Console.WriteLine($"\n Merk Laptop adalah {laptop1.merk}");
            Console.WriteLine($"\n Kapasitas Ram ada {laptop1.ram}");
            Console.WriteLine($"\n Kapasitas Memory ada {laptop1.memory}");

            //akses method
            laptop1.Chatting();
            laptop1.Sosmed();
            laptop1.OnlineShop();
        }
    }
}
