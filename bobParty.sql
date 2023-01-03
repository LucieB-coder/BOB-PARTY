-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mar. 03 jan. 2023 à 15:37
-- Version du serveur : 5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bobParty`
--

-- --------------------------------------------------------

--
-- Structure de la table `T_E_GAME_GAM`
--

CREATE TABLE `T_E_GAME_GAM` (
  `PK_ID` int(11) NOT NULL,
  `GAM_NAME` varchar(50) DEFAULT NULL,
  `GAM_IMAGE` varchar(200) DEFAULT NULL,
  `GAM_NB_PLAYER_MIN` int(11) DEFAULT NULL,
  `GAM_NB_PLAYER_MAX` int(11) DEFAULT NULL,
  `GAM_TYPE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_E_GAME_GAM`
--

INSERT INTO `T_E_GAME_GAM` (`PK_ID`, `GAM_NAME`, `GAM_IMAGE`, `GAM_NB_PLAYER_MIN`, `GAM_NB_PLAYER_MAX`, `GAM_TYPE`) VALUES
(1, 'Cookie Clicker', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/ImagesJeux/Pong.png', 1, 1, 'GameSolo'),
(2, 'TicTacToe', 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/f2/06/ef/f206ef53-7206-ffae-af6b-52460ba5636f/source/256x256bb.jpg', 1, 1, 'GameSolo'),
(3, 'TicTacToe Online', 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/f2/06/ef/f206ef53-7206-ffae-af6b-52460ba5636f/source/256x256bb.jpg', 2, 2, 'GameMulti'),
(4, 'BlackJack', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/peristanceBDD/bob_party/assets/ImagesJeux/blackjack.jpg', 1, 1, 'GameCasino');

-- --------------------------------------------------------

--
-- Structure de la table `T_E_MATCH_MTC`
--

CREATE TABLE `T_E_MATCH_MTC` (
  `PK_ID` int(11) NOT NULL,
  `MTC_IN_GAME` tinyint(1) DEFAULT NULL,
  `FK_GAME` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `T_H_CONVERSATION_COV`
--

CREATE TABLE `T_H_CONVERSATION_COV` (
  `PK_ID` int(11) NOT NULL,
  `COV_NAME` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_H_CONVERSATION_COV`
--

INSERT INTO `T_H_CONVERSATION_COV` (`PK_ID`, `COV_NAME`) VALUES
(32, 'Wesh la conv');

--
-- Déclencheurs `T_H_CONVERSATION_COV`
--
DELIMITER $$
CREATE TRIGGER `before_delete_conversation` BEFORE DELETE ON `T_H_CONVERSATION_COV` FOR EACH ROW DELETE FROM T_H_MESSAGE_MSG WHERE PK_ID = (SELECT FK_MESSAGE
             								  FROM T_J_CONTAIN_MESSAGE_CMG
                                              WHERE FK_CONVERSATION=OLD.PK_ID)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `T_H_MESSAGE_MSG`
--

