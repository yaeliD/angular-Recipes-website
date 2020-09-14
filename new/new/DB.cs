using newP;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace newp
{
    public class DB
    {
        public static List<User> Users { get; set; }
        public static List<Recipe> Recipes { get; set; }
        public static List<Category> Categorys { get; set; }
       static DB()
        {
            Users = new List<User>()
            {
                new User(){UserName="yaeli",Password=123,Adress="dayan",Email="hfjdg@fhjg",Phone=054854 },
                new User(){UserName="bbbb",Password=567,Adress="herzelia",Email="hhjg@fhjg",Phone=05454687},
                new User(){UserName="cccc",Password=689,Adress="kfar saba",Email="dsrtdg@fhjg",Phone=052788}
            };
            Categorys = new List<Category>()
            {
                new Category(){CategoryCode=1,CategoryName="milky",CategoryIcon="אייקון חלבי.jpg"},
                new Category(){CategoryCode=2,CategoryName="parve",CategoryIcon="אייקון פרווה.jpg"}           
            };

            Recipes = new List<Recipe>()
           {
               new Recipe() { NameRecipe =  "ChocolateC",CategoryRecipe = Categorys[0],Time = 25,Difficulty = 3,DateAdd = DateTime.Now,Ingredients = new List<string>() {"3 ביצים L","250 גרם (כוס ורבע) סוכר","180 מל (3/4 כוס) שמן","240 מל (1 כוס) חלב (או מים לגרסה פרווה)","60 מל (1/4 כוס) מים","קורט מלח","1 כפית תמצית וניל","75 גרם (1/2 כוס) אבקת קקאו","210 גרם (כוס וחצי) קמח","כפית וחצי אבקת אפייה","75 גרם שוקולד מריר קצוץ" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "yaeli",Image = "עוגת שוקולד.jpg",View = true },  
               new Recipe() { NameRecipe = "MapleC",CategoryRecipe = Categorys[1],Time = 60,Difficulty = 2,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "yaeli",Image = "kci.jpg",View = true },
               new Recipe() { NameRecipe = "birthdayC",CategoryRecipe = Categorys[1],Time = 50,Difficulty = 1,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "yaeli",Image = "כיפת-מוס-שוקולד-Custom.jpg",View = true },
               new Recipe() { NameRecipe = "Chocolate",CategoryRecipe = Categorys[1],Time = 20,Difficulty = 4,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "zipora",Image = "כדורי שוקולד.jpg",View = true },
               new Recipe() { NameRecipe = "mymoch",CategoryRecipe = Categorys[1],Time = 30,Difficulty = 3,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "esther",Image = "מתכון כיפות מוס שוקולד מטריפות » ספר המתכונים שלי.jpg",View = true },
               new Recipe() { NameRecipe = "ChocolateCC",CategoryRecipe = Categorys[1],Time = 30,Difficulty = 3,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "yaeli",Image = "עוגיות שוקולד ציפס.jpg",View = true },
               new Recipe() { NameRecipe =  "BelgianW",CategoryRecipe = Categorys[0],Time = 20,Difficulty = 3,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "yael",Image = "וופל בלגי.jpg",View = true },
               new Recipe() { NameRecipe = "CorruptionC",CategoryRecipe = Categorys[0],Time = 110,Difficulty = 2,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "nechama",Image = "עוגיות שחיתות.jpg",View = true },
               new Recipe() { NameRecipe = "cookies",CategoryRecipe = Categorys[0],Time = 20,Difficulty = 1,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "lea",Image = "עוגיות חמה.jpg",View = true },
               new Recipe() { NameRecipe = "Alphabers",CategoryRecipe = Categorys[0],Time = 200,Difficulty = 4,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "zipora",Image = "עוגיות אלפחורס.jpg",View = true },
               new Recipe() { NameRecipe = "MilkamC",CategoryRecipe = Categorys[0],Time = 150,Difficulty = 3,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "esther",Image = "עוגת ריבת חלב.jpg",View = true },
               new Recipe() { NameRecipe = "birthdayCmilky",CategoryRecipe = Categorys[0],Time = 220,Difficulty = 5,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "tova",Image = "עוגת יומולדת חלבי.jpg",View = true },
               new Recipe() { NameRecipe = "Souffle",CategoryRecipe = Categorys[0],Time = 20,Difficulty = 3,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "yael",Image = "סופלה.jpg",View = true },
               new Recipe() { NameRecipe = "Cheesecake",CategoryRecipe = Categorys[0],Time = 50,Difficulty = 5,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "tova",Image = "cheesecake1.jpg",View = true },
               new Recipe() { NameRecipe = "chocolate",CategoryRecipe = Categorys[0],Time = 30,Difficulty = 5,DateAdd = DateTime.Now,Ingredients = new List<string>() { "suger", "sault", "flour" },Preparation = new List<string>() { "aaaaaa", "bbbbbb", "ccccc" },UserName = "tova",Image = "שוקולד.jpg",View = true },
            };
        }
    }
}
