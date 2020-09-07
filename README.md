# Entrega de projeto FrontEnd Developer

Para rodar o projeto, tendo o Node atualizado, entra na pasta dele e digita no terminal:

```
npm run mcabral
```

ou

```
ng build --prod && cd dist/pokedex/ && npx serve
```

> Para qualquer coisa eu estou à disposição! Muito obrigado pela oportunidade ^_^

> ###### PS.: Só não entendi a pergunta entre Bulbassauro, Charmander e Squirtle... Todo mundo sabe que a úncica escolha é Charmander. <img src="src/assets/images/charmander.png" alt="Char char" style="width:20px">
---



![UsuCampeão](logo.png)

# USUCAMPEÃO Tecnologia em Regularização Imobiliária

Somos mais que uma Startup de regularização de imóveis, nascemos para resolver um problema social que atinge mais de 50% da população brasileira.

Através da inovação, execução de qualidade e baixo custo realizamos o sonho da propriedade regularizada.

Nosso propósito é gerar segurança jurídica e #prosperidade a todas as pessoas.

*Venha fazer parte deste time CAMPEÃO!!!*

## Desenvolvedor Front-End

Então, quer dizer que você gosta de desafios e quer se tornar um desenvolvedor front-end na UsuCampeão? Está no lugar certo!

Este teste faz parte do nosso processo de seleção e é a sua chance de nos mostrar todo o seu conhecimento como desenvolvedor front-end com angular. Este teste está dividido em duas etapas:

1. Responder um questionário sobre HTML, CSS, JavaScript e Angular
1. Desenvolver uma aplicação simples, demonstrando seu conhecimento na prática

Daremos um feedback a todos os que fizerem o Pull Request.

O questionário e a especificação da aplicação estão logo abaixo.

A sua entrega será feita através de um Pull Request nesse repositório. Faça um fork do repositório, implemente o seu código, responda as questões no README.md e faça um pull request. Sinta-se a vontade para colocar quaisquer outras informações que você considere pertinente no README.

### Instruções:

1. Faça um fork deste repositório;
1. Responda as questões no README.md - caso prefira, podemos conversar sobre elas na entrevista;
1. Construa uma aplicação conforme solicitado, utilizando HTML, CSS e Angular;
1. Adicione quaisquer informações adicionais para executar sua aplicação no README.md;
1. Após terminar, submeta um pull request e aguarde seu feedback.

**PS:** Utilizamos este mesmo testes para os níveis (**júnior**, **pleno** ou **sênior**), apenas adequando o nível de exigência na avaliação de acordo com o perfil da vaga.

### Questionário

1. O que são ``components`` e ``directives`` e quais as difenças entre eles? Dê alguns exemplos de utilização.
    > `Components` e `Directives` são o 'backbone' da Angular. Ambas são usadas para o reuso de códigos e a maneira de passar comportamentos para o HTML, neste caso usando a linguagem JavaScript. Considerando que ambas são "tradutoras" de comportamentos, elas se diferenciam quanto ao uso. `Directives` passam comportamentos diretos para a aplicação, mas ela não tem uma view, isso implica num tempo menor na resposta dela para as solicitações da aplicação, contudo, diferentemente de `components`, várias `directives` podem ser passadas num mesmo elemento. `Components` também pode ser chamado de uma '`directive` com uma view', visto que ela apresenta ao usuário uma página para a visualização das ações. São bem utilizadas para setorizar partes de uma aplicação para facilitar desde a criação até o debug.

2. O que são ``services``? Dê alguns exemplos de utilização.
    > Uma Classe da aplicação que pode ser acessado por quaisquer componentes descritos no projeto, utilizado sempre que é necessário criar uma estrutura lógica que precisará ser acessada em outras partes do projeto. Um exemplo direto é este projeto 'PokeApp', projeto o qual fazemos requests para uma API. Considerando que esses dados devem estar disponíveis em toda a aplicação, a função é criada dentro de uma service. Como a própria documentação do Angular diz: "Service é uma Classe com um propósito bem definido que faz algo específico e muito bem".

3. O que são ``pipes``? Dê alguns exemplos de utilização.
    > Pipes são funções que tem por propósito formatar ou filtrar dados da aplicação de forma simples e rápida, sem necessitar de declarações expressas na aplicação. Alguns exemplos comuns é `{{algumDado | lowercase }}` -> transforma a string em minúscula, `{{algumDado | titlecase }}` -> transforma o primeiro carácter em maiúscula. Além dos pipes criados por padrão com a aplicação, também é possível criar pipes para formatar dados de qualquer maneira.

