<?php

require_once('model/game.php');

class GameGateway{

    private $connecion;

    // Constructor
    public function __construct($_connection){
        $this->connection=$_connection;
    }

    /* Functions implemented to manage games' data from database
        * getGames : returning all the games found in database
        * getGameById : returning a game found in database with its id
    */

/// Brief : Returning all the games found in database
    public function getGames():?array{
        $tabGames=null;
        $query="SELECT * FROM Game";
        $this->connection->execQuery($query,[]);
        $res = $this->connection->getRes();
        foreach($res as $row){
            $tabGames[]= new Game($row['id'],$row['name'],$row['image']);
        }
        return $tabGames;
    }

/// Brief : Returning a game found in database with its id
/// Parameters : * $id (string): identifier of the game we are looking for  
    public function getGameById(string $id):?Game{
        $game=null;
        $query="SELECT * FROM Game WHERE id=:id";
        $arg=array('id'=>array($id,PDO::PARAM_STR));
        $this->connection->execQuery($query,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $game= new Game($row['id'],$row['name'],$row['image']);
        }
        return $game;
    }
}

?>