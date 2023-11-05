
<?php
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

$conn = new mysqli($dbHost, $dbUser, $dbPassword, $dbName, $port);
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM USER WHERE Email='$email' AND Password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    session_start();
    $_SESSION['email'] = $email;
    echo("WOOT WOOT");
    header('Location: ../../CleanWave-Dashboard.html'); // Redirect to your dashboard or another page
} else {
    echo "Invalid email or password.";
}

$conn->close();
?>
