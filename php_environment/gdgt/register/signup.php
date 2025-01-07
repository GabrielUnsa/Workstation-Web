<?php
    #Ready
    require '../assets/classDB.php';
    DB::connect();
    $msg = '';
    if( DB::userExits( $_POST['nickname'] ) ){
        $msg = 'Existe un usuario con el mismo nickname';
    }else{
        if ( $_POST['password'] == $_POST['conf_password'] && !empty($_POST['password']) && !empty($_POST['conf_password']) ) {
            try {
                $msg = DB::setNewUser(  $_POST['nombre'],  
                                        $_POST['apellido'], 
                                        $_POST['nickname'], 
                                        $_POST['password'] );
                echo '<script language="javascript">';
                echo 'var s=alert("Usuario creado existosamente!"); ';
                echo 'setTimeout (window.location="../index.php", 6000);';
                echo '</script>';
            } catch (PDOException $e) {
                print 'ERROR: '.$e->getMessage();
                print '<br/> Error intente mas tarde';
            }
        }else{
            $msg = 'No coinciden las contraseñas ingresadas';
        }
    }
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/0f48d8c00d.js"></script>
    <link rel="stylesheet" href="../assets/style.css">
    <title> Registro </title>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-dark p-2 color_personalizado" >
        <div class="container">
            <a href="../index.php" class="navbar-brand">
                <h2>Ground Truth</h2> 
            </a>
            <a href="../index.php" class="navbar-brand ">
                <h3>Güemes Documentado</h3> 
            </a>
        </div>

    </nav>
    <br>
    <section id="login">
        <div class="container" >
            <div class="row">
                <div class="col-md-4 col-sm-10 mx-auto align-items-center">

                    <div class="card" style="border-radius: 15px;">
                        <div class="card-header">
                            <h4 class="text-center">Registro</h4>
                        </div>

                        <div class="card-body">
                            <form action="signup.php" method="POST">
                                <label> Nombre Completo
                                <input type="text" class="form-control" name="nombre" placeholder="Martin Miguel" required >
                                </label>
                                <br>
                                <label> Apellido
                                <input type="text" class="form-control" name="apellido" placeholder="de Güemes" required>
                                </label>
                                <br>
                                <label>Usuario
                                <input type="text" class="form-control" name="nickname" placeholder="MartinGuemes" required>
                                </label>
                                <br>
                                <label> Contraseña </label>
                                <div class="input-group">
                                    <input type="password" class="form-control" name="password" id="password" placeholder="Ingrese su contraseña" aria-label="Ingrese su contraseña" aria-describedby="button-addon2" required>
                                    <span class="input-group-btn">
                                    <button class="btn btn-outline-secundary" type="button" id="button-addon2" onclick="mostrarPassword( 'password', 'icon_hide' )">
                                        <i class='fas fa-eye-slash' id="icon_hide"></i>
                                    </button>
                                    </span>
                                </div>
                                <br>
                                    <label>Confirme su Contraseña </label>
                                <div class="input-group">
                                    <input type="password" class="form-control" name="conf_password" id="conf_password" placeholder="Confirme su contraseña" aria-label="Confirme su contraseña" aria-describedby="button-addon2" required>
                                    <span class="input-group-btn">
                                    <button class="btn btn-outline-secundary" type="button" id="button-addon2" onclick="mostrarPassword( 'conf_password', 'icon_hide2' )">
                                        <i class='fas fa-eye-slash' id="icon_hide2"></i>
                                    </button>
                                    </span>
                                </div>
                                <br>
                                <br>
                                <div class="col text-center">
                                    <button type="submit" class="btn btn-primary w-20" ><i class="fas fa-user-plus"></i> REGISTRAR</button>
    			                </div>	
                                <br>
                                <br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php  require_once "../structure/footer.php"; ?>

<script>
    function mostrarPassword( pswd, ihide ){
      var tipo = document.getElementById(pswd);
      var icon = document.getElementById(ihide);
      if(tipo.type == "password"){
          tipo.type = "text";
          icon.className = "fas fa-eye";
      }else{
          tipo.type = "password";
          icon.className = "fas fa-eye-slash";

      }
  }
</script>
