using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AirSnS.Models
{
    public class AirSnSContext : DbContext
    {
        public AirSnSContext (DbContextOptions<AirSnSContext> options)
            : base(options)
        {
        }

        public DbSet<AirSnS.Models.Warehouse> Warehouses { get; set; }

        public DbSet<AirSnS.Models.User> Users { get; set; }
    }
}
