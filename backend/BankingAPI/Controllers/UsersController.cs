using BankingAPI.DTOs.Users;
using BankingAPI.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BankingAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrWhiteSpace(userIdClaim))
            {
                return Unauthorized(new
                {
                    message = "Invalid token."
                });
            }

            var userId = int.Parse(userIdClaim);

            var user = await _userRepository.GetByIdAsync(userId);

            if (user == null)
            {
                return NotFound(new
                {
                    message = "User not found."
                });
            }

            var profile = new UserProfileDto
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role?.Name ?? "",
                IsActive = user.IsActive
            };

            return Ok(profile);
        }

        [HttpGet("admin-test")]
        [Authorize(Roles = "Admin")]
        public IActionResult AdminTest()
        {
            return Ok(new
            {
                message = "Only Admin can access this endpoint."
            });
        }

        [HttpGet("staff-test")]
        [Authorize(Roles = "Staff,Admin")]
        public IActionResult StaffTest()
        {
            return Ok(new
            {
                message = "Staff and Admin can access this endpoint."
            });
        }
    }
}