<div align="center">

<img src="docs/tabito_banner.png" alt="Tabito - Experiência com propósito!" width="100%">

<br>

# 旅人 Tabito

**Um espaço para contar uma história de viagem: a minha trajetória no Japão e na Europa, e um mapa pessoal dos países que fazem parte da jornada.**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-7c4dbd?style=for-the-badge)
![SPTech](https://img.shields.io/badge/SPTech-ADS-1f1233?style=for-the-badge)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

[Sobre](#sobre-o-projeto) •
[Páginas](#páginas) •
[Funcionalidades](#funcionalidades) •
[Arquitetura](#arquitetura) •
[Banco de dados](#banco-de-dados) •
[Como executar](#como-executar) •
[Diário de prompts](#uso-de-ia-e-diário-de-prompts) •
[Autor](#autor)

</div>

---

## Sobre o projeto

**Tabito** (旅人) significa *viajante* em japonês.

O projeto nasceu da minha vivência: nasci no Japão, cresci no Brasil e voltei a morar no Japão aos 13 anos. Dessa jornada surgiu a convicção de que **todo mundo tem algo para compartilhar com o próximo**.

### O problema

Informações sobre a vida no Japão costumam vir de guias genéricos, que não carregam a experiência de quem realmente viveu lá, com os lados bons e também os difíceis.

### A solução

Um website com cadastro e login que conta a minha história em blocos: a **vida no Japão** (chegada, idioma, amizades, cultura e cultura do trabalho), o **mochilão pela Europa** e uma área para o visitante **marcar os países** que já visitou ou quer visitar e acompanhar esses dados em uma **dashboard** com gráficos.

> Projeto individual de **Pesquisa e Inovação** do curso de Análise e Desenvolvimento de Sistemas da **SPTech**, desenvolvido em 6 semanas a partir do template `web-data-viz`, fornecido pela SPTech e refatorado para este tema.

---

## Identidade visual

- Tons de **roxo e lilás** sobre fundo escuro
- Padrão *seigaiha* (ondas japonesas) no plano de fundo
- Fontes manuscritas **Yuji Boku** e **Klee One**
- Logo com flores de cerejeira, Monte Fuji, torii e avião
- Ícones e mapa-múndi em linhas, no mesmo estilo da logo

---

## Páginas

| Página | Arquivo | O que faz |
| --- | --- | --- |
| Inicial | `index.html` | Apresenta o Tabito, com a foto do autor, o mapa e os blocos Experiência, Visão e Cultura |
| Cadastro | `cadastro.html` | Cria a conta do usuário |
| Login | `login.html` | Autentica o usuário e inicia a sessão |
| Minha Jornada | `dashboard/jornada.html` | Conta a trajetória no Japão e na Europa |
| Explorar | `dashboard/explorar.html` | Marca países como visitados ou na lista de desejos |
| Dashboard | `dashboard/dashboard.html` | Mostra números, gráficos e listas das marcações |

---

## Galeria

Alguns dos lugares que já visitei e que inspiraram o Tabito.

<table>
  <tr>
    <td align="center" width="33%">
      <img src="docs/japao.JPG" alt="Lugar 1" width="100%"><br>
      <sub><b>Lugar 1</b><br>Japão</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/inglaterra.jpg" alt="Lugar 2" width="100%"><br>
      <sub><b>Lugar 2</b><br>Inglaterra</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/portugal.JPG" alt="Lugar 3" width="100%"><br>
      <sub><b>Lugar 3</b><br>Portugal</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <img src="docs/italia.JPG" alt="Lugar 4" width="100%"><br>
      <sub><b>Lugar 4</b><br>Itália</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/vaticano.jpg" alt="Lugar 5" width="100%"><br>
      <sub><b>Lugar 5</b><br>Vaticano</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/franca.jpg" alt="Lugar 6" width="100%"><br>
      <sub><b>Lugar 6</b><br>França</sub>
    </td>
  </tr>
</table>

---

## Funcionalidades

**Essenciais**

- [x] Página inicial com a identidade visual do Tabito
- [ ] Cadastro e login conectados à API e ao banco de dados (em teste)
- [x] Controle de sessão: as páginas internas exigem login
- [x] Página Minha Jornada, com capítulos do Japão e galerias de lugares
- [x] Página Explorar, com 138 países, busca por nome e filtro por continente
- [x] Dashboard com números, gráficos (Chart.js) e listas
- [ ] Salvar as marcações do Explorar no banco de dados (hoje ficam no navegador)

**Ideias futuras**

- [ ] Guardar as senhas com hash (bcrypt)
- [ ] Visitantes publicarem as próprias experiências
- [ ] Envio de fotos
- [ ] Curtidas e comentários
- [ ] Mapa interativo com os lugares visitados

---

## Arquitetura

```text
Navegador (HTML, CSS e JavaScript)  →  API Node.js (Express)  →  MySQL
        front-end                          back-end             banco de dados
```

O navegador envia requisições (`fetch`) para a API. Cada requisição passa pela **rota**, pelo **controller** (valida os dados) e pelo **model** (executa o SQL no banco). A resposta volta em JSON.

Hoje o fluxo completo (navegador, API e banco) está ligado no **cadastro** e no **login**. Depois do login, o `id`, o nome e o e-mail ficam em `sessionStorage`, e é isso que libera as páginas internas.

---

## Banco de dados

Banco `tabito`, com quatro tabelas. O script de criação, com os 138 países, está em [`database/tabito.sql`](./database/tabito.sql).

| Tabela | Campos | Descrição |
| --- | --- | --- |
| `usuario` | idUsuario (PK), nome, email (único), senha, dtCadastro | Quem faz login |
| `continente` | idContinente (PK), nome (único) | 6 continentes |
| `pais` | idPais (PK), codigo (único), nome, nomeJp, fkContinente (FK) | 138 países |
| `lugar` | fkUsuario (FK), fkPais (FK), status. PK composta | Países marcados por cada usuário |

```text
usuario (1) ──── (N) lugar (N) ──── (1) pais (N) ──── (1) continente
```

- Um usuário marca vários países e um país é marcado por vários usuários (**N:N**). A tabela associativa `lugar` resolve essa relação, e a chave composta impede marcar o mesmo país duas vezes.
- O `status` só aceita `visitado` ou `desejo`. País inexplorado não tem registro.
- `ON DELETE CASCADE` em `fkUsuario`: ao excluir um usuário, as marcações dele são excluídas junto.


---

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Front-end | HTML, CSS e JavaScript |
| Gráficos | Chart.js |
| Back-end | Node.js, Express, mysql2, cors e dotenv |
| Banco de dados | MySQL |
| Versionamento | Git e GitHub |
| Apoio | VS Code, MySQL Workbench e Trello |

---

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS)
- [MySQL](https://www.mysql.com/) instalado e em execução
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/siratsuti-sptech/projeto_individual.git

# 2. Entre na pasta do projeto
cd projeto_individual/tabi

# 3. Instale as dependências
npm install
```

**4. Crie o banco de dados**

Execute o script no MySQL (pelo Workbench ou pelo terminal):

```bash
mysql -u root -p < database/tabito.sql
```

Crie também o usuário que a aplicação usa:

```sql
CREATE USER IF NOT EXISTS 'tabito_user'@'localhost' IDENTIFIED BY 'sua_senha';
GRANT SELECT, INSERT, UPDATE, DELETE ON tabito.* TO 'tabito_user'@'localhost';
FLUSH PRIVILEGES;
```

**5. Configure as variáveis de ambiente**

Crie um arquivo `.env.dev` na raiz do projeto (em desenvolvimento, a aplicação lê este arquivo):

```env
AMBIENTE_PROCESSO=desenvolvimento

DB_HOST=localhost
DB_DATABASE=tabito
DB_USER=tabito_user
DB_PASSWORD=sua_senha
DB_PORT=3306

APP_PORT=3333
APP_HOST=localhost
```

> Os arquivos `.env` e `.env.dev` ficam no `.gitignore` e **não** vão para o GitHub.

**6. Inicie a aplicação**

```bash
npm start
```

Acesse **http://localhost:3333/cadastro.html** para criar uma conta. Abra o site por essa porta, e não pelo Live Server, porque é o servidor Node que responde à API.

---

## Estrutura do projeto

```text
tabi/
├── public/              # Front-end
│   ├── assets/          # Imagens e ícones
│   ├── css/             # Estilos
│   ├── js/              # sessao.js (controle de sessão)
│   ├── dashboard/       # jornada.html, explorar.html, dashboard.html
│   ├── index.html
│   ├── login.html
│   └── cadastro.html
├── src/
│   ├── routes/          # Rotas da API
│   ├── controllers/     # Validação dos dados recebidos
│   ├── models/          # Comandos SQL
│   └── database/        # Configuração da conexão
├── database/            # tabito.sql
├── docs/                # Documentação e imagens do README
├── app.js               # Ponto de entrada do servidor
└── package.json
```

---

## Documentação

O escopo completo, com requisitos, regras de negócio, premissas, restrições, riscos, modelagem e cronograma, está na pasta [`docs/`](./docs).

---

## Uso de IA e diário de prompts

Usei o **Claude** (Anthropic), em chat, como apoio durante o projeto: planejamento, documentação, imagens de apoio, explicação e correção de código e modelagem do banco. As sugestões e os trechos de código foram lidos, testados e adaptados por mim. O texto de contexto, as fotos e a história contada no site são de minha autoria.

O diário abaixo agrupa as conversas por assunto e mostra o que a IA sugeriu e o que eu fiz com a sugestão.

| Nº | Data | Categoria | O que eu pedi | O que a IA sugeriu | O que eu fiz e aprendi |
| --- | --- | --- | --- | --- | --- |
| 1 | [_12_/10] | Planejamento | Ajuda para montar a documentação do projeto individual (site com login e cadastro, tema livre), a partir do meu texto de contexto | Meio-termo entre página pessoal e comunidade; escopo, premissas e restrições; correções de português | **Fiz:** aproveitei o escopo, as premissas e as restrições e reescrevi com as minhas palavras. Depois o foco mudou, de fórum para a minha história.<br>**Aprendi:** a delimitar o que faz e o que não faz parte do escopo |
| 2 | [_12/10] | Planejamento | Ideias de nome, porque "ikigai" é muito usado | Tabi, Tabibito, Deai, Michi, Entre Mundos; usar o ikigai como slogan | **Fiz:** escolhi "Tabito" (旅人) e "Experiências com propósito" como slogan.<br>**Aprendi:** um nome curto funciona bem como logo |
| 3 | [_12_/10] | Planejamento e arquitetura | Cronograma de 6 semanas a partir da lista de tarefas do professor; informei que usamos Node.js e MySQL | Cronograma semanal, itens opcionais (quiz e API), arquitetura em três camadas, modelo de tabelas e estrutura de pastas | **Fiz:** [informe o que manteve e o que descartou].<br>**Aprendi:** como navegador, API e banco se comunicam |
| 4 | [_12_/10] | Documentação | Como deixar a documentação em ABNT e revisão do meu texto | Regras de formatação, modelo em Word e lista de correções (sumário digitado, títulos com dois pontos, ortografia) | **Fiz:** [informe o que aplicou].<br>**Aprendi:** estilos de título do Word e sumário automático |
| 5 | 12/10 | Estrutura do projeto | Prints do VS Code e pergunta sobre a estrutura de pastas | Separar front-end e back-end, CSS compartilhado, `.gitignore` e primeiro commit | **Fiz:** [informe o que aplicou].<br>**Aprendi:** `.env` e `node_modules` não vão para o GitHub |
| 6 | [_13_/10] | Código | Como abrir primeiro o login e se o `index` precisa ser o último arquivo; estava refatorando o template web-data-viz | O `index` é só o arquivo aberto por padrão; validação de sessão com `sessionStorage`; mudar banco e API antes do front-end | **Fiz:** [informe se aplicou].<br>**Aprendi:** esconder páginas no front-end não protege os dados, a API também precisa conferir |
| 7 | 13/10 | Imagens e design | Fundo para o Trello sem alterar o emblema, ícones e mapa-múndi no estilo do Tabito | Fundo widescreen, emblema recortado e transparente, três ícones e um mapa estilizado, desenhados por código | **Fiz:** usei o fundo, os ícones nos cartões e o emblema no cabeçalho. [informe se usou o mapa].<br>**Aprendi:** fundo transparente e peso de imagem |
| 8 | 13/10 | Código (HTML e CSS) | Por que a logo ao lado do título não aparecia; fonte manuscrita no cabeçalho | O link e a imagem estavam dentro do `head`; fontes Yuji Boku e Klee One; classes são nomes que eu escolho | **Fiz:** movi o bloco para o `body`, troquei a fonte e escureci o cabeçalho.<br>**Aprendi:** o `head` guarda configurações e só o `body` aparece; classe precisa ter o mesmo nome no HTML e no CSS |
| 9 | 13/10 | Código (CSS Grid) | Foto à esquerda e mapa à direita, mantendo a logo do fundo no meio; CSS que deu errado | Layout em três colunas com Grid; `width: 100px` no lugar de `100%`; seletor `.sobre-mapa img`; `height: auto` com `max-height` no lugar de `calc` | **Fiz:** corrigi os valores e a foto e o mapa passaram a se ajustar.<br>**Aprendi:** `fr`, `object-fit`, `%` contra `px` e a unidade `vh` |
| 10 | 14/10 | Código (Minha Jornada) | Reorganizar a página para contar a trajetória, com um bloco só para o Japão | Ids duplicados impedem a segunda galeria; função reutilizável; capítulos do Japão; efeito de aparecer ao rolar | **Fiz:** apliquei a nova estrutura de blocos.<br>**Aprendi:** um `id` é único na página; `IntersectionObserver` |
| 11 | 14/10 | Documentação | Avaliação do README | Texto desatualizado, links de âncora quebrados, risco de maiúsculas e minúsculas nos nomes das fotos | **Fiz:** [informe o que atualizou].<br>**Aprendi:** o README deve contar a mesma história que o site |
| 12 | 14/10 | Registro | Modelo de diário de prompts | Tabela com data, pedido, sugestão, o que fiz e o que aprendi; orientação de registrar tudo, sem deixar usos de fora | **Fiz:** montei o diário em Word e agora o trago para o README.<br>**Aprendi:** o que mostra a análise é a coluna "o que eu fiz" |
| 13 | 09/11 | Correção de erros | Prints do navegador, do console e do VS Code com a página que não carregava | O `validarSessao` falhava porque o elemento `b_usuario` não existia mais; 404 nas fotos por causa dos caminhos; foto em HEIC com extensão `.jpg`; conversão com `sips` | **Fiz:** ajustei o `sessao.js` e os caminhos e converti as fotos.<br>**Aprendi:** ler o console (erro, arquivo e linha) e o formato real de uma imagem |
| 14 | 11/11 | Código (Explorar) | Dashboard a partir dos dados do Explorar, sem o que era do projeto antigo; depois uma versão mais simples do mapa, que eu conseguisse explicar | Trocar o mapa (d3, topojson e datamaps) por cartões de países; fluxo clique, alternar, salvar e desenhar; dados no `localStorage` | **Fiz:** usei a versão com cartões.<br>**Aprendi:** `localStorage` com JSON, funções e laços para montar a tela |
| 15 | 12/11 | Código (Explorar) | Faltavam países e outras ideias simples | 138 países agrupados por continente, busca e filtro por continente | **Fiz:** usei o arquivo atualizado.<br>**Aprendi:** filtros com `for` e `if`, e tirar acentos para buscar |
| 16 | 12/11 | Código (Dashboard) | Ensinar a fazer a dashboard com Chart.js e tirar o que era do projeto antigo; depois remover a data | Dashboard nova com números, rosca, barras por continente e listas; estrutura `type`, `data` e `options` do Chart.js | **Fiz:** usei a Dashboard e pedi para retirar a data das marcações.<br>**Aprendi:** `labels` e `datasets`, e destruir o gráfico antes de refazer |
| 17 | 12/11 | Banco de dados | Ideias de banco e script a partir das regras do Explorar; para que serve `ON DELETE CASCADE` | Modelo `usuario`, `continente`, `pais` e `lugar` (N:N com status); script com os 138 países, dados de teste e consultas de cada tela | **Fiz:** [informe se executou o script no Workbench].<br>**Aprendi:** tabela associativa, chave composta, `GROUP BY` e `ON DELETE CASCADE` |
| 18 | 12/11 | API | O que alterar no cadastro e no login para funcionar com a API e gravar no banco; `app.js` e erro no cadastro | Remover imports e rotas do projeto antigo; model e controller novos; validações no `cadastro.html`; abrir o site pela porta 3333; remover `listar()` do `body` | **Fiz:** [informe o que aplicou e se o cadastro gravou no banco].<br>**Aprendi:** o caminho rota, controller, model e banco; códigos de status HTTP |


---

## Autor

**Kauã Hideaki Siratsuti**
1º semestre de Análise e Desenvolvimento de Sistemas, SPTech, São Paulo, 2026.

[![GitHub](https://img.shields.io/badge/GitHub-siratsuti--sptech-181717?style=flat-square&logo=github)](https://github.com/siratsuti-sptech)

---

<div align="center">

*Compartilhar experiências com propósito.*

旅人 • Tabito

</div>
