<?php
    require_once "../assets/classDB.php";
    DB::connect();  
    session_start();
    if( isset( $_SESSION[ 'user_id' ] ) ){
        $_SESSION[ 'user_name' ] = DB::getNameUser( $_SESSION[ 'user_id' ] );
    }
?>

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/0f48d8c00d.js"></script>
    <link rel="stylesheet" href="../assets/style.css">
    <title> Ground Truth </title>
    <link rel="shortcut icon" href="../img/favicon.ico">
  </head>
  <body>
    <nav class="shift navbar navbar-expand-lg navbar-light bg-light text-dark justify-content-between" >
        <a class="navbar-brand" href="#"> 
            <h3 id="titulo">Ground Truth - GD</h3>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="../correction/selectgd.php">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../correction/selectgd.php">Seguir corrigiendo</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../correction/modify.php">Modificar Corrección</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../structure/aboutgd.php"></i>Güemes Documentado</a>
            </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown mr-3">
                    <a href="" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                        <i class="fas fa    -user"></i> 
                        <?php print_r ($_SESSION['user_name']); ?> 
                    </a>
                    <div class="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink" >
                        <a href="../assets/changePassword.php" class="dropdown-item "><i class="fas fa-user-edit"></i> Cambiar contraseña</a>
                        <div class="dropdown-divider"></div>
                        <a href="../register/logout.php" class="dropdown-item "><i class="fas fa-sign-out-alt"></i> Salir <i class="fas fa-user-times"></i> </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>