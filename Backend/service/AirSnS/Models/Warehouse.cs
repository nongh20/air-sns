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

        public string Address { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string CityProvince { get; set; }

        public string DistrictTown { get; set; }

        public string WardCommune { get; set; }

        public string Map { get; set; }

        public string Type { get; set; }

        public string Standard { get; set; }

        public string Size { get; set; }

        public string Volume { get; set; }

        public string Guide { get; set; }

        public string Rule { get; set; }

        public string Price { get; set; }

        public string PriceUnit { get; set; }

        public string Facilities { get; set; }

        public string AuthorityDocs { get; set; }

        public string ReturnPolicy { get; set; }

    }
}
