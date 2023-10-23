const url = "http://localhost/banco-de-dados/mostraBicicleta.php"; // URL do arquivo PHP


$(document).ready(function(){

var i ;
var dados;

    for( i = 1; i < 16; i++){
        
        dados = {
            tipo: 'mostra_bicicleta_estacao',
            unid: i
        }
        
        $.post(url, dados, function(retorna){ 
        let num = $.parseJSON(retorna); 
        $('.bikes_disponiveis:nth-child(1)').append('<p>' + num [0][0]+ '</p>' )   
        console.log($('.bikes_disponiveis:nth-child(1)'))
        console.log(num[0][0])


})
    }
    

    
})