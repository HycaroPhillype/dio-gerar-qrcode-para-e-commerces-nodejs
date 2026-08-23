import chalk from "chalk";
import handle from "./handle.js";
async function createPassword() {
  console.log(chalk.blue.bold("Password"));
  const password = await handle();
  console.log(chalk.green.bold("Generated Password:"), password);
}

export default createPassword;
