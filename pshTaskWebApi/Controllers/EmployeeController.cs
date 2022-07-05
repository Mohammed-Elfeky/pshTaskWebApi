using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pshTaskWebApi.Models;
using pshTaskWebApi.Repos;
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
                return Ok(employeeRepo.GetAll());
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
                return Ok(employee);
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
                Employee employee1  = employeeRepo.add(employee);
                return Ok(employee1);
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
        public IActionResult deletecat(int id)
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
    }
}
