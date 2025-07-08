# Projeto QRCode

Este projeto é uma aplicação Node.js de linha de comando que oferece duas funcionalidades principais:

- **Geração de QR Code** a partir de um link informado pelo usuário.
- **Geração de Senhas Aleatórias** personalizadas conforme configurações do ambiente.

## Funcionalidades

### 1. Geração de QR Code
- Solicita ao usuário um link e o tipo de QR code (normal ou pequeno para terminal).
- Exibe o QR code gerado diretamente no terminal.

### 2. Geração de Senha Aleatória
- Gera uma senha aleatória baseada nas configurações do arquivo `.env`:
  - Comprimento da senha (`PASSWORD_LENGTH`)
  - Inclusão de letras maiúsculas, minúsculas, números e caracteres especiais

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd projeto-qrcode
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto com as variáveis desejadas:
   ```env
   PASSWORD_LENGTH=12
   UPPERCASE_LETTERS=true
   LOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   ```

## Uso

Execute o projeto com:
```bash
npm start
```

Você verá um menu:
- `1` para gerar QR Code
- `2` para gerar Senha Aleatória

### Geração de QR Code
- Informe o link desejado.
- Escolha o tipo: `1` para normal, `2` para terminal (pequeno).

### Geração de Senha
- A senha será exibida no terminal conforme as configurações do `.env`.

## Scripts Disponíveis
- `npm start` — Executa a aplicação.
- `npm run dev` — Executa em modo desenvolvimento com `nodemon`.

## Dependências
- [chalk](https://www.npmjs.com/package/chalk)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [prompt](https://www.npmjs.com/package/prompt)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
- [nodemon](https://www.npmjs.com/package/nodemon) (dev)

## Licença
ISC

---

> Projeto desenvolvido para geração rápida de QR Codes e senhas seguras via terminal. 