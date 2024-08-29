import prompt from "prompt";
import promptQRCode from '../../prompts/promptQRCode.js'
import handeler from './handler.js'

// Função principal de createQRCode passando o Schema e a função de generação!
async function createQrCode(){
  prompt.get(promptQRCode, handeler)
  
  // Chamando a função para rodar o prompt
  prompt.start() 
}



export default createQrCode;