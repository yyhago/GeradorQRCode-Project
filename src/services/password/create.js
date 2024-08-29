import chalk from "chalk";
import handler from "./handler.js"; 

async function createPassword() {
  console.log(chalk.yellow('Password'));
  const password = await handler(); 
  console.log(password);
}

export default createPassword;
