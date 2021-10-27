using System;
namespace Example2
{
    public class pesawat
    {
        public string nama;
        //private string ketinggian;
        public string ketinggian
        {
            //get { return ketinggian; }
            //set { ketinggian = value; }
            get; set;
        }

        public void terbang()
        {
            Console.WriteLine("Pesawat dengan nama {0}, sedang take off", this.nama);
        }

        public void sudahTerbang()
        {
            Console.WriteLine("Pesawat sekarang berada pada ketinggian {0}", this.ketinggian);
        }
    }
}