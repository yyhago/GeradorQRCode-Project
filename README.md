# GeradorQRCode-Project

GeradorQRCode-Project é uma aplicação de linha de comando robusta e versátil, desenvolvida em Node.js e JavaScript. Esta ferramenta oferece duas funcionalidades principais:

1. Geração de QR codes a partir de links fornecidos
2. Geração de senhas aleatórias seguras

Combinando conveniência e segurança, o GeradorQRCode-Project é uma solução ideal para desenvolvedores e usuários que necessitam de uma ferramenta confiável para criar QR codes e gerar senhas fortes.

## Screenshots

![Primeira Tela](/pictureScreen/image2.png)
![Segunda Tela](/pictureScreen/image.png)


## Requisitos

- Node.js (versão 12.0.0 ou superior)
- npm (normalmente vem com Node.js)

## Instalação

### Windows

1. Instale o Node.js:
   - Acesse [nodejs.org](https://nodejs.org/)
   - Baixe a versão LTS (Long Term Support) para Windows
   - Execute o instalador e siga as instruções na tela

2. Verifique a instalação:
   Abra o Prompt de Comando e digite:
   ```
   node --version
   npm --version
   ```

3. Clone o repositório:
   ```
   git clone https://github.com/yyhago/GeradorQRCode-Project.git
   ```

4. Navegue até o diretório do projeto:
   ```
   cd GeradorQRCode-Project
   ```

5. Instale as dependências:
   ```
   npm install
   ```

### Linux

1. Instale o Node.js e npm:
   Para Ubuntu/Debian:
   ```
   sudo apt update
   sudo apt install nodejs npm
   ```
   Para Fedora:
   ```
   sudo dnf install nodejs npm
   ```

2. Verifique a instalação:
   ```
   node --version
   npm --version
   ```

3. Clone o repositório:
   ```
   git clone https://github.com/yyhago/GeradorQRCode-Project.git
   ```

4. Navegue até o diretório do projeto:
   ```
   cd GeradorQRCode-Project
   ```

5. Instale as dependências:
   ```
   npm install
   ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto:
   ```
   touch .env
   ```

2. Modifique as seguintes variáveis de ambiente ao arquivo `.env`:
   ```
   UPPERCASE_LETTERS=false
   LOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   PASSWORD_LENGTH=12
   ```

## Uso

Para executar o projeto, use o seguinte comando no terminal (CMD no Windows ou terminal no Linux):

```
npm run start
```

Após executar o comando, você verá um menu com opções para gerar um QR code ou uma senha aleatória. Siga as instruções na tela para utilizar cada funcionalidade.

### Geração de QR Code

Quando solicitado, insira a URL para a qual você deseja gerar um QR code. O QR code será salvo como uma imagem no diretório do projeto.

### Geração de Senha

Escolha a opção para gerar uma senha aleatória. Uma senha segura será gerada e exibida na tela.

## Contribuição

Contribuições são bem-vindas! Por favor, siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.