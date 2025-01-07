<?php
    require '../assets/classDB.php';
    DB::connect();
    $cadena = "";
    $results = DB::getNlineWithModifieds( $_POST['guemes'], $_POST['cap'], $_POST['pag'] );
    foreach ($results as $value) {
        $cadena = $cadena.'<option value='.$value['nline'].'>'.utf8_encode($value['nline']).'</option>';
    }
    echo $cadena; 
?>