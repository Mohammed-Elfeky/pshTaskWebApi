using pshTaskWebApi.Models;
using System.Collections.Generic;

namespace pshTaskWebApi.Repos
{
    public interface IDepartmentRepo
    {
        List<Department> GetDepartments();
    }
}