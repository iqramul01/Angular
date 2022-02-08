using _1263087.Data;
using _1263087.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _1263087.Controllers
{
    [Route("/api/doctors")]
    public class DoctorController : Controller
    {
        private readonly MyDbContext context;

        public DoctorController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Doctor>> GetDoctors()
        {
            var dr = await context.Doctors.ToListAsync();
            return dr;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDoctor(int id)
        {
            var doctor = await context.Doctors.FindAsync(id);
            if (doctor == null)
            {
                return NotFound();
            }
            return Ok(doctor);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDoctor([FromBody] Doctor doctor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.Doctors.Add(doctor);
            await context.SaveChangesAsync();
            return Json(doctor);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDoctor([FromBody] Doctor doctor, int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var dr = await context.Doctors.FindAsync(id);
            if (dr != null)
            {
                dr.Name = doctor.Name;
                dr.Address = doctor.Address;
                dr.CellPhone = doctor.CellPhone;
                dr.BirthDate = doctor.BirthDate;
                dr.Status = doctor.Status;


                dr.DepartmentID = doctor.DepartmentID;
            }
            await context.SaveChangesAsync();
            return Ok(dr);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctor(int id)
        {
            var doctor = await context.Doctors.FindAsync(id);
            if (doctor == null)
            {
                return NotFound();
            }
            context.Remove(doctor);
            await context.SaveChangesAsync();
            return Ok(id);
        }

        [HttpGet]
        [Route("GetDepartmentList")]
        public IEnumerable<Department> GetDepartments()
        {
            List<Department> lstDepartment = new List<Department>();
            lstDepartment = (from DepartmentList in context.Departments select DepartmentList).ToList();
            return lstDepartment;
        }

    }
}