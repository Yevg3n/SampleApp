using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string? UserName { get; set; } //TODO: Get back to it later
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
