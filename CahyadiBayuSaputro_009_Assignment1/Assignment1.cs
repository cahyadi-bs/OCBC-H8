using System;

class Assignment
{
    public static void Main(string[] args)
    {   
        bool repeat = true;
        string choice;
        int choice1;
        while(repeat)
        {
            Console.WriteLine("========================================");
            Console.WriteLine("SELAMAT DATANG DI ASSIGNMENT 1");
            Console.WriteLine("========================================");
            Console.WriteLine("Nama Lengkap: Cahyadi Bayu Saputro");
            Console.WriteLine("Kode Peserta: 009");
            Console.WriteLine("Alamat: Jakarta");
            Console.WriteLine("===============MENU PROGRAM=============");
            Console.WriteLine("1. Display Alphabet Triangle");
            Console.WriteLine("2. Display Number Triangle");
            Console.WriteLine("3. Factorial Number");
            Console.WriteLine("4. Reverse Number & Check for Palindrome");
            Console.WriteLine("5. Number to String");
            Console.WriteLine("========================================");
            Console.Write("Which program do you want to run ? ");
            choice1 = int.Parse(Console.ReadLine());
                switch(choice1)
                {
                    case 1:
                        alphTriangle();
                        break;
                    case 2:
                        numTriangle();
                        break;
                    case 3:
                        factNumber();
                        break;
                    case 4:
                        reversedNumber();
                        break;
                    case 5:
                        number2String();
                        break;
                    default:
                        Console.WriteLine("Wrong Input!!");
                        break;
                }
            Console.WriteLine();
            Console.WriteLine("========================================");
            Console.Write("Do you want to repeat (y/n) ? ");
            choice = (Console.ReadLine()).ToLower();
            repeat = choice == "y" ? true : false;
            Console.WriteLine("========================================");
        }
    }

    //Soal No 1
    public static void alphTriangle()
    {
        char ch='A';      
        int i, j, k, m;      
        for(i=1; i<=5; i++)      
        {      
            for(j=5; j>=i; j--)      
                Console.Write(" ");      
            for(k=1;k<=i;k++)      
                Console.Write(ch++);      
                ch--;      
            for(m=1;m<i;m++)      
                Console.Write(--ch);      
                Console.Write("\n");      
                ch='A';      
        }  
    }

    //Soal No 2
    public static void numTriangle()
    {
        int  i,j,k,l,n;           
        Console.Write("Enter the Range=");    
        n= int.Parse(Console.ReadLine());     
        for(i=1; i<=n; i++)      
        {          
            for(j=1; j<=n-i; j++)      
            {      
                Console.Write(" ");      
            }      
            for(k=1;k<=i;k++)      
            {      
                Console.Write(k);      
            }      
            for(l=i-1;l>=1;l--)      
            {      
                Console.Write(l);      
            }      
            Console.Write("\n");      
        } 
    }

    //Soal No 3
    public static void factNumber()
    {
        int i,fact=1,number;      
        Console.Write("Enter any Number: ");      
        number= int.Parse(Console.ReadLine());     
        for(i=1;i<=number;i++)
        {      
            fact*=i;      
        }      
        Console.Write("Factorial of " +number+" is: "+fact);  
    }

    //Soal No 4
    public static void reversedNumber()
    {
        int  n, reverse=0, remainder,temp;           
        Console.Write("Enter a number: ");      
        n = int.Parse(Console.ReadLine()); 
        temp = n;    
        while(n!=0)      
        {      
            remainder=n%10;        
            reverse=reverse*10+remainder;      
            n/=10;      
        }      
        Console.WriteLine("Reversed Number: "+reverse);
        if(reverse == temp){
            Console.WriteLine("Number is Palindrome");
        } else 
        {
            Console.WriteLine("Number is not Palindrome");
        }
    }

    //Soal No 5
    public static void number2String()
    {
        string num, numString = "";
        Console.WriteLine("Input your number");
        num = Console.ReadLine();
        foreach (char n in num)
        {
            switch(n)      
            {      
                case '1':      
                numString+="one ";  
                break;      
                case '2':      
                numString+="two ";    
                break;      
                case '3':      
                numString+="three ";   
                break;      
                case '4':      
                numString+="four ";   
                break;      
                case '5':      
                numString+="five ";   
                break;      
                case '6':      
                numString+="six ";     
                break;      
                case '7':    
                numString+="seven ";     
                break;    
                case '8':      
                numString+="eight ";      
                break;      
                case '9':      
                numString+="nine ";   
                break;      
                case '0':      
                numString+="zero ";   
                break;
                case ' ':      
                numString+="  ";   
                break;     
                default:      
                numString+="NaN ";      
                break;      
            }
        }
        Console.WriteLine($"{numString}"); 
    }
}