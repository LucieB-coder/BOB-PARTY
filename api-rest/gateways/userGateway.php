<?php

require_once('model/user.php');

class UserGateway{

    private $connection;

    public function __construct(DatabaseConnection $con){
        $this->connection=$con;
    }

    // execute get method to find all users in database
    public function getUsers(){
        $query= "SELECT * FROM User";
        $this->connection->execQuery($query,[]);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabUser[] = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed']);
        }
        return $tabUser;
    }

    // execute get method to find one user by his id in database
    public function getUserById(string $id):array{
        
        $query= "SELECT * FROM User U WHERE id = :id ";
        $arg= array('id'=> array($id,PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $usr = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed']);
        }
        return $usr;
    }

    // execute get method to find one user by his username in database
    public function getUserByUsername(string $username):?User{
        $query= "SELECT * FROM User U WHERE username = :username ";
        $arg = array('username'=>array($username,PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $usr = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed']);
        }
        return $usr;
    }

    // execute get method to find one user by his username and password for his connection in database
    public function getUserForConnection(string $username, string $password):?User{
        $query= "SELECT * FROM User U WHERE username = :username AND password = :password";
        $arg = array('username'=>array($username,PDO::PARAM_STR),'password'=>array($password,PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $usr = new User ($row['id'],$row['username'],$row['password'],$row['nationality'],$row['sex'],$row['dateOfBirth'],$row['currentBobCoins'],$row['totalBobCoins'],$row['nbGamesPlayed']);
        }
        return $usr;
    }

    // execute put method to create a new user in database
    public function postUser(User $u): void{
        if ($u->currentBobCoins != 0 | $u->totalBobCoins != 0| $u->nbGamesPlayed !=0){
            echo "new user, can't have any coin or games played";
            return;
        }
        $query = "INSERT INTO User VALUES (:id, :username, :password, :nationality, :sex, :dateOfBirth, 0, 0, 0)";
        $arg=array('id' => array($u->id, PDO::PARAM_STR), 'username' => array($u->username, PDO::PARAM_STR), 'password' => array($u->password, PDO::PARAM_STR),'nationality' => array($u->nationality, PDO::PARAM_STR), 'sex' => array($u->sex, PDO::PARAM_STR),'dateOfBirth' => array($u->dateOfBirth, PDO::PARAM_STR));
        $this->connection->execQuery($query, $arg);
    }

    // executing put method to update an user (by his id) in database
    public function putUser(User $u){
        $query="UPDATE User SET username = :username, password=:password, sex=:sex, nationality=:nationality, currentBobCoins=:currentBobCoins, totalBobCoins=:totalBobCoins, nbGamesPlayed=:nbGamesPlayed WHERE id=:id";
        $arg=array(':id' => array($u->id, PDO::PARAM_STR), ':username' => array($u->username, PDO::PARAM_STR), ':password' => array($u->password, PDO::PARAM_STR),':nationality' => array($u->nationality, PDO::PARAM_STR), ':sex' => array($u->sex, PDO::PARAM_STR),':currentBobCoins' => array($u->currentBobCoins, PDO::PARAM_INT),':totalBobCoins' => array($u->totalBobCoins, PDO::PARAM_INT), ':nbGamesPlayed' => array($u->nbGamesPlayed, PDO::PARAM_INT));
        $this->connection->execQuery($query, $arg);
    } 

    // exectuing delete method to delete an user in database
    public function deleteUser(User $u): void{
        $query = "DELETE from User WHERE id = :id";
        $arg=array(':id' => array($u->id, PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
    }
}

?>