CREATE TABLE `T_H_MESSAGE_MSG` (
  `PK_ID` int(11) NOT NULL,
  `MSG_MESSAGE` text,
  `FK_SENDER` int(11) DEFAULT NULL,
  `MSG_DATEENVOIE` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_H_MESSAGE_MSG`
--

INSERT INTO `T_H_MESSAGE_MSG` (`PK_ID`, `MSG_MESSAGE`, `FK_SENDER`, `MSG_DATEENVOIE`) VALUES
(21, 'tom a créé une conversation', 1, '2022-12-29 00:00:00'),
(25, 'Salut test', 1, '2022-12-30 09:39:15'),
(57, 'Salut by', 1, '2022-12-30 11:01:17'),
(58, 'Wesh', 1, '2022-12-30 11:12:04'),
(59, 'Salut', 1, '2022-12-30 11:15:44'),
(60, 'Bonjour', 1, '2022-12-30 11:15:52'),
(61, 'Wesh', 1, '2022-12-30 11:16:25'),
(62, 'Bite', 1, '2022-12-30 11:17:38'),
(63, 'Cc', 2, '2022-12-30 11:21:04'),
(64, 'Cc', 2, '2022-12-30 11:21:06'),
(65, 'Bonjour', 2, '2022-12-30 11:24:58'),
(66, 'Hé ho', 2, '2022-12-30 11:25:02'),
(68, 'Salut ça va marcher', 1, '2022-12-30 11:55:21');

-- --------------------------------------------------------

--
-- Structure de la table `T_H_SKIN_SKI`
--

CREATE TABLE `T_H_SKIN_SKI` (
  `PK_ID` int(11) NOT NULL,
  `SKI_NAME` varchar(50) NOT NULL,
  `SKI_IMAGE` varchar(200) NOT NULL,
  `SKI_PRICE` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_H_SKIN_SKI`
--

INSERT INTO `T_H_SKIN_SKI` (`PK_ID`, `SKI_NAME`, `SKI_IMAGE`, `SKI_PRICE`) VALUES
(1, 'Bob', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobClassic.png', '0'),
(2, 'Bob blue', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobBlue.png', '100'),
(3, 'Bob green', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobGreen.png', '100'),
(4, 'Bob BW', 'https://codefirst.iut.uca.fr/git/BOB_PARTEAM/BOB_PARTY/raw/branch/typescript/bob_party/assets/BobsSkins/BobBW.png', '100');

-- --------------------------------------------------------

--
-- Structure de la table `T_J_CONTAIN_MESSAGE_CMG`
--

CREATE TABLE `T_J_CONTAIN_MESSAGE_CMG` (
  `FK_CONVERSATION` int(11) NOT NULL,
  `FK_MESSAGE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_J_CONTAIN_MESSAGE_CMG`
--

INSERT INTO `T_J_CONTAIN_MESSAGE_CMG` (`FK_CONVERSATION`, `FK_MESSAGE`) VALUES
(32, 21),
(32, 25),
(32, 57),
(32, 58),
(32, 59),
(32, 60),
(32, 61),
(32, 62),
(32, 63),
(32, 64),
(32, 65),
(32, 66),
(32, 68);

-- --------------------------------------------------------

--
-- Structure de la table `T_J_DISCUSS_DIS`
--

CREATE TABLE `T_J_DISCUSS_DIS` (
  `FK_USER` int(11) NOT NULL,
  `FK_CONVERSATION` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_J_DISCUSS_DIS`
--

INSERT INTO `T_J_DISCUSS_DIS` (`FK_USER`, `FK_CONVERSATION`) VALUES
(1, 32),
(2, 32),
(3, 32);

-- --------------------------------------------------------

--
-- Structure de la table `T_J_GAME_MAP_GMP`
--

CREATE TABLE `T_J_GAME_MAP_GMP` (
  `FK_GAME` int(11) NOT NULL,
  `GMP_KEY` int(11) NOT NULL,
  `GMP_VALUE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_J_GAME_MAP_GMP`
--

INSERT INTO `T_J_GAME_MAP_GMP` (`FK_GAME`, `GMP_KEY`, `GMP_VALUE`) VALUES
(1, 0, 0),
(1, 100, 25),
(1, 1000, 30),
(1, 10000, 40),
(1, 100000, 50),
(1, 1000000, 75),
(3, 0, 0),
(3, 1, 25),
(3, 2, 50);

-- --------------------------------------------------------

--
-- Structure de la table `T_J_OWN_SKIN_OWN`
--

CREATE TABLE `T_J_OWN_SKIN_OWN` (
  `FK_USER` int(11) NOT NULL,
  `FK_SKIN` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_J_OWN_SKIN_OWN`
--

INSERT INTO `T_J_OWN_SKIN_OWN` (`FK_USER`, `FK_SKIN`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(6, 1),
(7, 1),
(8, 1),
(10, 1),
(11, 1),
(12, 1);

-- --------------------------------------------------------

--
-- Structure de la table `T_J_PLAY_MATCH_PLM`
--

CREATE TABLE `T_J_PLAY_MATCH_PLM` (
  `FK_USER` int(11) NOT NULL,
  `FK_MATCH` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `T_S_USER_USR`
--

CREATE TABLE `T_S_USER_USR` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `T_S_USER_USR`
--

INSERT INTO `T_S_USER_USR` (`PK_ID`, `USR_USERNAME`, `USR_PASSWORD`, `USR_NATIONALITY`, `USR_SEX`, `USR_DATE_OF_BIRTH`, `USR_CURRENT_NB_COINS`, `USR_TOTAL_NB_COINS`, `USR_NB_GAMES_PLAYED`, `FK_CURRENT_SKIN`) VALUES
(1, 'tom', 't', 'Anglais(e)', 'M', '2003-07-01', 0, 225, 12, 2),
(2, 'leilla20', 'l', 'France', 'F', '2003-11-22', 0, 0, 0, 1),
(3, 'test', 't', 'Français(e)', 'H', '1999-12-27', 0, 0, 0, 1),
(6, 'LEBg', 'belleBite63*', 'Espagnol(e)', 'Autre', '2001-12-27', 0, 0, 0, 1),
(7, 'DYLAN', 'argGR65**', 'Anglais(e)', 'Autre', '2002-12-27', 0, 0, 0, 1),
(8, 'Marche', 'je45tE**', 'Anglais(e)', 'Femme', '1999-12-27', 0, 0, 0, 1),
(10, 'dsqdz', 'AEZQzze1*', 'Francais(e)', 'null', '2005-12-27', 0, 0, 0, 1),
(11, 'qdsqdz', 'dqzA12****', 'Francais(e)', 'Homme', '2002-12-27', 0, 0, 0, 1),
(12, 'thilde', 'coucoulesnazes*M0', 'Francais(e)', 'Femme', '2004-11-02', 0, 0, 0, 1);

--
-- Déclencheurs `T_S_USER_USR`
--
DELIMITER $$
CREATE TRIGGER `after_insert_user` AFTER INSERT ON `T_S_USER_USR` FOR EACH ROW INSERT INTO T_J_OWN_SKIN_OWN VALUES(NEW.PK_ID,1)
$$
DELIMITER ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `T_E_GAME_GAM`
--
ALTER TABLE `T_E_GAME_GAM`
  ADD PRIMARY KEY (`PK_ID`),
  ADD UNIQUE KEY `GAM_NAME` (`GAM_NAME`) USING BTREE;

--
-- Index pour la table `T_E_MATCH_MTC`
--
ALTER TABLE `T_E_MATCH_MTC`
  ADD PRIMARY KEY (`PK_ID`),
  ADD KEY `FK_GAME` (`FK_GAME`);

--
-- Index pour la table `T_H_CONVERSATION_COV`
--
ALTER TABLE `T_H_CONVERSATION_COV`
  ADD PRIMARY KEY (`PK_ID`);

--
-- Index pour la table `T_H_MESSAGE_MSG`
--
ALTER TABLE `T_H_MESSAGE_MSG`
  ADD PRIMARY KEY (`PK_ID`),
  ADD KEY `FK_SENDER` (`FK_SENDER`);

--
-- Index pour la table `T_H_SKIN_SKI`
--
ALTER TABLE `T_H_SKIN_SKI`
  ADD PRIMARY KEY (`PK_ID`),
  ADD UNIQUE KEY `SKI_NAME` (`SKI_NAME`),
  ADD UNIQUE KEY `SKI_IMAGE` (`SKI_IMAGE`);

--
-- Index pour la table `T_J_CONTAIN_MESSAGE_CMG`
--
ALTER TABLE `T_J_CONTAIN_MESSAGE_CMG`
  ADD PRIMARY KEY (`FK_CONVERSATION`,`FK_MESSAGE`),
  ADD KEY `FK_MESSAGE` (`FK_MESSAGE`);

--
-- Index pour la table `T_J_DISCUSS_DIS`
--
ALTER TABLE `T_J_DISCUSS_DIS`
  ADD PRIMARY KEY (`FK_USER`,`FK_CONVERSATION`),
  ADD KEY `FK_CONVERSATION` (`FK_CONVERSATION`);

--
-- Index pour la table `T_J_GAME_MAP_GMP`
--
ALTER TABLE `T_J_GAME_MAP_GMP`
  ADD PRIMARY KEY (`FK_GAME`,`GMP_KEY`,`GMP_VALUE`) USING BTREE;

--
-- Index pour la table `T_J_OWN_SKIN_OWN`
--
ALTER TABLE `T_J_OWN_SKIN_OWN`
  ADD PRIMARY KEY (`FK_SKIN`,`FK_USER`),
  ADD KEY `FK_USER` (`FK_USER`);

--
-- Index pour la table `T_J_PLAY_MATCH_PLM`
--
ALTER TABLE `T_J_PLAY_MATCH_PLM`
  ADD PRIMARY KEY (`FK_USER`,`FK_MATCH`),
  ADD KEY `FK_MATCH` (`FK_MATCH`);

--
-- Index pour la table `T_S_USER_USR`
--
ALTER TABLE `T_S_USER_USR`
  ADD PRIMARY KEY (`PK_ID`),
  ADD UNIQUE KEY `USR_USERNAME` (`USR_USERNAME`),
  ADD KEY `FK_CURRENT_SKIN` (`FK_CURRENT_SKIN`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `T_E_GAME_GAM`
--
ALTER TABLE `T_E_GAME_GAM`
  MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `T_E_MATCH_MTC`
--
ALTER TABLE `T_E_MATCH_MTC`
  MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `T_H_CONVERSATION_COV`
--
ALTER TABLE `T_H_CONVERSATION_COV`
  MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `T_H_MESSAGE_MSG`
--
ALTER TABLE `T_H_MESSAGE_MSG`
  MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT pour la table `T_H_SKIN_SKI`
--
ALTER TABLE `T_H_SKIN_SKI`
  MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `T_S_USER_USR`
--
ALTER TABLE `T_S_USER_USR`
  MODIFY `PK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `T_E_MATCH_MTC`
--
ALTER TABLE `T_E_MATCH_MTC`
  ADD CONSTRAINT `t_e_match_mtc_ibfk_1` FOREIGN KEY (`FK_GAME`) REFERENCES `T_E_GAME_GAM` (`PK_ID`);

--
-- Contraintes pour la table `T_H_MESSAGE_MSG`
--
ALTER TABLE `T_H_MESSAGE_MSG`
  ADD CONSTRAINT `t_h_message_msg_ibfk_1` FOREIGN KEY (`FK_SENDER`) REFERENCES `T_S_USER_USR` (`PK_ID`);

--
-- Contraintes pour la table `T_J_CONTAIN_MESSAGE_CMG`
--
ALTER TABLE `T_J_CONTAIN_MESSAGE_CMG`
  ADD CONSTRAINT `t_j_contain_message_cmg_ibfk_1` FOREIGN KEY (`FK_CONVERSATION`) REFERENCES `T_H_CONVERSATION_COV` (`PK_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `t_j_contain_message_cmg_ibfk_2` FOREIGN KEY (`FK_MESSAGE`) REFERENCES `T_H_MESSAGE_MSG` (`PK_ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `T_J_DISCUSS_DIS`
--
ALTER TABLE `T_J_DISCUSS_DIS`
  ADD CONSTRAINT `t_j_discuss_dis_ibfk_1` FOREIGN KEY (`FK_USER`) REFERENCES `T_S_USER_USR` (`PK_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `t_j_discuss_dis_ibfk_2` FOREIGN KEY (`FK_CONVERSATION`) REFERENCES `T_H_CONVERSATION_COV` (`PK_ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `T_J_GAME_MAP_GMP`
--
ALTER TABLE `T_J_GAME_MAP_GMP`
  ADD CONSTRAINT `t_j_game_map_gmp_ibfk_1` FOREIGN KEY (`FK_GAME`) REFERENCES `T_E_GAME_GAM` (`PK_ID`);

--
-- Contraintes pour la table `T_J_OWN_SKIN_OWN`
--
ALTER TABLE `T_J_OWN_SKIN_OWN`
  ADD CONSTRAINT `t_j_own_skin_own_ibfk_1` FOREIGN KEY (`FK_USER`) REFERENCES `T_S_USER_USR` (`PK_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `t_j_own_skin_own_ibfk_2` FOREIGN KEY (`FK_SKIN`) REFERENCES `T_H_SKIN_SKI` (`PK_ID`);

--
-- Contraintes pour la table `T_J_PLAY_MATCH_PLM`
--
ALTER TABLE `T_J_PLAY_MATCH_PLM`
  ADD CONSTRAINT `t_j_play_match_plm_ibfk_1` FOREIGN KEY (`FK_USER`) REFERENCES `T_S_USER_USR` (`PK_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `t_j_play_match_plm_ibfk_2` FOREIGN KEY (`FK_MATCH`) REFERENCES `T_E_MATCH_MTC` (`PK_ID`) ON DELETE CASCADE;

--
-- Contraintes pour la table `T_S_USER_USR`
--
ALTER TABLE `T_S_USER_USR`
  ADD CONSTRAINT `t_s_user_usr_ibfk_1` FOREIGN KEY (`FK_CURRENT_SKIN`) REFERENCES `T_H_SKIN_SKI` (`PK_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
