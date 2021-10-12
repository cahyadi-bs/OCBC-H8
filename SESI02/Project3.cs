using System;

class Project3
{
    static void Main (string[] args)
    {
        string nama,alamat;
        int umur;

        Console.WriteLine("=== PROGRAM PENDAFTARAN PENDUDUK ===");
        Console.Write("Masukkan Nama: ");
        nama = Console.ReadLine();
        Console.Write("Masukkan alamat: ");
        alamat = Console.ReadLine();
        Console.Write("Masukkan umur: ");
        umur = int.Parse(Console.ReadLine());

        Console.WriteLine();
        Console.WriteLine("Terima Kasih");
        Console.WriteLine("Data Berikut");
        Console.WriteLine($"Nama: {nama}");
        Console.WriteLine($"Alamat: {alamat}");
        Console.WriteLine($"Umur: {umur}");
        Console.WriteLine("SUDAH DISIMPAN!!");
    }
}