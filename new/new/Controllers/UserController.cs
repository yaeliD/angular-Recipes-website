using newp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace newP.Controllers
{
    [EnableCors(methods:"*",headers:"*",origins:"*")]
    public class UserController : ApiController
    {  
        [HttpGet]
        public IHttpActionResult getAllUsers()
        {
            return Ok(DB.Users);
        }
        [HttpPost]
        public IHttpActionResult checkUser(User fu)
        {

            foreach (User u in DB.Users)
            {
                if (u.UserName == fu.UserName)
                {
                    if (u.Password == fu.Password)
                        return Ok(true);
                    else
                        return Ok(u.Password);
                }
            }
            return Ok(false);
        }
        [HttpPost]
        public IHttpActionResult addnewUser(User nu)
        {
            foreach (User u in DB.Users)
                if (nu.UserName == u.UserName)
                    return Ok(false);
            DB.Users.Add(nu);
            return Ok(true);
        }

    }
}
