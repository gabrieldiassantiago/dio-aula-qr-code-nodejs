import prompt from 'prompt';
import schemaMain from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js'
import 'dotenv/config'


async function main() {
    prompt.start();
    prompt.get(schemaMain, async (err, choose) => {

        if (choose.select === '1') {
            await createQRCode();
        }

        if (choose.select === '2') {
           await createPassword();
        }
        
        if (choose.select !== '1' && choose.select !== '2') {
            console.log('Opção inválida. Por favor, selecione 1 ou 2.');
        }

    });
}

main();
