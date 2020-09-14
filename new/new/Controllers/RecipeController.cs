using newP;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace newp.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class RecipeController : ApiController
    {
        [HttpGet]
        // החזרת מתכונים
        public IHttpActionResult getAllRecipes()
        {
            return Ok(DB.Recipes);
        }
        [HttpPost]
        //הפו מוסיפה מתכון 
        public IHttpActionResult addmyRecipe(Recipe nr)
        {
            nr.DateAdd = DateTime.Now;
            DB.Recipes.Add(nr);
            return Ok(true);
        }
        [HttpGet]
        //הפונקציה מציגה את המתכון המלא לפי שמו
        public IHttpActionResult namRecipe(string namr)
        {
            foreach (Recipe r in DB.Recipes)
                if (namr == r.NameRecipe)
                    return Ok(r);
            return Ok(false);
        }
        [HttpPost]
        public IHttpActionResult saveRecipe(Recipe sr)
        {
            foreach (Recipe r in DB.Recipes)
                if (sr.NameRecipe == r.NameRecipe)
                {
                    r.CategoryRecipe = sr.CategoryRecipe;
                    r.Ingredients = sr.Ingredients;
                    r.Time = sr.Time;
                    r.Preparation = sr.Preparation;
                    r.Difficulty = sr.Difficulty;
                    r.Image = sr.Image;
                    return Ok("בוצע בהצלחה");
                }
            return Ok("נכשל");
        }


    }
}
