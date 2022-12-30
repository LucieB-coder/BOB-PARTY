<?php

class Message {

    // Object attributes
    public string $id;
    public string $content;
    public string $idSender;
    public string $dateEnvoie;

    public function __construct(string $_id, string $_content, string $_idSender, string $_dateEnvoie){
        $this->id=$_id;
        $this->content=$_content;
        $this->idSender=$_idSender;
        $this->dateEnvoie=$_dateEnvoie;
    }
}

?>