# 🪙CriptoKeeper
CriptoKeeper é um projeto que visa fornecer uma solução para a gestão de carteiras de criptomoedas e transações seguras. Com o CriptoKeeper, os usuários podem criar uma conta, gerenciar suas carteiras e realizar transações com criptomoedas de forma conveniente e segura.

Esta documentação fornecerá informações detalhadas sobre a estrutura do projeto, suas funcionalidades e como utilizá-las corretamente.

## Requisitos
Antes de iniciar o uso do CriptoKeeper, certifique-se de ter as seguintes dependências instaladas:

Node.js (versão 12 ou superior)
Banco de dados PostgreSQL
Configuração
Siga os passos abaixo para configurar o projeto CriptoKeeper em seu ambiente local:

Clone o repositório do CriptoKeeper em seu computador:
bash

git clone https://github.com/hyarlei/CriptoKeeper.git

Acesse o diretório do projeto:
bash

cd cripto-keeper

Instale as dependências do projeto usando o gerenciador de pacotes npm ou yarn:

npm install
ou
yarn install

Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:
bash

DATABASE_URL=postgres://username:password@localhost:5432/cripto_keeper

Certifique-se de substituir username e password pelas suas credenciais de acesso ao banco de dados PostgreSQL.

Execute as migrações do banco de dados para criar as tabelas necessárias:

npx prisma migrate dev

ou

yarn prisma migrate dev

Inicie o servidor de desenvolvimento:
arduino

npm run dev

ou

yarn dev

O CriptoKeeper estará disponível em http://localhost:3333. Você pode acessar esta URL em seu navegador para utilizar o projeto.
## Funcionalidades
O CriptoKeeper possui as seguintes funcionalidades principais:

1. Autenticação de Usuários
Registro de novos usuários com nome, e-mail e senha.
Login de usuários existentes para acesso seguro às funcionalidades do CriptoKeeper.
2. Gerenciamento de Carteiras
Criação de uma carteira associada a um usuário.
Consulta das informações da carteira, incluindo saldo disponível.
Atualização do saldo da carteira por meio de depósitos e saques.
3. Realização de Transações
Envio de criptomoedas de uma carteira para outra.
Registro de todas as transações realizadas, incluindo detalhes como valor, remetente e destinatário.
API Endpoints
O CriptoKeeper oferece uma API RESTful com os seguintes endpoints:

/user (POST): Cria um novo usuário com as informações fornecidas.

/login (POST): Autentica um usuário existente e retorna um token de acesso.

/wallet (POST): Cria uma nova carteira para o usuário autenticado.

/wallet/:id (GET): Retorna o saldo disponível na carteira do usuário autenticado.

/transaction (POST): Realiza uma transação de criptomoedas entre duas carteiras.

Para cada endpoint, é necessário incluir os cabeçalhos Authorization com o token de acesso válido.

### Considerações Finais
O projeto CriptoKeeper oferece uma solução completa para a gestão de carteiras de criptomoedas e transações seguras. Utilize esta documentação como referência para utilizar corretamente as funcionalidades disponíveis.

Em caso de dúvidas ou problemas, entre em contato!
