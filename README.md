# 🛒 Gerador de QR Code para E-commerces com Node.js

Projeto desenvolvido durante a formação de **Node.js da DIO (Digital Innovation One)**.

A aplicação funciona através do terminal e permite gerar **QR Codes a partir de links**, utilizando Node.js e bibliotecas do ecossistema NPM.

O projeto foi desenvolvido com foco na prática de **modularização, organização de código, utilização de pacotes NPM e interação com o usuário através do terminal**.

---

## 🚀 Tecnologias utilizadas

- Node.js
- JavaScript
- ES Modules
- NPM

### 📦 Bibliotecas

- **Chalk** — estilização das mensagens exibidas no terminal;
- **Prompt** — entrada de dados através do terminal;
- **QRCode Terminal** — geração e exibição de QR Codes diretamente no terminal.

---

## 📁 Estrutura do projeto

```text
src/
├── prompt/
│   ├── prompt-main.js
│   └── prompt-qrcode.js
│
├── services/
│   └── qr-code/
│       ├── create.js
│       └── handle.js
│
└── index.js
```

---

## ⚙️ Como executar o projeto

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

Também é possível executar o projeto em modo `watch`:

```bash
npm run start:dev
```

---

## 💻 Como funciona

Ao iniciar a aplicação, um menu é apresentado no terminal.

O usuário pode selecionar a opção de geração de QR Code e informar o link que deseja transformar.

Após receber os dados, a aplicação gera o **QR Code diretamente no terminal**.

---

## 🎯 Conceitos praticados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- Modularização de código;
- Importação e exportação com ES Modules;
- Funções assíncronas;
- Instalação e utilização de pacotes NPM;
- Entrada de dados pelo terminal;
- Organização de serviços;
- Separação de responsabilidades;
- Manipulação de variáveis de ambiente;
- Geração de QR Codes com Node.js.

---

## 🔧 Próximas melhorias

- [ ] Implementar completamente o gerador de senhas;
- [ ] Melhorar as validações de entrada;
- [ ] Adicionar tratamento para opções inválidas;
- [ ] Melhorar a experiência do menu no terminal;
- [ ] Adicionar novos recursos ao gerador de QR Code.

---

## 📚 Sobre o projeto

Este projeto faz parte dos desafios práticos realizados durante meus estudos de **desenvolvimento Back-End com Node.js na DIO**.

O objetivo é aplicar na prática os conhecimentos adquiridos durante a formação e evoluir conceitos relacionados à construção e organização de aplicações utilizando JavaScript e Node.js.

---

## 👨‍💻 Autor

**Hycaro Phillype**

Backend Developer em formação, com foco em **Node.js, JavaScript e TypeScript**.

🔗 GitHub: `HycaroPhillype`

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
