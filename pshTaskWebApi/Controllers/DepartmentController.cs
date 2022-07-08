using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pshTaskWebApi.Repos;
using pshTaskWebApi.Models;
namespace pshTaskWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentRepo departmentRepo;

        public DepartmentController( IDepartmentRepo departmentRepo )
        {
            this.departmentRepo = departmentRepo;
        }

        [HttpGet]
        public IActionResult getAll()
        {
            try
            {
                var departments = departmentRepo.GetDepartments();
                return Ok(departments);
            }
            catch
            {
                return Problem("something went wrong");
            }

        }
    }
}
