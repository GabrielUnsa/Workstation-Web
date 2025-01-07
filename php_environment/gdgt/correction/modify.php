<?php 
    require_once '../structure/header.php';
    #Ready
?>

<section id="panel_modificar">
        <div class="container">
                <div class="col-sm-12 col-md-8 col-lg-6 mx-auto pt-5">
                    <div class="card ">
                        <div class="card-header bg-secondary text-white">
                            <i class="fas fa-edit fa-lg fa-fw"></i> Modificar corrección                         
                        </div>
                        <div class="card-body text-black mb-auto">
                            <h4 class="card-title text-center">  Modifiquemos! </h4>
                            <form action='../correction/modifying.php' method='POST'>
                                <div class="form-row">
                                    <div class="col-md"> 
                                        <label for = "gd"> Tomo: </label> 
                                    </div>
                                    <div class="col-md"> 
                                        <select class = "form-control " id = 'GD' name = "GD" required>
                                                <option value = gd1> 1 </option>
                                                <option value = gd2> 2 </option>
                                                <option value = gd3> 3 </option>
                                                <option value = gd4> 4 </option>
                                                <option value = gd5> 5 </option>
                                                <option value = gd6> 6 </option>
                                                <option value = gd7> 7 </option>
                                                <option value = gd8> 8 </option>
                                                <option value = gd9> 9 </option>
                                                <option value = gd10> 10 </option>
                                                <option value = gd11> 11 </option>
                                                <option value = gd12> 12 </option>
                                        </select>
                                    </div>
                                </div>
                                <br>
                                <div class="form-row">
                                    <div class="col-md"> 
                                        <label for = "ncap"> Numero de Capitulo: </label> 
                                    </div>
                                    <div class="col-md"> 
                                        <select  class="form-control" id = "ncap" name = "ncap" required> </select>
                                    </div>
                                </div> <br>
                                <div class="form-row">
                                    <div class="col-md"> 
                                        <label class = "npag"> Numero de Pagina: </label> 
                                    </div>
                                    <div class="col-md"> 
                                        <select  class="form-control" id = "npag" name = "npag" required> </select>
                                    </div>
                                </div> <br>
                                <div class="form-row">
                                    <div class="col-md"> 
                                        <label class = "nline"> Numero de Linea: </label> 
                                    </div>
                                    <div class="col-md"> 
                                        <select  class="form-control" id = "nline" name = "nline" required> </select> 
                                    </div>
                                </div> <br>
                                <input type="text" name="id" id="id" readonly="true" style="display:none" value=" <?php echo "0";?>">
                                <div class=" container text-center" id="botones_panel_seguir">
                                    <button type="submit" class="btn btn-primary w-100 " id="continuar" name="continuar">CONTINUAR </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <?php require_once '../structure/footer.php' ?>
 
<script type = "text/javascript">
    $(document).ready(function(){
        recargarLista();
        listpag();
        
        $('#GD').click(function(){
            recargarLista();
        });
        $('#ncap').click(function(){
            listpag();
        });
        $('#npag').click(function () {
            listline();
        });
        
    })
</script>

<script type = "text/javascript">
    function recargarLista(){
        $.ajax({
            type: "POST",
            url: "../assets/loadChap.php",
            data: "guemes=" + $('#GD').val(),
            success:function(r){
                $('#ncap').html(r)
            }
        });
    }
</script>

<script type = "text/javascript">
    function listpag(){
        $.ajax({
            type: "POST",
            url: "../assets/loadPag.php",
            data: { "guemes": $('#GD').val(), "cap": $('#ncap').val()},
            success:function(r){
                $('#npag').html(r)
            }
        });
    }
</script>

<script type = "text/javascript">
    function listline(){
        $.ajax({
            type: "POST",
            url: "../assets/loadLine.php",
            data: { "guemes": $('#GD').val(), "cap": $('#ncap').val(), "pag":$('#npag').val()},
            success:function(p){
                $('#nline').html(p);
                
            }
        });
    }
</script>

