using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using newP;

namespace newp.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class CategoryController : ApiController
    {
        public IHttpActionResult GettAllCategory()
        {
            return Ok(DB.Categorys);
        }

        public Category FindCategory(Category name)
        {
            foreach (Category c in DB.Categorys)
                if (c.CategoryName == name.CategoryName)
                    return c;
            return null;
        }
    }
}




