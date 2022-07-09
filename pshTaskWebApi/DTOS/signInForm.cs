using System.ComponentModel.DataAnnotations;

namespace pshTaskWebApi.DTOS
{
    public class signInForm
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
