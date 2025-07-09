import chalk from "chalk";

const schemaMain = [
    {
        name: 'select',
        descscription: chalk.yellow(
            'Escolha uma ferramenta (1- QRCODE, 2- PASSWORD)'),
        pattern: /^[1-2]$/,
        message: 'Escolha uma ferramenta (1- QRCODE, 2- PASSWORD)',
        required: true,
    }
]

export default schemaMain;