import prompt from "prompt";
import chalk from 'chalk';

import prompMain from './prompts/promptMain.js'
import createQrCode from "./services/qr-code/create.js";
import createPassword from './services/password/create.js'

// Main principal!
async function main(){
  prompt.get(prompMain, async (err, choose) => {
    if(choose.select == 1) await createQrCode();
    if(choose.select == 2) await createPassword();
  })

  prompt.start();
}

main();