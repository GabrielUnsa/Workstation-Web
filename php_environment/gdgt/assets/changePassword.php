<?php
    #Pantalla de Cambio de contraseña
    require_once '../structure/header.php';
    require_once '../assets/functions.php';
    require_once '../assets/classDB.php';

    if(isset( $_POST['btn_cambiar']) ){
        if( !empty( $_POST['password'] ) && !empty( $_POST['conf_password'] ) ){
            if( $_POST['password'] == $_POST['conf_password'] ){
                try{
                        DB::updatePassword( $_SESSION['user_id'], password_hash( $_POST['password'], PASSWORD_BCRYPT ) );
                        echo getAlert( 'Contraseña modificada con éxito' , $alertClass = 'alert-success');
                    }catch(PDOException $e){
                        print 'ERROR: '.$e->getMessage();
                        echo getAlert( '<br/> Error intente mas tarde', $alertClass = 'alert-success' );
                    }
            }else{
                echo getAlert( "No coinciden las contraseñas ingresadas" , $alertClass = 'alert-danger');
            }
        }else{
            echo getAlert( "Debe completar todos los campos obligatorios", $alertClass = 'alert-warning');
        }
    }
?>

    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-sm-10 col-md-6 mx-auto">
                <form action="assets/changePassword.php" method="POST">
                    <div class="col-md-9">
                        <div class="card">
                            <div class="card-header">
                                <h4>Cambiar contraseña</h4>
                            </div>
                            <div class="card-body">
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" name="password" id="password" placeholder="Ingrese su contraseña" aria-label="Ingrese su contraseña" aria-describedby="button-addon2">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="mostrarPassword( 'password', 'icon_hide' )">
                                        <i class='fas fa-eye-slash' id="icon_hide"></i>
                                    </button>
                                </div>
                                <br>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" name="conf_password" id="conf_password" placeholder="Confirme su contraseña" aria-label="Confirme su contraseña" aria-describedby="button-addon2">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="mostrarPassword( 'conf_password', 'icon_hiden2' )">
                                        <i class='fas fa-eye-slash' id="icon_hide2"></i>
                                    </button>
                                </div>
                                <br>
                                <div class="text-center mb-3">
                                    <button class="btn btn-primary w-100" id="btn_cambiar" name="btn_cambiar" type="submit" > Actualizar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

<?php require_once '../structure/footer.php' ?>

<script>
    function mostrarPassword( pswd, ihide   ){
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