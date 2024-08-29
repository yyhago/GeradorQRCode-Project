import chalk from 'chalk';

// Schema caso escolha gerar QRCODE.
const qrCodePrompt = [
  {
    name:"link",
    description:chalk.cyan("Digite o link para gerar o QR CODE")
  },
  {
    name: "type",
    description: chalk.cyan("Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  }
];


export default qrCodePrompt;