
 <?php 
    include ("./dbConnection.php");
    include ("./gateways/userGateway.php");

    // Connection to database
    // A changer quand la base de données sera hébergée, comment masquer les var?
    $dsn ="mysql:dbname=bobParty;host=127.0.0.1;port=8889";
    $username="root";
    $password="root";   

    $database = new DatabaseConnection($dsn,$username,$password);
    
    $usergw = new UserGateway($database);

    // test postUser
    $usr = new User("U0004","billy","bulbe","francais","F","2023-03-12",10,10,2);
    $usergw->deleteUser($usr);
    $res=$usergw->getUsers();
    echo json_encode($res);
    // Managing request and routing

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
                            //read an user by his id
                            $id = intval($_GET["id"]);
                            $res=$usergw->getUserById($id);
                        }
                        elseif (!empty($_GET["username"])){
                            // read an user by his username
                            $username = intval($_GET["username"]);
                            $res=$usergw->getUserByUsername($username);
                        }
                        else{
                            // read all users
                            $res= $usergw->getUsers();
                            echo json_encode($res);
                        }
                        break;
                    case 'getMatch':

                        break;
                    case 'getMessage':

                        break;
                    case 'getConversation ':

                        break;
                }
                break;

            case 'POST':
                switch ($requestName){
                    case 'postUser':
                       // rcreate a new user
                       $res= $usergw->postUser();
                       echo json_encode($res);
                        break;
                    case 'postMatch':

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
                   /* case 'putMessage':

                        break;   */
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
                /*  case 'delMessage':

                        break;  */
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