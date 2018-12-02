using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AirSnS.Models
{
    public class Warehouse
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Location { get; set; }

        public string Map { get; set; }

        public string Type { get; set; }

        public string Standard { get; set; }

        public string Size { get; set; }

        public string Volume { get; set; }

        public string Guideline { get; set; }

        public string Price { get; set; }

        public string Facilities { get; set; }

        public string Authority { get; set; }

        public string ReturnPolicy { get; set; }

    }
}
