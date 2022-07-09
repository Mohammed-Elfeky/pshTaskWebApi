using pshTaskWebApi.Models;
using System.Linq;
namespace pshTaskWebApi.Repos
{
    public class HelpersRepo : IHelpersRepo
    {
        private readonly context context;

        public HelpersRepo(context context)
        {
            this.context = context;
        }

        public void imgUploader(int id, string img)
        {
            Employee employee = context.employees.Where(emp => emp.Id == id).FirstOrDefault();
            employee.Image = img;
            context.SaveChanges();
        }
    }
}