4. O que é ``data-binding`` e quais os tipos que o Angular dá suporte?
    > `Data binding` é a capacidade de conectar o dados de uma `view` com uma `Classe` ou um `Model`. Basicamente feito em duas formas: 'One-Way' que apenas recebe informações e 'Two-Way' que interage e altera as propriedades do objeto. Alguns exemplos são: 
    1. Template Expression `{{ }}`;
        > Usa a propriedade de uma `Classe` na `View`. Logo, quando alguma propriedade é alterada, a view é atualizada.
    2. Property Binding `[]`;
        > Tanto como um `elemento` como com uma `componente`, a propriedade é "presa" a algum outro dado e tem seu comportamento, então, conectado.
    3. Event Binding `()`;
        > Passa dado de um componente filho para um pai. 
    4. Banana in the Box `[()]`.
        > Possibilita usar tanto a conexão de propriedades quanto a conexão de eventos para criar uma "conversa" da model com o template.


5. Como se adiciona um *listener* de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?
    > Usa um 'Event Binder' dentro do componente e associa este a um evento, como por exemplo:
     
    ```<button mat-raised-button class="load-button" (click)="carregaMais()" [disabled]="carregando">```

    > Neste caso quando o usuário clicar neste botão, a função `carregaMais()` será disparada dentro da `Model`.

6. Quais as diferenças entre ``constructor`` e ``ngOnInit``, e quando devemos usar cada um?
    > O `constructor` é o primeiro móduolo a ser carregado. Ela estrutura os comportamentos antes do `ngOnInit`. Este segundo faz parte do ciclo de vida do Angular. A utilização deles precisa estar conectada com essa ideia. Como o `constructor` será iniciado primeiro, nele deve conter apenas o essencial da aplicação e com a utilização do `ngOnInit` não necessita inicializar variáveis ou outros componentes. Isso melhora a velocidade da aplicação e o uso de memória alocada.

7. Quais as diferenças entre ``Observables`` e ``Promises``? Como você o utilizaria cada um em um ``template``?
    > `Observables` servem para fazer requisições durante um período do tempo, enquanto `Promises` apenas podem lidar com um evento, ou seja, em um request, um `Observable` irá buscar todos os requests simultaneamente, enquanto a `Promise` fará um de cada vez. Outra grande diferença no que tange a memória é a capacidade de poder cancelar uma solicitação, coisa que a `promise` é incapaz. Ao fazer uma solicitação, o `promise` tem mais suporte por ser algo nativo do JavaScript, então se o request for algo simples e direto daria para usa-la, contudo, se a solicitação for algo extenso, então as `Observables` faria o request em menos tempo e com mais tratamento, facilitando o uso dela na aplicação.

8. Quais as diferenças entre ``template-driven forms`` e ``reactive forms``? Como fazer validação de dados de formulário em cada caso?
    > Os `template-driven-forms` são formulários que tem sua estrutura toda no próprio template, sendo utilizado em formulários mais simples, ele consegue agir muito bem, fazendo o `controller` estar praticamente vazio, contudo, pela quantidade de informações mostradas na tela, o código pode ficar mais complicado de ler rapidamente. Tornando-se ainda mais complexo a cada validação necessária, mas mesmo que seja de fácil criação, ele não permite testes de unidade. Os `reactive-forms` tem as validações dentro da `controller` e poder fazer testes unitários já é uma grande vantagem por sí só. Além das validações dentro da `controller`, este permite usar uma api para fazer as validações pela `Observable` API, aumentando muito as possibilidades contidas nesta forma. 

9.  Como se utiliza o ``angular router``? Quais são as formas de enviar parâmetros para uma rota?
    > Precisa-se: 
        
            1. 2 componentes para ter a rota; 
            2. Inserir o Módulo de rota no 'module.ts'
            3. Definir as rotas no módulo de redirecionamento 
                ```{path: 'detalhesPokemon/:id', component: DetalhesPokemonsComponent};```
            4. Depois passa `routerLink` e `routerLinkActive` para o local que será feito o routing.
    > Outra maneira de fazer é usando o ```onSelect(id) {this.router.navigate(['/detalhesPokemon', id]);``` que consegue enviar o id junto à rota. O router também garante que apenas os caminhos declarados serão acessados.
  }

10.  O que são *guards de rota* e para que são úteis?
    > São serviços que fazem um gerenciamento de rotas por tratar os acessos com autenticação. Sua utilidade principal mora na capacidade de proteger certas informações ou áreas da aplicação.

