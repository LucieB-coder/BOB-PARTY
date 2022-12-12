<?php

class Message {

    // Object attributes
    public String $id;
    public String $message;
    public String $idSender;

    public function __construct(String $_id, String $_message, String $_idSender){
        $this->id=$_id;
        $this->message=$_message;
        $this->idSender=$_idSender;
    }
}

?>