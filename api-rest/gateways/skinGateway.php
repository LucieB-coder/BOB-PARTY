<?php

require_once('model/skin.php');

class SkinGateway{

    private $connection;

    public function __construct($_connection){
        $this->connection=$_connection;
    }

    /* Functions implemented to manage skins' data from database
        * getGames : returning all the skins found in database
        * getGameById : returning a skin found in database with its id
    */

/// Brief : Returning all the skins found in database
public function getSkins():?array{
    $tabSkins=null;
    $query="SELECT * FROM Skin";
    $this->connection->execQuery($query,[]);
    $res = $this->connection->getRes();
    foreach($res as $row){
        $tabSkins[]= new Game($row['id'],$row['name'],$row['image']);
    }
    return $tabSkins;
}

/// Brief : Returning a skin found in database with its id
/// Parameters : * $id (string): identifier of the skin we are looking for  
public function getSkinById(string $id):?Game{
    $skin=null;
    $query="SELECT * FROM Skin WHERE id=:id";
    $arg=array('id'=>array($id,PDO::PARAM_STR));
    $this->connection->execQuery($query,$arg);
    $res=$this->connection->getRes();
    foreach($res as $row){
        $skin= new Game($row['id'],$row['name'],$row['image']);
    }
    return $skin;
}
}

?>