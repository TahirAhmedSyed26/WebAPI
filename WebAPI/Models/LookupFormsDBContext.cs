using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class LookupFormsDBContext : DbContext
    {
        public LookupFormsDBContext(DbContextOptions<LookupFormsDBContext> options) : base(options)
        {

        }

        public DbSet<DLookupForm> DLookupForms {get; set;}

    }
}
