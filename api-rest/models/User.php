<?php

class User{
    private $connection;
    private $table= "User";

    // object properties
    public $id;
    public $username;
    public $password;
    public $nationality;
    public $sex;
    public $dateOfBirth;
    public $currentBobCoins;
    public $totalBobCoins;
    public $nbGamesPlayed;

    public function __construct($db){
        $this->connection=$db;
    }

    public function read(){
        $sqlQuery= "SELECT U.id, U.username, U.password, U.nationality, U.sex, U.dateOfBirth, U.currentBobCoins, U.totalBobCoins, U.nbGamesPlayed FROM User U";
        $query = $this->connection->prepare($sqlQuery);
        $query->execute();
        return $query;
    }

    public function post(){
        $sqlQuery= "INSERT INTO User VALUES(\"" . $this->id . "\",\"" . $this->username . "\",\"" . $this->password . "\",\"" . $this->nationality . "\",\"" . $this->sex . "\",\"" . $this->dateOfBirth . "\",0,0,0)";
        $query = $this->connection->prepare($sqlQuery);
        $query->execute();
        return $query;
    }

    public function delete(){
        $sqlQuery = "DELETE FROM User WHERE username=\"" . $this->username . "\"";
        $query = $this->connection->prepare($sqlQuery);
        $query->execute();
        return $query;
    }

    public function readOneId(){
        $sqlQuery = "SELECT * FROM User WHERE id=\"" . $this->id . "\"";
        $query = $this->connection->prepare($sqlQuery);
        $query->execute();
        return $query;
    }

    public function readOneUsername(){
        $sqlQuery = "SELECT * FROM User WHERE username=\"" . $this->username . "\"";
        $query = $this->connection->prepare($sqlQuery);
        $query->execute();
        return $query;
    }

    public function put(){
        $sqlQuery = "UPDATE User SET username='" . $this->username . "', nationality='" . $this->nationality . "', sex='" . $this->sex . "', dateOfBirth='" . $this->dateOfBirth . "', currentBobCoins='" . $this->currentBobCoins . "', totalBobCoins='" . $this->totalBobCoins . "', nbGamesPlayed='" . $this->nbGamesPlayed . "' WHERE id =\"" . $this->id . "\"";
        $query=$this->connection->prepare($sqlQuery);
        $query->execute();
        return $query;
    }
}

?>