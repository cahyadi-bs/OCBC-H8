using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LoginRegister
{
    public partial class Form1 : Form
    {
        //Initialize the connection class
        config db = new config();
        public Form1()
        {
            InitializeComponent();
            //pass the database you want to connect to
            db.Connect("userdata");
        }

        private void btnRegister_Click(object sender, EventArgs e)
        {
            //start register windows
            Register register = new Register();
            register.Show();
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            //query MySQL database for the data passed from textboxes
            db.ExecuteSelect("SELECT * FROM `user_info` where username='" + textBoxUsername.Text + "' and password ='" + textBoxPassword.Text + "'");

            if (db.Count() == 1)
            {
                MessageBox.Show("Success You will Login as " + db.Results(0, "names"));
            }
            else
            {
                MessageBox.Show("Wrong username and password combination");
            }
        }

        private void btnExit_Click(object sender, EventArgs e)
        {
            // closes the application
            Environment.Exit(0);
        }
    }
}
