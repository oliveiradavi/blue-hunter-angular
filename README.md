# Blue-Hunter-Node

O banco de dados utilizado nesse projeto é o MongoDB

As informações de acesso ao banco de dados se encontram no seguinte endereço: "config/db.js"

O arquivo generate.js na raíz é utilizado para adicionar informações ao banco de dados

# Comandos para rodar o projeto localmente:

node generate.js

node index.js

# As rotas disponíveis na aplicação são:

/user/by-name/{name-part} onde {name-part} é parte do nome a ser buscado.

/book/by-title/{title-part} onde {title-part} é parte do título a ser buscado.

/book/by-author/{author-part} onde {author=part} é parte do nome do autor a ser buscado.

# Heroku app

http://node-blue-hunter.herokuapp.com/