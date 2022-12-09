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
        $gamesQuery="SELECT * FROM T_E_GAME_GAM";
        $this->connection->execQuery($gamesQuery,[]);
        $res = $this->connection->getRes();
        foreach($res as $row){
            $tabGames[]= new Game($row['PK_ID'],
                                  $row['GAM_NAME'],
                                  $row['GAM_IMAGE'],
                                  $row['GAM_NB_PLAYER_MIN'],
                                  $row['GAM_NB_PLAYER_MAX']);
        }
        return $tabGames;
    }

/// Brief : Returning a game found in database with its id
/// Parameters : * $id (string): identifier of the game we are looking for  
    public function getGameById(string $id):?Game{
        $game=null;
        $gameInfoQuery="SELECT * FROM T_E_GAME_GAM WHERE PK_ID=:id";
        $arg=array('id'=>array($id,PDO::PARAM_STR));
        $this->connection->execQuery($gameInfoQuery,$arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $game= new Game($row['PK_ID'],
                            $row['GAM_NAME'],
                            $row['GAM_IMAGE'],
                            $row['GAM_NB_PLAYER_MIN'],
                            $row['GAM_NB_PLAYER_MAX']);
        }
        return $game;
    }
}

?>