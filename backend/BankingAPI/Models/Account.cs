using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankingAPI.Models
{
    public class Account
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public string AccountNumber { get; set; } = string.Empty;

        [Column(TypeName = "decimal(18,2)")]
        public decimal Balance { get; set; } = 0;

        [Required]
        [MaxLength(50)]
        public string Status { get; set; } = "Active";

        [Required]
        [MaxLength(50)]
        public string AccountType { get; set; } = "Savings";

        public int UserId { get; set; }

        public User? User { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}