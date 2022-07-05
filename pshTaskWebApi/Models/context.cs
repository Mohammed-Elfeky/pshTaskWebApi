using Microsoft.EntityFrameworkCore;

namespace pshTaskWebApi.Models
{
    public class context:DbContext
    {
        public context(DbContextOptions options) : base(options) { }

        public DbSet<Employee> employees { get; set; }
        public DbSet<Department> departments { get; set; }

    }
}
