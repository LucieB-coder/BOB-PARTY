<?php

class User {

    // Object attributes
    public int $id;
    public string $username;
    public string $password;
    public string $nationality;
    public string $sexe;
    public string $dateOfBirth;
    public int $currentCoins;
    public int $totalCoins;
    public int $nbGamesPlayed;
    public Skin $currentSkin;
    public ?array $tabSkin;

    public function __construct(int $_id,string $_username,string $_password, string $_nationality,string $_sexe, string $_dateOfBirth, int $_currentCoins, int $_totalCoins, int $_nbGamesPlayed, Skin $_currentSkin,?array $_tabSkin){
        $this->id=$_id;
        $this->username=$_username;
        $this->password=$_password;
        $this->nationality=$_nationality;
        $this->sexe=$_sexe;
        $this->dateOfBirth=$_dateOfBirth;
        $this->currentCoins=$_currentCoins;
        $this->totalCoins=$_totalCoins;
        $this->nbGamesPlayed=$_nbGamesPlayed;
        $this->currentSkin=$_currentSkin;
        $this->tabSkin=$_tabSkin;
    }
    
}

?>