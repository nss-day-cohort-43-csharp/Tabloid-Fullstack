using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tabloid_Fullstack.Models.ViewModels
{
    public class ReactionCount
    {
        public Reaction Reaction { get; set; }
        public int Count { get; set; }
    }
}
