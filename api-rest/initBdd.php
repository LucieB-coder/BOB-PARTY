<?php

$conn = new mysqli("BOB_PARTEAM-mysql",getenv("MYSQL_USER"),getenv("MYSQL_PASSWORD"),getenv("MYSQL_DATABASE"));

$conn->query("CREATE TABLE `T_J_OWN_SKIN_OWN` (
    `FK_USER` int(11) NOT NULL,
    `FK_SKIN` int(11) NOT NULL
  ); ");

$conn->query("CREATE TABLE `T_E_GAME_GAM` (
    `PK_ID` int(11) NOT NULL,
    `GAM_NAME` varchar(50) DEFAULT NULL,
    `GAM_IMAGE` varchar(200) DEFAULT NULL,
    `GAM_NB_PLAYER_MIN` int(11) DEFAULT NULL,
    `GAM_NB_PLAYER_MAX` int(11) DEFAULT NULL,
    `GAM_TYPE` varchar(50) NOT NULL
  );");

$conn->query("CREATE TABLE `T_E_MATCH_MTC` (
    `PK_ID` int(11) NOT NULL,
    `MTC_IN_GAME` tinyint(1) DEFAULT NULL,
    `FK_GAME` int(11) DEFAULT NULL
  );");

$conn->query("CREATE TABLE `T_H_CONVERSATION_COV` (
    `PK_ID` int(11) NOT NULL,
    `COV_NAME` varchar(20) DEFAULT NULL
  ) ;");

$conn->query("CREATE TRIGGER `before_delete_conversation` BEFORE DELETE ON `T_H_CONVERSATION_COV` FOR EACH ROW DELETE FROM T_H_MESSAGE_MSG WHERE PK_ID = (SELECT FK_MESSAGE
FROM T_J_CONTAIN_MESSAGE_CMG
WHERE FK_CONVERSATION=OLD.PK_ID);");

$conn->query("CREATE TABLE `T_H_MESSAGE_MSG` (
    `PK_ID` int(11) NOT NULL,
    `MSG_MESSAGE` text,
    `FK_SENDER` int(11) DEFAULT NULL,
    `MSG_DATEENVOIE` datetime NOT NULL
  );");

$conn->query("CREATE TABLE `T_H_SKIN_SKI` (
  `PK_ID` int(11) NOT NULL,
  `SKI_NAME` varchar(50) NOT NULL,
  `SKI_IMAGE` varchar(200) NOT NULL,
  `SKI_PRICE` varchar(30) DEFAULT NULL
);");


$conn->query("CREATE TABLE `T_J_CONTAIN_MESSAGE_CMG` (
    `FK_CONVERSATION` int(11) NOT NULL,
    `FK_MESSAGE` int(11) NOT NULL
  );");


$conn->query("CREATE TABLE `T_J_DISCUSS_DIS` (
  `FK_USER` int(11) NOT NULL,
  `FK_CONVERSATION` int(11) NOT NULL
);");

$conn->query("CREATE TABLE `T_J_GAME_MAP_GMP` (
    `FK_GAME` int(11) NOT NULL,
    `GMP_KEY` int(11) NOT NULL,
    `GMP_VALUE` int(11) NOT NULL
  );");


$conn->query("CREATE TABLE `T_J_PLAY_MATCH_PLM` (
  `FK_USER` int(11) NOT NULL,
  `FK_MATCH` int(11) NOT NULL
);");


$conn->query("CREATE TABLE `T_S_USER_USR` (
    `PK_ID` int(11) NOT NULL,
    `USR_USERNAME` varchar(50) NOT NULL,
    `USR_PASSWORD` varchar(50) NOT NULL,
    `USR_NATIONALITY` varchar(20) NOT NULL,
    `USR_SEX` varchar(30) NOT NULL,
    `USR_DATE_OF_BIRTH` date DEFAULT NULL,
    `USR_CURRENT_NB_COINS` int(11) DEFAULT '0',
    `USR_TOTAL_NB_COINS` int(11) DEFAULT '0',
    `USR_NB_GAMES_PLAYED` int(11) DEFAULT '0',
    `FK_CURRENT_SKIN` int(11) DEFAULT '1'
  );");


$conn->query("CREATE TRIGGER `after_insert_user` AFTER INSERT ON `T_S_USER_USR` FOR EACH ROW INSERT INTO T_J_OWN_SKIN_OWN VALUES(NEW.PK_ID,1);");


