#Drop all the tables

DROP TABLE Battle;
Drop TABLE Own;
DROP TABLE User;
DROP TABLE Skin;
DROP TABLE Game;



#Create the User table

CREATE TABLE User (
	ID 				char(5) PRIMARY KEY,
	Username		varchar(20) NOT NULL,
	Nationality		varchar(20) NOT NULL,
	Sex 			char(1) NOT NULL,
	DateOfBirth		date NOT NULL,
	CurrentBobCoins	bigint(255) DEFAULT 0,
	TotalBobCoins	bigint(255) DEFAULT 0
);



#Create the Skin table

CREATE TABLE Skin (
	ID		char(5) PRIMARY KEY,
	Name 	varchar(20) UNIQUE NOT NULL,
	Image	varchar(20) UNIQUE NOT NULL
);



#Create the Own table

CREATE TABLE Own (
	IDSkin	char(5),
	IDUser	char(5),
	CONSTRAINT FK_Skin FOREIGN KEY (IDSkin) REFERENCES User(ID),
	CONSTRAINT FK_User FOREIGN KEY (IDUser) REFERENCES Skin(ID),
	PRIMARY KEY (IDUser, IDSkin)
);



#Create the Game table

CREATE TABLE Game (
	ID 		char(5) PRIMARY KEY,
	Name 	varchar(20) UNIQUE NOT NULL
);



#Create the Match table

CREATE TABLE Battle (
	ID 		char(5) PRIMARY KEY,
	Winner 	char(5) NOT NULL,
	Loser 	char(5) NOT NULL,
	Game 	char(5) NOT NULL,
	CONSTRAINT Fk_Winner FOREIGN KEY (Winner) REFERENCES User(ID),
	CONSTRAINT Fk_Loser FOREIGN KEY (Loser) REFERENCES User(ID),
	CONSTRAINT Fk_Game FOREIGN KEY (Game) REFERENCES Game(ID)
);