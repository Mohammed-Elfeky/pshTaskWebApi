using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pshTaskWebApi.Models;
using pshTaskWebApi.Repos;
using pshTaskWebApi.DTOS;
using System.Linq;
namespace pshTaskWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepo employeeRepo;

        public EmployeeController( IEmployeeRepo employeeRepo )
        {
            this.employeeRepo = employeeRepo;
        }


        [HttpGet]
        public IActionResult getAll()
        {
            try
            {
                var empolyees = employeeRepo.GetAll().Select(emp => converter(emp));
                return Ok(empolyees);
            }
            catch
            {
                return Problem("something went wrong");
            }

        }

        [HttpGet("{id:int}")]
        public IActionResult getEmp(int id)
        {
            try
            {
                Employee employee= employeeRepo.FindById(id);
                if (employee == null)
                {
                    return Problem("the id doesn't exist");
                }
                return Ok(converter(employee));
            }
            catch
            {
                return Problem("something went wrong");
            }
        }

        [HttpPost]
        public IActionResult addEmp(Employee employee)
        {
            try
            {
                int empId  = employeeRepo.add(employee);
                return Ok(new {id=empId});
        }
            catch
            {
                return Problem("something went wrong");
            }
        }

        [HttpPut("{id:int}")]
        public IActionResult editEmp(int id, Employee employee)
        {
            try
            {
                if (employeeRepo.FindById(id) == null) return Problem("the id doesn't exist");
                return Ok(employeeRepo.Edit(id, employee));
            }
            catch
            {
                return Problem("something went wrong");
            }
        }

        [HttpDelete("{id:int}")]
        public IActionResult deleteEmp(int id)
        {
            try
            {
                if (employeeRepo.FindById(id) == null)
                {
                    return Problem("the id doesn't exist");
                }
                return Ok(employeeRepo.Delete(id));
            }
            catch
            {
                return Problem("something went wrong");
            }
        }

        ReturnEmployeeDTO converter(Employee e)
        {
            return new ReturnEmployeeDTO()
            {
                Id = e.Id,
                firstName = e.firstName,
                lastName = e.lastName,
                Phone = e.Phone,
                BirthDate = e.BirthDate,
                Image = e.Image,
                departmentName = e.department.Name
            };
        }
    }
}
