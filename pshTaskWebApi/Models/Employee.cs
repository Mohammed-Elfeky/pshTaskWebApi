using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace pshTaskWebApi.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string Phone { get; set; }
        public DateTime BirthDate { get; set; }
        public string Image { get; set; }


        [ForeignKey("department")]
        public int dept_id { get; set; }
        public Department department { get; set; }

    }
}
