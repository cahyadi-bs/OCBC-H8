using System;

public class Logika6
{
    public static void Main()
    {
        int a;
        Console.Write("Input a number: ");
        a = int.Parse(Console.ReadLine());
        while (a<20)
        {
            Console.WriteLine($"Nilai a = {a}");
            a++;
        }
    }
}