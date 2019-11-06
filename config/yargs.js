let opt = {
    base: {
        demand: true,
        alias: 'b',
        description: 'La base de la tabla de multiplicacion'
    },
    limite: {
        alias: '1',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un archivo ocn la tabla de multiplicar', opt)
    .command('listar', 'Crea un archivo ocn la tabla de multiplicar', opt)
    .help()
    .argv;


module.exports = {
    argv
};