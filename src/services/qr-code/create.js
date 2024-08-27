import prompt from "prompt";
import promptQRCode from '../../prompts/promptQRCode.js'
import handeler from './handler.js'

// Criação do meu QRCODE
async function createQrCode(){
  prompt.get(promptQRCode, handeler)
  prompt.start()
}



export default createQrCode;