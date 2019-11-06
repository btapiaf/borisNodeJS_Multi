//declaramos la constante
//importacion simple
//const multiplicar = require('./Multiplicacion/multiplicar');
//importacion con destructuracion


// const argv = require('yargs')
//     .command('crear', 'Crea un archivo ocn la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b',
//             description: 'La base de la tabla de multiplicacion'
//         },
//         limite: {
//             alias: '1',
//             default: 10,
//             description: 'El limite de la tabla de multiplicar'
//         }
//     })
//     .command('listar', 'Crea un archivo ocn la tabla de multiplicar', {
//         list: {
//             demand: true,
//             alias: 'r',
//             description: 'La base de la tabla de multiplicacion'
//         },
//         limite2: {
//             alias: '1',
//             default: 10,
//             description: 'El limite de la tabla de multiplicar'
//         }
//     })
//     .help()
//     .argv;

const { argv } = require('./config/yargs')
const { crearArchivo, listarArchivo } = require('./Multiplicacion/multiplicar');




//let paramentro = process.argv[2];
//let base = paramentro.split('=')[1];





let command = argv._[0]



switch (command) {
    case 'crear':
        crearArchivo(argv.base)

        .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'listar':
        listarArchivo(argv.list, argv.limite2);
        break;

    default:
        console.log('Comando no valido')
}

//console.log(base);


// multiplicar.crearArchivo(base)
// .then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(e => console.log(e));
// let data = '';

// for (let i = 0; i <= 10; i++) {
//     data += `${base}*${i}=${base*i}\n`;
// }
//console.log(module);
//Nos crea la tabla y nos muestra un sms
//apend para poder abrir el archivo
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido guardado`);
// });