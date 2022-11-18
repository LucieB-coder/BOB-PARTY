<?php

include('model/match.php');

class MatchGateway{

    // Object Attributes
    private $connection;

    // Constructor
    public function __construct($con){
        $this->connection=$con;
    }

    // Fucntions executing SQL requests on database
    /*
    * get : trouver un match grâce à un id de joueur
    * put : pour modifier le match
    * post : créer un match dans la bd
    * delete : supprimer un match dans la bd
    */

    // Function executing get method to find a match
    public function getMatch(string $matchId){
        $query1="SELECT id, inGame, idGame FROM Matchs WHERE id = :id";
        $query2="SELECT idUser FROM InMatch WHERE idMatch=:id";
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

    // Function executing post method to create a match in database
    public function postMatch(Matchs $m){
        $query1="INSERT INTO Matchs VALUES(:idMatch,0,:idGame)";
        $query2="INSERT INTO InMatch VALUES(:idMatch,:idUser)";
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

}

?>