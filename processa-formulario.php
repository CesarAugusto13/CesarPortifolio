
<?php
$servername = "127.0.0.1:3306";
$username = "root";
$password = "1234";
$dbname = "formulario_db";

try {
    // Cria a conexão usando PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Configura o PDO para lançar exceções em caso de erro
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Conectado com sucesso";
} catch (PDOException $e) {
    echo "Falha na conexão: " . $e->getMessage();
}
?>