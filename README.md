# Blank Themplate - Webpack

Themplate próprio criado para desenvolvimento de sites e webapps.

## Modo de desenvolvimento

No ambiente de desenvolvimento, não precisamos trabalhar com uma build otimizada, por isso podemos gerar de forma rápida nosso arquivos de estilos e include de icones.
Para iniciarmos o desenvolvimento da aplicação acessamos a pasta do projeto e instalamos as dependencias, em seguidas iniciamos o webpack para que assista as mudanças e atualize os arquivos.

```bash
$ cd "webpack-sass" 

$ npm install && npm start
```

### Estilização
*Gerando arquivos CSS*

Em nosso desenvolvimento utilizamos o préprocessador de CSS __scss__ que facilita grandemente a produção de estilos únicos e modernos.
Nesse themplate temos um arquivo chamado _styles.scss_ que contem todos os includes de componentes de estilos, nele tambem importamos nossas __fontes__ e nosso __reset.css__.

Qualquer alteração feita em nossos arquivos incluidos dentro do _styles.scss_ irá gerar uma nova versão de stylesheet contendo as novas alterações.

[Mais informações sobre como utilizar o Sass aqui.](https://sass-lang.com "Sass: Syntactically Awesome Style Sheets"):

### Icones

*Gerando o bundle de SVG* 

Uma das dependencias incluidas é a SVGLoader que gera um bundle de sprites a serem incluidas em um JS para o html que serão renderizadas em uma tag _use_ a partir da ID gerada com seu nome.
Assim como no CSS qualquer svg salvo na pasta __src/icons__ será gerado uma nova versão do bundle caso o webpack esteja rodando.

Ou seja se adicionar um svg com o nome de _home-outline_, para ser utilizado no html deverá ser incluído da seguinte forma:

``` html
<svg>
  <use xlink:href="#home-outline"></use>
</svg>
```

Por padrão os icones são adicionados com _icon-_ antes de seus respectivos nomes, o qual não precisa ser incluido na sua chamada no html, como por exemplo um icone de nome _icon-home-outline_ é chamado da mesma forma que acima.

### Scripts

Em nosso bundle temos tambêm todos os scripts e códigos incluidos em nosso arquivo __src/js/app.js__, que serão incluidos junto com o bundle de icones.
Todos os recursos que utilizam node são inseridos aqui e estarão disponíves **(se possível)** para serem utilizados em nosso HTML e js incluídos.
Assim como nos dois casos acima, qualquer alteração no app.js e em seus includes, resultará em um nova versão de nosso bundle.

## Modo de produção

Utilizamos o comando: 

```bash
$ npm run build
```

Que irá criar as versões otimizadas e minificadas dos arquivos: 

#### styles.bundle.css
#### app.bundle.js

Contendo todas as alterações realizadas no modo de produção, porém prontas para a produção.
