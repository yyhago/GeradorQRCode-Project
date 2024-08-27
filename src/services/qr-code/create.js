import prompt from "prompt";
import promptQRCode from '../../prompts/promptQRCode.js'
import handeler from './handler.js'


async function createQrCode(){
  prompt.get(promptQRCode, handeler)
  prompt.start()
}



export default createQrCode;