<?php

class Skin{

    public int $id;
    public string $name;
    public string $source;
    public int $cost;

    public function __construct(int $_id, string $_name, string $_source, int $_cost){
        $this->id=$_id;
        $this->name=$_name;
        $this->source=$_source;
        $this->cost=$_cost;
    }
}

?>