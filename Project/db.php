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
}
else {
  echo "Error creating database: " . $conn->error ."<br>";
}

mysqli_select_db($conn, "DB121193");
if (!$conn) {
  die ("Connection failed: " . mysqli_connect_error());
}

$sql = "CREATE TABLE HighScores (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(30) NOT NULL,
score INT,
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  echo "Table HighScores created successfully";
}
else {
  echo "Error creating table: " . $conn->error;
}

$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);

// close the connection
$conn->close();
?>
