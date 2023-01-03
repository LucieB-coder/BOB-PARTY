<?php

class Game{
    public int $id;
    public string $name;
    public string $image;
    public string $type;
    public int $nbPlayerMin;
    public int $nbPlayerMax;
    public array $keys;
    public array $values;

    public function __construct(int $_id, string $_name, string $_image, string $_type, $_nbPlayerMin, $_nbPlayerMax, array $_keys, array $_values){
        $this->id=$_id;
        $this->name=$_name;
        $this->image=$_image;
        $this->type=$_type;
        $this->nbPlayerMin=$_nbPlayerMin;
        $this->nbPlayerMax=$_nbPlayerMax;
        $this->keys=$_keys;
        $this->values=$_values;
    }
    
}

?>