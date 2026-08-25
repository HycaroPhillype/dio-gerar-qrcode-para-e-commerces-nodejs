import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
  let caracters = [];
  let password = "";

  const passwordLength = parseInt(process.env.PASSWORD_LENGTH);
  caracters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    password += caracters[Math.floor(Math.random() * caracters.length)];
  }

  return password;
}

export default handle;
