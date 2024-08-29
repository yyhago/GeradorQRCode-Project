import qr from 'qrcode-terminal'
import chalk from "chalk";

// Caso caia no 'err' retorna o erro
async function handler(err, result){
  if(err){
    console.log("error on application")
    return
  }

  // Cria uma const 'isSmall' se o usuário passar o valor '1' para gerar normal.
  const isSmall = result.type == 1;
  qr.generate(result.link, {small: isSmall}, (qrcode) => {
    console.log(chalk.yellow('QRCODE Gerado Com Sucesso!\n'))
    console.log(qrcode) // Criado com sucesso.
  })

  // Caso não escolha o valor '1' automaticamente será o valor '2' chamando o QRCODE no Terminal

}



export default handler;