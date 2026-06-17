using BankingAPI.DTOs.Auth;
using BankingAPI.Models;
using BankingAPI.Repositories.Interfaces;
using BankingAPI.Services.Interfaces;
using BankingAPI.Utilities;

namespace BankingAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IRoleRepository _roleRepository;
        private readonly IPasswordService _passwordService;
        private readonly ITokenService _tokenService;

        public AuthService(
            IUserRepository userRepository,
            IRoleRepository roleRepository,
            IPasswordService passwordService,
            ITokenService tokenService)
        {
            _userRepository = userRepository;
            _roleRepository = roleRepository;
            _passwordService = passwordService;
            _tokenService = tokenService;
        }

        public async Task<AuthResponseDto> RegisterAsync(RegisterRequestDto request)
        {
            var email = request.Email.Trim().ToLower();

            if (await _userRepository.EmailExistsAsync(email))
            {
                throw new InvalidOperationException("Email already exists.");
            }

            var customerRole = await _roleRepository.GetByNameAsync("Customer");

            if (customerRole == null)
            {
                throw new InvalidOperationException("Customer role does not exist. Please seed roles first.");
            }

            var user = new User
            {
                FullName = request.FullName.Trim(),
                Email = email,
                PasswordHash = _passwordService.HashPassword(request.Password),
                RoleId = customerRole.Id,
                IsActive = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                Account = new Account
                {
                    AccountNumber = AccountNumberGenerator.Generate(),
                    Balance = 0,
                    Status = "Active",
                    AccountType = "Savings",
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            };

            await _userRepository.AddAsync(user);
            await _userRepository.SaveChangesAsync();

            user.Role = customerRole;

            var token = _tokenService.CreateToken(user);

            return new AuthResponseDto
            {
                Token = token,
                UserId = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Role = customerRole.Name
            };
        }

        public async Task<AuthResponseDto> LoginAsync(LoginRequestDto request)
        {
            var email = request.Email.Trim().ToLower();

            var user = await _userRepository.GetByEmailAsync(email);

            if (user == null)
            {
                throw new UnauthorizedAccessException("Invalid email or password.");
            }

            if (!user.IsActive)
            {
                throw new UnauthorizedAccessException("Your account is inactive. Please contact admin.");
            }

            var isPasswordValid = _passwordService.VerifyPassword(request.Password, user.PasswordHash);

            if (!isPasswordValid)
            {
                throw new UnauthorizedAccessException("Invalid email or password.");
            }

            var token = _tokenService.CreateToken(user);

            return new AuthResponseDto
            {
                Token = token,
                UserId = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role?.Name ?? "Customer"
            };
        }
    }
}