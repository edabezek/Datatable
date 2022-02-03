using DatatableHintli.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatatableHintli.Data
{
    public class HintliDbContext : DbContext
    {
        public HintliDbContext(DbContextOptions<HintliDbContext> options) : base(options)
        {
        }
        public DbSet<Customer> Customers { get; set; }
    }
    
}
