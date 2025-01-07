<?php 
    #Ready
    require_once 'assets/classDB.php';

    #Iniciar Sesion
    session_start();

    #Si la sesion fue iniciada ir al panel de seleccion de gd
    if( isset($_SESSION['user_id']) ){
        header('Location: ./correction/selectgd.php');
    }
    
    #Inicio de Sesion con Password y Nickname
    if( !empty( $_POST['nickname'] ) && !empty( $_POST['password'] ) ){
        $msg = '';
        DB::connect();
        $results = DB::getUserInfo($_POST['nickname']);
        if( count($results) > 0 && password_verify( $_POST['password'], $results['password'] ) ){
            $_SESSION['user_id'] = $results['idusr'];
            header("Location: ./correction/selectgd.php"); #redireccionamiento
        }
        else{
            $msg = 'No existe el usuario o la contraseña es incorrecta';
        }
    }
?>

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><script src="https://kit.fontawesome.com/0f48d8c00d.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/style.css">

    <title> Ground Truth </title>
  </head>

  <body>
    <nav class="navbar navbar-expand-lg navbar-dark p-3 color_personalizado" >
        <div class="container">
            <a href="index.php" class="navbar-brand">
                <h2>Ground Truth</h2> 
            </a>
            <a href="index.php" class="navbar-brand ">
                <h3>Güemes Documentado</h3> 
            </a>
        </div>
    </nav>

    <img src="img/logo-gd.svg" alt="" class="img-fluid mx-auto d-block my-5"> 

    <section id="login">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-md-6 mx-auto ">

                    <div class="card">
                        <div class="card-header">
                            <h3 class="text-center"> Inicio de sesión  </h3>
                        </div>
                        <div class="card-body">
                            <form action="index.php" method="POST">
                                <div class="form-group">
                                    <label for="nickname">Usuario</label>
                                    <input type="text" class="form-control" name="nickname" placeholder="Ingresar usuario">
                                </div>
                                <div class="form-group">
                                    <label for="password">Contraseña</label>
                                    <input type="password" class="form-control" name="password" placeholder="Ingresar contraseña">
                                </div>
                                <div class="text-center mb-3">
                                    <button type="submit" class="btn btn-primary w-100 "><i class="fas fa-user"></i> INGRESAR</button>
                                </div>
                                <div class="text-center mb-3">
                                    <p> o <a href="register/signup.php"> Registrarse </a> </p> 
                                </div>
                            </form>
                            <?php if( !empty($msg) ): ?>
                                <p> <?php $msg ?> </p>
                            <?php endif; ?>
                            <br>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer id="main-footer" class="text-white mt-4 p-4">
        <div class="container ">
            <div class="row">
                <div class="col">
                    <div class="footer-copyright text-center py-3"> 
                        &copy; 2021 Copyright
                    </div>
                    <p class="lead text-center">
                        <span>Ground Truth - Güemes Documentado</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/functions.js"></script>
    
    </body>
</html>