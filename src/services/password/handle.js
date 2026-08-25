async function handle() {
  let caracters = [];
  let password = "";

  console.log("MAIÚSCULAS:", process.env.UPPERCASE_LETTERS);
  console.log("MINÚSCULAS:", process.env.LOWERCASE_LETTERS);
  console.log("NÚMEROS:", process.env.NUMBERS);
  console.log("ESPECIAIS:", process.env.SPECIAL_CHARACTERS);

  const passwordLength = parseInt(process.env.PASSWORD_LENGTH);
  caracters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    password += caracters[Math.floor(Math.random() * caracters.length)];
  }

  return password;
}

export default handle;
