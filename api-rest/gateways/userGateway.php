<?php

require_once('model/user.php');
require_once('model/skin.php');


class UserGateway{

    private $connection;

    public function __construct(DatabaseConnection $con){
        $this->connection=$con;
    }

    /* CRUD methods
        * getUserById : returning an user found in database with its id
        * getUserByUsername : returning an user found in database with its username
        * getUserForConnection : returning an user if there is a correspondance between 
            the username and the password, used for connection
        * postUser : adding a NEW user in database
        * putUser : modifying an EXISTING user in database
        * putSkinList : adding a skin into the list of skins of the user
        * deleteUser : deleting an user from database
        * addSkin : adding a skin to the list of skins bleonged by an user
    */

    /* Other methods
        * convertResToUser : converting the result of a PDO query into  an instance of User
        * getSkinList : search into database the list of skin the user have
    */


/// Brief : Converting the result of a PDO query into an instance of User
/// Parameter : * $res : result of the PDO query
    public function convertResToUser($res):?User{
        $usr=null;
        foreach($res as $row){
            $skinGateway=new SkinGateway($this->connection);
            $skinId=$row['FK_CURRENT_SKIN'];
            $skin=$skinGateway->getSkinById($skinId);
        $usr= new User($row['PK_ID'],
            $row['USR_USERNAME'],
            $row['USR_PASSWORD'],
            $row['USR_NATIONALITY'],
            $row['USR_SEX'],
            $row['USR_DATE_OF_BIRTH'],
            $row['USR_CURRENT_NB_COINS'],
            $row['USR_TOTAL_NB_COINS'],
            $row['USR_NB_GAMES_PLAYED'],
            $skin,
            null);
        }
        return $usr;
    }

/// Brief : Research into database the list of skin the user have
/// Parameter : * $id (int) : id of the user we want to get the list
    public function getSkinList(int $id):?array{
        $tabSkin=null;
        $skinsOfUserQuery="SELECT s.* 
                        FROM T_H_SKIN_SKI s, T_J_OWN_SKIN_OWN o
                        WHERE o.FK_USER=:id AND s.PK_ID=o.FK_SKIN";
        $argIdUser=array('id'=>array($id,PDO::PARAM_INT));
        $this->connection->execQuery($skinsOfUserQuery,$argIdUser);
        $resSkin=$this->connection->getRes();
        foreach($resSkin as $row){
            $tabSkin[]= new Skin($row['PK_ID'], $row['SKI_NAME'], $row['SKI_IMAGE'],$row['SKI_PRICE']);
        }
        return $tabSkin;
    }


/// Brief : Returning an user found in database with his id
/// Parameters : * $id (string): identifier of the user we are looking for
    public function getUserById(int $id):?User{
        $userQuery="SELECT * 
                    FROM T_S_USER_USR 
                    WHERE PK_ID = :id";
        $argIdUser=array('id'=>array($id,PDO::PARAM_INT));
        $this->connection->execQuery($userQuery,$argIdUser);
        $res=$this->connection->getRes();
        $usr=$this->convertResToUser($res);
        if ($usr != null){
            $usr->tabSkin=$this->getSkinList($usr->id);
        }
        return $usr;
    }

/// Brief : Returning an user found in database with his username
/// Parameters : * $username (string): username of the user we are looking for
    public function getUserByUsername (string $username):?User{  
        $userQuery = "SELECT *
                      FROM T_S_USER_USR
                      WHERE USR_USERNAME=:username";
        $argUsername=array('username'=>array($username,PDO::PARAM_STR));
        $this->connection->execQuery($userQuery,$argUsername);
        $res=$this->connection->getRes();
        $usr=$this->convertResToUser($res);
        if ($usr != null){
            $usr->tabSkin=$this->getSkinList($usr->id);
        }
        return $usr;
    }

/// Brief : Returning an user if there is a correspondance between the username and the password, used for connection
/// Parameters : * $username (string): username of the user we are looking for
///              * $password (string): password of the user we are looking for
/// Comment : this function returns an user if it finds a match between an username and password,
/// if it doesn't, it means there are no corresponding user
    public function getUserForConnection(string $username,string $password):?User{
        $userQuery = "SELECT * 
                      FROM T_S_USER_USR
                      WHERE USR_USERNAME=:username
                        AND USR_PASSWORD=:password";
        $argUsernamePassword=(array('username'=>array($username,PDO::PARAM_STR),
                                    'password'=>array($password,PDO::PARAM_STR)));
        $this->connection->execQuery($userQuery,$argUsernamePassword);
        $res=$this->connection->getRes();
        $usr=$this->convertResToUser($res);
        if ($usr != null){
            $usr->tabSkin=$this->getSkinList($usr->id);
        }
        return $usr;
    }

/// Brief : Adding a NEW user in database
/// Parameters : * $u (User): user we want to insert in database
/// Returning TRUE if the user has been added succesfully, FALSE otherwise
    public function postUser(string $username, string $password, string $nationality, string $sex, string $dateOfBirth) {
        $insertUserQuery = "INSERT INTO T_S_USER_USR VALUES (NULL, :username, :password, :nationality, :sex, :dateOfBirth, 0, 0, 0, 1)";
        $getLastIdQuery = "SELECT max(PK_ID) id FROM T_S_USER_USR";
        $argUser=array('username' => array($username, PDO::PARAM_STR), 
                    'password' => array($password, PDO::PARAM_STR),
                    'nationality' => array($nationality, PDO::PARAM_STR), 
                    'sex' => array($sex, PDO::PARAM_STR),
                    'dateOfBirth' => array($dateOfBirth, PDO::PARAM_STR));
        $this->connection->execQuery($insertUserQuery, $argUser);
        $this->connection->execQuery($getLastIdQuery, array());
        $res=$this->connection->getRes();
        foreach($res as $row){
            $this->putSkinList($row['id'], 1);
        }
    }

/// Brief : Modifying an EXISTING user in database
/// Parameters : * $u (User): user we want to update in database
/// Returning TRUE if the modifications has been done succesfully, FALSE otherwise
    public function putUser(int $id,string $username, string $password, string $sex, string $nationality, int $currentBobCoins,int $totalBobCoins,int $nbGamesPlayed, int $currentSkin){
        $updateUserQuery="UPDATE T_S_USER_USR 
                        SET USR_USERNAME = :username, 
                            USR_PASSWORD=:password,
                            USR_SEX=:sex,
                            USR_NATIONALITY=:nationality,
                            USR_CURRENT_NB_COINS=:currentBobCoins, 
                            USR_TOTAL_NB_COINS=:totalBobCoins, 
                            USR_NB_GAMES_PLAYED=:nbGamesPlayed, 
                            FK_CURRENT_SKIN=:currentSkin 
                        WHERE PK_ID=:id";
        $argUser=array('username' => array($username, PDO::PARAM_STR), 
                'password' => array($password, PDO::PARAM_STR),
                'sex' => array($sex, PDO::PARAM_STR),
                'nationality' => array($nationality, PDO::PARAM_STR),
                'currentBobCoins' => array($currentBobCoins, PDO::PARAM_INT),
                'totalBobCoins' => array($totalBobCoins, PDO::PARAM_INT), 
                'nbGamesPlayed' => array($nbGamesPlayed, PDO::PARAM_INT),
                'currentSkin'=> array($currentSkin, PDO::PARAM_INT),
                'id' => array($id, PDO::PARAM_INT));
        $this->connection->execQuery($updateUserQuery, $argUser);
    }

/// Brief : Adding a skin into the list of skins of the user
/// Parameter : * $u (User) : user
    public function putSkinList(int $idUser, int $idSkin){
        $addSkinQuery = "INSERT INTO T_J_OWN_SKIN_OWN VALUES(:idUser,:idSkin)";
        $updateBobCoinsQuery = "UPDATE T_S_USER_USR
                                SET USR_CURRENT_NB_COINS = USR_CURRENT_NB_COINS - (SELECT SKI_PRICE
                                                                                   FROM T_H_SKIN_SKI
                                                                                   WHERE PK_ID=:idSkin)
                                WHERE PK_ID=:idUser";
        $argOwn = array('idUser'=>array($idUser,PDO::PARAM_INT),
                        'idSkin'=>array($idSkin,PDO::PARAM_INT));
        $argUpdate = array('idSkin'=>array($idSkin,PDO::PARAM_INT),
                           'idUser'=>array($idUser,PDO::PARAM_INT));
        $this->connection->execQuery($addSkinQuery, $argOwn);
        $this->connection->execQuery($updateBobCoinsQuery,$argUpdate);
    }

/// Brief : Deleting an user from database
/// Parameter : * $u (User): user we want to delete from database
    public function deleteUser(int $id): void{
        $query = "DELETE from T_S_USER_USR WHERE PK_ID = :id";
        $arg=array('id' => array($id, PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
    }

}

?>