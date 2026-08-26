import prompt from "prompt";
import promptSchemaMain from "./prompt-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.error("Erro ao obter a entrada do usuário:", err);

    if (choose.select === "1") await createQRCode();
    if (choose.select === "2") await createPassword();
  });
}
prompt.start();

main();
