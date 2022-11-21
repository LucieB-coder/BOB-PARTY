<?php

require_once('model/conversation.php');
require_once('model/message.php');

class ConversationGateway{

    private $connection;

    // Constructor
    public function __construct($_connection){
        $this->connection=$_connection;
    }

    /* Functions implemented to manage conversations' data from database

        * getConversations : returning all the ids of the conversations of an user
            (with all the id of the messages and the users in the conversation)
        * postConversation : adding a NEW conversation in database
        * putMatch : modifying an EXISTING conversation in database
        * deleteMatch : deleting an conversation from database

    */


/// Brief : Returning all the ids of the conversations where an user belongs
    ///(with all the id of the messages and the users in the conversation)
/// Parameters : * $idUser (string): identifier of the user we want to get the conversations
    public function getConversations(string $_idUser):?array{
        $tabIdConversation=NULL;
        $tabConversations=NULL;
        $tabUsers=NULL;
        $tabIdMessages=NULL;
        $tabMessages=NULL;

        $query1 = "SELECT idConversation FROM InConversation WHERE idUser=:idUser";
        $query2 = "SELECT idUser FROM InConversation WHERE idConversation=:idConv";
        $query3 = "SELECT idMessage FROM Have WHERE idConversation=:idConv";
        $query4 = "SELECT id, message, idSender FROM Message WHERE id=:id";
        $query5 = "SELECT id, nom FROM Conversation WHERE id=:idConv";

        $arg1=array('idUser'=>array($_idUser, PDO::PARAM_STR));

        $this->connection->execQuery($query1,$arg1);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $tabIdConversation[] = $row['idConversation'];
        }

        foreach($tabIdConversation as $idConv){

            $arg2 = array('idConv'=>array($idConv, PDO::PARAM_STR));
            $this->connection->execQuery($query2,$arg2);
            $res=$this->connection->getRes();
            foreach($res as $row){
                $tabUsers[] = $row['idUser'];
            }

            $this->connection->execQuery($query3,$arg2);
            $res=$this->connection->getRes();
            foreach($res as $row){
                $tabIdMessages[] = $row['idMessage'];
            }

            foreach($tabIdMessages as $idMessage){
                $arg3=array('id'=>array($idMessage,PDO::PARAM_STR));
                $this->connection->execQuery($query4,$arg3);
                $res=$this->connection->getRes();
                foreach($res as $row){
                    $tabMessages[] = new Message($row['id'],$row['message'],$row['idSender']);
                }
            }

            $this->connection->execQuery($query5,$arg2);
            $res=$this->connection->getRes();
            foreach($res as $row){
                $tabConversations[]= new Conversation($row['id'], $row['nom'],$tabMessages,$tabUsers);
            }

            $tabUsers=array();
            $tabIdMessages=array();
            $tabMessages=array();          
        }
        return $tabConversations;
    }

/// Brief : Adding a new conversation in database
/// Parameters : * $c (Conversation): conversation we want to insert in database
    public function postConversation(Conversation $c): void{
        $query1 = "INSERT INTO Conversation VALUES(:idConv,:name)";
        $query2 = "INSERT INTO InConversation VALUES(:idUser,:idConv)";

        $arg1 = array('idConv'=>array($c->id,PDO::PARAM_STR),
                    'name'=>array($c->name, PDO::PARAM_STR));

        $this->connection->execQuery($query1,$arg1);

        foreach($c->listIdUsers as $idUsr){
            $arg2 = array('idUser'=>array($idUsr, PDO::PARAM_STR),
                          'idConv'=>array($c->id, PDO::PARAM_STR));
            $this->connection->execQuery($query2,$arg2);
        }
    }

/// Brief : Modifying an EXISTING match in database
/// Parameters : * $u (Matchs): match we want to update in database
    public function putConversation(Conversation $c):void{
        $query7 = "SELECT idMessage FROM Have WHERE idConversation=:idConv";
        $query8 = "DELETE FROM Message WHERE id = :id";
        $query1 = "DELETE FROM Have WHERE idConversation = :idConv";
        $query2 = "DELETE FROM InConversation WHERE idConversation = :idConv";
        $query3 = "UPDATE Conversation SET nom=:nom WHERE id=:id";
        $query4 = "INSERT INTO Have VALUES (:idConv,:idMessage)";
        $query5 = "INSERT INTO Message VALUES(:id,:message,:idSender)";
        $query6 = "INSERT INTO InConversation VALUES(:idUsr,:idConv)";
        

        $arg1 = array('idConv'=>array($c->id,PDO::PARAM_STR));
        $arg2 = array('nom'=>array($c->name, PDO::PARAM_STR),
                      'id'=>array($c->id,PDO::PARAM_STR));

        $this->connection->execQuery($query7,$arg1);
        $res = $this->connection->getRes();
        foreach($res as $idMsg){
            $arg6 = array('id'=>array($idMsg['idMessage'],PDO::PARAM_STR));
            $this->connection->execQuery($query8,$arg6);
        }
        
        $this->connection->execQuery($query1,$arg1);
        $this->connection->execQuery($query2, $arg1);
        $this->connection->execQuery($query3,$arg2);

        foreach($c->listMessages as $msg){
            $arg3 = array('idConv'=>array($c->id,PDO::PARAM_STR),
                          'idMessage'=>array($msg->id,PDO::PARAM_STR));
            $arg4 = array('id'=>array($msg->id,PDO::PARAM_STR),
                          'message'=>array($msg->message,PDO::PARAM_STR),
                          'idSender'=>array($msg->idSender,PDO::PARAM_STR));
            $this->connection->execQuery($query4,$arg3);
            $this->connection->execQuery($query5,$arg4);
        }

        foreach($c->listIdUsers as $idUsr){
            $arg5 = array('idUsr'=>array($idUsr,PDO::PARAM_STR),
                          'idConv'=>array($c->id,PDO::PARAM_STR));
            $this->connection->execQuery($query6,$arg5);
        }
    }

/// Brief : Deleting a conversation and its messages from database
/// Parameters : * $c (Conversation): conversation we want to delete from database
    public function deleteConversation(Conversation $c):void{
        $query1 = "DELETE FROM Message WHERE id=:id";
        $query2 = "DELETE FROM Have WHERE idConversation = :idConv";
        $query3 = "DELETE FROM InConversation WHERE idConversation = :idConv";
        $query4 = "DELETE FROM Conversation WHERE id = :idConv";

        foreach($c->listMessages as $msg){
            $arg1 = array('id'=>array($msg->id,PDO::PARAM_STR));
            $this->connection->execQuery($query1,$arg1);
        }
        $arg2 = array('idConv'=>array($c->id,PDO::PARAM_STR));
        $this->connection->execQuery($query2,$arg2);
        $this->connection->execQuery($query3,$arg2);
        $this->connection->execQuery($query4,$arg2);
    }
}

?>