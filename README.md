<div align="center">

<img src="docs/tabito_banner.png" alt="Tabito - Experiência com propósito!" width="100%">

<br>

# 旅人 Tabito

**Um espaço para compartilhar experiências de viagem, com foco no Japão.**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-7c4dbd?style=for-the-badge)
![SPTech](https://img.shields.io/badge/SPTech-ADS-1f1233?style=for-the-badge)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

[Sobre](#-sobre-o-projeto) •
[Galeria](#-galeria) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias) •
[Como executar](#-como-executar) •
[Autor](#-autor)

</div>

---

## Sobre o projeto

**Tabito** (旅人) significa *viajante* em japonês.

O projeto nasceu da minha vivência: nasci no Japão, cresci no Brasil e voltei a morar no Japão aos 13 anos. Dessa jornada surgiu a convicção de que **todo mundo tem algo para compartilhar com o próximo**.

### O problema

Informações sobre viagens e vida no Japão costumam estar espalhadas, ou vêm de guias genéricos que não carregam a experiência de quem realmente esteve lá.

### A solução

Um website com cadastro e login em que qualquer pessoa pode **publicar suas próprias vivências, dicas e histórias de viagem**, e também explorar o que outros viajantes compartilharam.

> Projeto individual de **Pesquisa e Inovação** do curso de Análise e Desenvolvimento de Sistemas da **SPTech**, desenvolvido em 6 semanas.

---

## Identidade visual

- Tons de **roxo e lilás** sobre fundo escuro
- Padrão *seigaiha* (ondas japonesas) no plano de fundo
- Logo com flores de cerejeira, Monte Fuji, torii e avião
- Mapa-múndi em linhas, representando o alcance das experiências

---

## Galeria

Alguns dos lugares que já visitei e que inspiraram o Tabito.


<table>
  <tr>
    <td align="center" width="33%">
      <img src="docs/img/galeria/lugar1.jpg" alt="Lugar 1" width="100%"><br>
      <sub><b>Lugar 1</b><br>Região, Japão</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/img/galeria/lugar2.jpg" alt="Lugar 2" width="100%"><br>
      <sub><b>Lugar 2</b><br>Região, Japão</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/img/galeria/lugar3.jpg" alt="Lugar 3" width="100%"><br>
      <sub><b>Lugar 3</b><br>Região, Japão</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <img src="docs/img/galeria/lugar4.jpg" alt="Lugar 4" width="100%"><br>
      <sub><b>Lugar 4</b><br>Região, Japão</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/img/galeria/lugar5.jpg" alt="Lugar 5" width="100%"><br>
      <sub><b>Lugar 5</b><br>Região, Japão</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/img/galeria/lugar6.jpg" alt="Lugar 6" width="100%"><br>
      <sub><b>Lugar 6</b><br>Região, Japão</sub>
    </td>
  </tr>
</table>

---

## Funcionalidades

**Essenciais**

- [ ] Website responsivo
- [ ] Cadastro e login de usuários
- [ ] Dashboard do usuário com suas publicações
- [ ] Criação, edição e exclusão de experiências
- [ ] Página pública com listagem e filtro por país/categoria

**Ideias futuras**

- [ ] Upload de fotos nas publicações
- [ ] Curtidas e comentários
- [ ] Mapa interativo com as experiências por localização

---

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Front-end | HTML, CSS e JavaScript |
| Back-end | Node.js |
| Banco de dados | MySQL |
| Versionamento | Git e GitHub |

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
cd projeto_individual/tabi/web-data-viz

# 3. Instale as dependências
npm install
```

**4. Configure o banco de dados**

Execute o script SQL do projeto no MySQL para criar o banco e as tabelas:

```bash
mysql -u seu_usuario -p < caminho/para/script.sql
```

**5. Configure as variáveis de ambiente**

Crie um arquivo `.env` (ou `.env.dev`) na raiz do projeto:

```env
AMBIENTE_PROCESSO=desenvolvimento
APP_PORT=3333
APP_HOST=localhost

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=tabito
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

**6. Inicie a aplicação**

```bash
npm start
```

Depois, acesse **http://localhost:3333** (ou a porta configurada no `.env`).

---

## 📁 Estrutura do projeto


```text
web-data-viz/
├── public/          # Front-end (HTML, CSS, JS e imagens)
├── src/
│   ├── routes/      # Rotas da API
│   ├── controllers/ # Regras de entrada e saída
│   ├── models/      # Acesso ao banco de dados
│   └── database/    # Configuração da conexão
├── app.js           # Ponto de entrada do servidor
└── package.json
```

---

## 📚 Documentação

O escopo completo, com premissas e restrições, está na pasta [`docs/`](./docs).

---

## 👤 Autor

**Kauã Hideaki Siratsuti**
1º semestre de Análise e Desenvolvimento de Sistemas, SPTech, São Paulo, 2026.

[![GitHub](https://img.shields.io/badge/GitHub-siratsuti--sptech-181717?style=flat-square&logo=github)](https://github.com/siratsuti-sptech)

---

<div align="center">

*Compartilhar experiências com propósito.*

旅人 • Tabito

</div>
