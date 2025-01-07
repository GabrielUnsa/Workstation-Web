<?php
    require_once '../structure/header.php';
    require_once '../assets/classDB.php';
    require_once '../assets/functions.php';
    #Ready
    DB::connect();
    $msg = "";
    $res = getNumeroTomo( $_POST['GD']);
    if ( (int) $_POST['id'] === 0){
        $_POST['id'] = DB::getID( $_POST['GD'], $_POST['ncap'], $_POST['npag'], $_POST['nline'] );
    }
    if( isset($_POST['guardar']) ){
        $alert = "<strong> Se guardo con éxito!</strong> <br>";
        $alert .= " Tomo: ". getNumeroTomo( $_POST['GD'] )."<br>";
        $alert .= " Capítulo: ".$_POST['ncap']. "<br>";
        $alert .= " Página: " .$_POST['npag']."<br>";
        $alert .= " Línea: ".$_POST['nline']."<br>";
        $msg = getAlert($alert, "alert-success");
        //$msg = getSuccess($alert,$_POST['GD'], $_POST['ncap'], $_POST['npag'], $_POST['nline']);
        echo $msg;
        DB::updateInfo( $_POST['GD'], $_POST['id'], $_SESSION['user_id'], $_POST['tocr'] );

        if ( (int) DB::getLowerLimit( $_POST['GD'] , (int) $_POST['id'] ) > 0 ) {
            $_POST['id'] = $_POST['id'] + 1;
            $results = DB::getNextLine( $_POST['GD'], $_POST['id'] );
            $_POST['ncap'] = $results['npag'];
            $_POST['npag'] = $results['ncap'];
            $_POST['nline'] = $results['nline'];
        }else{
            echo '<script language="javascript">';
            echo 'alert("No es posible consultar. :(")';
            echo '</script>';
        }
    }
    if( isset( $_POST['anterior'] ) ){
        if ((int) $_POST['id'] > 1 ){
            $_POST['id'] = $_POST['id'] - 1;
            $results = DB::getPriorLine( $_POST['GD'], $_POST['id'] );
            $_POST['ncap'] = $results['npag'];
            $_POST['npag'] = $results['ncap'];
            $_POST['nline'] = $results['nline'];
        } else{
            echo '<script language="javascript">';
            echo 'alert("No es posible consultar. :(")';
            echo '</script>';
            }
    }
/*     if ( (int) $_POST['id'] === 1){
        $results = DB::getOnsetTocr( $_POST['GD'] );
        $ant = " ** Esta en el comienzo del documento :) **";
        $sig = $results[1]['tocr'];
        $tocr = $results[0]['tocr'];
    } else{
        $s = DB::existNextTcorrg( $_POST['GD'], $_POST['id']);
        $results = DB::getPriorTcorrg( $_POST['GD'], $_POST['id'] );
        $ant = $results[0]['tcorrg'];
        $tocr = $results[1]['tcorrg'];
        if ($s == 1){
            $sig = $results[2]['tcorrg'];
        } else {
            $sig = DB::getNextTocr( $_POST['GD'], $_POST['id'] );
        }

    } */
    if ( (int) $_POST['id'] === 1 ){
        $ant = '****** Llegó al comienzo del documento :) ******';
        $tocr = DB::getIDText( $_POST['GD'], (int) $_POST['id'] )[0];
        $sig = DB::getAfterIdText( $_POST['GD'], (int) $_POST['id'], 3 );
    }else{
        if(  (int) DB::getLowerLimit( $_POST['GD'] , (int) $_POST['id'] ) == 0  ){
            $ant = DB::getBeforeIdText( $_POST['GD'], (int) $_POST['id'], 3 );
            $tocr = DB::getIDText( $_POST['GD'], (int) $_POST['id'] );
            $sig  = " ****** Llegó al final del documento :) ******";
        }else{
            if( DB::existNextTcorrg( $_POST['GD'] , (int) $_POST['id'] ) ){
                $limitext = DB::getUpperLimit( $_POST['GD'], (int) $_POST['id'] );
                $ant = DB::getBeforeIdText( $_POST['GD'], (int) $_POST['id'], $limitext );
                $tocr = DB::getIDTextCorrg( $_POST['GD'], (int) $_POST['id'] )[0];
                $sig = DB::getTextforPanel( $_POST['GD'] , (int) $_POST['id'] );
            }else{
                $limitext = DB::getUpperLimit( $_POST['GD'], (int) $_POST['id'] );
                $ant = DB::getBeforeIdText( $_POST['GD'], (int) $_POST['id'], $limitext );
                $tocr = DB::getIDText( $_POST['GD'], (int) $_POST['id'] )[0];
                $limitext = DB::getLowerLimit( $_POST['GD'], (int) $_POST['id'] );
                $sig = DB::getAfterIdText( $_POST['GD'], (int) $_POST['id'], $limitext );
            }
        }
    }
