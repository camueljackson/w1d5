var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

console.log(chalk.blue.italic('Hello') + ' World' + chalk.red.bgBlue.bold('!'));

console.log(chalk.cyan('Hello', chalk.underline('world') + '!'));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);