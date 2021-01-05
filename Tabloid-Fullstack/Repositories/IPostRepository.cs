using System.Collections.Generic;
using Tabloid_Fullstack.Models;
using Tabloid_Fullstack.Models.ViewModels;

namespace Tabloid_Fullstack.Repositories
{
    public interface IPostRepository
    {
        List<PostSummary> Get();
    }
}