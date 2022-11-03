<?php
/*
  $db_dsn="mysql:dbname=bobParty;host=127.0.0.1;port=8889";
  //$db_host = '127.0.0.1';
  $db_user = 'root';
  $db_password = 'root';
  //$db_db = 'bobParty';
  //$db_port = 8889;

  $mysqli = new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db,
	$db_port
  );
	
  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }

  
  echo '<br>';
  echo 'Host information: '.$mysqli->host_info;
  echo '<br>';
  echo 'Protocol version: '.$mysqli->protocol_version;

  $mysqli->close();
  
  try{
        $dbh = new PDO($db_dsn,$db_user,$db_password);
        $dbh->exec("set names utf8");
        echo 'Success: A proper connection to MySQL was made.';
    }catch(PDOException $exception){
        echo "Connection error : " . $exception->getMessage();
    }
    */
    class Database{
        public $connection;
    
        public function establishConnection(){
            $this->connection=null;
    
            try{
                $this->connection = new PDO("mysql:dbname=bobParty;host=127.0.0.1;port=8889", "root", "root");
                $this->connection->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Connection error : " . $exception->getMessage();
            }
            
            return $this->connection;
        }
    }
?>