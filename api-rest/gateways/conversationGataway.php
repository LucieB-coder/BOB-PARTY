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
        // Declaration of arrays (NULL) and queries
        $tabConversations=NULL;
        $tabUsers=NULL;
        $tabMessages=NULL;
        $conversationQuery = "SELECT c.id, c.nom 
                                FROM T_E_CONVERSATION_COV c, T_J_DISCUTE_DIS d
                                WHERE c.id=d.idConv
                                    AND d.idUser=:idUser";        
        $messagesQuery = "SELECT m.id, m.message, m.idSender
                                   FROM T_R_MESSAGE_MSG m, T_J_DISCUTE_DIS d
                                   WHERE m.id=h.idMessage
                                       AND h.idConv=:idConv";
        $usersQuery = "SELECT d.idUser
                       FROM T_J_DISCUTE_DIS d
                       WHERE d.idConv = :idConv";
        //Find all the conversations where the user belong
        $argIdUser=array('idUser'=>array($_idUser, PDO::PARAM_STR));
        $this->connection->execQuery($conversationQuery,$argIdUser);
        $res=$this->connection->getRes();

        foreach($res as $row){
            $argIdConv= array('idConv'=>array($row['idConversation'], PDO::PARAM_STR));
            // Find all messages of the conversation
            $this->connection->execQuery($messagesQuery,$argIdConv);
            $resMessages=$this->connection->getRes();
            foreach($resMessages as $rowMessages){
                $tabUsers[] = new Message($rowMessages['id'],$rowMessages['message'],$rowMessages['idSender']);
            }
            // Find all the users in the conversation
            $this->connection->execQuery($usersQuery,$argIdConv);
            $resUsers=$this->connection->getRes();
            foreach($resUsers as $rowUsers){
                $tabUsers[] = $rowUsers['idUser'];
            }
            // Add the conversation into the array
            $tabConversations = new Conversation($row['id'],$row['nom'],$tabMessages,$tabUsers);
            // Restore the arrays
            $tabUsers=array();
            $tabMessages=array(); 
        }
        return $tabConversations;
    }

/// Brief : Adding a new conversation in database
/// Parameters : * $c (Conversation): conversation we want to insert in database
    public function postConversation(Conversation $c): void{
        // Declare queries
        $convCreationQuery = "INSERT INTO T_E_CONVERSATION_COV VALUES(:idConv,:name)";
        $addUserInConvQuery = "INSERT INTO T_J_DISCUTE_DIS VALUES(:idUser,:idConv)";
        $argconvCreationQuery = array('idConv'=>array($c->id,PDO::PARAM_STR),
                    'name'=>array($c->name, PDO::PARAM_STR));

        // Create a new conversation
        $this->connection->execQuery($convCreationQuery,$argconvCreationQuery);
        // Add users of the conversation in the conversation
        foreach($c->listIdUsers as $idUsr){
            $argUserInConvQuery = array('idUser'=>array($idUsr, PDO::PARAM_STR),
                          'idConv'=>array($c->id, PDO::PARAM_STR));
            $this->connection->execQuery($query2,$arg2);
        }
    }

/// Brief : Modifying an EXISTING match in database
/// Parameters : * $u (Matchs): match we want to update in database
    public function putConversation(Conversation $c):void{
        // Declare the queries
        $conversationInsertionQuery = "INSERT INTO T_E_CONVERSATION_COV VALUES (:id,:nom)";
        $messageInsertionQuery = "INSERT INTO T_R_MESSAGE_MSG VALUES(:id,:message,:idSender)";
        $discuteInsertionQuery = "INSERT INTO T_J_DISCUTE_DIS VALUES(:idUser,:idConv)";
        $containInsertionQuery = "INSERT INTO T_J_CONTAIN_MESSAGE_CTN VALUES(:idConv,:idMessage)";
        $argConversationInsertion = array('id'=>array($c->id, PDO::PARAM_STR),
                                          'nom'=>array($c->name,PDO::PARAM_STR));
        // Delete current data from database
        deleteConversation($c);
        // Add conversation
        $this->connection->execQuery($conversationInsertionQuery,$argConversationInsertion);
        // Add messages to conversation
        foreach($c->listMessages as $msg){
            $argContainInsertion = array('idConv'=>array($c->id,PDO::PARAM_STR),
                                         'idMessage'=>array($msg->id,PDO::PARAM_STR));
            $argMessageInsertion = array('id'=>array($msg->id,PDO::PARAM_STR),
                                         'message'=>array($msg->message,PDO::PARAM_STR),
                                         'idSender'=>array($msg->idSender,PDO::PARAM_STR));
            $this->connection->execQuery($containInsertionQuery,$argContainInsertion);
            $this->connection->execQuery($messageInsertionQuery,$argMessageInsertion);
        }
        // Add user to conversation
        foreach($c->listIdUsers as $idUsr){
            $argDiscuteInsertion = array('idUsr'=>array($idUsr,PDO::PARAM_STR),
                                         'idConv'=>array($c->id,PDO::PARAM_STR));
            $this->connection->execQuery($discuteInsertionQuery,$argDiscuteInsertion);
        }
    }

/// Brief : Deleting a conversation and its messages from database
/// Parameters : * $c (Conversation): conversation we want to delete from database
// ---- 
// Ne pas oublier le on delete cascade dans la création des tables
// ----
    public function deleteConversation(Conversation $c):void{
        // Declare query and argument table
        $deleteMessagesQuery = "DELETE FROM T_R_MESSAGE_MSG 
                                WHERE id=(SELECT id
                                        FROM T_R_MESSAGE_MSG m, T_J_CONTAIN_MESSAGE_CTN c
                                        WHERE m.id = c.idConversation
                                            AND c.idConversation=:idConv";
        $deleteConv = "DELETE FROM T_E_CONVERSATION_COV
                       WHERE id=:idConv"; // Suffisant grâce au on delete cascade (à ne pas oublier)
        $argIdConv = array('idConv'=>array($c->id,PDO::PARAM_STR));
        // Executing queries
        $this->connection->execQuery($deleteMessagesQuery,$argIdConv);
        $this->connection->execQuery($deleteConv,$argIdConv);
    }
}

?>