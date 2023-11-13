using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CalcCDB.Models
{
    public class CDBResults
    {
        public double GrossValue { get; set; } // valor bruto
        public double NetValue { get; set; } //valor líquido
    }
}