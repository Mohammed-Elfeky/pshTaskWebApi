using pshTaskWebApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace pshTaskWebApi.Repos
{
    public class DepartmentRepo : IDepartmentRepo
    {
        private readonly context context;

        public DepartmentRepo(context context)
        {
            this.context = context;
        }


        public List<Department> GetDepartments()
        {
            return context.departments.ToList();
        }
    }
}
