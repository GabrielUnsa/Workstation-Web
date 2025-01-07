<?php
    require_once '../assets/classDB.php';

    function getAlert($alertText, $alertClass = 'alert-info') {
        return <<< HTML_ALERT
        <div class="alert $alertClass alert-dismissible fade show" role="alert">
            $alertText
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        HTML_ALERT;
    }
    function getSuccess($title, $gd, $cap, $pag, $line){
        return <<< HTML_ALERT
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <h4 class="alert-heading"> <strong> $title </strong></h4>
        <p>
        Tomo: $gd <br>   
        Capítulo: $cap <br>
        Página: $pag <br>
        Línea: $line <br>
        </p>
        <hr>
        <p class="mb-0">Todo salio bien </p>
        </div>
        HTML_ALERT;
    }

    /** en este caso valor se utiliza para id, nombre y valor*  */
    function getItem($item, $valor, $nombre ){
        return <<< ITEM
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="text-dark" > $item </a>
                <input type="text" name=$nombre id=$nombre readonly="true" style="display:none" value=" $valor">
                <span class="badge badge-secondary badge-pill"> $valor </span>
            </li>
        ITEM;
    }

    function getNumeroTomo($gd ){
        return intval(preg_replace('/[^0-9]+/', '', $gd), 10);
    }

    function generaInfo(){
        $array[0] = array(0,0,0);
        $tomos = 12;
        for ($i=1; $i<= $tomos; $i++){
            $gd = "gd".$i;

            $array[$i]= DB::getMax($gd);
        }
        return $array;
    }
    function getTomo($item, $valor, $nombre ){
        return <<< ITEM
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a class="text-dark" > $item </a>
                <input type="text" name=$nombre id=$nombre readonly="true" style="display:none" value=" $valor">
                <span class="badge badge-secondary badge-pill"> getNumeroTomo($valor) </span>
            </li>
        ITEM;
    }

    /** Esta funcion devolvera el ultimo id de cada tomo */
    function getUltimoId( $gd ){
        $ultimoId = ['gd1'=> 20020,'gd2'=> 16795,'gd3'=> 19943,'gd4'=> 18402,'gd5'=> 18097,'gd6'=> 20132,'gd7'=> 16207,'gd8'=> 18622,'gd9'=> 19101,'gd10'=> 19202];
        return $ultimoId[$gd];
    }
    function getUltimaLinea( $gd ){
        $ultimaLinea = ['gd1'=> 4174, 'gd2'=> 4533, 'gd3'=> 4777, 'gd4'=> 2377, 'gd5'=> 1943, 'gd6'=> 257, 'gd7'=> 6511, 'gd8'=> 7848, 'gd9'=> 3800, 'gd10'=> 3629];
        return $ultimaLinea[$gd];
    }
    function getUltimoCap( $gd ){
        $UltimoCap = ['gd1'=> 14,'gd2'=> 7,'gd3'=> 15,'gd4'=> 28,'gd5'=> 28,'gd6'=> 408,'gd7'=> 6,'gd8'=> 15,'gd9'=> 16,'gd10'=> 13];
        return $UltimoCap[$gd];
    }
    function getUltimaPag( $gd ){
        $ultimaPag = ['gd1'=> 501, 'gd2'=> 503, 'gd3'=> 488, 'gd4'=>469, 'gd5'=> 458, 'gd6'=>496, 'gd7'=> 370, 'gd8'=> 478, 'gd9'=> 484, 'gd10'=> 480];
        return $ultimaPag[$gd];
    }

    function getLinea($titulo, $valor, $nombre){
        return <<< LINEA
        <div class="input-group">
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title=$titulo>
                <i class='fas fa-caret-square-up' ></i>
            </button>
            <input class="form-control" name = $nombre id = $nombre disabled value = $valor />
        </div>
        LINEA;
    }

    function linkGd($gd, $paginas){
        return <<< LINEA
        <a href="http://www.portaldesalta.gov.ar/libros/guemes/g$gd.pdf" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Güemes Documentado. Tomo $gd</h5>
            <small>$paginas páginas</small>
            </div>
        </a>
        LINEA;
    }

    function panelGdv1($gd){
        $max_cap = getUltimoCap($gd);
        $max_pag = getUltimaPag($gd);
        $max_line = getUltimaLinea($gd);
        $tomo = getNumeroTomo($gd );
        return <<< LINEA
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse$gd">Güemes Documentado. Tomo $tomo</a>
                    </h4>
                    </div>
                    <div id="collapse$gd" class="panel-collapse collapse">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">Capítulos     
                            <span class="badge badge-info badge-pill">$max_cap</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Páginas     
                            <span class="badge badge-info badge-pill">$max_pag</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Líneas     
                        <span class="badge badge-info badge-pill">$max_line</span>
                        </li>
                        <a href="http://www.portaldesalta.gov.ar/libros/guemes/g$tomo.pdf" target="_blank" class="list-group-item d-flex justify-content-between align-items-center">
                        Ver Pdf <span class="badge badge-danger badge-pill"><i class="fas fa-file-pdf"></i></span>
                        </a>
                        </li>
                    </ul>
                </div>
                </li>
            </ul>
        LINEA;
    }
    function panelGd($gd){
        $UltimoCap = ['gd1'=> 14,'gd2'=> 7,'gd3'=> 15,'gd4'=> 28,'gd5'=> 28,'gd6'=> 408,'gd7'=> 6,'gd8'=> 15,'gd9'=> 16,'gd10'=> 13];
        $ultimaPag = ['gd1'=> 501, 'gd2'=> 503, 'gd3'=> 488, 'gd4'=>469, 'gd5'=> 458, 'gd6'=>496, 'gd7'=> 370, 'gd8'=> 478, 'gd9'=> 484, 'gd10'=> 480];
        $ultimaLinea = ['gd1'=> 4174, 'gd2'=> 4533, 'gd3'=> 4777, 'gd4'=> 2377, 'gd5'=> 1943, 'gd6'=> 257, 'gd7'=> 6511, 'gd8'=> 7848, 'gd9'=> 3800, 'gd10'=> 3629];
        $paginas = ['gd1'=> 502,'gd2'=> 504,'gd3'=> 496,'gd4'=> 470,'gd5'=> 459,'gd6'=> 523,'gd7'=> 371,'gd8'=> 479,'gd9'=> 485,'gd10'=> 481,'gd11'=> 489,'gd12'=> 353];
        $pagina = $paginas[$gd];
        $max_cap = $UltimoCap[$gd];
        $max_pag = $ultimaPag[$gd];
        $max_line = $ultimaLinea[$gd];
        $tomo = getNumeroTomo($gd );
        return <<< LINEA
        <div class="card ">
            <div class="card-header d-flex w-100 justify-content-between" id="headingOne">
                <h4 class="mb-0 " >
                    <button class="btn btn-link link" type="button" data-toggle="collapse" data-target="#collapse$gd" aria-expanded="true" aria-controls="collapse$gd">
                    Güemes Documentado. Tomo $tomo
                    </button>
                </h4>
                <small>$pagina páginas oficiales</small>
            </div>
            <div id="collapse$gd" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">Capítulos     
                            <span class="badge badge-info badge-pill">$max_cap</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Páginas     
                            <span class="badge badge-info badge-pill">$max_pag</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Líneas     
                            <span class="badge badge-info badge-pill">$max_line</span>
                        </li>
                        <a href="http://www.portaldesalta.gov.ar/libros/guemes/g$tomo.pdf" target="_blank" class="link list-group-item d-flex justify-content-between align-items-center">
                        Ver Pdf <span class="badge badge-danger badge-pill"><i class="fas fa-file-pdf"></i></span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        LINEA;
    }

?>