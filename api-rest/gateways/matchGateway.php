<?php

require_once('model/match.php');

class MatchGateway{

    private $connection;

    // Constructor
    public function __construct($con){
        $this->connection=$con;
    }

    /* Functions implemented to manage matches' data from database

        * getMatch : returning a match found in database with its id
        * postMatch : adding a NEW user in database
        * putMatch : modifying an EXISTING user in database
        * deleteMatch : deleting an user from database

    */

/// Brief : Returning a match found in database with his id
/// Parameters : * $id (string): identifier of the match we are looking for
    public function getMatch(string $matchId):?Matchs{
        $match=NULL;
        $query1="SELECT id, inGame, idGame FROM Matchs WHERE id = :id";
        $query2="SELECT idUser FROM Play WHERE idMatch=:id";
        $arg=array('id' => array($matchId, PDO::PARAM_STR));
        $this->connection->execQuery($query2, $arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabUser[] = $row['idUser'];
        }
        
        $this->connection->execQuery($query1, $arg);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $match = new Matchs($row['id'],$row['inGame'],$row['idGame'],$tabUser);
        }
        return $match;
    }

/// Brief : Adding a NEW match in database
/// Parameters : * $u (Matchs): match we want to insert in database
    public function postMatch(Matchs $m){
        $query1="INSERT INTO Matchs VALUES(:idMatch,0,:idGame)";
        $query2="INSERT INTO Play VALUES(:idMatch,:idUser)";
        $arg1=array('idMatch'=>array($m->id, PDO::PARAM_STR),
                    'idGame'=>array($m->idGame, PDO::PARAM_STR));
        $this->connection->execQuery($query1,$arg1);
        foreach($m->listIdUsers as $idUsr){
            $arg2=array('idMatch'=>array($m->id, PDO::PARAM_STR),
                        'idUser'=>array($idUsr, PDO::PARAM_STR));
            $this->connection->execQuery($query2,$arg2);
        }
        return;
    }

/// Brief : Modifying an EXISTING match in database
/// Parameters : * $u (Matchs): match we want to update in database
    public function putMatch(Matchs $m){
        $query1="UPDATE Matchs SET inGame= :inGame WHERE id=:id";
        //Peut-etre la possibilité de faire mieux???
        $query2="DELETE FROM Play WHERE idMatch=:idMatch"; 
        $query3="INSERT INTO Play VALUES(:idMatch,:idUser)";
        $arg1=array('inGame'=>array($m->inGame, PDO::PARAM_BOOL),
                    'id'=>array($m->id,PDO::PARAM_STR));
        $arg2=array('idMatch'=>array($m->id,PDO::PARAM_STR));
        $this->connection->execQuery($query1,$arg1);
        $this->connection->execQuery($query2,$arg2);
        foreach($m->listIdUsers as $idUsr){
            $arg3=array('idMatch'=>array($m->id, PDO::PARAM_STR),
                        'idUser'=>array($idUsr,PDO::PARAM_STR));
            $this->connection->execQuery($query3,$arg3);
        }
        return;
    }

/// Brief : Deleting a match from database
/// Parameters : * $u (Matchs): match we want to delete from database
    public function deleteMatch(Matchs $m){
        $query1="DELETE FROM Play WHERE idMatch=:id";
        $query2="DELETE FROM Matchs WHERE id=:id";
        $arg=array('id'=>array($m->id, PDO::PARAM_STR));
        $this->connection->execQuery($query1,$arg);
        $this->connection->execQuery($query2,$arg);
    }

}

?>