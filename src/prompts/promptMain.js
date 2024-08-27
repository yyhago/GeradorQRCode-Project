import chalk from 'chalk';

// Schema definido da documentação do prompt!
const mainPrompt = [
  {
    name: 'select',
    description: chalk.cyan('Escolha a ferramenta (1 - QRCODE  ou  2 - PASSWORD)'),
    pattern: /^[1-2]+$/, message: chalk.red.italic('Escolha apenas entre 1 e 2!'),
    require: true
  }
]

export default mainPrompt;