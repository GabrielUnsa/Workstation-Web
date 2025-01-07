<?php
    class DB{
        #Variables
        protected static $records;
        protected static $conn = NULL;

        /* Funciones ABMs */
        public static function connect(){
            try{
                self::$conn = new PDO('mysql:host=localhost;dbname=gdGroundTruth;charset=utf8', 'root', '1234');
            }catch (PDOException $e){
                die('No se pudo establecer la conexion: '. $e->getMessage());
            }
        }

        /*Devuelve la informacion de un usuario:
            ID de usuario
            Nickname
            Password
        */
        public static function getUserInfo( $usr ){
            self::$records = self::$conn -> prepare("SELECT idusr, nickname, password FROM users WHERE nickname = :nickname");
            self::$records -> bindParam(":nickname", $usr );
            self::$records -> execute();
            return self::$records -> fetch();
        }

        #Devuelve True\False si existe un usuario dado
        public static function userExits( $usr ){
            self::$records = self::$conn -> prepare("SELECT COUNT(nickname) FROM users WHERE nickname = :nickname");
            self::$records -> bindParam(":nickname",$usr);
            self::$records -> execute();
            self::$records = self::$records -> fetchColumn();
            if ( self::$records > 0 ){
                return true;
            }else{
                return false;
            }
        }

        #Agrega un nuevo usuario a la base de datos
        public static function setNewUser( $name, $surname, $usr, $pwd){
            $pwd = password_hash($pwd, PASSWORD_BCRYPT);
            self::$records = self::$conn -> prepare("INSERT INTO users (nombre, apellido, nickname, password) VALUES ( :nombre, :apellido, :nickname, :password ) ");
            self::$records -> bindParam(":nombre", $name);
            self::$records -> bindParam(":apellido", $surname);
            self::$records -> bindParam(":nickname", $usr);
            self::$records -> bindParam(":password", $pwd);
            if ( self::$records -> execute() ){
                return "Nuevo usuario Agregado";
            }else{
                return "No se pudo agregar su usuario, por favor intente mas tarde";
            }
        }

        #Devuelve el nombre de un usuario
        public static function getNameUser( $idusr ){
            self::$records = self::$conn -> prepare("SELECT nombre FROM users WHERE idusr = :idusr");
            self::$records -> bindParam(":idusr", $idusr);
            self::$records -> execute();
            self::$records = self::$records -> fetch();
            return self::$records['nombre'];
        }

        #Actualiza la contraseña de un usuario
        public static function updatePassword( $user_id, $password ){
            self::$records = self::$conn -> prepare("UPDATE users SET password = :password WHERE idusr = :idusr");
            self::$records -> bindParam(":password", $password);
            self::$records -> bindParam(":idusr", $user_id);
            self::$records -> execute();
        }

        /* Manejo de Lineas y base de datos */
        /* Devuelve id de la linea, para ello se tiene que pasar:
            Numero de Capitulo
            Numero de Pagina
            Numero de Linea
            GD en cuestion
        */
        public static function getID( $gd, $ncap, $npag, $nline ){
            self::$records = self::$conn -> prepare("SELECT id FROM {$gd} WHERE ncap = :ncap AND npag = :npag AND nline = :nline");
            self::$records -> bindParam(":ncap", $ncap);
            self::$records -> bindParam(":npag", $npag);
            self::$records -> bindParam(":nline", $nline);
            self::$records -> execute();
            self::$records = self::$records -> fetch();
            return self::$records[0];
        }

        #Carga el texto corregido, junto a su fecha y el usuario quien lo corrigio
        public static function updateInfo( $gd, $id, $user_id, $tcorrg ){
            date_default_timezone_set("America/Argentina/Salta");
            $fecha = date('Y-m-d H:i:s', time());
            self::$records = self::$conn -> prepare("UPDATE {$gd} SET tcorrg = :tcorrg, fcorrg = :fcorrg, idusr = :idusr WHERE id = :id");
            self::$records -> bindParam(":tcorrg", $tcorrg);
            self::$records -> bindParam(":fcorrg", $fecha);
            self::$records -> bindParam(":idusr", $user_id);
            self::$records -> bindParam(":id", $id);
            self::$records -> execute();
        }

        /*
        Ambas Funciones solo estan en modifying
            Aumenta el ID para obtener los datos de la siguiente/anterior linea
            no se debe usar pues es una mala practica de programacion. Se tiene que ver la forma de eliminarlo
            Pero ojo necesitamos esto??? controlemos
        public static function getNextLine( $gd, $id ){
            self::$records = self::$conn -> prepare("SELECT ncap, npag, nline FROM {$gd} WHERE id = :id ");
            self::$records -> bindParam(":id", $id);
            self::$records -> execute();
            return self::$records -> fetch();
        }
        public static function getPriorLine( $gd, $id ){
            self::$records = self::$conn -> prepare("SELECT ncap, npag, nline FROM {$gd} WHERE id = :id");
            self::$records -> bindParam(":id", $id);
            self::$records -> execute();
            self::$records = self::$records -> fetch();
            return self::$records;
        }*/

        /* Devuelve la ultima linea modificada
            ncap
            nline
            npag*/
        public static function getLastLineModified( $gd ){
            self::$records = self::$conn -> prepare("SELECT ncap, npag, nline FROM {$gd} WHERE idusr IS NULL LIMIT 1");
            self::$records -> execute();
            self::$records = self::$records -> fetch();
            return self::$records;
        }

        /* Devuelve las primaras dos lineas de tocr
            Solo usado en modifying.php
        */
        public static function getOnsetTocr( $gd ){
            self::$records = self::$conn -> prepare("SELECT tocr FROM {$gd} WHERE id >= 1 order by id limit 2");
            self::$records -> execute();
            self::$records = self::$records -> fetchAll(PDO::FETCH_ASSOC);
            return self::$records;
        }

        /* Devuelve las tres lineas ocr de un id anterior
            Sin usuar
        public static function getPriorTocr( $gd, $lastid ){
            $lastid -= 1;
            self::$records = self::$conn -> prepare("SELECT tocr FROM {$gd} WHERE id >= :id order by id limit 3");
            self::$records -> bindParam(":id", $lastid);
            self::$records -> execute();
            return self::$records -> fetchAll( PDO::FETCH_ASSOC );
        }*/

	#this function return true/false if exist the correction for that line on the gd
        /* La funcion devuelve si existe la siguiente linea corregida
        */
        public static function existNextTcorrg( $gd, $lastid ){
            self::$records = self::$conn -> prepare("SELECT tcorrg FROM {$gd} WHERE id = :id");
            self::$records -> bindParam(":id", $lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetch();
            if (self::$records['tcorrg'] == NULL){
                return false;
            } else return true;
        }

        /* Devuelve la cantidad de lineas que quedan por corregir,
            * Si hay mas de 3 devuelve 3 pues son la cantidad de lineas maximas que se muestran
            en la pantalla de correccion
            * En caso contrario devuelve 3, 2, 1 o 0 de lineas faltantes a corregir asi solamente
            se mostraran esas lineas. */
        public static function getLowerLimit( $gd, $lastid ){
            self::$records = self::$conn -> prepare( "SELECT COUNT(id) FROM {$gd}" );
            self::$records -> bindParam(":id",$lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetchColumn();
            $cantId = self::$records;
            self::$records = self::$conn -> prepare("SELECT COUNT(id) FROM {$gd} WHERE id > :id");
            self::$records -> bindParam(":id",$lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetchColumn();
            self::$records = $cantId - self::$records;
            if ( self::$records < 3 ){
                return self::$records;
            }else{
                return 3;
            }
        }

        /* Devuelve las lineas corregidas anteriormente,con la identica condicion que arriba */
        public static function getUpperLimit( $gd, $lastid ){
            self::$records = self::$conn -> prepare("SELECT COUNT(id) FROM {$gd} WHERE id < :id");
            self::$records -> bindParam(":id",$lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetchColumn();   
            if ( self::$records > 3 ){
                return 3;
            }else{
                return self::$records;
            }
        }

        /* Devuelve las N lineas de texto corregido siendo N = 3 .. 1 */
        public static function getBeforeIdText( $gd, $lastid, $limitext ){
            $result = '';
            self::$records = self::$conn -> prepare("SELECT tcorrg FROM {$gd} WHERE id < :id ORDER BY id DESC LIMIT {$limitext}");
            self::$records -> bindParam(":id", $lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetchAll( PDO::FETCH_ASSOC );
            for ( $i=(int)$limitext - 1; $i >= 0 ; $i=$i - 1 ){
                $result = $result.self::$records[$i]['tcorrg']."&#10;";
            }
            return $result;
        }

        /* Devuelve la linea de tocr apuntada por el id */
        public static function getIDText( $gd, $lastid ){
            self::$records = self::$conn -> prepare("SELECT tocr FROM {$gd} WHERE id = :id");
            self::$records -> bindParam(":id", $lastid);
            self::$records -> execute();
            return self::$records -> fetch();
        }

        /* Devulve la linea tcorrg apuntada por el id */
        public static function getIDTextCorrg( $gd, $id ){
            self::$records = self::$conn -> prepare("SELECT tcorrg FROM {$gd} WHERE id = :id");
            self::$records -> bindParam(":id", $id);
            self::$records -> execute();
            return self::$records -> fetch();
        }

        /* Devuelve las N lineas de texto Tocr por corregir, con N = 3 .. 1 */
        public static function getAfterIdText( $gd, $lastid, $limitext ){
            $result = '';
            self::$records = self::$conn -> prepare("SELECT tocr FROM {$gd} WHERE id > :id ORDER BY id LIMIT {$limitext}");
            self::$records -> bindParam(":id", $lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetchAll( PDO::FETCH_ASSOC );
            for ( $i=0; $i < (int)$limitext; $i=$i+1 ){
                $result = $result.self::$records[$i]['tocr']."&#10;";
            }
            return $result;
        }

        /* Devuelve las cantidad de lineas restantes de texto corregido dado un id
           Ejemplo si estoy leyendo y tengo 2 lineas corregidas restantes entonces devuelve la cantida de lineas corregidas
           Diferente a getLoweLimit */
        public static function getmaxLineModifieds( $gd, $id ){
            self::$records = self::$conn -> prepare( "SELECT COUNT(tcorrg) FROM {$gd} WHERE tcorrg IS NOT NULL AND id > :id" ); 
            self::$records -> bindParam( ":id", $id );
            self::$records -> execute();
            self::$records = self::$records -> fetchColumn();
            return self::$records;
        }

        /* Devuelve tcorrg no nulos mayores al id */
        public static function getTcorrg( $gd, $id, $limitext ){
            $result = '';
            self::$records = self::$conn -> prepare("SELECT tcorrg FROM {$gd} WHERE id > :id ORDER BY id LIMIT {$limitext}");
            self::$records -> bindParam(":id", $id);
            self::$records -> execute();
            self::$records = self::$records -> fetchAll( PDO::FETCH_ASSOC );
            for ( $i=0; $i < (int)$limitext; $i=$i+1 ){
                $result = $result.self::$records[$i]['tcorrg']."&#10;";
            }
            return $result;
        }

        /* Devuelve N texto que pueden ser corregidos o ocr depentiendo la cantidad de tcorregido habiendo */
        public static function getTextforPanel( $gd, $id ){
            $texto = '';
            $nlinemodifieds = (int) self::getmaxLineModifieds( $gd, $id );
            if ( $nlinemodifieds >= 3 ){
                $texto = self::getTcorrg( $gd, $id, (string)3 );
            }else{
                switch ( $nlinemodifieds ){
                    case 2:
                        $texto = self::getTcorrg( $gd, $id, 2 );
                        $texto = $texto.self::getAfterIdText( $gd, $id + 2, 1 ); 
                    break;
                    case 1:
                        $texto = self::getTcorrg( $gd, $id, 1 );
                        $texto = $texto.self::getAfterIdText( $gd, $id + 1, 2 );
                    break;
                    case 0:
                        $texto = self::getAfterIdText( $gd, $id, 3 );
                    break;
                }
            }
            return $texto;
        }

        # Function similar to getPriorTocr but over Tcorrg field
        public static function getPriorTCorrg( $gd, $lastid ){
            $lastid -= 1;
            self::$records = self::$conn -> prepare("SELECT tcorrg FROM {$gd} WHERE id >= :id order by id limit 3");
            self::$records -> bindParam(":id", $lastid);
            self::$records -> execute();
            return self::$records -> fetchAll( PDO::FETCH_ASSOC );
        }

        #Funcion devuelve la cantidad de lineas modificadas restantes
        public static function getLowerLimitModified( $gd, $lastid ){
            self::$records = self::$conn -> prepare(" SELECT COUNT(tcorrg) FROM {$gd} WHERE tcorrg IS NOT NULL AND id > :id ");
            self::$records -> bindParam(":id",$lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetchColumn();
            return self::$records;
        }

        /* Devuelve el siguiente tocr
        Se usa en modifying.php */
        public static function getNextTocr( $gd, $lastid  ){
            $lastid += 1;
            self::$records = self::$conn -> prepare("SELECT tocr FROM {$gd} WHERE id = :id");
            self::$records -> bindParam(":id", $lastid);
            self::$records -> execute();
            self::$records = self::$records -> fetch();
            return self::$records['tocr'];
        }

        /* Devuelve la N lineas modificadas de un gd 
        Se usa en loadline.php*/
        public static function getNlineWithModifieds( $gd, $cap, $pag ){
            self::$records = self::$conn -> prepare("SELECT nline FROM {$gd} WHERE idusr IS NOT NULL AND ncap = :ncap AND npag = :pag");
            self::$records -> bindParam(":ncap", $cap);
            self::$records -> bindParam(":pag", $pag);
            self::$records -> execute();
            return self::$records -> fetchAll(PDO::FETCH_ASSOC);
        }

        /* Devulve las paginas que no fueron modificadas
        */
        public static function getPageWithoutModified( $gd, $cap ){
            self::$records = self::$conn -> prepare("SELECT DISTINCT npag FROM {$gd} WHERE idusr IS NOT NULL AND ncap = :ncap");
            self::$records -> bindParam(":ncap", $cap);
            self::$records -> execute();
            return self::$records -> fetchAll();
        }

        /* Devuelve el ultimo capitulo sin ser moficiado
        */
        public static function getCapWithoutModified( $gd ){
            self::$records = self::$conn -> prepare("SELECT DISTINCT ncap FROM {$gd} WHERE idusr IS NOT NULL");
            self::$records -> execute();
            return self::$records -> fetchAll();
        }

        #Devuelve el maximo de capitulos, pagina y linea
        #Utilizada en functions.php
        public static function getMax( $gd ){
            self::$records = self::$conn -> prepare("SELECT MAX(ncap), MAX(npag), MAX(nline) FROM {$gd}");
            self::$records -> execute();
            if( self::$records -> rowCount() === 1 ){
                self::$records -= self::$records -> fetch();
                return array([ 'cap' => self::$records[0],
                               'pag' => self::$records[1],
                               'linea' => self::$records[2] ]);
            }else return NULL;
        }

        /* Devuelve el maximo de Capitulos de un GD */
        public static function getMaxCap( $gd ){
            self::$records = self::$conn -> prepare("SELECT MAX(ncap) FROM {$gd}");
            self::$records -> execute();
            if( self::$records -> rowCount() === 1 ){
                self::$records -= self::$records -> fetch();
                return self::$records[0];
            } else return NULL;
        }

        /* Devuelve el maximo de Pagina de un GD */
        public static function getMaxPag( $gd ){
            self::$records = self::$conn -> prepare("SELECT MAX(npag) from {$gd}");
            self::$records -> execute();
            if( self::$records -> rowCount() === 1 ){
                self::$records -= self::$records -> fetch();
                return self::$records[0];
            }else return NULL;
        }

        /* Funcion no utilizada devuelve el numero de linea maximo */
        public static function getMaxLine( $gd ){
            self::$records = self::$conn -> prepare("SELECT MAX(nline) from {$gd}");
            self::$records -> execute();
            if( self::$records -> rowCount() === 1 ){
                self::$records -= self::$records -> fetch();
                return self::$records[0];
            }else return NULL;
        }
        
        public static function getNextLine( $gd, $id ){
            self::$records = self::$conn -> prepare("SELECT ncap, npag, nline FROM {$gd} WHERE id = :id ");
            self::$records -> bindParam(":id", $id);
            self::$records -> execute();
            return self::$records -> fetch();
        }

        public static function getPriorLine( $gd, $id ){
            self::$records = self::$conn -> prepare("SELECT ncap, npag, nline FROM {$gd} WHERE id = :id");
            self::$records -> bindParam(":id", $id);
            self::$records -> execute();
            self::$records = self::$records -> fetch();
            return self::$records;
        }

        /* No se utiliza */
        public function getDatos(){
		return "<strong>Id:</strong> $this->id_categoria<br>"
		    . "<strong>Nombre:</strong> $this->nombre<br>";
	    }

    }