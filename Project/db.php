<?php
$servername = "localhost";
$username = "csci130";
$password = "123456";
$dbname = "DB121193";

$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error ."<br>");
}
echo "Connected successfully <br>";


// Creation of the database
$sql = "CREATE DATABASE DB121193";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error ."<br>";
}

$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);

// close the connection
$conn->close();
?>
