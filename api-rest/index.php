 <?php

 /*
  	    $conn = new mysqli("BOB_PARTEAM-mysql",getenv("MYSQL_USER"),getenv("MYSQL_PASSWORD"),getenv("MYSQL_DATABASE"));
        $conn->query("DROP TABLE IF EXISTS `common_absences`;");
        $conn->query("CREATE TABLE coucou (`COUCOU_ID` int(10) unsigned NOT NULL,`COUCOU_TEXT` char(10) NOT NULL);");
        $res = $conn->query("SELECT * FROM coucou");

        while ($une_valeur = $res->fetch_array()) {
            echo $une_valeur["COUCOU_ID"]." ".$une_valeur["COUCOU_TEXT"];
        }
    exit;
    */

    require_once("initBdd.php");



    //header('Access-Control-Allow-Origin: *');
    //header('Access-Control-Allow-Methods: POST,GET,DELETE,PUT');
    
    /// Good to know :
    /// All the values must be cleaned on the application side before using this API
    ///

    include ('dbConnection.php');
    include (__DIR__ .'/gateways/userGateway.php');
    include (__DIR__ .'/gateways/matchGateway.php');
    include (__DIR__ .'/gateways/conversationGateway.php');
    include (__DIR__ .'/gateways/gameGateway.php');
    include (__DIR__ .'/gateways/skinGateway.php');


    // Connection to database
    // ------
    // Comment faire un fichier .htaccess pour protéger ce fichier ?????????
    // ------
    //$ini_array= parse_ini_file("config.ini");

    $dsn = "mysql:host=BOB_PARTEAM-mysql;dbname=" . getenv("MYSQL_DATABASE");
    $username = getenv("MYSQL_USER");
    $password = getenv("MYSQL_PASSWORD");

    // Initializing Database
    try{
        $database = new DatabaseConnection($dsn,$username,$password);
    } catch (PDOException $e) {
        echo "ERROR connection";
        echo $e->getMessage();
        //echo $dsn;
        //header("HTTP/1.0 ".$e->getMessage());
        http_response_code(600); // Quel code pour les erreurs PDO?
    }

    
    
    // Initializing Gateways
    // ------
    // Passer en mode objet ou rester en mode comportemental mais assumé ???
    // ------
    $usergw = new UserGateway($database);
    $matchgw = new MatchGateway($database);
    $conversationgw = new ConversationGateway($database); 
    $gamegw = new GameGateway($database);
    $skingw = new SkinGateway($database);

    // Managing request, routing and sending 
    // ------
    // RAPPEL POUR MOI MÊME : NE PAS OUBLIER DE FAIRE DES TRY CATCH !!!!!!!
    // ------
    
    $request_method = $_SERVER['REQUEST_METHOD'];
    $request_uri =  $_SERVER['REQUEST_URI'];
    $url = rtrim($request_uri,"/");
    $url = filter_var($url, FILTER_SANITIZE_URL);
    $url = explode('/', $url);

    $i=0;
    while ($url[$i]!=="index.php"){
        unset($url[$i]);
        $i++;
    }

    //echo json_encode($url);

    $method_name = !empty($url[2]) ? (string)$url[2] : null;
    if($method_name == null){
        //header("HTTP/1.0 400 Request Name Empty");
        http_response_code(400);
        
    }
    switch ($request_method){
        case 'GET':
            if($method_name === "getUserById"){ // test : OK
                if(empty($url[3])){
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } else{
                    $id = (int)$url[3];
                    $user = $usergw->getUserById($id);
                    //header('Content-Type: application/json');
                    echo json_encode($user, JSON_PRETTY_PRINT);
                    http_response_code(200);
                }
            }
            elseif($method_name === "getUserByUsername"){ // test : OK
                $username = !empty($url[3]) ? (string) $url[3] : null;
                if ($username !== null){
                    $user =$usergw->getUserByUsername($username);
                    //header('Content-Type: application/json');
                    echo json_encode($user, JSON_PRETTY_PRINT);
                } else{
                    //header("HTTP/1.0 400 Username not given");
                    http_response_code(400);
                } 
            }
            elseif($method_name === "getUserForConnection"){ // test : OK
                $username = !empty($url[3]) ? (string) $url[3] : null;
                $password = !empty($url[4]) ? (string) $url[4] : null;
                if ($username != null || $password != null){
                    $user =$usergw->getUserForConnection($username,$password);
                    //header('Content-Type: application/json');
                    echo json_encode($user, JSON_PRETTY_PRINT);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 Username or password not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "getSkins"){ // test : OK
                $tabSkin = $skingw->getSkins();
                //header('Content-Type: application/json');
                echo json_encode($tabSkin, JSON_PRETTY_PRINT);
                http_response_code(200);
            }
            elseif($method_name === "getGames"){ // test : OK
                $tabGame = $gamegw->getGames();
                //header('Content-Type: application/json');
                echo json_encode($tabGame, JSON_PRETTY_PRINT);
                http_response_code(200);
            }
            elseif($method_name === "getGameById"){ // test : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                if ($id !== null){
                    $game = $gamegw->getGameById($id);
                    //header('Content-Type: application/json');
                    echo json_encode($game, JSON_PRETTY_PRINT);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } 
            }
            elseif($method_name === "getMatchById"){ // test : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                if ($id !== null){
                    $match = $matchgw->getMatchById($id);
                    //header('Content-Type: application/json');
                    echo json_encode($match, JSON_PRETTY_PRINT);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } 
            }
            elseif($method_name === "getConversations"){ // tests : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                if ($id !== null){
                    $conversations = $conversationgw->getConversations($id);
                    //header('Content-Type: application/json');
                    echo json_encode($conversations, JSON_PRETTY_PRINT);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } 
            }
            else{
                ////header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
            break;
        case 'POST':
            if($method_name === "postUser"){ // test : OK
                if (count($url)<7){
                    //header("HTTP/1.0 400 Invalid number of arguments");
                    http_response_code(400);
                }
                $username = !empty($url[3]) ? (string) $url[3] : null;
                $password = !empty($url[4]) ? (string) $url[4] : null;
                $nationality = !empty($url[5]) ? (string) $url[5] : null;
                $sex = !empty($url[6]) ? (string) $url[6] : null;
                $dateOfBirth = !empty($url[7]) ? (string) $url[7] : null;
                $usergw->postUser($username,$password,$nationality,$sex,$dateOfBirth);
                http_response_code(200);
            }
            elseif($method_name === "postMatch"){ // test : OK
                $idGame = !empty($url[3]) ? (int) $url[3] : null;
                $idCreator = !empty($url[4]) ? (int) $url[4] : null;
                if ($idGame != null || $idCreator != null){
                    $match =$matchgw->postMatch($idGame,$idCreator);
                    echo json_encode($match, JSON_PRETTY_PRINT);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 idGame or idCreator not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "postConversation"){ // test : OK
                $name = !empty($url[3]) ? (string) $url[3] : null;
                $idList = !empty($url[4]) ? (array) explode(",",$url[4]) : null;
                $name=urldecode($name);
                if ($name != null || $idList != null){
                    $id=$conversationgw->postConversation($name,$idList);
                    echo json_encode($id, JSON_PRETTY_PRINT);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 name or creator not given");
                    http_response_code(400);
                }
            }
            else{
                //header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
            break;
        case 'PUT':
            if($method_name === "putUser"){ // test : OK
                if (count($url)<11){
                    //header("HTTP/1.0 400 Invalid number of arguments");
                    http_response_code(400);
                }
                $id = !empty($url[3]) ? (int) $url[3] : null;
                $username = !empty($url[4]) ? (string) $url[4] : null;
                $password = !empty($url[5]) ? (string) $url[5] : null;
                $sexe = !empty($url[6]) ? (string) $url[6] : null;
                $nationality = !empty($url[7]) ? (string) $url[7] : null;
                $nbCurrentCoins = (int) $url[8];
                $totalnbCoins = (int) $url[9];
                $nbGames = (int) $url[10];
                $currentSkin = !empty($url[11]) ? (int) $url[11] : null;
                $usergw->putUser($id,$username,$password,$sexe, $nationality, $nbCurrentCoins,$totalnbCoins,$nbGames,$currentSkin);
                http_response_code(200);
            }
            elseif($method_name === "putSkinList"){ // test : OK
                $idUser = !empty($url[3]) ? (int) $url[3] : null;
                $idSkin = !empty($url[4]) ? (int) $url[4] : null;
                if ($idUser != null || $idSkin != null){
                    $usergw->putSkinList($idUser,$idSkin);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 idSkin or idUser not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "putMatch"){ // test : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                if ($id !== null){
                    $matchgw->putMatch($id);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } 
            }
            elseif($method_name === "addUserToMatch"){ // test : OK
                $idMatch = !empty($url[3]) ? (int) $url[3] : null;
                $idUser = !empty($url[4]) ? (int) $url[4] : null;
                if ($idUser != null || $idMatch != null){
                    $matchgw->addUserToMatch($idMatch,$idUser);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 idSkin or idUser not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "deleteUserFromMatch"){ // test : OK
                $idUser = !empty($url[3]) ? (int) $url[3] : null;
                if ($idUser != null){
                    $matchgw->deleteUserFromMatch($idUser);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 idUser not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "putConversation"){ // test : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                $newName = !empty($url[4]) ? (string) $url[4] : null;
                $newName=urldecode($newName);

                if ($id != null && $newName != null){
                    $conversationgw->putConversation($id,$newName);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 id or new name not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "addUserToConversation"){ // test : OK
                $idConv = !empty($url[3]) ? (int) $url[3] : null;
                $idUser = !empty($url[4]) ? (int) $url[4] : null;
                if ($idConv != null && $idUser != null){
                    $conversationgw->addUserToConversation($idConv,$idUser);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 id conv or id user not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "deleteUserFromConversation"){ // test : OK
                $idConv = !empty($url[3]) ? (int) $url[3] : null;
                $idUser = !empty($url[4]) ? (int) $url[4] : null;
                if ($idConv != null && $idUser != null){
                    $conversationgw->deleteUserFromConversation($idConv,$idUser);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 id conv or id user not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "addMessageToConversation"){ // test : OK
                $msg=!empty($url[3]) ? (string) $url[3] : null;
                $idSender=!empty($url[4]) ? (int) $url[4] : null;
                $idConv=!empty($url[5]) ? (int) $url[5] : null;
                $date=!empty($url[6]) ? (string) $url[6] : null;
                $date=urldecode($date);
                $msg=urldecode($msg);

                if ($msg != null && $idSender != null && $idConv != null && $date!=null){
                    $id=$conversationgw->addMessageToConversation($msg,$idSender,$idConv, $date);
                    echo json_encode($id, JSON_PRETTY_PRINT);
                    http_response_code(200);
                } else{
                    //header("HTTP/1.0 400 id conv or message or sender not given");
                    http_response_code(400);
                }
            }
            else{
                //header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
            break;
        case 'DELETE':
            if($method_name === "deleteUser"){ // test : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                if($id!=null){
                    $usergw->deleteUser($id);
                    http_response_code(200);
                }else{
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                }
            }
            elseif($method_name == "deleteMatch"){ // test : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                if($id!=null){
                    $matchgw->deleteMatch($id);
                    http_response_code(200);
                }else{
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "deleteConversation"){ // test : OK
                $id = !empty($url[3]) ? (int) $url[3] : null;
                if($id!=null){
                    $conversationgw->deleteConversation($id);
                    http_response_code(200);
                }else{
                    //header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                }
            }
            else{
                //header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
            break;
        default :
            //header("HTTP/1.0 405 Invalid request method");
            http_response_code(405);
            break;
    }
            
    
 ?>