using System;
namespace Example_All
{
    public class override2:overide1
    {
        public override void penjumlahanperkaliandll()
        {
            Console.WriteLine("Overriding 2......------>>>>>>");
            Console.WriteLine("Hasil pembagian angka {0} dan angka {1} = {2}",bilangan1,bilangan2,bilangan1/bilangan2);
            Console.WriteLine("Hasil pengurangan angka {0} dan angka {1} = {2}", bilangan1,bilangan2,bilangan1 - bilangan2);
        }
    }
}