Para fazer o projeto funcionar
------------------------------

**Pré-requisitos**
Certifique-se que você possua todos os pré-requisitos:

*	[Node.js](http://nodejs.org/)
*	[Ruby for Windows](http://rubyinstaller.org/)


**Primeira vez**
Na primeira vez que você executar o projeto, execute o arquivo *install.bat*. Ele irá executar os seguintes comandos:

*	`gem install compass` - Instala o [Compass](http://compass-style.org/) (e a dependência (SASS)[http://sass-lang.com/])
*	`npm install -g bower` - Instala o [Bower](https://github.com/bower/bower), gerenciador de dependências para a web
*	`npm isntall -g grunt-cli` - Instala o [Grunt](http://gruntjs.com/), um task runner para javascript para automação das execuções
*	`npm install` - Instala todas as dependências do Node para este projeto

Este projeto se inicou com o [Angular Generator](https://github.com/yeoman/generator-angular) para [Yeoman](http://yeoman.io/).

Arquivos básicos e estrutura
----------------------------

Alguns arquivos de configuração são importantes para o projeto funcionar corretamente em qualquer máquina. Na raíz, temos os seguintes arquivos:

| **.bowerrc** - Configurações básicas que serão passadas para o Bower.
| **.editorconfig** - Alguns editores de texto podem utilizar este arquivo para verificar as preferências de escrita do código.
| **.gitattributes** - Instruções para o GIT aplicado para subdiretórios ([leia mais](http://git-scm.com/book/pt-br/Customizando-o-Git-Atributos-Git)).
| **.gitignore** - Instruções para o versionador GIT, onde algumas pastas e arquivos, por exemplo, não devem ser versionados.
| **.jshintrc** - Configurações para o JSHint, ferramenta que verifica a integridade e qualidade do código javascript.
| **.travis.yml** - Configurações passadas para o Travis, utilitário de Build usando GIT.
| **package.json** - Utilizado pelo NPM para identificar as dependências deste projeto e suas versões.
| **Gruntfile.js** - Utilizado pelo GRUNT, onde estão registrados todos os tasks e automações do sistema, incluindo builds e deploys.
| **bower.json** - Utilizado pelo BOWER para mapear as dependências web (como jQuery, Angular etc).
