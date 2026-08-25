import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Selecione uma opção: (1 - Gerar QR Code, 2 - Password)",
    ),
    pattern: /^[1-2]+/,
    message: chalk.red.bold("Opção inválida. Digite 1 ou 2."),
    required: true,
  },
];

export default promptSchemaMain;
