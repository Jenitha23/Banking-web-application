using BankingAPI.Data;
using BankingAPI.Models;
using BankingAPI.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BankingAPI.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly BankingDbContext _context;

        public RoleRepository(BankingDbContext context)
        {
            _context = context;
        }

        public async Task<Role?> GetByNameAsync(string name)
        {
            return await _context.Roles.FirstOrDefaultAsync(r => r.Name == name);
        }

        public async Task<bool> RoleExistsAsync(string name)
        {
            return await _context.Roles.AnyAsync(r => r.Name == name);
        }

        public async Task AddAsync(Role role)
        {
            await _context.Roles.AddAsync(role);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}