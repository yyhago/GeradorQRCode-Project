import chalk from "chalk";
import handler from "./handler.js"; 

// Função createPassword exibindo o 'password' que é aguardado do handler
async function createPassword() {
  console.log(chalk.yellow('Password'));
  const password = await handler(); 
  console.log(password);
}

export default createPassword;
