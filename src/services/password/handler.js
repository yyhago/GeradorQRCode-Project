import permittedCharacters from "./utils/charactersPermitted.js";

async function handler() {
  let characters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handler;
