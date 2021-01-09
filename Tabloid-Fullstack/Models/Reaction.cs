using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tabloid_Fullstack.Models
{
    public class Reaction
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Emoji { get; set; }
        public List<PostReaction> PostReactions { get; set; }
    }
}
