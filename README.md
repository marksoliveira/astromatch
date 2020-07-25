# astromatch

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e como gerenciador de pacotes do NodeJS o npm.
Na pasta `components` ficam as páginas em si do projeto (Profile, Matches).

## Sobre
Esse foi um dos primeiros projetos que fiz em React.
Ao acessar a aplicação (tela Profile), são mostrados a foto, o nome e a descrição
de perfis aleatórios, e dois botões: um que permite "dar *match*" (uma 
escolha "positiva") e outro que descarta a sugestão (uma escolha "negativa").
Também há um botão que o leva para a tela de matches, e por fim, um outro 
botão que limpa as informações dos matches que foram dados.
A tela de "Matches" é constituída de uma lista de usuários que "deram match" 
com o usuário que estiver usando a aplicação. São mostrados as fotos e os 
nomes dos perfis.
Há integrações com APIs externas. 
Bibliotecas: axios e styled-components

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
1. `npm run build` para gerar uma versão estática do projeto 
(que ficará na pasta `build`)

Estando com o surge instalado (`npm install surge`), para deployar pode-se 
utilizar o `surge ./build`, um link será fornecido e assim utilizá-lo
para abrir a aplicação no navegador.
