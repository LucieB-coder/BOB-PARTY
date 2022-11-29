 <?php
 
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
    // A changer quand la base de données sera hébergée, comment masquer les var?
    // ------
    // A mettre dans un fichier et .htaccess
    // ------
    require('config.php');  

    // Initializing Database
    try{
        $database = new DatabaseConnection($dsn,$username,$password);
    } catch (PDOException $e) {
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
    
    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $requestName = $_REQUEST['fname']; 

    if(empty($requestName)){
        header("HTTP/1.0 400 Request Name Empty");
        http_response_code(400);
    }
    else{
        switch ($requestMethod){
            case 'GET':
                switch ($requestName){
                    case 'getUser':
                        if (!empty($_GET["id"])){
                            //read an user by its id
                            $id = intval($_GET["id"]);
                            try{
                                $res=$usergw->getUserById($id);
                                //retourner le résultat
                            } catch (PDOException $e){
                                header("HTTP/1.0 ".$e->getMessage());
                                http_response_code(600); // Quel code pour les erreurs PDO?
                            }
                        }
                        elseif (!empty($_GET["username"])){
                            // read an user by his username
                            $username = intval($_GET["username"]);
                            try{
                                $res=$usergw->getUserByUsername($username);
                                //retourner le résultat
                            } catch (PDOException $e){
                                header("HTTP/1.0 ".$e->getMessage());
                                http_response_code(600); // Quel code pour les erreurs PDO?
                            }
                        }
                        else{
                            header("HTTP/1.0 405 Missing argument id or username");
                            http_response_code(405);
                        }
                    case 'getMatch':
                        if(!empty($_GET["id"])){
                            //read a match by its id
                            $id = intval($_GET["id"]);
                            try{
                                $res=$matchgw->getMatchById($id);
                                //retourner le résultat
                            } catch (PDOException $e) {
                                header("HTTP/1.0 ".$e->getMessage());
                                http_response_code(600); // Quel code pour les erreurs PDO?
                            }
                        }
                        else{
                            header("HTTP/1.0 405 Missing argument id");
                            http_response_code(405);
                        }
                        break;
                    case 'getConversation':
                        if(!emptyempty($_GET["id"])){
                            // read conversations by the id of a user
                            $idUsr = intval($_GET["id"]);
                            try{
                                $res=$conversationgw->getConversations($idUsr);
                                // retourner le résultat
                            } catch (PDOException $e) {
                                header("HTTP/1.0 ".$e->getMessage());
                                http_response_code(600); // Quel code pour les erreurs PDO?
                            }
                        }
                        else{
                            header("HTTP/1.0 405 Missing argument idUsr");
                            http_response_code(405);
                        }
                        break;
                    case 'getSkin':
                        try{
                            $res = $skingw->getSkins();
                            //retourner le résultat
                        } catch (PDOException $e) {
                            header("HTTP/1.0 ".$e->getMessage());
                            http_response_code(600); // Quel code pour les erreurs PDO?
                        }
                        break;
                    case 'getGames':
                        try{
                            $res = $gamegw->getGames();
                            //retourner le résultat
                        } catch (PDOException $e) {
                            header("HTTP/1.0 ".$e->getMessage());
                            http_response_code(600); // Quel code pour les erreurs PDO?
                        }
                        break;
                    default:
                        header("HTTP/1.0 406 unknown method");
                        http_response_code(406); // Le bon code ?
                        break;
                }
                break;

            case 'POST':
                switch ($requestName){
                    case 'postUser':
                        if(!empty($_POST["id"])){
                            $usr = new User($_POST["id"],$_POST["username"],$_POST["password"],$_POST["nationality"],$_POST["sex"],$_POST["dateOfBirth"],0,0,0,"S0001",[]);
                            try{
                                $usergw->postUser($usr);
                                http_response_code(200);
                            } catch (PDOException $e) {
                                header("HTTP/1.0 ".$e->getMessage());
                                http_response_code(600); // Quel code pour les erreurs PDO?
                            }
                        }
                        else{
                            header("HTTP/1.0 405 Missing user to create");
                            http_response_code(405);
                        }
                        break;
                    case 'postMatch':
                        if(!empty($_POST["id"])){
                            $match = new Match($_POST["id"],false,$_POST["idGame"],$_POST["idUsr"]);
                            try{
                                $matchgw->postMatch($match);
                                http_response_code(200);
                            } catch (PDOException $e) {
                                header("HTTP/1.0 ".$e->getMessage());
                                http_response_code(600); // Quel code pour les erreurs PDO?
                            }
                        }

                        break;
                    case 'postMessage':

                        break;
                    case 'postConversation ':

                        break;
                }
                break;

            case 'PUT':
                switch ($requestName){
                    case 'putUser':
                        
                        break;
                    case 'putMatch':

                        break;
                    case 'putMessage':

                        break;
                    case 'putConversation ':

                        break;
                }
                break;

            case 'DELETE':
                switch ($requestName){
                    case 'delUser':
                        
                        break;
                    case 'delMatch':

                        break;
                    case 'delMessage':

                        break;
                    case 'delConversation ':

                        break;
                }
                break;
            default :
                // Invalid request
                header("HTTP/1.0 405 Request Name Empty");
                http_response_code(405);
                break;
        }
            
    }
    
 ?>