<?php
session_start();
$envVars = parse_ini_file('../lib/.env'); // Load the .env file

if ($envVars !== false) {
    $dbHost = $envVars['DB_HOST'];
    $dbUser = $envVars['DB_USERNAME'];
    $dbPassword = $envVars['DB_PASSWORD'];
    $dbName = $envVars['DB_DATABASE'];
    $port = "3306";
} else {
    echo "Error loading environment variables.";
}
$conn = new mysqli($dbHost, $dbUser, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];
$f_name = $_POST['f_name'];
$points = '0';

$sql = "INSERT INTO USER (Email, Password, F_name, Points) VALUES ('$email', '$password', '$f_name', $points)";
$result = $conn->query($sql);

if ($result === TRUE) {
    $_SESSION['email'] = $email;
    header('Location: upload.html'); // Redirect to a dashboard page
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
