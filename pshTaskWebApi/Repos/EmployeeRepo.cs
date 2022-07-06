using Microsoft.EntityFrameworkCore;
using pshTaskWebApi.Models;
using System.Collections.Generic;
using System.Linq;
using pshTaskWebApi.DTOS;
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
            var employess= context.employees.Include(e => e.department).ToList();
            return employess;
        }
        public Employee FindById(int id)
        {
            return context.employees.Include(e => e.department).Where(p => p.Id == id).SingleOrDefault();
        }
        public int add(Employee employee)
        {
            context.employees.Add(employee);
            context.SaveChanges();
            return employee.Id;
        }
        public int Edit(int id, Employee employee)
        {
            Employee oldEmployee = FindById(id);
            if (oldEmployee != null)
            {
                oldEmployee.firstName = employee.firstName;
                oldEmployee.lastName = employee.lastName;
                oldEmployee.BirthDate = employee.BirthDate;
                oldEmployee.Phone = employee.Phone;
                oldEmployee.dept_id = employee.dept_id;
                return context.SaveChanges();
            }
            return -1;
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
