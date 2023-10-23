--MOSTRAR BICICLETAS DE CADA ESTAÇÃO--
--PROCEDURE--
CREATE or ALTER PROCEDURE spMostrarBikeEstacaoLivres @ID_ESTACOES INT, @NUMBIKES INT OUTPUT
AS
BEGIN
   SELECT @NUMBIKES = count(*) FROM BICICLETAS A LEFT JOIN EMPRESTIMO B ON A.ID_BICICLETAS = B.ID_BICICLETA WHERE A.ID_ESTACOES=@ID_ESTACOES AND B.DATAHORA_TERMINO IS NULL
END
GO

--EXEC
declare @qtd int;
EXEC spMostrarBikeEstacaoLivres 2, @qtd OUTPUT

select @qtd

ALTER TABLE ESTACOES ADD LATITUDE FLOAT NOT NULL

SELECT * FROM ESTACOES

INSERT INTO ESTACOES (ENDERECO, NOME,LATITUDE,LONGITUDE) VALUES
 ('Escultura Bicicleta ', 'Avenida Dom Aguirre ao lado do Terminal São Paulo',-23.50486401328, -47.45192011617),
 ('Terminal Santo Antônio ', 'Avenida Doutor Afonso Vergueiro',-23.49548753894, -47.46035898397),
 ('Bombeiros', 'Avenida Dom Aguirre próximo ao Corpo de Bombeiros',-23.49123181193, -47.44270402885),
 ('Parque das Águas', 'Avenida Dom Aguirre',-23.46938651144, -47.44718939882),
 ('Paço Municipal', 'Teotonio Vilela próximo ao Teatro Municipal',-23.47850054760, -47.42290926040),
 ('UPH Zona Norte', 'Avenida Itavuvu',-23.48387804905, -47.47175416282),
 ('Maria Antônia Prado', 'Avenida Itavuvu 2.560',-23.46338302540, -47.47935023853),
 ('Shopping Cidade', 'Avenida Itavuvu 3.240',-23.45525491428, -47.48235024698),
 ('Casa do Cidadão Ipanema', 'Avenida Ipanema 3.300',-23.46734772059, -47.49439182634),
 ('Terminal São Bento', 'Rua Comendador Genésio Rodrigues em frente à estação do BRT',-23.45288674724, -47.50510023939),
 ('Trujilo', 'Avenida General Osório próximo à UNITEN',-23.48814803322, -47.47844109599),
 ('Wanel Ville', 'Avenida Elias Maluf com Avenida Paulo Emanuel de Almeida',-23.49335697802, -47.51115265339),
 ('Parque dos Espanhóis', 'Doutor Campos Salles',-23.51521532198, -47.44530511774),
 ('Parque do Campolim', 'Parque Carlos Alberto de Souza',-23.52240086384, -47.46501327717)

 INSERT INTO BICICLETAS VALUES (2,'BOM')
 SELECT * FROM BICICLETAS

 SELECT LATITUDE,LONGITUDE FROM ESTACOES