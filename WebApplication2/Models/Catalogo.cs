using System.Data.Entity;

namespace WebApplication2.Models
{
    public class Catalog
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
    }

    public class CatalogDBContext : DbContext
    {
        public DbSet<Catalog> Catalogs { get; set; }

        public DbSet<Student> Students { get; set; }

        public DbSet<Enrollment> Enrollments { get; set; }

        public DbSet<Course> Courses { get; set; }
    }
}