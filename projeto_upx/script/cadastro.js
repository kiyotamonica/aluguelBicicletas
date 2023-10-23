const url = "http://localhost/banco-de-dados/teste.php"; // URL do arquivo PHP

//Função que executa quando o HTML carrega
$(document).ready(function(){

  //chamando o botão de submit do formulario de cadastro
  //executa no click do botão

  
    $("#cadastrar").submit(function(event){
      //nao deixa o formulario recarregar a pagina e desabilita o action
        event.preventDefault();

        let nome = $('#nome').val();//pegando o valor do input nome
        let cpf = $('#cpf').val();//pegando o valor do input cpf
        let senha = $('#senha').val();//pegando o valor do input senha
        let confirmasenha = $('#confirmarsenha').val();
        let email = $('#email').val();//pegando o valor do input email
        let foto = 'teste.png';//caminho da imagem q sera passado como string

        //confirmando que os campos nao serao nulos
//----------------------------------------------------------------------------------      
        if(nome != ""){
       
            if(cpf !="" && cpf != false){
                //fazer uma verificaçao por php para saber se existe cpf iguais
                //no caso true quando existe cpf iguais
              if(senha != ""){

                if(confirmasenha != "" && confirmasenha == senha){

                  if(email != ""){//verificar se a pessoa esta usando '.' e '@'

                  }
                  else{
                  
                    $('#email:text').attr('placeholder','Email Inválido');	
                    $('#email:text').addClass("error").focus()
                    return false;
                  }
                }
                else{
                  $('#confirmarsenha:text').val("")
                  $('#confirmarsenha:text').attr('placeholder',' Senhas divergentes');	
                  $('#confirmarsenha:text').addClass("error").focus()
                  return false;
                }
              }
              else{
                $('#senha:text').attr('placeholder','Senha Inválido');	
                $('#senha:text').addClass("error").focus()
                return false;
              }
            }
            else{
              $('#cpf:text').attr('placeholder','CPF Inválido');	
              $('#cpf:text').addClass("error").focus()
              return false;
            }
          }
          else{
            $('#nome:text').attr('placeholder','Nome invalido');	
            $('#nome:text').addClass("error").focus()
            return false;
          }
//----------------------------------------------------------------------------------

        //para fazer a requisição é preciso colocar os dados em um objeto json
        var dados = {
            tipo : 'cad_user',
            cargo : 'usuario',
            nome : nome,
            cpf : cpf,
            senha : senha,
            email : email,
            foto : foto
        }
      
      
        //exibição no console para testar se esta funcionando
        console.log(dados);
        //chamando a requisição AJAX com metodo post
        $.post(url, dados,function(retorna){
        
        //mostrando o conteudo q o arquivo php retornou
        window.location.href = "index.html"

        
				});
        });


});