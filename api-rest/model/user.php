<?php

class User {

    // Object attributes
    public string $id;
    public string $username;
    public string $password;
    public string $nationality;
    public string $sex;
    public string $dateOfBirth;
    public int $currentBobCoins;
    public int $totalBobCoins;
    public int $nbGamesPlayed;

    public function __construct(string $_id,string $_username,string $_password, string $_nationality,string $_sex, string $_dateOfBirth, int $_currentBobCoins, int $_totalBobCoins, int $_nbGamesPlayed){
        $this->id=$_id;
        $this->username=$_username;
        $this->password=$_password;
        $this->nationality=$_nationality;
        $this->sex=$_sex;
        $this->dateOfBirth=$_dateOfBirth;
        $this->currentBobCoins=$_currentBobCoins;
        $this->totalBobCoins=$_totalBobCoins;
        $this->nbGamesPlayed=$_nbGamesPlayed;

    }
    
}

?>