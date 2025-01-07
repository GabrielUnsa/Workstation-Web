<?php
    #Ready
    session_start();
    session_unset();
    session_destroy();
    header('Location: ./gtgd/index.php');
?>