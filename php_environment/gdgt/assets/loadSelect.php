<?php
    #Antiguo loadAll.php
    require_once '../assets/classDB.php';
    DB::connect();
    $results = DB::getLastLineModified( $_POST['guemes'] );
    $id = DB::getID($_POST['guemes'], $results[0], $results[1], $results[2]);
    $salida = <<< SALIDA
    <div class="form-row">
        <div class="col-md-6"> 
            <label for = "ncap"> Numero de Capitulo: </label> 
        </div>
        <div class="col-md-6"> 
            <select  class="form-control" id = "ncap" name = "ncap" required >
                <option value = $results[0] > $results[0] </option>
            </select> 
        </div>
    </div>
    <br>
    <div class="form-row">
        <div class="col-md-6"> 
            <label class = "npag"> Numero de Pagina: </label> 
        </div>
        <div class="col-md-6"> 
            <select  class="form-control" id = "npag" name = "npag" required>
                <option value = $results[1] > $results[1] </option>
            </select> 
        </div>
    </div>
    <br>
    <div class="form-row">
        <div class="col-md-6"> 
            <label class = "nline"> Numero de Linea: </label> 
        </div>
        <div class="col-md-6"> 
            <select  class="form-control" id = "nline" name = "nline" required>
                <option value = $results[2] > $results[2] </option>
            </select> 
            <input type="text" name="id" id="id" readonly="true" style="display:none" value=$id >
        </div>
    </div>
    SALIDA;
    
    echo $salida; 
?>
