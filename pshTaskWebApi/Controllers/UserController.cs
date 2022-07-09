using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using pshTaskWebApi.DTOS;
using System.Collections.Generic;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace pshTaskWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UserController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly IConfiguration config;
        public UserController(UserManager<IdentityUser> userManager, IConfiguration config) 
        {
            this.userManager = userManager;
            this.config = config;
        }


        [HttpPost("signIn")]
        public async Task<IActionResult> signIn(signInForm form)
        {
            try
            {

                IdentityUser user = await userManager.FindByNameAsync(form.UserName);
                if (user == null) return Unauthorized("the user name or password is not correct");

                bool passIsCorrect = await userManager.CheckPasswordAsync(user, form.Password);
                if (!passIsCorrect) return Unauthorized("the user name or password is not correct");


                //claims
                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, user.UserName));
                claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));
                claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));


                var roles = await userManager.GetRolesAsync(user);
                foreach (var role in roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role));
                }


                //create token
                SecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["jwt:key"]));
                SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                JwtSecurityToken token = new JwtSecurityToken(
                    issuer: config["jwt:issuer"],
                    audience: config["jwt:audiance"],
                    claims: claims,
                    expires: DateTime.Now.AddHours(3),
                    signingCredentials: creds
                );
                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token), expiration = token.ValidTo });
            }
            catch
            {
                return Problem("something went wrong");
            }
        }
    }
}
