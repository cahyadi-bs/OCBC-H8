using System;
public class Logika2
{
    public static void Main()
    {
        int nilai;
        string nama;

        Console.Write("Masukkan Nama Anda: ");
        nama = Console.ReadLine();
        Console.Write("Masukkan Nilai Anda: ");
        nilai = int.Parse(Console.ReadLine());

        Console.WriteLine($"Nama Kamu : {nama}");
        if (nilai < 60)
        {
            Console.WriteLine("Nilai Kamu adalah C");
        } else if (nilai < 80) {
            Console.WriteLine("Nilai Kamu adalah B");
        } else {
            Console.WriteLine("Nilai Kamu adalah A");
        }
    }
}