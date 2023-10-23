
document.addEventListener("DOMContentLoaded", function(e) {
    
    const btn = document.querySelector('#btn-menu img');
    const btn_iniciar = document.querySelector('.icone_seta');

    let map = document.querySelector('.content-map');
    let menu = document.querySelector('.menu');
    let user_information = document.getElementById('userInformation');
    let botoes_iniciar = document.querySelector('.botoes-iniciar');
    var rotation=0;

    console.log(user_information);

    btn.addEventListener('click',function(event){
   
    
        if(menu.classList.contains('show'))
        {
            map.classList.toggle('map-down'); 
            menu.classList.toggle('show');
        }
        else{
            map.classList.toggle('map-down'); 
            setTimeout(function() {menu.classList.toggle('show');}, 200);
        }
        user_information.classList.toggle('hide');
    });

    btn_iniciar.addEventListener('click', function(){
        rotation+=180;
        botoes_iniciar.classList.toggle('hide');
        btn_iniciar.style.transform = "rotate("+rotation+"deg)";
    });

});