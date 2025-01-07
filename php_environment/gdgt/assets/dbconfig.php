<?php
#Configuracion del servidor sin uso
class dbconfig{
    protected $serverName;
    protected $userName;
    protected $passCode;
    protected $dbName;

    function dbconfig(){
        $this -> serverName = 'localhost';
        $this -> userName = 'root';
        $this -> passCode = '1234';
        $this -> dbName = 'gdGroundTruth';
    }
}
    