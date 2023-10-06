# PWA Tasks

A proposta do aplicativo é disponibilizar de forma simples uma lista de tarefas para o dia atual, de forma que o usuário possa adicionar novas tarefas e visualizar a agenda programada para os diferentes momentos do dia mesmo que esteja offline.



## Configuração e Execução

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

Para rodar o projeto, é necessário a configuração no Firebase para o processo de autenticação. Basta seguir os passos da plataforma e um arquivo `private.json` com seus dados na pasta `src/services/`.

- Firebase: [Configurar APP](https://console.firebase.google.com/)
- NodeJS: [Baixe aqui](https://nodejs.org/pt-br/download)
- Git: [Baixe aqui](https://git-scm.com/)

### Passo 1: Clone o repositório
Clone o repositório para o seu diretório local usando o seguinte comando:

```bash
git clone https://github.com/liercesantos/pwa-tasks.git
```

### Passo 2: Instalar dependências
Instale as dependências necessárias para rodar a aplicação:
```bash 
npm install
```

### Passo 3: Rodar o aplicativo em modo de desenvolvimento
```bash 
npm run start
``` 

### Passo 3.1: Buildar o aplicativo
```bash 
npm run build
``` 

### Passo 3.2: Rodar em servidor local
Você pode usar um servidor HTTP simples para servir os arquivos do aplicativo em produção. Um pacote popular para isso é o serve. Você pode instalá-lo globalmente com o seguinte comando:
```bash 
npm install -g serve
``` 
Em seguida:
```bash 
serve -s build
``` 

## Apresentação:
<div style="display: flex; flex-direction: row; width: 100%; justify-content: space-around;">
    <img style="display: flex; flex-direction: column; padding: 0 8px;" src="https://raw.githubusercontent.com/liercesantos/pwa-tasks/master/public/presentation/login.png" alt="Tela de Login" width="250">
    <img style="display: flex; flex-direction: column; padding: 0 8px;" src="https://raw.githubusercontent.com/liercesantos/pwa-tasks/master/public/presentation/register.png" alt="Tela de Cadastro" width="250">
    <img style="display: flex; flex-direction: column; padding: 0 8px;" src="https://raw.githubusercontent.com/liercesantos/pwa-tasks/master/public/presentation/home-a.png" alt="Home A" width="250">
</div>

<div style="display: flex; flex-direction: row; width: 100%; justify-content: space-around; margin-top: 32px;">
    <img style="display: flex; flex-direction: column; padding: 0 8px;" src="https://raw.githubusercontent.com/liercesantos/pwa-tasks/master/public/presentation/home.png" alt="Home" width="250">
    <img style="display: flex; flex-direction: column; padding: 0 8px;" src="https://raw.githubusercontent.com/liercesantos/pwa-tasks/master/public/presentation/dashboard.png" alt="Dashboard" width="250">
    <img style="display: flex; flex-direction: column; padding: 0 8px;" src="https://raw.githubusercontent.com/liercesantos/pwa-tasks/master/public/presentation/account.png" alt="Perfil" width="250">
</div>
