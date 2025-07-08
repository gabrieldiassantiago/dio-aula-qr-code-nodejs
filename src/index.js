import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/create.js';

async function main() {
    prompt.start();
    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.error("Erro:", err);
            return;
        }

        if (choose.select === '1') {
            await createQRCode();
        }

        if (choose.select === '2') {
            console.log("Escolheu PASSWORD");
        }
    });
}

main();
