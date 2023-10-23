const url = "http://localhost/banco-de-dados/mapa.php";
var map;
var marker;

    function initMap(){
        var mapOpitions = {
            center: {lat: -23.5016700, lng:-47.4580600},
            zoom: 13,
            mapTypeId: 'roadmap',
            mapTypeControlOptions: {mapTypeIds:['']}
        };

        map = new google.maps.Map(document.getElementById('map'),mapOpitions);


    

        // marker.addListener('click',()=>{
        //     let conteudo = '<p class="info">Bicicletas Disponiveis: 5</p>'
        //     let info = new google.maps.InfoWindow({
        //     content: conteudo,

        //     });

        // info.open(map,marker);
        // });
        
        //  REQUISIÇÃO INSERIR LOCALIZAÇÕES

            $(document).ready(function(){

                let dados = {tipo:'inserir_localizacao'} 
                $.post(url, dados,function(retorna){

			       let estacoes = $.parseJSON(retorna);

                    for(var i =0;i<estacoes.length;i++){
                        
                        let conteudo = `<p class="info">ESTAÇÃO: ${(i+1)} </p>`;
                        var info = new google.maps.InfoWindow();
                        //OBJETO QUE GUARDA A POSÇÃO DO PONTO
                        latlong = {
                            lat: parseFloat(estacoes[i][0]),
                            lng: parseFloat(estacoes[i][1])
                        };
                        //INSTANCIANDO O PONTO NO MAPA
                        marker = new google.maps.Marker({
                            position: latlong,
                            map: map,
                            title: 'Estação '+(i+1),
                            icon: 'midia/location64px.png'
                        });
                        //COLOCANDO A CAIXA DE TEXTO NO PONTO
                        marker.addListener('click',function(conteudo){
                            return function(){
                                info.setContent(conteudo);
                                info.open(map,this);
                            }
                        }(conteudo));

                        
                    }

				});
            });
 
}