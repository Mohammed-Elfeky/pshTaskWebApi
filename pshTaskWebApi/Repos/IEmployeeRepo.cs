using pshTaskWebApi.Models;
using System.Collections.Generic;
using pshTaskWebApi.DTOS;
namespace pshTaskWebApi.Repos
{
    public interface IEmployeeRepo
    {
        int add(Employee employee);
        int Delete(int id);
        int Edit(int id, Employee employee);
        bool FindByFirstName(string name);
        Employee FindById(int id);
        List<Employee> GetAll();
    }
}