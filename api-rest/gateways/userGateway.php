<?php

require_once('model/user.php');

class UserGateway{

    private $connection;

    public function __construct(DatabaseConnection $con){
        $this->connection=$con;
    }

    /* Functions implemented to manage user's data from database

        * getUsers : returning an array of users containing all the user stored in database
        * getUserById : returning an user found in database with his id
        * getUserByUsername : returning an user found in database with his username
        * getUserForConnection : returning an user if there is a correspondance between 
            the username and the password, used for connection
        * postUser : adding a NEW user in database
        * putUser : modifying an EXISTING user in database
        * deleteUser : deleting an user from database

    */

/*
/// Brief : Returning an array of users containing all the user stored in database
    public function getUsers():array{
        $tabUser=NULL;
        $query1= "SELECT * FROM User";
        $query2="SELECT idSkin FROM HasSkin WHERE idUser=:idUser";
        $this->connection->execQuery($query,[]);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabUser[] = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed'],$row['currentIdSkin']);
        }
        
        return $tabUser;
    }
*/

/// Brief : Returning an user found in database with his id
/// Parameters : * $id (string): identifier of the user we are looking for
    public function getUserById(string $id):?User{
        $usr=NULL;
        $query= "SELECT * FROM User U WHERE id = :id ";
        $query2="SELECT idSkin FROM HasSkin WHERE idUser=:id";
        $arg= array('id'=> array($id,PDO::PARAM_STR));
        $this->connection->execQuery($query2,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabSkin[]=$row['idSkin'];
        }
        $this->connection->execQuery($query,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $usr = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed'],$row['currentIdSkin'],$tabSkin);
        }
        return $usr;
    }

/// Brief : Returning an user found in database with his username
/// Parameters : * $username (string): username of the user we are looking for
    public function getUserByUsername(string $username):?User{
        $usr=NULL;
        
        $query= "SELECT * FROM User U WHERE username = :username ";
        $query2="SELECT idSkin FROM HasSkin WHERE idUser=:id";
        $arg = array('username'=>array($username,PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $usr = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed'],$row['currentIdSkin'],null);
        }
        $arg2=array('id'=>array($usr->id, PDO::PARAM_STR));
        $this->connection->execQuery($query2,$arg2);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabSkin[]=$row['idSkin'];
        }
        $usr->listIdSkin=$tabSkin;
        return $usr;
    }

/// Brief : Returning an user if there is a correspondance between the username and the password, used for connection
/// Parameters : * $username (string): username of the user we are looking for
///              * $password (string): password of the user we are looking for
/// Comment : this function returns an user if it finds a match between an username and password,
/// if it doesn't, it means there are no corresponding user
    public function getUserForConnection(string $username, string $password):?User{
        $usr=NULL;
        $query= "SELECT * FROM User U WHERE username = :username AND password = :password";
        $query2="SELECT idSkin FROM HasSkin WHERE idUser=:id";
        $arg = array('username'=>array($username,PDO::PARAM_STR),'password'=>array($password,PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $usr = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed'],$row['currentIdSkin'],null);
        }
        $arg2=array('id'=>array($usr->id, PDO::PARAM_STR));
        $this->connection->execQuery($query2,$arg2);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabSkin[]=$row['idSkin'];
        }
        $usr->listIdSkin=$tabSkin;
        return $usr;
    }

/// Brief : Adding a NEW user in database
/// Parameters : * $u (User): user we want to insert in database
    public function postUser(User $u): void{
        if ($u->currentBobCoins != 0 | $u->totalBobCoins != 0| $u->nbGamesPlayed !=0){
            echo "new user, can't have any coin or games played";
            return;
        }
        $query = "INSERT INTO User VALUES (:id, :username, :password, :nationality, :sex, :dateOfBirth, 0, 0, 0, 'S0001')";
        $query2 = "INSERT INTO HasSkin VALUES(:id,'S0001')";
        $arg=array('id' => array($u->id, PDO::PARAM_STR), 
                   'username' => array($u->username, PDO::PARAM_STR), 
                   'password' => array($u->password, PDO::PARAM_STR),
                   'nationality' => array($u->nationality, PDO::PARAM_STR), 
                   'sex' => array($u->sex, PDO::PARAM_STR),
                   'dateOfBirth' => array($u->dateOfBirth, PDO::PARAM_STR));
        $arg2=array('id' => array($u->id, PDO::PARAM_STR));
        $this->connection->execQuery($query, $arg);
        $this->connection->execQuery($query2,$arg2);
    }

/// Brief : Modifying an EXISTING user in database
/// Parameters : * $u (User): user we want to update in database
    public function putUser(User $u){
        $query="UPDATE User SET username = :username, password=:password, sex=:sex, nationality=:nationality, currentBobCoins=:currentBobCoins, totalBobCoins=:totalBobCoins, nbGamesPlayed=:nbGamesPlayed, currentIdSkin=:currentIdSkin WHERE id=:id";
        $query2="DELETE FROM HasSkin WHERE idUser=:id";
        $query3="INSERT INTO HasSkin VALUES(:idUsr,:idSkin)";
        $arg=array(':id' => array($u->id, PDO::PARAM_STR), 
                   ':username' => array($u->username, PDO::PARAM_STR), 
                   ':password' => array($u->password, PDO::PARAM_STR),
                   ':nationality' => array($u->nationality, PDO::PARAM_STR), 
                   ':sex' => array($u->sex, PDO::PARAM_STR),
                   ':currentBobCoins' => array($u->currentBobCoins, PDO::PARAM_INT),
                   ':totalBobCoins' => array($u->totalBobCoins, PDO::PARAM_INT), 
                   ':nbGamesPlayed' => array($u->nbGamesPlayed, PDO::PARAM_INT),
                   ':currentIdSkin'=> array($u->currentIdSkin, PDO::PARAM_STR));
        $arg2=array('id'=>array($u->id,PDO::PARAM_STR));
        $this->connection->execQuery($query, $arg);
        $this->connection->execQuery($query2,$arg2);
        foreach($u->listIdSkin as $idSkin){
            $arg3=array('idUsr'=>array($u->id,PDO::PARAM_STR),
                        'idSkin'=>array($idSkin,PDO::PARAM_STR));
            $this->connection->execQuery($query3,$arg3);
        }
    } 

/// Brief : Deleting an user from database
/// Parameters : * $u (User): user we want to delete from database
    public function deleteUser(User $u): void{
        $query = "DELETE from User WHERE id = :id";
        $arg=array(':id' => array($u->id, PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
    }
}

?>


