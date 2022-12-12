<?php

// appelé "Matchs" car match sans s ne marche pas
class Matchs{

    // Object attributes
    public string $id;
    public bool $inGame;
    public string $idGame;
    public $listIdUsers;


    public function __construct(string $_id,bool $_inGame, string $_idGame, $_listIdUsers){
        $this->id=$_id;
        $this->inGame=$_inGame;
        $this->idGame=$_idGame;
        // Only one user at creation
        $this->listIdUsers=$_listIdUsers;
    }
}

?>