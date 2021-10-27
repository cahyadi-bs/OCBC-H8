using System;

class CaseStudy
{
    public static void Main(string[] args)
    {
        int pertama, kedua, ketiga, total;
        double rata;

        Console.Write("Enter your username: ");
        string username = Console.ReadLine();
        Console.Write("Enter your age: ");
        int age = int.Parse(Console.ReadLine());
        Console.Write("Enter your password: ");
        string password = Console.ReadLine();
        Console.Write("Enter your gender: ");
        string gender = Console.ReadLine();
        Console.Write("Enter your marital status (Y/N): ");
        string maritalStatus = Console.ReadLine();
        

        bool isUsernameValid = username == "cahyadi";
        bool isAdult = age > 10;
        bool isPasswordValid = password == "OCBC";

        if(isAdult && isPasswordValid && isUsernameValid)
        {
            Console.WriteLine("WELCOME TO THE CLUB!!");
            Console.WriteLine("=========Menghitung Nilai==========");
            Console.Write("Masukkan Nilai Pertama:");
            pertama = int.Parse(Console.ReadLine());
            Console.Write("Masukkan Nilai Kedua:");
            kedua = int.Parse(Console.ReadLine());
            Console.Write("Masukkan Nilai Ketiga:");
            ketiga = int.Parse(Console.ReadLine());

            Console.WriteLine("\n");
            Console.WriteLine("====OUTPUT====");
            Console.WriteLine($"Username = {username}");
            Console.WriteLine($"Age = {age}");
            Console.WriteLine($"Gender = {gender}");
            Console.WriteLine($"Marital Status = {maritalStatus == "Y" || maritalStatus == "y" ? "True" : "False"}");

            total = pertama + kedua + ketiga;
            rata = total / 3.0;
            Console.WriteLine("Total Nilai adalah: " + total);
            Console.WriteLine("Rata Rata Nilai adalah: " + rata);
            Console.WriteLine();
        } else {
            Console.WriteLine("Sorry, Try Again!!");
        }
    }
}