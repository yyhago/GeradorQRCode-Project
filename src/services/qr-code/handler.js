import qr from 'qrcode-terminal'
import chalk from "chalk";

async function handler(err, result){
  if(err){
    console.log("error on application")
    return
  }

  const isSmall = result.type == 2; // Geração do QRCODE
  qr.generate(result.link, {small: isSmall}, (qrcode) => {
    console.log(chalk.yellow('QRCODE Gerado Com Sucesso!\n'))
    console.log(qrcode)
  })

}



export default handler;