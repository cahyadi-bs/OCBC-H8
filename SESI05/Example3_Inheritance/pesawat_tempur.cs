using System;
namespace Example3_Inheritance
{
    public class pesawat_tempur:pesawat
    {
        public void terbangTinggi()
        {
            Console.WriteLine("Pesawat tempur dengan nama {0}, " +
                "yang mempunyai jumlah roda{1}," +
                " sedang berada pada ketinggian{2} dengan membawa jumlah penumpang sebanyak {3}" +
                "Akan meledakkan senjata", this.nama, this.jumlahRoda, this.ketinggian, this.jumlahPenumpang);
        }
    }
}