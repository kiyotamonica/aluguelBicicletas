const url = "http://localhost/banco-de-dados/login.php"; // URL do arquivo PHP
$(document).ready(function(){
   
   
    $('#cadastrobotao').on('click', function(){

    window.location.href = "Cadastro.html"
    
})

    $('#entrarbotao').on('click', function(){
       
        let cpfpassado = $("#cpfpassado").val()
        let senhapassado = $("#senhapassado").val()
 
        var dados = {
            tipo: 'verificar_usuario',
            cpf: cpfpassado,
            senha: senhapassado
        }

        $.post(url, dados, function(retorna){
        if(retorna == "true"){
            window.location.href = "Home.html"
        }
        else{
            alert("usuario ou senha não encontrados!")
        }

        })
    })
});