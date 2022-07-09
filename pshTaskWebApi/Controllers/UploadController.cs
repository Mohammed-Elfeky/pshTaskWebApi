using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pshTaskWebApi.Repos;
using System.IO;
using System.Net.Http.Headers;

namespace pshTaskWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IHelpersRepo helpersRepo;

        public UploadController(IHelpersRepo helpersRepo)
        {
            this.helpersRepo = helpersRepo;
        }


        [HttpPost("{id:int}")]
        public IActionResult uploadImage(int id)
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                helpersRepo.imgUploader(id, fileName);
                return Ok();
            }
            catch
            {
                return Problem("something went wrong");
            }
        }
    }
}
