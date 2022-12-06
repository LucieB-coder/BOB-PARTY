<?php

class Game{
    public int $id;
    public string $name;
    public string $image;


    public function __construct(int $_id, string $_name, string $_image){
        $this->id=$_id;
        $this->name=$_name;
        $this->image=$_image;
    }
    
}

?>