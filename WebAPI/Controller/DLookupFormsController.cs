using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DLookupFormController : ControllerBase
    {
        private readonly LookupFormsDBContext _context;

        public DLookupFormController(LookupFormsDBContext context)
        {
            _context = context;
        }

        // GET: api/DLookupForm
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DLookupForm>>> GetDLookupForms()
        {
            return await _context.DLookupForms.ToListAsync();
        }

        // GET: api/DLookupForm/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DLookupForm>> GetDLookupForm(int id)
        {
            var DLookupForm = await _context.DLookupForms.FindAsync(id);

            if (DLookupForm == null)
            {
                return NotFound();
            }

            return DLookupForm;
        }

        // PUT: api/DLookupForm/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDLookupForm(int id, DLookupForm DLookupForm)
        {
            DLookupForm.Id = id;

            _context.Entry(DLookupForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DLookupFormExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DLookupForm
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<DLookupForm>> PostDLookupForm(DLookupForm DLookupForm)
        {
            _context.DLookupForms.Add(DLookupForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDLookupForm", new { id = DLookupForm.Id }, DLookupForm);
        }

        // DELETE: api/DLookupForm/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DLookupForm>> DeleteDLookupForm(int id)
        {
            var DLookupForm = await _context.DLookupForms.FindAsync(id);
            if (DLookupForm == null)
            {
                return NotFound();
            }

            _context.DLookupForms.Remove(DLookupForm);
            await _context.SaveChangesAsync();

            return DLookupForm;
        }

        private bool DLookupFormExists(int id)
        {
            return _context.DLookupForms.Any(e => e.Id == id);
        }
    }
}