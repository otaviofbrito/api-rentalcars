# Cadastro de carro

**RF**
Deve ser possivel cadastrar um novo carro.
Deve ser possivel listar todas as categorias.

**RN**
Nao deve ser possivel cadastrar um carro com uma placa ja existente.
Nao deve ser possivel alterar  a placa de um carro ja cadastrado.
O carro deve ser cadastrado, por padrao, com disponibilidade.
O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros.
Deve ser possivel listar todos carros disponiveis pelo nome da categoria
Deve ser possivel listar todos carros disponiveis pelo nome da marca.
Deve ser possivel listar todos carros disponiveis pelo nome do carro.
**RN**
O usuario nao presicasa estar logado no sistema.

# Cadastro de Especificacao no carro

**RF**
Deve ser possivel cadastrar uma especificacao para um carro
Deve ser possivel listar todas as especificacoes
Deve ser possivel listar todos os carros.


**RN**
Nao deve ser possivel cadastrar uma especificacao para um carro nao cadastrado.
Nao deve ser possivel cadastrar uma especificacao ja existente para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um usuario administrador.


# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos carros.

**RNF**
Utilizar o multer para upload dos arquivos


**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
O usuario responsavel pelo cadastro deve ser um administrador.


# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve  ter duracao minima de 24 horas.
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario.
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.

