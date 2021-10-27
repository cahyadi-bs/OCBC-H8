CREATE DATABASE Bank;

CREATE TABLE Customers(
    id INT IDENTITY(1,1) NOT NULL,
    customerNumber INT NOT NULL PRIMARY KEY,
    customerName VARCHAR(100),
    contactLastName VARCHAR(100),
    contactFirstName VARCHAR(100),
    phone VARCHAR(15),
    addressLine1 VARCHAR(255),
    addressLine2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postalCode INT,
    country VARCHAR(100),
    salesRepEmployeeNumber INT,
    creditLimit INT
);

CREATE TABLE Products(
    id INT IDENTITY(1,1) NOT NULL,
    productCode INT NOT NULL PRIMARY KEY,
    productName VARCHAR(100) NULL,
    productLine VARCHAR(100) NULL,
    productScale INT,
    productVendor VARCHAR(100),
    productDescription VARCHAR(255),
    quantityInStock INT,
    buyPrice INT,
    MSRP INT
);

CREATE TABLE Productlines(
    id INT IDENTITY(1,1) NOT NULL,
    productLine VARCHAR(100) NOT NULL PRIMARY KEY,
    textDescription VARCHAR(255) NULL,
    htmlDescription VARCHAR(255) NULL,
    image VARCHAR(100) NULL
);

CREATE TABLE Orders(
    id INT IDENTITY(1,1) NOT NULL,
    orderNumber INT NOT NULL PRIMARY KEY,
    orderDate DATETIME,
    requiredDate DATETIME,
    shippedDate DATETIME,
    status VARCHAR(100),
    comments VARCHAR(255),
    customerNumber INT
);

CREATE TABLE OrderDetails(
    id INT IDENTITY(1,1) NOT NULL,
    orderNumber INT NOT NULL,
    productCode INT NOT NULL,
    quantityOrdered INT,
    priceEach INT,
    orderLineNumber INT,
    PRIMARY KEY(orderNumber,productCode)
);

CREATE TABLE Payments(
    id INT IDENTITY(1,1) NOT NULL,
    customerNumber INT NOT NULL,
    checkNumber INT NOT NULL,
    paymentDate DATETIME,
    amount INT,
    PRIMARY KEY(customerNumber,checkNumber)
);

CREATE TABLE Employees(
    id INT IDENTITY(1,1) NOT NULL,
    employeeNumber INT NOT NULL PRIMARY KEY,
    lastName VARCHAR(100),
    firstName VARCHAR(100),
    extension VARCHAR(10),
    email VARCHAR(100),
    officeCode INT,
    reportsTo VARCHAR(100),
    jobTitle VARCHAR(100)
);

CREATE TABLE Offices(
    id INT IDENTITY(1,1) NOT NULL,
    officeCode INT NOT NULL PRIMARY KEY,
    city VARCHAR(100),
    phone VARCHAR(15),
    addressLine1 VARCHAR(100),
    addressLine2 VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postalCode INT,
    territory VARCHAR(100)
);

INSERT INTO Customers (
    customerNumber,customerName,contactLastName,contactFirstName,phone,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber,creditLimit
) VALUES 
(301, 'Bayu', 'Saputro', 'Cahyadi', '089675645432', 'Jalan Jalan', 'Jalan Jalan', 'Jakarta', 'Jakarta', 12260, 'Indonesia', 2304, 1000000),
(302, 'Gialng', 'Dilan', 'Mahmud', '987656547654', 'Jalan Jalan', 'Jalan Jalan', 'Jakarta', 'Jakarta', 12260, 'Indonesia', 2354, 1000000),
(303, 'Diona', 'Ghuina', 'Hunai', '098987676543', 'Jalan Jalan', 'Jalan Jalan', 'Jakarta', 'Jakarta', 12260, 'Indonesia', 1354, 1000000),
(304, 'Juan', 'Likoas', 'Kolik', '097687656544', 'Jalan Jalan', 'Jalan Jalan', 'Jakarta', 'Jakarta', 12260, 'Indonesia', 3235, 1000000);

