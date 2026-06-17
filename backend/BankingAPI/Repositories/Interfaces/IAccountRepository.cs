using BankingAPI.Models;

namespace BankingAPI.Repositories.Interfaces
{
    public interface IAccountRepository
    {
        Task AddAsync(Account account);
        Task SaveChangesAsync();
    }
}