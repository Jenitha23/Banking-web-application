using BankingAPI.Models;

namespace BankingAPI.Repositories.Interfaces
{
    public interface IRoleRepository
    {
        Task<Role?> GetByNameAsync(string name);
        Task<bool> RoleExistsAsync(string name);
        Task AddAsync(Role role);
        Task SaveChangesAsync();
    }
}