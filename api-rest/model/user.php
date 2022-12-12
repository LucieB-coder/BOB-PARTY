<?php

class User {

    // Object attributes
    public int $id;
    public string $username;
    public string $password;
    public string $nationality;
    public string $sex;
    public string $dateOfBirth;
    public int $currentBobCoins;
    public int $totalBobCoins;
    public int $nbGamesPlayed;
    public int $currentSkin;
    public ?array $listSkin;

    public function __construct(int $_id,string $_username,string $_password, string $_nationality,string $_sex, string $_dateOfBirth, int $_currentBobCoins, int $_totalBobCoins, int $_nbGamesPlayed, int $_currentSkin,?array $_listSkin){
        $this->id=$_id;
        $this->username=$_username;
        $this->password=$_password;
        $this->nationality=$_nationality;
        $this->sex=$_sex;
        $this->dateOfBirth=$_dateOfBirth;
        $this->currentBobCoins=$_currentBobCoins;
        $this->totalBobCoins=$_totalBobCoins;
        $this->nbGamesPlayed=$_nbGamesPlayed;
        $this->currentSkin=$_currentSkin;
        $this->listSkin=$_listSkin;
    }
    
}

?>