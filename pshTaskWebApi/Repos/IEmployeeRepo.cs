using pshTaskWebApi.Models;
using System.Collections.Generic;

namespace pshTaskWebApi.Repos
{
    public interface IEmployeeRepo
    {
        Employee add(Employee employee);
        int Delete(int id);
        Employee Edit(int id, Employee employee);
        bool FindByFirstName(string name);
        Employee FindById(int id);
        List<Employee> GetAll();
    }
}