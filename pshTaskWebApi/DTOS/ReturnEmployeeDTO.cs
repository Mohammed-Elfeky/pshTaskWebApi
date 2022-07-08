using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace pshTaskWebApi.DTOS
{
    public class ReturnEmployeeDTO
    {
        public int Id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string Phone { get; set; }
        public DateTime BirthDate { get; set; }
        public string Image { get; set; }
        public string departmentName { get; set; }
        public int dept_Id { get; set; }

    }
}
