using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace _1263087.Models
{
    [Table("Departments")]
    public class Department
    {

        public int DepartmentID { get; set; }

        [Required]
        [StringLength(30)]
        public string DepartmentName { get; set; }
        public string AvailableSeat { get; set; }
        public virtual ICollection<Doctor> Doctors { get; set; }

    }
}
