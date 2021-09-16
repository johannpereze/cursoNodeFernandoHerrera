const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs").argv;

console.clear();

console.log(process.argv);
console.log(argv);
console.log('base: ',argv.base);

//Forma vieja
// const [, , arg3 = 'base=0'] = process.argv;
// const [, base = 0] = arg3.split("=");
// console.log(base);

// crearArchivo(base)
// .then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'))
// .catch(err => console.log(err))
