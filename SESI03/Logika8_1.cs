using System;

public class Logika8
{
    public static void Main()
    {
        int num1,num2,choice;
        int num3;
        Console.Write("Masukkan angka: ");
        num1 = int.Parse(Console.ReadLine());
        Console.Write("Masukkan batas: ");
        num2 = int.Parse(Console.ReadLine()); 
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
                for(int i=1; i<num2; i++)
                {
                    
                }
                break;
            case 2:
            case 3:
            case 4:
        }
    }
}

// inputan nilai = 1;
// input start loop = 1
// input end = 10
// input (+, *, -)

// loop I=1 s/d 10

// jika + hasilnya
// i=1 output 1+(1 / inputan nilai)
// i=2 output 2+(1 / inputan nilai)
// dst

// jika - hasilnya
// i=1 output 1-(1 / inputan nilai)
// i=2 output 2-(1 / inputan nilai)
// dst

// jika * hasilnya
// i=1 output 1*(1 / inputan nilai)
// i=2 output 2*(1 / inputan nilai)
// dst

// jika / hasilnya
// i=1 output 1/(1 / inputan nilai)
// i=2 output 2/(1 / inputan nilai)
