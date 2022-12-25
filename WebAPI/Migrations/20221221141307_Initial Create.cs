using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DLookupForms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerCode = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    EnglishName = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    ArabicName = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    MobileNumber = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    AddressLine1 = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    AddressLine2 = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    AddressLine3 = table.Column<string>(type: "nvarchar(30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DLookupForms", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DLookupForms_CustomerCode",
                table: "DLookupForms",
                column: "CustomerCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DLookupForms_Email",
                table: "DLookupForms",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DLookupForms");
        }
    }
}
