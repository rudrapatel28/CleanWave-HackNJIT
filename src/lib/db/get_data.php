<?php
include 'db_connection.php';
$thing = $_SESSION['email'];
$sql = "SELECT Email,F_name,Points FROM USER WHERE Email=$thing;"; // Replace with your actual table name
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<p>" . $row["Email"]. "</p>"; // Output data, replace column_name
        echo "<p>" . $row["F_name"]. "</p>"; // Output data, replace column_name
        echo "<p>" . $row["Points"]. "</p>"; // Output data, replace column_name
    }
} else {
    echo "0 results";
}

$conn->close();
?>
