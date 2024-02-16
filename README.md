# Boilerplate para aplicações de React-Next-Chakra.UI

### Olá! É um prazer saber que você está interessado em usar este modelo de projeto. Aqui estão algumas informações para facilitar sua experiência ao usá-lo.

### 1. Estruturas de pastas
#### É importante que você tenha um conhecimento prévio sobre como a estrutura de pastas do Next.js funciona. Abaixo, forneceremos um pequeno exemplo:
  1. Localize a pasta "pages" (responsável pela criação das rotas)
     - /src
       - /pages
         
### Exemplo:
```
    import { Home } from '~/lib/pages/home';
    export default Home;
```
  2. Localize a pasta "pages" em lib (responsável pela criação de views)
     - /src
       - /lib
            - /pages
### Exemplo:
```
import { Flex } from '@chakra-ui/react';
import { Layout } from '~/lib/layout';
export const Home = () => {
    return (
    <Layout>
       <Flex justify="center" align="center" w="100%" h="100vh">
          Você vai começar aqui!
       </Flex>
    </Layout>
    );
};
```
  #### É de extrema importância que você entenda este padrão, pois em uma pasta você irá criar as rotas disponíveis na aplicação e na outra você irá desenvolver o layout dessas rotas.

  ### 2. Estrutura de componentes do Chakra.UI
  #### Este template utiliza o Chakra.UI para os componentes. É crucial que você continue utilizando as tags específicas do Chakra para aproveitar a estilização inline fornecida pela biblioteca. Abaixo, listamos algumas dessas tags não componentizadas.

> [!NOTE]
> Os links disponíveis vão lhe levar para documentação na página da propriedade indicada, e lá você também vai ter acesso as propriedades disponíveis para o componente.


#### Layout
 - [Box](https://chakra-ui.com/docs/components/box): div apenas com um display: block;
 - [Center](https://chakra-ui.com/docs/components/center): div com display: flex, justifyContent: center, alignItems: center;
 - [Container](https://chakra-ui.com/docs/components/container): div com width: 100%, marginX: auto, paddingX: 4;
 - [Flex](https://chakra-ui.com/docs/components/flex): div apenas com um display: flex;
 - [Grid](https://chakra-ui.com/docs/components/grid): div apenas com um display: grid;
 - [SimpleGrid](https://chakra-ui.com/docs/components/simple-grid): simplifica a utilização do grid;
 - [Stack](https://chakra-ui.com/docs/components/stack): div com um display: flex; flexDirection: column;
 - [HStack](https://chakra-ui.com/docs/components/stack): div com um display: flex; flexDirection: row;

#### Textos
 - [Text](https://chakra-ui.com/docs/components/text): apenas uma tag p;
- [Heading](https://chakra-ui.com/docs/components/heading): apenas um h2;
- [Highlight](https://chakra-ui.com/docs/components/highlight): criado dentro de uma das tags acima para ter um highlight no texto;

> [!NOTE]
> É importante lembrar que, para tornar o código mais semântico, você pode substituir as tags do Chakra por tags HTML da seguinte forma:
> ```<Text as="span"></Text>``` ou ```<Flex as="section"></Flex>```

### 3. Links e Images
#### É importante ressaltar que, embora o Chakra.UI disponibilize tags para links e imagens, em nossos projetos, usaremos as tags fornecidas pelo Next.js.

### 4. Configuração do Ambiente de Desenvolvimento
####  Requisitos Mínimos:
- Node.js;
- NPM;

#### Instalção das Dependências:
1. Clone este repositório em sua máquina.
2. Navegue até o diretório do projeto.
3. Execute o comando ```npm install``` para instalar todas as dependência necessárias.

#### Inicializando o projeto em desenvolvimento:
```npm run dev```
#### Projeto ficará hospedado na rota:
> localhost:3001
