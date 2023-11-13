using CalcCDB.Models;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace CalcCDB.Controllers
{
    [Route("api/CalcCDB")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CDBController : ApiController
    {
        // GET: api/CalcCDB/{initialValue}/{months}
        [ResponseType(typeof(CDBResults))]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public async Task<IHttpActionResult> GetCDBResults(double initialValue, int months)
        {            
            CDBResults cdbResults = new CDBResults();

            cdbResults.GrossValue = CalcGross(initialValue, months);
            cdbResults.NetValue = CalcNet(cdbResults.GrossValue, months);

            return Ok(cdbResults);
        }

        private double CalcGross(double initialValue, int months)
        {
            const double CDI = 0.9 / 100;
            const double TB = 108 / 100;

            double grossValue = initialValue*(1 + (CDI * TB));

            if (months < 1)
            {
                return grossValue;
            }
            else
            {
                return CalcGross(grossValue, months - 1);
            }            
        }

        private double CalcNet(double grossValue, int months)
        {
            double taxPercent = 0;

            if (months <= 6)
            {
                //imposto 22,5%
                taxPercent = 22.5 / 100;
            }
            else if (months <= 12)
            {
                //imposto 20%
                taxPercent = 20 / 100;
            }
            else if (months <= 24)
            {
                //imposto 17,5%
                taxPercent = 17.5 / 100;
            }
            else if (months > 24)
            {
                //imposto 15%
                taxPercent = 15 / 100;
            }

            return (grossValue * (1 - taxPercent));
        }
    }
}
