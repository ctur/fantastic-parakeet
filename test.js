const chalk = require('chalk');
const log = console.log;

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
console.log(chalk.red('Hello World!'));