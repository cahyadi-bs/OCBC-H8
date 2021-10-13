using System;

namespace Example5_Overriding
{
    public class overide:Program
    {
        public override void penjumlahanperkaliandll()
        {
            Console.WriteLine("Overriding 2......------>>>>>>");
            Console.WriteLine("Hasil pembagian angka {0} dan angka {1} = {2}",bilangan1,bilangan2,bilangan1/bilangan2);
            Console.WriteLine("Hasil pengurangan angka {0} dan angka {1} = {2}", bilangan1,bilangan2,bilangan1 - bilangan2);
        }

    static void Main(string[] args)
        {
            Program overriding = new Program();
            overriding.bilangan(10,5);
            overriding.penjumlahanperkaliandll();
            overide overiding = new overide();
            overiding.bilangan(20,5);
            overiding.penjumlahanperkaliandll();

        }
    }
}