INSERT INTO Products (
    productCode, productName, productLine, productScale,productVendor,productDescription,quantityInStock, buyPrice,MSRP
) VALUES 
(201,'Laptop Acer', 'Laptop', 10, 'Acer', 'This is a laptop from Acer', 10, 1000, 1200),
(202,'Laptop Lenovo', 'Laptop', 10, 'Lenovo', 'This is a laptop from Lenovo', 10, 1000, 1200),
(203,'Laptop Dell', 'Laptop', 10, 'Dell', 'This is a laptop from Dell', 10, 1000, 1200),
(204,'PC HP', 'PC', 10, 'HP', 'This is a pc from HP', 10, 1000, 1200),
(205,'Mouse Logitech', 'Mouse', 10, 'Logitech', 'This is a mouse from Logitech', 10, 1000, 1200),
(206,'Mouse Razer', 'Mouse', 10, 'Razer', 'This is a mouse from Razer', 10, 1000, 1200),
(207,'Printer Logitech', 'Printer', 10, 'Logitech', 'This is a printer from Logitech', 10, 1000, 1200);

INSERT INTO Productlines (
    productLine,textDescription,htmlDescription,image
) VALUES 
('Laptop','Portable PC', 'Portable PC', 'laptop.jpg'),
('PC','Desktop', 'Desktop', 'pc.jpg'),
('Printer','Printer', 'Printer', 'printer.jpg'),
('Mouse','Mouse', 'Mouse', 'Mouse.jpg'),
('Keyboard','Keyboard', 'Keyboard', 'Keyboard.jpg'),
('CCTV','CCTV', 'CCTV', 'CCTV.jpg')
;

INSERT INTO Orders (
    orderNumber, orderDate,requiredDate, shippedDate, status, comments, customerNumber
) VALUES 
(8001,'2021-10-02', '2021-10-09', '2021-10-08', 'PENDING','', 302),
(8002,'2021-10-01', '2021-10-09', '2021-10-08', 'MANIFEST','', 301),
(8003,'2021-10-02', '2021-10-10', '2021-10-08', 'DELIVERED','', 302),
(8004,'2021-10-04', '2021-10-09', '2021-10-08', 'PENDING','', 304),
(8005,'2021-10-02', '2021-10-09', '2021-10-08', 'PENDING','', 303);

INSERT INTO OrderDetails (
    orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber
) VALUES
(8001, 201, 10, 1000, 15),
(8002, 202, 5, 1000, 11),
(8003, 203, 10, 1000, 12),
(8004, 204, 3, 1000, 9),
(8005, 201, 9, 1000, 6);

INSERT INTO Payments (
    customerNumber, checkNumber, paymentDate, amount
) VALUES 
(301, 87601, '2021-12-12', 1400000),
(302, 87602, '2021-12-11', 1450000),
(303, 87603, '2021-12-15', 1600000),
(304, 87604, '2021-12-19', 2400000);

INSERT INTO Employees(
    employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, jobTitle
) VALUES
(901, 'Das', 'Bes', 'Sir', 'Das@gmail.com', 101, 'Mr Yan', 'IT'),
(902, 'Bilal', 'Bes', 'Sir', 'Bilal@gmail.com', 103, 'Mr Yan', 'Finance'),
(903, 'Karion', 'Bes', 'Sir', 'Karion@gmail.com', 103, 'Mr Yan', 'IT'),
(904, 'Kulian', 'Bes', 'Sir', 'Kulian@gmail.com', 101, 'Mr Yan', 'Audit'),
(905, 'Hiyui', 'Bes', 'Sir', 'Hiyui@gmail.com', 102, 'Mr Yan', 'Driver'),
(906, 'Kul', 'Bes', 'Sir', 'Kul@gmail.com', 101, 'Mr Yan', 'IT');

INSERT INTO Offices(
    officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory
) VALUES 
(101, 'Jakarta', '021-7869876',' JL Merdeka', 'JL Merdeka', 'DKI Jakarta', 'Indonesia', 12260, 'West Java'),
(102, 'Bandung', '021-8765432', 'JL Kebagusan', 'JL Kebagusan', 'Bandung', 'Indonesia', 34675, 'Central Java'),
(103, 'Papua',' 021-99988876', 'JL Manula', 'JL Manula', 'Papua', 'Indonesia', 98765, 'Papua')
;

SELECT * FROM Customers c ;

SELECT  * FROM Products p ;

SELECT  * FROM Productlines p ;

SELECT * FROM Orders o ;

SELECT * FROM OrderDetails od ;

SELECT * FROM Payments p ;

SELECT * FROM Employees e ;

SELECT * FROM Offices o ;
