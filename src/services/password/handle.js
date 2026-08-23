async function permittedCharacters() {
  let characters = [];

  if (process.env.UPPERCASE_LETTERS === "true")
    characters = characters.concat(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));

  if (process.env.LOWERCASE_LETTERS === "true")
    characters = characters.concat(..."abcdefghijklmnopqrstuvwxyz".split(""));

  if (process.env.NUMBERS === "true")
    characters = characters.concat(..."0123456789".split(""));

  if (process.env.SPECIAL_CHARACTERS === "true")
    characters = characters.concat(..."!@#$%^&*()-+".split(""));

  return characters;
}

async function handle() {
  let caracters = [];
  let password = "";

  const passwordLength = parseInt(process.env.PASSWORD_LENGTH);
  chaacters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    password += caracters[Math.floor(Math.random() * caracters.length)];
  }

  return password;
}

export default handle;
