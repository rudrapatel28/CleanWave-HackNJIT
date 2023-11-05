<?php
$envVars = parse_ini_file('../.env'); // Load the .env file

if ($envVars !== false) {
    $dbHost = $envVars['DB_HOST'];
    $dbUser = $envVars['DB_USERNAME'];
    $dbPassword = $envVars['DB_PASSWORD'];
    $dbName = $envVars['DB_DATABASE'];
    $port = "3306";
} else {
    echo "Error loading environment variables.";
}

// establish the connection
$conn = new mysqli($dbHost, $dbUser, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
