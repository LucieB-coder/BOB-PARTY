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
        $tabConversations=[];
        $tabUsers=[];
        $tabMessages=[];
        $conversationQuery = "SELECT c.PK_ID, c.COV_NAME
                                FROM T_H_CONVERSATION_COV c, T_J_DISCUSS_DIS d
                                WHERE c.PK_ID=d.FK_CONVERSATION
                                    AND d.FK_USER=:idUser";        
        $messagesQuery = "SELECT m.PK_ID, m.MSG_MESSAGE, m.FK_SENDER, m.MSG_DATEENVOIE
                                   FROM T_H_MESSAGE_MSG m, T_J_CONTAIN_MESSAGE_CMG c
                                   WHERE m.PK_ID=c.FK_MESSAGE
                                       AND c.FK_CONVERSATION=:idConv";
        $usersQuery = "SELECT d.FK_USER
                       FROM T_J_DISCUSS_DIS d
                       WHERE d.FK_CONVERSATION = :idConv";
        //Find all the conversations where the user belong
        $argIdUser=array('idUser'=>array($_idUser, PDO::PARAM_INT));
        $this->connection->execQuery($conversationQuery,$argIdUser);
        $res=$this->connection->getRes();

        foreach($res as $row){
            $argIdConv= array('idConv'=>array($row['PK_ID'], PDO::PARAM_INT));
            // Find all messages of the conversation
            $this->connection->execQuery($messagesQuery,$argIdConv);
            $resMessages=$this->connection->getRes();
            foreach($resMessages as $rowMessages){
                $tabMessages[] = new Message($rowMessages['PK_ID'],
                                          $rowMessages['MSG_MESSAGE'],
                                          $rowMessages['FK_SENDER'],
                                          $rowMessages['MSG_DATEENVOIE']);
            }
            // Find all the users in the conversation
            $this->connection->execQuery($usersQuery,$argIdConv);
            $resUsers=$this->connection->getRes();
            foreach($resUsers as $rowUsers){
                $tabUsers[] = $rowUsers['FK_USER'];
            }
            // Add the conversation into the array
            $tabConversations[] = new Conversation($row['PK_ID'],
                                                 $row['COV_NAME'],
                                                 $tabMessages,
                                                 $tabUsers);
            // Restore the arrays
            $tabUsers=array();
            $tabMessages=array(); 
        }
        return $tabConversations;
    }

/// Brief : Adding a new conversation in database
    public function postConversation(string $name, array $idUsers): int{
        // Declare queries
        $convCreationQuery = "INSERT INTO T_H_CONVERSATION_COV VALUES(NULL,:name)";
        $addUserInConvQuery = "INSERT INTO T_J_DISCUSS_DIS VALUES(:idUser,:idConv)";
        $argconvCreationQuery = array('name'=>array($name, PDO::PARAM_STR));

        // Create a new conversation
        $this->connection->execQuery($convCreationQuery,$argconvCreationQuery);
        $this->connection->execQuery("SELECT PK_ID 
                                     FROM T_H_CONVERSATION_COV
                                     WHERE PK_ID >= ALL (SELECT max(c2.PK_ID) 
                                                         FROM T_H_CONVERSATION_COV c2)",[]);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $id=$row['PK_ID'];
        }
        foreach ($idUsers as $idUs){
            $argUserInConvQuery = array('idUser'=>array($idUs, PDO::PARAM_INT),
                                        'idConv'=>array($id, PDO::PARAM_INT));
            $this->connection->execQuery($addUserInConvQuery,$argUserInConvQuery);
        }
        return $id;
    }
    

/// Brief : Modifying an EXISTING conversation in database
    public function putConversation(int $id, string $name):void{
        $conversationUpdateQuery = "UPDATE T_H_CONVERSATION_COV 
                                       SET COV_NAME=:name
                                       WHERE PK_ID=:id";
        $argConversationUpdate = array('name'=>array($name, PDO::PARAM_STR),
                                       'id'=>array($id,PDO::PARAM_INT));
        $this->connection->execQuery($conversationUpdateQuery,$argConversationUpdate);
    }

/// Brief : Adding an user to a conversation
    public function addUserToConversation(int $idConv, int $idUser){
        $insertUserQuery = "INSERT INTO T_J_DISCUSS_DIS VALUES(:idUser,:idConv)";
        $argQuery = array('idUser'=>array($idUser,PDO::PARAM_INT),
                          'idConv'=>array($idConv,PDO::PARAM_INT));
        $this->connection->execQuery($insertUserQuery,$argQuery);
    }

/// Brief : Deleting an user from a conversation
public function deleteUserFromConversation(int $idConv, int $idUser){
    $insertUserQuery = "DELETE FROM T_J_DISCUSS_DIS WHERE FK_USER=:idUser AND FK_CONVERSATION=:idConv";
    $argQuery = array('idUser'=>array($idUser,PDO::PARAM_INT),
                      'idConv'=>array($idConv,PDO::PARAM_INT));
    $this->connection->execQuery($insertUserQuery,$argQuery);
}

/// Brief : adding a new message into a conversation
    public function addMessageToConversation(string $message, int $idSender, int $idConv, string $date): int{
        $insertMessageQuery = "INSERT INTO T_H_MESSAGE_MSG VALUES(NULL,:message,:idSender, :date)";
        $insertMsgInConvQuery = "INSERT INTO T_J_CONTAIN_MESSAGE_CMG VALUES(:idConv,:idMessage)";

        $argInsertMessage= array('message'=>array($message,PDO::PARAM_STR),
                                 'idSender'=>array($idSender,PDO::PARAM_INT),
                                 'date'=>array($date,PDO::PARAM_STR));
        $this->connection->execQuery($insertMessageQuery,$argInsertMessage);
        $this->connection->execQuery("SELECT PK_ID 
                                     FROM T_H_MESSAGE_MSG
                                     WHERE PK_ID >= ALL (SELECT max(m2.PK_ID) 
                                                         FROM T_H_MESSAGE_MSG m2)",[]);
        $res=$this->connection->getRes();
        foreach($res as $row){
            $idMsg=$row['PK_ID'];
        }
        $argMsgInConv = array('idConv'=>array($idConv,PDO::PARAM_INT),
                              'idMessage'=>array($idMsg,PDO::PARAM_INT));
        $this->connection->execQuery($insertMsgInConvQuery,$argMsgInConv);
        return $idMsg;
    }

/// Brief : Deleting a conversation and its messages from database
    public function deleteConversation(int $id):void{
        $deleteConv = "DELETE FROM T_H_CONVERSATION_COV
                       WHERE PK_ID=:idConv";
        $argIdConv = array('idConv'=>array($id,PDO::PARAM_INT));
        $this->connection->execQuery($deleteConv,$argIdConv);
    }
}

?>