?>

    <div class="container-fluid mt-5">
        <form id="FORM" method="POST" action="" style="display:inline">
        <div class="row row-cols-1 row-cols-md-3">
            <div class="col-sm-12 col-md-3">
                <div class="card border-secondary mb-3">
                    <div class="card-header ">
                        <h5> Ubicación actual</h5>
                    </div>
                    <div class="card-body text-secondary ">
                        <ul class="list-group">
                                <li class="list-group-item  d-flex justify-content-between align-items-center ">
                                    <a class="text-dark" >Tomo </a>
                                    <span class="badge badge-secondary badge-pill"> <?php  echo $res;?> </span>
                                    <input type="text" name="GD" id="GD" readonly="true" style="display:none" value=" <?php echo $_POST['GD'];?>">
                                    <input type="text" name="id" id="id" readonly="true" style="display:none" value=" <?php echo $_POST['id'];?>">

                                </li>
                                <?php
                                echo getItem('Capitulo',$_POST['ncap'],'ncap' );
                                echo getItem('Página',$_POST['npag'],'npag' );
                                echo getItem('Línea',$_POST['nline'],'nline' ); ?>
                        </ul>
                        <br>
                        <div class="text-center">
                            <a class="btn btn-warning " href="modify.php" role="button">VOLVER</a>
                            <a class="btn btn-warning text-dark" id="ver_pdf" data-toggle="collapse" data-target="#collapseTwo">
                                <i class="fas fa-file-pdf"></i> VER PDF
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col mb-4">
                <div class="card border-secondary " style="max-width: 60rem;">
                    <div class="card-header">
                        <h5> Revisar </h5>
                    </div>
                    <div class="card-body text-secondary">
                        <div class="form-group">
                            <label> Lineas anteriores corregidas: </label>
                            <div class="input-group">
                                 <textarea style = 'background-color:#FAEBA6; resize: none; overflow: hidden; text-align: left;' class="form-control" name="ant" id="ant" disabled rows="3"> <?php  echo $ant; ?> </textarea>
                            </div>
                            <br>
                            <label for="tocr">Línea a corregir: </label>
                                <div class="input-group">
                                    <input  style='background-color:#F6D2AE;' class="form-control"  name="tocr" id="tocr" value='<?php  echo $tocr; ?>' autofocus />
                                </div>
                            <br>

                            <label for="tsug">Línea sugerida: </label>
                            <div class="input-group">
                                <input style='background-color:#B4D3E8;' class="form-control" name="tsug" id="tsug" disabled value='<?php  echo $tocr; ?>' />
                                <button type="button" class="btn btn-default btn-sm btn btn-secondary" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Copiar y pegar" onclick="copy2()">
                                <i class="fas fa-copy"></i> Copiar
                                </button>
                            </div>
                            <br>
                            <div class="input-group">
                                <i class="fa fa-info-circle" data-toggle="tooltip" title="En principio muestra lineas corregidas sino líneas OCR" id='info_line'></i>
                                <label> Lineas siguientes corregidas:  </label>
                            </div>
                            <div class="input-group">
                                <textarea style = 'background-color:#FAEBA6; resize: none; overflow: hidden; text-align: left;' class="form-control" name="ant" id="ant" disabled rows="3"> <?php  echo $sig; ?> </textarea>
                            </div>
                            <br>
                            
                            <div class="text-center">
                                <button class="btn btn-info" type="submit" name="anterior" id="anterior">
                                    <i class='fas fa-angle-left'></i> ANTERIOR
                                </button>
                               <button class="btn btn-success" type="submit" name="guardar" id="guardar">
                                    <i class='fas fa-save'></i> GUARDAR <i class='fas fa-angle-right'></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    </div>
    <div class="container text-center" >
        <div id="collapseTwo" class="collapse in">
            <div class="panel-body">
                <?php echo "<embed src='http://www.portaldesalta.gov.ar/libros/guemes/g".$res.".pdf#page=".$_POST['npag']." ' type='application/pdf' width='90%' height='450px'/>"; ?>
            </div>
        </div>
    </div>

<?php require_once '../structure/footer.php' ?>

<!-- para copy paste !-->
<script type="text/javascript">

    function copy() {
        $("#tcorrg").val(document.getElementById("tocr").value);
    }

    function copy2() {
        $("#tcorrg").val(document.getElementById("tsug").value);
    }

    $(document).ready(function(){
        $("#anterior").click(function(){
        $("#tcorrg").removeAttr("required");
        });
    });

</script>

<script>
$(document).ready(function() {
  $('#info_line').tooltip();
})
</script>

<script>
    $(document).ready(function(){
    $("#collapseTwo").on("hide.bs.collapse", function(){
        $("#ver_pdf").html('<i class="fas fa-file-pdf"></i>VER PDF ');
    });
    $("#collapseTwo").on("show.bs.collapse", function(){
        $("#ver_pdf").html('OCULTAR PDF');
    });
    });
</script>