using Microsoft.AspNetCore.Mvc;
using Azure.Storage.Blobs;
namespace documentAnalyzerApi.Controllers;

[ApiController]
[Route("[controller]")]
public class FileManagerController : ControllerBase
{
    private readonly ILogger<FileManagerController> _logger;
    private readonly IConfiguration _configuration;

    public FileManagerController(ILogger<FileManagerController> logger, IConfiguration configuration)
    {
        _logger = logger;
        _configuration = configuration;
    }

    [HttpPost]
    public IActionResult UploadFile(IFormFile file) 
    {
        //create blob storage account client
        BlobServiceClient blobServiceClient = new BlobServiceClient(_configuration.GetConnectionString("BlobConnectionString"));
        
        //create container client
        BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_configuration["ContainerName"]);    
        
        using (Stream s = file.OpenReadStream()){
            containerClient.UploadBlob(file.FileName, s);
        }

        return Ok();   
    }
}
