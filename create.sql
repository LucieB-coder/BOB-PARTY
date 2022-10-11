#Create the User table

CREATE TABLE User (
	ID 				char(5) PRIMARY KEY,
	Username		varchar(20) NOT NULL,
	Nationality		varchar(20) NOT NULL,
	Sex 			char(1) NOT NULL,
	DateOfBirth		date NOT NULL,
	CurrentBobCoins	bigint(255) DEFAULT 0,
	TotalBobCoins	bigint(255) DEFAULT 0,
);