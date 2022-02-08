using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace _1263087.Models
{
    [Table("Doctors")]
    public class Doctor
    {
        public int DoctorID { get; set; }
        [Required]
        [StringLength(30)]
        public string Name { get; set; }
        [Required]
        [StringLength(30)]
        public string Address { get; set; }
        [Required]
        [StringLength(255)]
        public string CellPhone { get; set; }
        //[DataType(DataType.Date)]
        //[DisplayFormat(DataFormatString="{0:yyyy-MM-dd}",ApplyFormatInEditMode=true)]
        public DateTime BirthDate { get; set; }
        public bool Status { get; set; }
        public int DepartmentID { get; set; }
        public virtual Department Department { get; set; }
    }
}
