namespace BankingAPI.Utilities
{
    public static class AccountNumberGenerator
    {
        public static string Generate()
        {
            var random = new Random();
            return $"BNK{DateTime.UtcNow:yyyyMMdd}{random.Next(100000, 999999)}";
        }
    }
}