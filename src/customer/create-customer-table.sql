CREATE TABLE Customers (
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FirstName NVARCHAR(50) NOT NULL,
  LastName NVARCHAR(50) NOT NULL,
  PhoneNumber VARCHAR(50) NOT NULL UNIQUE,
  Address NVARCHAR(500) NOT NULL,
  Email VARCHAR(50) NOT NULL UNIQUE,
  Birthday DATETIME NULL
);
