<?php

//Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application.json; charset=UTF-8");
header("Access-Control-Allow-Method: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Checking that the method is correct and dealing with the error
if($_SERVER['REQUEST_METHOD'] != 'DELETE'){
    http_response_code(405);
    echo json_encode(["message" => "Unauthorized method"]);
}else{
    include_once '../dbConnection.php';
    include_once '../models/User.php';

    $db= new Database();
    $db= $db->establishConnection();

    $user = new User($db);
    $user->id="4";
    $user->username="petitFilou";
    $user->password="blblbl";
    $user->nationality="Francaise";
    $user->sex="M";
    $user->dateOfBirth="2002-05-10";


    $stmt = $user->delete();

    if($stmt->rowCount() > 0){
        
        echo "User deleted successfully";
        http_response_code(200);
        
    }
    else{
        echo "The user can't be deleted because not found in database";
        http_response_code(200);
    }
}

?>