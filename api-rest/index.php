 <?php
 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,DELETE,PUT');
    /// Good to know :
    /// All the values must be cleaned on the application side before using this API
    ///

    include ('dbConnection.php');
    include ('gateways/userGateway.php');
    include ('gateways/matchGateway.php');
    include ('gateways/conversationGataway.php');
    include ('gateways/gameGateway.php');
    include ('gateways/skinGateway.php');

    // Connection to database
    // ------
    // Comment faire un fichier .htaccess pour protéger ce fichier ?????????
    // ------
    $ini_array= parse_ini_file("config.ini");
    // Initializing Database
    try{
        $database = new DatabaseConnection($ini_array['dsn'],$ini_array['username'],$ini_array['password']);
    } catch (PDOException $e) {
        echo "ERROR connection";
        header("HTTP/1.0 ".$e->getMessage());
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
    $method_name = !empty($url[2]) ? (string)$url[2] : null;
    if($method_name == null){
        header("HTTP/1.0 400 Request Name Empty");
        http_response_code(400);
    }
    switch ($request_method){
        case 'GET':
            if($method_name === "getUserById"){ // test : OK
                if(empty($url[3])){
                    header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } else{
                    $id = (string)$url[3];
                    $user = $usergw->getUserById($id);
                    echo json_encode($user);
                }
            }
            elseif($method_name === "getUserByUsername"){ // test : OK
                $username = !empty($url[3]) ? (string) $url[3] : null;
                if ($username !== null){
                    $user =$usergw->getUserByUsername($username);
                    echo json_encode($user);
                } else{
                    header("HTTP/1.0 400 Username not given");
                    http_response_code(400);
                } 
            }
            elseif($method_name === "getUserForConnection"){ // test : OK
                $username = !empty($url[3]) ? (string) $url[3] : null;
                $password = !empty($url[4]) ? (string) $url[4] : null;
                if ($username != null || $password != null){
                    $user =$usergw->getUserForConnection($username,$password);
                    echo json_encode($user);
                } else{
                    header("HTTP/1.0 400 Username or password not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "getSkins"){ // test : OK
                $tabSkin = $skingw->getSkins();
                echo json_encode($tabSkin);
            }
            elseif($method_name === "getGames"){ // test : OK
                $tabGame = $gamegw->getGames();
                echo json_encode($tabGame);
            }
            elseif($method_name === "getGameById"){ // test : OK
                $id = !empty($url[3]) ? (string) $url[3] : null;
                if ($id !== null){
                    $game = $gamegw->getGameById($id);
                    echo json_encode($game);
                } else{
                    header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } 
            }
            elseif($method_name === "getMatchById"){ // test : OK
                $id = !empty($url[3]) ? (string) $url[3] : null;
                if ($id !== null){
                    $match = $matchgw->getMatchById($id);
                    echo json_encode($match);
                } else{
                    header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } 
            }
            else{
                header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
        case 'POST':
            if($method_name === "postUser"){ // test : OK
                if (count($url)<8){
                    header("HTTP/1.0 400 Invalid number of arguments");
                    http_response_code(400);
                }
                $username = !empty($url[3]) ? (string) $url[3] : null;
                $password = !empty($url[4]) ? (string) $url[4] : null;
                $nationality = !empty($url[5]) ? (string) $url[5] : null;
                $sex = !empty($url[6]) ? (string) $url[6] : null;
                $dateOfBirth = !empty($url[7]) ? (string) $url[7] : null;
                $usergw->postUser($username,$password,$nationality,$sex,$dateOfBirth);
            }
            elseif($method_name === "postMatch"){ // test : OK
                $idGame = !empty($url[3]) ? (string) $url[3] : null;
                $idCreator = !empty($url[4]) ? (string) $url[4] : null;
                if ($idGame != null || $idCreator != null){
                    $match =$matchgw->postMatch($idGame,$idCreator);
                } else{
                    header("HTTP/1.0 400 Username or password not given");
                    http_response_code(400);
                }
            }
            else{
                header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
            break;
        case 'PUT':
            if($method_name === "putUser"){ // test : OK
                if (count($url)<9){
                    header("HTTP/1.0 400 Invalid number of arguments");
                    http_response_code(400);
                }
                $id = !empty($url[3]) ? (string) $url[3] : null;
                $username = !empty($url[4]) ? (string) $url[4] : null;
                $password = !empty($url[5]) ? (string) $url[5] : null;
                $nbCurrentCoins = !empty($url[6]) ? (string) $url[6] : null;
                $totalnbCoins = !empty($url[7]) ? (string) $url[7] : null;
                $nbGames = !empty($url[8]) ? (string) $url[8] : null;
                $currentSkin = !empty($url[9]) ? (string) $url[9] : null;
                $usergw->putUser($id,$username,$password,$nbCurrentCoins,$totalnbCoins,$nbGames,$currentSkin);
            }
            elseif($method_name === "putSkinList"){ // test : OK
                $idUser = !empty($url[3]) ? (string) $url[3] : null;
                $idSkin = !empty($url[4]) ? (string) $url[4] : null;
                if ($idUser != null || $idSkin != null){
                    $usergw->putSkinList($idUser,$idSkin);
                } else{
                    header("HTTP/1.0 400 idSkin or idUser not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "putMatch"){ // test : OK
                $id = !empty($url[3]) ? (string) $url[3] : null;
                if ($id !== null){
                    $matchgw->putMatch($id);
                } else{
                    header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                } 
            }
            elseif($method_name === "addUserToMatch"){ // test : OK
                $idMatch = !empty($url[3]) ? (string) $url[3] : null;
                $idUser = !empty($url[4]) ? (string) $url[4] : null;
                if ($idUser != null || $idMatch != null){
                    $matchgw->addUserToMatch($idMatch,$idUser);
                } else{
                    header("HTTP/1.0 400 idSkin or idUser not given");
                    http_response_code(400);
                }
            }
            elseif($method_name === "deleteUserFromMatch"){ // test : OK
                $idUser = !empty($url[3]) ? (string) $url[3] : null;
                if ($idUser != null){
                    $matchgw->deleteUserFromMatch($idUser);
                } else{
                    header("HTTP/1.0 400 idSkin or idUser not given");
                    http_response_code(400);
                }
            }
            else{
                header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
            break;
        case 'DELETE':
            if($method_name === "deleteUser"){ // test : OK
                $id = !empty($url[3]) ? (string) $url[3] : null;
                if($id!=null){
                    $usergw->deleteUser($id);
                }else{
                    header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                }
            }
            elseif($method_name == "deleteMatch"){ // test : 
                $id = !empty($url[3]) ? (string) $url[3] : null;
                if($id!=null){
                    $matchgw->deleteMatch($id);
                }else{
                    header("HTTP/1.0 400 Id not given");
                    http_response_code(400);
                }
            }
            else{
                header("HTTP/1.0 401 UNAUTHORIZED REQUEST");
                http_response_code(401); 
            }
            break;
        default :
            header("HTTP/1.0 405 Invalid request method");
            http_response_code(405);
            break;
    }
            
    
 ?>