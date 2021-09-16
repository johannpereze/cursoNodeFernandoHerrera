const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

const [, , arg3 = 'base=0'] = process.argv;
const [, base = 0] = arg3.split("=");
console.log(base);

// for (let index = 0; index < arg3.length; index++) {
//     console.log(arg3[index]);

// }

// const base = arg3;

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'))
.catch(err => console.log(err))
