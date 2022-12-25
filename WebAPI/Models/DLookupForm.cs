using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace WebAPI.Models
{

    [Index(nameof(CustomerCode), IsUnique = true)]
    [Index(nameof(Email), IsUnique = true)]
    public class DLookupForm
    {



        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName="nvarchar(10)")]
        public string CustomerCode { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string EnglishName { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string ArabicName { get; set; }

       
        public int MobileNumber { get; set; }


         [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string Country { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string City { get; set; }

        [Column(TypeName = "nvarchar(30)")]
        public string AddressLine1 { get; set; }

        [Column(TypeName = "nvarchar(30)")]
        public string AddressLine2 { get; set;}

        [Column(TypeName = "nvarchar(30)")]
        public string AddressLine3 { get; set;}
    }
}
