<?php 
    require_once '../structure/header.php';
    require_once '../assets/functions.php';
    #Ready
?>

<div class="container container-fluid mt-5">
    <div class="row row-cols-1 row-cols-md-3 ">
        <div class="col-sm-12 col-md-4 ">
            <div class="card border-secondary mb-5">
                <div class="card-header bg-info text-white">
                    <i class="fas fa-info"></i> Información 
                </div>

                <div class="card-body text-black ">
                    <h4 class="card-title">   </h4>
                    <p>
                    <ul class="list-group">
                        <li class="list-group-item  list-group-item-info">Autor: Luis Güemes</li>
                        <li class="list-group-item list-group-item-info">Tema: Historia de la Gesta Gümesiana</li>
                        <li class="list-group-item list-group-item-info">Editorial: Plus Ultras</li>
                        <li class="list-group-item list-group-item-info">Fuente: <a class="link" href="http://www.portaldesalta.gov.ar/documentado.html"> http://www.portaldesalta.gov.ar/documentado.html</a></li>
                    </ul>
                    
                    </p>
                </div>    
            </div>
        </div>
        <div class="col-sm-12 col-md-8 col mb-4">
            <div class="card border-secondary " style="max-width: 60rem;">
                    <div class="card-header">
                        <h5> Acceso a los documentos </h5>
                    </div>
                    <div class="card-body ">
                        <ul class="list-group">            
                            <div class="accordion" id="accordionExample">

                            <?php 
                            $tomos = 10;             
                            for ($i=1; $i<= $tomos; $i++){
                                $g = "gd".$i;
                                echo panelGd($g);
                            }  ?> 
                            </div>
                        </ul>
                    
                </div>
            </div>                        
        </div> 
    </div>
</div>

<?php require_once '../structure/footer.php' ?>
