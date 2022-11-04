<?php

//Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application.json; charset=UTF-8");
header("Access-Control-Allow-Method: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Checking that the method is correct and dealing with the error
if($_SERVER['REQUEST_METHOD'] != 'GET'){
    http_response_code(405);
    echo json_encode(["message" => "Unauthorized method"]);
}else{
    include_once '../dbConnection.php';
    include_once '../models/User.php';

    $db= new Database();
    $db= $db->establishConnection();

    $user = new User($db);
    $user->username="lulu";

    $stmt = $user->readOneUsername();

    if($stmt != false){

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);

        $user= [
            "id" => $id,
            "username" => $username,
            "password" => $password,
            "nationality" => $nationality,
            "sex" => $sex,
            "dateofBirth" => $dateOfBirth,
            "currentBobCoins"=>$currentBobCoins,
            "totalBobCoins" => $totalBobCoins,
            "nbGamesPlayed" => $nbGamesPlayed,
        ];

        http_response_code(200);

        echo json_encode($user);
        
    }
}

?>