# system-monitor

## Funcionalidades

* Obtém informações sobre a RAM (Total, Usado, Livre).
* Obtém informações sobre o tempo de uso do computador.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* Node.js 
* npm 
* TypeScript 

## Instalação
Siga os passos abaixo para instalar e configurar o projeto em sua máquina local:

1. Clone este repositório para sua máquina local usando o comando:
~~~
git clone https://github.com/seu-usuario/nome-do-repositorio.git
~~~
2. Navegue para o diretório do projeto:
~~~
cd nome-do-repositorio
~~~
3. Instale as dependências do projeto usando o npm:
~~~
npm install
~~~
4. Crie um arquivo .env na raiz do projeto e configure a porta do servidor de sua preferência, caso contrário irá usar a porta 3333.
5. Inicie o servidor de desenvolvimento usando o seguinte comando:
~~~
npm run dev
~~~
Isso irá iniciar o servidor de desenvolvimento usando o Nodemon, que irá reiniciar automaticamente o servidor sempre que houver mudanças no código.

## Uso
Você pode acessar o aplicativo em seu navegador ou cliente de API para obter as informações sobre a RAM e o tempo de uso do computador.

## Contribuição
Se você quiser contribuir para este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas modificações:
~~~
git checkout -b minha-branch
~~~
3. Faça as modificações desejadas e faça commit das mudanças (Use conventional commits):
~~~
git add .
git commit -m "Descrição das modificações"
~~~
4. Envie as mudanças para o repositório remoto:
~~~
git push origin minha-branch
~~~
5. Abra um pull request para revisão de código.
