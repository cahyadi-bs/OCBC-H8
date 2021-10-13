using System;

namespace Example2
{
    class Program
    {
        static void Main(string[] args)
        {
            pesawat pesawat = new pesawat();
            Console.Write("Nama pesawat: ");
            pesawat.nama = Console.ReadLine();
            Console.Write("Ketinggian: ");
            pesawat.ketinggian = Console.ReadLine();
            // pesawat.nama = "GARUDAKU";
            // pesawat.ketinggian = "2500 kaki";

            

            pesawat.terbang();
            pesawat.sudahTerbang();
        }
    }
}
