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
        $skinQuery="SELECT * FROM T_H_SKIN_SKI";
        $this->connection->execQuery($skinQuery,[]);
        $res = $this->connection->getRes();
        foreach($res as $row){
            $tabSkins[]= new Skin($row['PK_ID'],
                                  $row['SKI_NAME'],
                                  $row['SKI_IMAGE'],
                                  $row['SKI_PRICE']);
        }
        return $tabSkins;
    }

    public function getSkinById(int $id):?Skin{
        $skin=null;
        $skinQuery="SELECT * FROM T_H_SKIN_SKI WHERE PK_ID=:id";
        $this->connection->execQuery($skinQuery,array('id'=>array($id, PDO::PARAM_INT)));
        $res = $this->connection->getRes();
        foreach($res as $row){
            $skin= new Skin($row['PK_ID'],
                                  $row['SKI_NAME'],
                                  $row['SKI_IMAGE'],
                                  $row['SKI_PRICE']);
        }
        return $skin;
    }
}

?>