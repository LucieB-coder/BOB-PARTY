<?php

class Conversation{

    // Object attributes
    public string $id;
    public string $name;
    public $tabMessages;
    public $listIdUsers;

    public function __construct($_id,$_name,$_tabMessages,$_listIdUsers){
        $this->id=$_id;
        $this->name=$_name;
        $this->tabMessages=$_tabMessages;
        $this->listIdUsers=$_listIdUsers;
    }
}

?>