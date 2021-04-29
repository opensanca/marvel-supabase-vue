# Marvel-APP
> Supabase & Vue

 Workshop abordando sobre as funcionalidades do **Vue2** usando OptionsAPI e seu ecossistema
 e também adoção do **Supabase** como responsável da nossa camada de Backend, a iniciativa do workshop é abordar de forma simples e funcional como podemos adotar o Vue.js para desenvolver interfaces para web, e como podemos adotar o serviço do Supabase de forma simples conseguimos ter autonomia e previsibilidade sobre as camadas client <> server. 

## Referência Oficial

1. Vue [documentação oficial](https://br.vuejs.org/v2/guide/)
2. Supabase [documentação oficial](https://supabase.io/)
3. Bootstrap5 [documentação oficial](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Desafio

A proposta é criar um web-app com as funcionalidades básicas do ambiente da Marvel/DC, para ganharmos tempo com a parte de User Interface iremos adotar a nova release do Bootstrap5. 

No âmbito das funcionalidades gerais temos um CRUD com as seguintes responsabilidades: 

- [x] Criar personagem
- [x] Excluir personagem
- [x] Visualizar personagem por ID
- [x] Visualizar todos os personagens

Na parte do Vue.js iremos adentrar sobre:

 - [x] Vue-Cli
 - [x] WebComponents 
 - [x] Single File Components(SFC)
 - [x] Diretivas (v-for, v-if e etc...)
 - [x] Props, Computeds e Events
 - [x] Ciclo de Vida do Componente (Hooks)
 - [x] Rotas (Vue-router)
 - [x] API Client(Axios e Supabase)

## Docs :computer:
Foi criado dentro do diretório `docs` toda a documentação sobre como foi criado esse webApp
seguindo as diretrizes do prótotipo abaixo.

- Setup
- Structure
- Create
- Supabase
- Criar Personagem
- Visualizar Personagem criado por ID
- Remover Personagem

## Docs :computer:

Caso tenha interesse em executar esse prótotipo na sua máquina, precisa seguir os passos abaixo:

1. Instalar Node e Npm
> 
2. Instalar o Yarn
> npm i -g yarn

3. No seu terminal, faça clone do repositório
> git clone git@github.com:opensanca/marvel-supabase-vue.git

4. Entrar no projeto 
> cd marvel-supabase-vue

5. Instale as dependências necessárias.
> yarn 

6. Criar uma conta no Supabase
7. Criar uma organização no Supabase e um projeto com nome da sua escolha.
8. Crie uma tabela com o nome `character`. 
9. Adicione as credenciais da sua SupabaseAccount (url, key) no `src/services/index.js`.

## Contribuição

Contribuições são sempre bem vindas! Por favor, crie um PR para adicionar Perfil Github.
## License :pencil:

Este projeto está licenciado sob a licença do [MIT](https://opensource.org/licenses/MIT).

## Demonstre seu apoio :man_astronaut:

Dê um ⭐️ se este projeto lhe ajudou!

## Mantenedor :rocket:

| ![](https://avatars.githubusercontent.com/u/4699770?v=4&size=100) | 
| ----- |
| [@cristofer.sousa](https://github.com/cristofersousa) | 