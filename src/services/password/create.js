import chalk from "chalk";
import handle from "./handle.js";
import bcrypt from "bcrypt";
import fs from "fs/promises"; // Importa o módulo para manipular arquivos

async function createPassword() {
   const password = await handle();
   const saltRounds = 10;
   const hash = await bcrypt.hash(password, saltRounds);

   // Salva o hash em um arquivo
   await fs.writeFile('password.hash', hash, 'utf-8');

   console.log(chalk.green("Hash gerado e salvo em password.hash!"));
}

export default createPassword;