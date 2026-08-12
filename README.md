# 📱 Gerador de QR Code para E-commerces

Aplicação desenvolvida em **Node.js** para geração de QR Codes a partir de links informados pelo usuário através do terminal.

Este projeto foi desenvolvido durante meus estudos de **JavaScript e Node.js**, com o objetivo de praticar conceitos importantes de desenvolvimento backend, como modularização, organização de responsabilidades, utilização de bibliotecas externas e interação com o terminal.

---

## 🚀 Sobre o projeto

A aplicação apresenta um menu interativo no terminal onde o usuário pode escolher a funcionalidade desejada e gerar um QR Code a partir de uma URL.

O projeto foi estruturado separando a lógica de interação com o usuário da lógica responsável pelo processamento do QR Code.

### ✨ Funcionalidades

* 📋 Menu interativo no terminal
* 🔗 Entrada de URL pelo usuário
* 📱 Geração de QR Code
* 🖥️ Exibição do QR Code diretamente no terminal
* ⚡ Opção de geração em diferentes formatos de visualização
* 🎨 Mensagens estilizadas no terminal
* 🧩 Código organizado em módulos
* ✅ Validação das opções informadas pelo usuário

---

## 🛠️ Tecnologias utilizadas

| Tecnologia          | Utilização                                  |
| ------------------- | ------------------------------------------- |
| **Node.js**         | Ambiente de execução da aplicação           |
| **JavaScript**      | Linguagem utilizada no projeto              |
| **ES Modules**      | Organização e importação dos módulos        |
| **Prompt**          | Interação com o usuário através do terminal |
| **Chalk**           | Estilização das mensagens no terminal       |
| **qrcode-terminal** | Geração dos QR Codes                        |

---

## 📂 Estrutura do projeto

```text
gerador-qrcodes-ecommerces-nodejs/
│
├── src/
│   ├── prompt/
│   │   ├── prompt-main.js
│   │   └── prompt-qrcode.js
│   │
│   ├── services/
│   │   └── qr-code/
│   │       ├── create.js
│   │       └── handle.js
│   │
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

### 📌 Organização

**`src/index.js`**

Ponto de entrada da aplicação e responsável pelo fluxo principal.

**`src/prompt/`**

Contém os módulos responsáveis pelas interações e perguntas apresentadas ao usuário.

**`src/services/qr-code/`**

Concentra a lógica relacionada à criação e ao processamento dos QR Codes.

Essa separação ajuda a evitar que toda a lógica da aplicação fique concentrada em um único arquivo.

---

## ⚙️ Como executar

### Pré-requisitos

Antes de começar, você precisa ter instalado:

* [Node.js](https://nodejs.org/)
* Git

### 1. Clone o repositório

```bash
git clone https://github.com/HycaroPhillype/dio-gerar-qrcode-para-e-commerces-nodejs.git
```

### 2. Entre na pasta do projeto

```bash
cd dio-gerar-qrcode-para-e-commerces-nodejs
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm run dev
```

---

## 💻 Funcionamento

Ao executar o projeto, a aplicação inicia uma interação através do terminal.

O usuário escolhe a opção desejada e, quando seleciona a geração de QR Code, informa a URL que deseja transformar em código.

Exemplo do fluxo:

```text
┌─────────────────────────────────────┐
│       GERADOR DE QR CODE            │
├─────────────────────────────────────┤
│                                     │
│  1 - Gerar QR Code                  │
│  2 - Password                       │
│                                     │
└─────────────────────────────────────┘
```

Após informar a URL, o QR Code é processado e exibido diretamente no terminal.

---

## 🧠 Principais conceitos praticados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

* JavaScript moderno;
* Node.js;
* ES Modules;
* `import` e `export`;
* funções assíncronas;
* interação com o terminal;
* utilização de bibliotecas NPM;
* organização de diretórios;
* separação de responsabilidades;
* tratamento e validação de entradas;
* execução de scripts através do `package.json`.

---

## 📚 O que este projeto representa na minha jornada

Este projeto faz parte da minha evolução nos estudos de **desenvolvimento backend com Node.js**.

Apesar de ser uma aplicação simples, o objetivo não foi apenas fazer o código funcionar, mas também começar a desenvolver boas práticas de organização e estruturação de projetos.

Ao longo do desenvolvimento, também tive contato com problemas reais de programação, como erros de importação, organização de caminhos entre arquivos e configuração do projeto.

Esses desafios fazem parte do processo de aprendizado e foram importantes para compreender melhor como uma aplicação Node.js é estruturada.

---

## 🔎 Próximos passos

Algumas possibilidades de evolução para o projeto:

* [ ] Adicionar testes automatizados
* [ ] Melhorar o tratamento de erros
* [ ] Criar uma interface web
* [ ] Permitir salvar os QR Codes como arquivos
* [ ] Adicionar histórico de QR Codes gerados
* [ ] Transformar a aplicação em uma API REST

---

## 👨‍💻 Autor

**Hycaro Phillype**

Estudante de desenvolvimento backend, construindo projetos práticos enquanto aprofundo meus conhecimentos em **JavaScript, Node.js, TypeScript e desenvolvimento de APIs**.

---

## 📌 Projeto desenvolvido para fins de estudo

Projeto desenvolvido como parte da minha jornada de aprendizado em **Node.js**, colocando em prática conceitos estudados através de desenvolvimento e resolução de problemas reais durante a implementação.

⭐ Se este projeto foi útil ou interessante para você, fique à vontade para explorar o código.
