<?php
    require '../structure/header.php';
 ?>
     <section id="selectgd">
        <div class="container">
                <div class="col-sm-12 col-md-8 col-lg-6 mx-auto pt-5">
                    <div class="card ">
                        <div class="card-header bg-secondary text-white">
                            <i class="fas fa-edit"></i> Seguir corrigiendo
                        </div>
                        <div class="card-body text-black mb-auto">
                            <h4 class="card-title text-center">  Sigamos! </h4>
                            <form class="form-group" action="../correction/right.php" method="POST">
                                    <div class="form-row">
                                        <div class="col-md-6 ">
                                            <label >  Tomo:</label>
                                        </div>
                                        <div class="col-md-6 ">
                                            <select class = "form-control" id = "GD" name = "GD" >
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
                                    </div>  <br>
                                  
                                    <div id = "list"> </div>
                                    <br>
                                    <div class=" container text-center" id="botones_panel_seguir">
                                    <button type="submit" class="btn btn-primary w-100 ">CONTINUAR </button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </section>

<!--Footer-->
<?php require_once '../structure/footer.php' ?>

<!----- sigamos !-->
<script type = "text/javascript">
    $(document).ready(function(){
        recargarLista();
        $('#GD').click(function(){
            recargarLista();
        });
    });
</script>

<script type = "text/javascript">
    function recargarLista(){
        $.ajax({
            type: "POST",
            url: "../assets/loadSelect.php",
            data: "guemes=" + $('#GD').val(),
            success:function(r){
                $('#list').html(r)
            }
        });
    }
</script> 
