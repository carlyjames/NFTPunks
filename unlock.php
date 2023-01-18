<?php
$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['REQUEST_URI'],1));


if(isset($_GET['unlockList'])){

  echo $_GET['unlockList'];

}





switch ($method) {
  case 'PUT':
    // print_r($request);  
    break;
    case 'POST':
      if($request[1] == "index.php?data=log"){
          
      echo $request;
      }
   
      break;
    case 'GET': 
      echo json_encode(array("data"=>array('TokenType'=>"ERC721","address"=>"0xbb10AA6B291189140b76D960561aCDe61CEd7EA9")));
      break;
default:
//   print_r($request);  
    break;
}

?>