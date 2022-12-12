<?php

class Conversation{

    // Object attributes
    public string $id;
    public string $name;
    public $listMessages;
    public $listIdUsers;

    public function __construct($_id,$_name,$_listMessages,$_listIdUsers){
        $this->id=$_id;
        $this->name=$_name;
        $this->listMessages=$_listMessages;
        $this->listIdUsers=$_listIdUsers;
    }
}

?>