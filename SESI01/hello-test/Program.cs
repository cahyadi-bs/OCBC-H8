using System;

namespace hello_test
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstName,lastName,address,birth;
            int age;
            Console.WriteLine("Enter First Name:");
            firstName = Console.ReadLine();
            Console.WriteLine("Enter Last Name:");
            lastName = Console.ReadLine();
            Console.WriteLine("Enter your age:");
            age = Convert.ToInt32(Console.ReadLine()); 
            Console.WriteLine("Enter your address:");
            address = Console.ReadLine();
            Console.WriteLine("Enter your birth:");
            birth = Console.ReadLine();

            Console.WriteLine("Your full name is : " + firstName +" "+ lastName);
            Console.WriteLine("Your age is : " + age);
            Console.WriteLine("Your address is : " + address);
            Console.WriteLine($"Your date of birth is : {birth}");

            
            /*
                masukkan nama depan, nama akhiran
                masukkan umur
                masukkan alamat dan tanggal akhir
            */
        }
    }
}
