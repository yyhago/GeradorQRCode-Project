import permittedCharacters from "./utils/charactersPermitted.js";

async function handler() {
  let characters = []; // Variável para armazenar os caracteres válidos.
  let password = ""; // Variável para armazenar a senha após feita.

  // Salva a length da senha na constante 'passwordLength'
  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters(); // Espera passar pelos caracteres permitidos para armazenar na 'characters'

  // Estrutura de repetição que roda a cada vez que 'i' for menor que o tamanho da 'passwordLength'
  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length); // Calcula um elemento inteiro e multiplica no tamanho, e guardando na variavel
    password += characters[index]; // Pega o que ainda tem do 'password' e soma com o 'characters' e coloca no [index]
  }

  return password;
}

export default handler;