$conn->query("ALTER TABLE `T_E_GAME_GAM`
ADD PRIMARY KEY (`PK_ID`),
ADD UNIQUE KEY `GAM_NAME` (`GAM_NAME`);");


$conn->query("ALTER TABLE `T_E_MATCH_MTC`
ADD PRIMARY KEY (`PK_ID`),
ADD KEY `FK_GAME` (`FK_GAME`);");

$conn->query("ALTER TABLE `T_H_CONVERSATION_COV`
ADD PRIMARY KEY (`PK_ID`);");

$conn->query("ALTER TABLE `T_H_MESSAGE_MSG`
ADD PRIMARY KEY (`PK_ID`),
ADD KEY `FK_SENDER` (`FK_SENDER`);");

$conn->query("ALTER TABLE `T_H_SKIN_SKI`
ADD PRIMARY KEY (`PK_ID`),
ADD UNIQUE KEY `SKI_NAME` (`SKI_NAME`),
ADD UNIQUE KEY `SKI_IMAGE` (`SKI_IMAGE`);");

$conn->query("ALTER TABLE `T_J_CONTAIN_MESSAGE_CMG`
ADD PRIMARY KEY (`FK_CONVERSATION`,`FK_MESSAGE`),
ADD KEY `FK_MESSAGE` (`FK_MESSAGE`);");

$conn->query("ALTER TABLE `T_J_DISCUSS_DIS`
ADD PRIMARY KEY (`FK_USER`,`FK_CONVERSATION`),
ADD KEY `FK_CONVERSATION` (`FK_CONVERSATION`);");

$conn->query("ALTER TABLE `T_J_GAME_MAP_GMP`
ADD PRIMARY KEY (`FK_GAME`,`GMP_KEY`,`GMP_VALUE`);");

$conn->query("ALTER TABLE `T_J_OWN_SKIN_OWN`
ADD PRIMARY KEY (`FK_SKIN`,`FK_USER`),
ADD KEY `FK_USER` (`FK_USER`);");

$conn->query("ALTER TABLE `T_J_PLAY_MATCH_PLM`
ADD PRIMARY KEY (`FK_USER`,`FK_MATCH`),
ADD KEY `FK_MATCH` (`FK_MATCH`);");

$conn->query("ALTER TABLE `T_S_USER_USR`
ADD PRIMARY KEY (`PK_ID`),
ADD UNIQUE KEY `USR_USERNAME` (`USR_USERNAME`),
ADD KEY `FK_CURRENT_SKIN` (`FK_CURRENT_SKIN`);");

$conn->query("ALTER TABLE `T_E_GAME_GAM`
MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT;");

$conn->query("ALTER TABLE `T_E_MATCH_MTC`
MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT;");

$conn->query("ALTER TABLE `T_H_CONVERSATION_COV`
MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT;");

$conn->query("ALTER TABLE `T_H_MESSAGE_MSG`
MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT;");

$conn->query("ALTER TABLE `T_H_SKIN_SKI`
MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT;");

$conn->query("ALTER TABLE `T_S_USER_USR`
MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT;");

$conn->query("ALTER TABLE `T_E_MATCH_MTC`
ADD CONSTRAINT `t_e_match_mtc_ibfk_1` FOREIGN KEY (`FK_GAME`) REFERENCES `T_E_GAME_GAM` (`PK_ID`);");

$conn->query("ALTER TABLE `T_H_MESSAGE_MSG`
ADD CONSTRAINT `t_h_message_msg_ibfk_1` FOREIGN KEY (`FK_SENDER`) REFERENCES `T_S_USER_USR` (`PK_ID`);");

$conn->query("ALTER TABLE `T_J_CONTAIN_MESSAGE_CMG`
ADD CONSTRAINT `t_j_contain_message_cmg_ibfk_1` FOREIGN KEY (`FK_CONVERSATION`) REFERENCES `T_H_CONVERSATION_COV` (`PK_ID`) ON DELETE CASCADE,
ADD CONSTRAINT `t_j_contain_message_cmg_ibfk_2` FOREIGN KEY (`FK_MESSAGE`) REFERENCES `T_H_MESSAGE_MSG` (`PK_ID`) ON DELETE CASCADE;");

$conn->query("ALTER TABLE `T_J_DISCUSS_DIS`
ADD CONSTRAINT `t_j_discuss_dis_ibfk_1` FOREIGN KEY (`FK_USER`) REFERENCES `T_S_USER_USR` (`PK_ID`) ON DELETE CASCADE,
ADD CONSTRAINT `t_j_discuss_dis_ibfk_2` FOREIGN KEY (`FK_CONVERSATION`) REFERENCES `T_H_CONVERSATION_COV` (`PK_ID`) ON DELETE CASCADE;");

$conn->query("ALTER TABLE `T_J_GAME_MAP_GMP`
ADD CONSTRAINT `t_j_game_map_gmp_ibfk_1` FOREIGN KEY (`FK_GAME`) REFERENCES `T_E_GAME_GAM` (`PK_ID`);");

$conn->query("ALTER TABLE `T_J_OWN_SKIN_OWN`
ADD CONSTRAINT `t_j_own_skin_own_ibfk_1` FOREIGN KEY (`FK_USER`) REFERENCES `T_S_USER_USR` (`PK_ID`) ON DELETE CASCADE,
ADD CONSTRAINT `t_j_own_skin_own_ibfk_2` FOREIGN KEY (`FK_SKIN`) REFERENCES `T_H_SKIN_SKI` (`PK_ID`);");

$conn->query("ALTER TABLE `T_J_PLAY_MATCH_PLM`
ADD CONSTRAINT `t_j_play_match_plm_ibfk_1` FOREIGN KEY (`FK_USER`) REFERENCES `T_S_USER_USR` (`PK_ID`) ON DELETE CASCADE,
ADD CONSTRAINT `t_j_play_match_plm_ibfk_2` FOREIGN KEY (`FK_MATCH`) REFERENCES `T_E_MATCH_MTC` (`PK_ID`) ON DELETE CASCADE;");

$conn->query("ALTER TABLE `T_S_USER_USR`
ADD CONSTRAINT `t_s_user_usr_ibfk_1` FOREIGN KEY (`FK_CURRENT_SKIN`) REFERENCES `T_H_SKIN_SKI` (`PK_ID`);");

$conn->query("INSERT INTO `T_J_GAME_MAP_GMP` (`FK_GAME`, `GMP_KEY`, `GMP_VALUE`) VALUES
(1, 0, 0),
(1, 100, 25),
(1, 1000, 30),
(1, 10000, 40),
(1, 100000, 50),
(1, 1000000, 75),
(2, 0, 5),
(3, 0, 0),
(3, 1, 25),
(3, 2, 50);");

$conn->query("INSERT INTO `T_H_SKIN_SKI` (`PK_ID`, `SKI_NAME`, `SKI_IMAGE`, `SKI_PRICE`) VALUES
(1, 'Bob', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobClassic.png', '0'),
(2, 'Bob blue', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobBlue.png', '100'),
(3, 'Bob green', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobGreen.png', '100'),
(4, 'Bob BW', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobBW.png', '100');");

$conn->query("INSERT INTO `T_E_GAME_GAM` (`PK_ID`, `GAM_NAME`, `GAM_IMAGE`, `GAM_NB_PLAYER_MIN`, `GAM_NB_PLAYER_MAX`, `GAM_TYPE`) VALUES
(1, 'Cookie Clicker', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/ImagesJeux/Pong.png', 1, 1, 'GameSolo'),
(2, 'TicTacToe', 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/f2/06/ef/f206ef53-7206-ffae-af6b-52460ba5636f/source/256x256bb.jpg', 1, 1, 'GameSolo'),
(3, 'TicTacToe Online', 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/f2/06/ef/f206ef53-7206-ffae-af6b-52460ba5636f/source/256x256bb.jpg', 2, 2, 'GameMulti'),
(4, 'BlackJack', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/peristanceBDD/bob_party/assets/ImagesJeux/blackjack.jpg', 1, 1, 'GameCasino');");

$conn->query("INSERT INTO `T_S_USER_USR` (`PK_ID`, `USR_USERNAME`, `USR_PASSWORD`, `USR_NATIONALITY`, `USR_SEX`, `USR_DATE_OF_BIRTH`, `USR_CURRENT_NB_COINS`, `USR_TOTAL_NB_COINS`, `USR_NB_GAMES_PLAYED`, `FK_CURRENT_SKIN`) VALUES
(1, 'to', 't', 'Anglais(e)', 'M', '2003-07-01', 105, 230, 12, 2);");



?>