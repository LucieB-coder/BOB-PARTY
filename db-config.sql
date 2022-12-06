/* This script does:

    * create tables of the database
    * creates the sequences for the ids(with AUTO_INCREMENT)
    * create the triggers and trigger functions

*/

/* ----------------------------------- */

/*           TABLES' CREATION          */

/* ----------------------------------- */

/* ----- ENTITIES TABLES -----*/

/* -- Table User -- */
CREATE TABLE T_S_USER_USR (
    PK_ID int AUTO_INCREMENT PRIMARY KEY,
    USR_USERNAME varchar(50) UNIQUE NOT NULL,
    USR_PASSWORD varchar(50) NOT NULL,
    USR_NATIONALITY varchar(20) NOT NULL,
    USR_SEX char(1) NOT NULL,
    USR_DATE_OF_BIRTH date,
    USR_CURRENT_NB_COINS int DEFAULT 0,
    USR_TOTAL_NB_COINS int DEFAULT 0,
    USR_NB_GAMES_PLAYED int DEFAULT 0,
    FK_CURRENT_SKIN int
        REFERENCES T_H_SKIN_SKI(PK_ID)   
);

/* -- Table Skin -- */
CREATE TABLE T_H_SKIN_SKI (
    PK_ID int AUTO_INCREMENT PRIMARY KEY,
    SKI_NAME varchar(50) UNIQUE NOT NULL,
    SKI_IMAGE varchar(50) UNIQUE NOT NULL,
    SKI_PRICE varchar(30)
);

/* -- Table Game -- */
CREATE TABLE T_E_GAME_GAM (
    PK_ID int AUTO_INCREMENT PRIMARY KEY,
    GAM_NAME varchar(50) UNIQUE,
    GAM_IMAGE varchar(50) UNIQUE
);

/* -- Table Match -- */
CREATE TABLE T_E_MATCH_MTC (
    PK_ID int AUTO_INCREMENT PRIMARY KEY,
    MTC_IN_GAME boolean,
    FK_ID_GAME int  
        REFERENCES T_E_GAME_GAM(PK_ID)
);

/* -- Table Conversation -- */
CREATE TABLE T_H_CONVERSATION_COV (
    PK_ID int AUTO_INCREMENT PRIMARY KEY,
    COV_NAME varchar(20)
);

/* -- Table Message -- */
CREATE TABLE T_H_MESSAGE_MSG (
    PK_ID int AUTO_INCREMENT PRIMARY KEY,
    MSG_MESSAGE text,
    FK_SENDER int 
        REFERENCES T_S_USER_USR(PK_ID)
);

/* ----- JUNCTURE TABLES ----- */

/* -- Juncture own skin -- */
CREATE TABLE T_J_OWN_SKIN_OWN (
    FK_USER int ,
    FOREIGN KEY (FK_USER)
        REFERENCES T_S_USER_USR(PK_ID)
        ON DELETE CASCADE,
    FK_SKIN int ,
    FOREIGN KEY (FK_SKIN) 
        REFERENCES T_H_SKIN_SKI(PK_ID),
    PRIMARY KEY(FK_SKIN, FK_USER)
);

/* -- Juncture play match -- */
CREATE TABLE T_J_PLAY_MATCH_PLM (
    FK_USER int ,
    FOREIGN KEY (FK_USER ) 
        REFERENCES T_S_USER_USR(PK_ID)
        ON DELETE CASCADE,
    FK_MATCH int , 
    FOREIGN KEY (FK_MATCH)
        REFERENCES T_E_MATCH_MTC(PK_ID)
        ON DELETE CASCADE,
    PRIMARY KEY (FK_USER,FK_MATCH)
);

/* -- Juncture discuss -- */
CREATE TABLE T_J_DISCUSS_DIS (
    FK_USER int ,
    FOREIGN KEY (FK_USER)
        REFERENCES T_S_USER_USR(PK_ID)
        ON DELETE CASCADE,
    FK_CONVERSATION int ,
    FOREIGN KEY (FK_CONVERSATION)
        REFERENCES T_H_CONVERSATION_COV(PK_ID)
        ON DELETE CASCADE,
    PRIMARY KEY(FK_USER,FK_CONVERSATION)
);

/* -- Juncture contain message -- */
CREATE TABLE T_J_CONTAIN_MESSAGE_CMG (
    FK_CONVERSATION int,
    FOREIGN KEY (FK_CONVERSATION)
        REFERENCES T_H_CONVERSATION_COV(PK_ID)
        ON DELETE CASCADE,
    FK_MESSAGE int,
    FOREIGN KEY (FK_MESSAGE)
        REFERENCES T_H_MESSAGE_MSG(PK_ID)
        ON DELETE CASCADE,
    PRIMARY KEY (FK_CONVERSATION,FK_MESSAGE)
);


/* ----------------------------------- */

/*         TRIGGERS' CREATION         */

/* ----------------------------------- */

/* ----- USER's trigger ----- */

/* -- after insert -> add basic skin into the list of skin -- */
CREATE TRIGGER after_insert_user
    AFTER INSERT
    ON T_S_USER_USR
FOR EACH ROW
    INSERT INTO T_J_OWN_SKIN_OWN VALUES(NEW.PK_ID,1);



/* ----- CONVERSATION's trigger ----- */

CREATE TRIGGER before_delete_conversation
    BEFORE DELETE
    ON T_H_CONVERSATION_COV
FOR EACH ROW
   DELETE FROM T_H_MESSAGE_MSG WHERE PK_ID = (SELECT FK_MESSAGE
             								  FROM T_J_CONTAIN_MESSAGE_CMG
                                              WHERE FK_CONVERSATION=OLD.PK_ID);
