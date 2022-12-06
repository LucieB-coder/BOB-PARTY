<?php

require_once('model/match.php');

class MatchGateway{

    private $connection;

    // Constructor
    public function __construct($con){
        $this->connection=$con;
    }

    /* Functions implemented to manage matches' data from database

        * getMatchById : returning a match found in database with its id
        * postMatch : adding a NEW user in database
        * putMatch : modifying an EXISTING user in database
        * deleteMatch : deleting an user from database

    */

/// Brief : Returning a match found in database with his id
/// Parameters : * $id (string): identifier of the match we are looking for
    public function getMatchById(string $matchId):?Matchs{
        $match=NULL;
        $matchInfoQuery="SELECT PK_ID, MTC_IN_GAME, FK_ID_GAME FROM T_E_MATCH_MTC WHERE PK_ID = :id";
        $playersInMatchQuery="SELECT FK_USER FROM T_J_PLAY_MATCH_PLM WHERE FK_MATCH=:id";
        $argId=array('id' => array($matchId, PDO::PARAM_INT));
        $this->connection->execQuery($playersInMatchQuery, $argId);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabUser[] = $row['FK_USER'];
        }
        $this->connection->execQuery($matchInfoQuery, $argId);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $match = new Matchs($row['PK_ID'],$row['MTC_IN_GAME'],$row['FK_ID_GAME'],$tabUser);
        }
        return $match;
    }

/// Brief : Adding a NEW match in database
    public function postMatch(int $idGame, int $idCreator){
        $insertMatchQuery="INSERT INTO T_E_MATCH_MTC VALUES(NULL,0,:idGame)";
        $insertPlayQuery = "INSERT INTO T_J_PLAY_MATCH_PLM VALUES(:idCreator,:id);";
        $argInsertMatch=array('idGame'=>array($idGame, PDO::PARAM_INT));
        $this->connection->execQuery($insertMatchQuery,$argInsertMatch);
        $this->connection->execQuery("SELECT PK_ID 
                                     FROM T_E_MATCH_MTC 
                                     WHERE PK_ID >= ALL (SELECT max(m2.PK_ID) 
                                                         FROM T_E_MATCH_MTC m2)",[]);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $id=$row['PK_ID'];
        }
        $argInsertPlay= array('idCreator'=>array($idCreator,PDO::PARAM_INT),
                              'id'=>array($id,PDO::PARAM_INT));
        $this->connection->execQuery($insertPlayQuery,$argInsertPlay);
        return;
    }

/// Brief : Modifying an EXISTING match in database
    public function putMatch(int $id){
        $updateQuery="UPDATE T_E_MATCH_MTC SET MTC_IN_GAME=1 WHERE PK_ID=:id";
        $argUpdate=array('id'=>array($id,PDO::PARAM_INT));
        $this->connection->execQuery($updateQuery,$argUpdate);
        return;
    }

/// Brief : Adding an user into a match
    public function addUserToMatch(int $idMatch, int $idUser){
        $insertQuery = "INSERT INTO T_J_PLAY_MATCH_PLM VALUES(:idUser,:idMatch)";
        $argInsert= array('idUser'=>array($idUser,PDO::PARAM_INT),
                          'idMatch'=>array($idMatch,PDO::PARAM_INT));
        $this->connection->execQuery($insertQuery,$argInsert);
        return;
    }

/// Brief : Deleting an user from a match
    public function deleteUserFromMatch(int $idUser){
        $deleteQuery = "DELETE FROM T_J_PLAY_MATCH_PLM WHERE FK_USER=:idUser";
        $argDelete = array('idUser'=>array($idUser,PDO::PARAM_INT));
        $this->connection->execQuery($deleteQuery,$argDelete);
        return;
    }

/// Brief : Deleting a match from database
/// Parameters : * $u (Matchs): match we want to delete from database
    public function deleteMatch(int $id){
        $query="DELETE FROM T_J_PLAY_MATCH_PLM WHERE PK_ID=:id";
        $arg=array('id'=>array($id, PDO::PARAM_INT));
        $this->connection->execQuery($query,$arg);
    }

}

?>