<?php
    require '../assets/classDB.php';
    DB::connect();
    $results = DB::getCapWithoutModified( $_POST['guemes'] );
    $cadena = "";
    foreach ($results as $value) {
        $cadena = $cadena.'<option  value='.$value[0].'>'.utf8_encode($value[0]).'</option>';
    }
    echo $cadena;
?>