using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalesOrderDetail.Models;

namespace SalesOrderDetail.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesOrderDetailController : ControllerBase
    {
        private readonly AdventureWorks2022Context _dbcontext;
        public SalesOrderDetailController(AdventureWorks2022Context _dbcontext)
        {
            this._dbcontext = _dbcontext;
        }
        [HttpGet]
        public async Task<IActionResult> getSalesOrderDetails()
        {
            var result = await _dbcontext.SalesOrderDetails.ToListAsync();
            return Ok(result);
        }
    }
}
