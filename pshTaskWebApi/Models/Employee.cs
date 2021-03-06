using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pshTaskWebApi.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        public string Image { get; set; }


        [ForeignKey("department")]
        [Required]
        public int dept_id { get; set; }
        public Department department { get; set; }

    }
}
