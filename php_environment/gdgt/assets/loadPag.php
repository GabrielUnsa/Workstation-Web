<?php
    require '../assets/classDB.php';
    DB::connect();
    $cadena = "";
    $results = DB::getPageWithoutModified( $_POST['guemes'], $_POST['cap'] );
    var_dump($results);
    foreach ($results as $value) {
        $cadena = $cadena.'<option value='.$value[0].'>'.utf8_encode($value[0]).'</option>';
    }
    echo $cadena; 
?>