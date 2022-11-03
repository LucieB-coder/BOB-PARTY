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
}

?>