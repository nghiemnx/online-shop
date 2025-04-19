-- TABLE: OrderDetails								
-- No.	FieldName	DataType	DataSize	Allow null	Key	Foreign Key	DefaultValue	Constraint
-- 1	OrderId	INT			Primary Key	Foreign Key		Reference Orders (Id)
-- 2	ProductId	INT			Primary Key	Foreign Key		Reference Products (Id)
-- 3	Quantity	DECIMAL(18, 2)						Check Quantity > 0
-- 4	Price	DECIMAL(18, 2)						Check Price > 0
-- 5	Discount	DECIMAL(18, 2)						Check Discount BETWEEN 0 AND 90

CREATE TABLE OrderDetails (
  OrderId INT NOT NULL,
  ProductId INT NOT NULL,
  Quantity DECIMAL(18, 2) NOT NULL CHECK (Quantity > 0),
  Price DECIMAL(18, 2) NOT NULL CHECK (Price > 0),
  Discount DECIMAL(18, 2) NOT NULL CHECK (Discount BETWEEN 0 AND 90),
  PRIMARY KEY (OrderId, ProductId),
  FOREIGN KEY (OrderId) REFERENCES Orders(Id),
  FOREIGN KEY (ProductId) REFERENCES Products(Id)
);