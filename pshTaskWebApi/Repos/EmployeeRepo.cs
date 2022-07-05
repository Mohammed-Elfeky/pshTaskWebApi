using pshTaskWebApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace pshTaskWebApi.Repos
{
    public class EmployeeRepo : IEmployeeRepo
    {
        private readonly context context;

        public EmployeeRepo(context context)
        {
            this.context = context;
        }
        public List<Employee> GetAll()
        {
            return context.employees.ToList();
        }
        public Employee FindById(int id)
        {
            return context.employees.Where(p => p.Id == id).SingleOrDefault();
        }
        public Employee add(Employee employee)
        {
            context.employees.Add(employee);
            context.SaveChanges();
            return employee;
        }
        public Employee Edit(int id, Employee employee)
        {
            Employee oldEmployee = FindById(id);
            if (oldEmployee != null)
            {
                oldEmployee.firstName = employee.firstName;
                oldEmployee.lastName = employee.lastName;
                oldEmployee.BirthDate = employee.BirthDate;
                oldEmployee.Phone = employee.Phone;
                oldEmployee.dept_id = employee.dept_id;
                context.SaveChanges();
                return oldEmployee;
            }
            return null;
        }
        public int Delete(int id)
        {
            Employee employee = FindById(id);
            context.employees.Remove(employee);
            return context.SaveChanges();
        }
        public bool FindByFirstName(string name)
        {
            return context.employees.Any(p => p.firstName == name);
        }
    }
}
