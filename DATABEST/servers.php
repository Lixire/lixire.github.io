<?php
    $textboxString = $_POST["textbox"];
    echo $textboxString;
    include "mysqlconfig.php";
    $conn = new mysqli(constant("HOST"), constant("USER"), constant("PASSWORD"), constant("DATABASE"));
    $textboxString = mysqli_real_escape_string($conn, $textboxString);
        if ($conn->connect_error) {
            echo "You computer does not work fml.";
            die("Connection failed: " . $conn->connect_error);
        }

    $query = $conn->query("INSERT INTO bigbrotheriswatchingyourinput (datain) 
                            VALUES('$textboxString')");
    if($query){
        echo " SUCCESSFULLY ENTERED";
    }
    else{
        die("Error: ".$conn->errno." ".$conn->error);
    }
?>
