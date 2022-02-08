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
    [Route("/api/departments")]
    public class DepartmentController : Controller
    {
        private readonly MyDbContext context;

        public DepartmentController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Department>> GetDepartments()
        {
            var dep = await context.Departments.ToListAsync();
            return dep;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDepartment(int id)
        {
            var department = await context.Departments.FindAsync(id);
            if (department == null)
            {
                return NotFound();
            }
            return Ok(department);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDepartment([FromBody] Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            context.Departments.Add(department);
            await context.SaveChangesAsync();
            return Json(department);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDepartment([FromBody] Department department, int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var dep = await context.Departments.FindAsync(id);
            if (dep != null)
            {

                dep.DepartmentName = department.DepartmentName;
                dep.AvailableSeat = department.AvailableSeat;


            }
            await context.SaveChangesAsync();
            return Ok(dep);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            var dep = await context.Departments.FindAsync(id);
            if (dep == null)
            {
                return NotFound();
            }
            context.Remove(dep);
            await context.SaveChangesAsync();
            return Ok(id);
        }
    }
}