using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using PersonService.Models;
namespace PersonService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly TokenService _tokenService;
        //Person p1 = new Person();
        public AuthController(TokenService tokenService)
        {
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Loginuser p1)
        {
            if (p1.UserName == "admin" && p1.Password=="12345")
            {
                var token = _tokenService.GenerateToken(p1.UserName);
                return Ok(new { token });
            }
            return Unauthorized();
        }
    }
}
public class Loginuser
{
    public string UserName { get; set; }
    public string Password { get; set; }
}