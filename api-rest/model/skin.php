<?php

class Skin{

    public int $id;
    public string $name;
    public string $image;
    public int $price;

    public function __construct(int $_id, string $_name, string $_image, int $_price){
        $this->id=$_id;
        $this->name=$_name;
        $this->image=$_image;
        $this->price=$_price;
    }
}

?>