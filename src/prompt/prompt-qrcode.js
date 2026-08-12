import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QR Code"),

    required: true,
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "Selecione o tipo de QR Code: (1 - NORMAL ou 2 - TERMINAL)",
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold("Opção inválida. Digite 1 ou 2."),
    required: true,
  },
];

export default promptQRCode;
