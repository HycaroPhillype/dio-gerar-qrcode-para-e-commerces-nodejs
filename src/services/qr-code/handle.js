import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, result) {
  if (err) {
    console.error("Erro ao obter os dados:");
    return;
  }

  const isSmal = result.type === "2";
  qr.generate(result.link, { small: isSmal }, (qrcode) => {
    console.log(chalk.green.bold("QR Code gerado com sucesso!\n"));
    console.log(qrcode);
  });
}

export default handle;