11. O que é ``NgZone``? Em que momento deve ser utilizada?
    > É um método que consegue rodar um bloco de código "fora" da aplicação principal do Angular. Deve ser utilizada quando algum trabalho não precisar atualizações para o usuário ou o tratamento de erro pelo Angular. Por meio de alguns métodos podem tanto ser "retirados" quanto "adicionados".

12. O que é *injeção de dependências* e por que isso é útil? Como você realiza injeção de dependências entre módulos?
    > Injeção de dependepências é a capacidade conversar entre classes, enviando e buscando métodos. É útil porque podemos setorizar o código e rodar apenas o que é necessário, melhorando as iterações. Utilizamos essas injeções por meio do implemento de classe, e métodos `getters` e `setters` na sua maioria. Mas também podemos fazer injeções com base no que precisamos buscar de outra classe. 

Ah, e a mais importante de todas: Bulbassauro, <b>Charmander</b> ou Squirtle? =)

### Projeto: Criando uma Pokédex usando a PokéAPI

Pokémon é uma enorme franquia com jogos, desenhos, filmes, brinquedos e diversos produtos mundialmente conhecidos. Da [Wikipédia](https://pt.wikipedia.org/wiki/Pokémon_(série_de_jogos_eletrônicos)):

> Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e publicados pela Nintendo como parte da franquia de mídia Pokémon. Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a principal série de jogos de RPGs, que continuou em cada geração em portáteis da Nintendo.
> 
> Os jogos são geralmente lançados em pares - cada um com pequenas variações - com uma recriação aprimorado dos usados jogos lançados em alguns anos depois das versões originais. Enquanto a série principal consiste em RPGs, os spin-off abrangem outros gêneros, como RPG de ação, quebra-cabeça e jogos virtuais para animais de estimação.
> 
> A partir de 24 de novembro de 2017, mais de 300 milhões de jogos de Pokémon foram vendidos em todo o mundo, em 76 títulos. Isso faz de Pokémon a segunda franquia de jogos eletrônicos mais vendidas, atrás da própria franquia da Nintendo Mario.

Em 2016, a Nintendo lançou o jogo Pokémon Go, para Android e iOS, que permitia aos jogadores "caçar" Pokémons no "mundo real" através de realidade aumentada, utilizando o GPS e a câmera dos celulares dos jogadores. Seus monstrinhos capturados ficavam listados na chamada Pokédex, um acervo de Pokémons que já existia desde o primeiro jogo.

Seu objetivo, neste projeto, é criar uma Pokédex em Angular usando a PokéAPI.

A [PokéAPI](https://pokeapi.co/) é uma API aberta, sem necessidade de  disponibiliza uma API REST com, entre outras coisas, informações de todos os Pokémons até a geração 7. Você pode consultar a documentação da API [aqui](https://pokeapi.co/docs/v2).

Você é livre para montar a aplicação como quiser, mas gostaríamos de ver a listagem de todos o Pokémons, com informações básicas, em uma página inicial e detalhes do Pokémon selecionado em outra página. Como referência de layout, recomendamos que utilize as seguintes Pokédex como exemplo:

- [Pokédex oficial](https://www.pokemon.com/br/pokedex/)

(link: [https://www.pokemon.com/br/pokedex/](https://www.pokemon.com/br/pokedex/))

![Pokédex oficial](pokemon.com.png)

- [Pokedex.org](https://pokedex.org/)

(link: [https://pokedex.org/](https://pokedex.org/))

![Podedex.org](pokedex.org.png)

Temos alguns pré-requisitos:
- Utilização de Angular 8+;
- Uso de SASS/SCSS para CSS da aplicação;
- Design responsivo;
- Ah, e não se esqueça de mostrar os sprites (as imagens) de cada Pokémon!

Além disso, vamos avaliar como você organiza e documenta o projeto, e a estrutura de módulos, componentes, serviços e rotas que você criou.

Ganhe pontos extras por:
- Uso de Angular Material;
- Layout diferenciado e animações;
- Mecanismo de pesquisa;
- Cache e persistência dos dados no ``localStorage`` ou ``IndexedDB``;
- Funcionamento offline com os dados cacheados - melhor ainda se for um PWA!;
- Testes unitários e end to end;
- Scripts de deploy;
- Organização e mensagens dos commits.

E não se esqueça, bugs e exceções são como Pokémons: *Gotta catch 'em all!*

**Boa sorte! =)**