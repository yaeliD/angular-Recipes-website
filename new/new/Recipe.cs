using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace newP
{
    public class Recipe
    {
        public string NameRecipe { get; set; }
        public Category CategoryRecipe { get; set; }
        public int Time { get; set; }
        public int Difficulty { get; set; }
        public DateTime DateAdd { get; set; }
        public List<string> Ingredients { get; set; }
        public List<string> Preparation { get; set; }
        public string UserName { get; set; }
        public string Image { get; set; }
        public bool View { get; internal set; }
    }
}