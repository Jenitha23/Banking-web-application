using BankingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BankingAPI.Data
{
    public static class DatabaseSeeder
    {
        public static async Task SeedAsync(BankingDbContext context)
        {
            await SeedRolesAsync(context);
        }

        private static async Task SeedRolesAsync(BankingDbContext context)
        {
            var roles = new List<string>
            {
                "Customer",
                "Staff",
                "Admin"
            };

            foreach (var roleName in roles)
            {
                var roleExists = await context.Roles.AnyAsync(r => r.Name == roleName);

                if (!roleExists)
                {
                    await context.Roles.AddAsync(new Role
                    {
                        Name = roleName,
                        CreatedAt = DateTime.UtcNow
                    });
                }
            }

            await context.SaveChangesAsync();
        }
    }
}