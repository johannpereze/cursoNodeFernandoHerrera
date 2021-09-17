const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require('colors');

console.clear();

// console.log(argv.l);
// console.log(argv);
// console.log("base: ", argv.base);

//Forma vieja sin yargs
// const [, , arg3 = 'base=0'] = process.argv;
// const [, base = 0] = arg3.split("=");
// console.log(base);

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "ha sido creado".rainbow))
  .catch((err) => console.log(err));
