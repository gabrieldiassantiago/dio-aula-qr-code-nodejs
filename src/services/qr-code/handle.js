import qr from "qrcode-terminal";
import chalk from "chalk";

function handle(err, result) {
    
    if (err) {
        console.log(err)
        return;
    }

    const isSmall = result.type === '2';

    qr.generate(result.link, {
        small: isSmall,
    }, (qrcode) => {
        console.log(chalk.green("QRCODE GERADO COM SUCESSO:"))
        console.log(qrcode)
    });
}

export default handle;