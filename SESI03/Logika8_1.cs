using System;

public class Logika8
{
    public static void Main()
    {
        int num,limit,choice;
        Console.Write("Masukkan angka: ");
        num = int.Parse(Console.ReadLine());
        Console.Write("Masukkan batas: ");
        limit = int.Parse(Console.ReadLine()); 
        Console.WriteLine("========ACTION========");
        Console.WriteLine("1. Penjumlahan");
        Console.WriteLine("2. Pengurangan");
        Console.WriteLine("3. Perkalian");
        Console.WriteLine("4. Pembagian");
        Console.Write("Pilihan anda: ");
        choice = int.Parse(Console.ReadLine()); 
        Console.WriteLine();

        switch(choice)
        {
            case 1:
                for(int i=1; i<limit; i++)
                {
                    Console.WriteLine($"Pertambahan dari {i} + {num} adalah {i+num}");
                }
                break;
            case 2:
                for(int i=1; i<limit; i++)
                {
                    Console.WriteLine($"Pengurangan dari {i} - {num} adalah {i-num}");
                }
                break;
            case 3:
                for(int i=1; i<limit; i++)
                {
                    Console.WriteLine($"Perkalian dari {i} x {num} adalah {i*num}");
                }
                break;
            case 4:
                for(int i=1; i<limit; i++)
                {
                    Console.WriteLine($"Pembagian dari {i} / {num} adalah {i/num}");
                }
                break;
        }
    }
}
