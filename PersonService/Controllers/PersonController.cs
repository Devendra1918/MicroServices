using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonService.Models;

namespace PersonService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PersonController : ControllerBase
    {
        private readonly AdventureWorks2022Context _dbcontext;
        public PersonController(AdventureWorks2022Context _dbcontext)
        {
            this._dbcontext = _dbcontext;
        }
        [HttpGet]

        public async Task<IActionResult> GetPerson()
        {
            var result = (await _dbcontext.People.ToListAsync()).Take(10);
            return Ok(result);
        }
    }
}
