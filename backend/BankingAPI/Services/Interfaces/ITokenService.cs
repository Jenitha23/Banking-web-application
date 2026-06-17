using BankingAPI.Models;

namespace BankingAPI.Services.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}