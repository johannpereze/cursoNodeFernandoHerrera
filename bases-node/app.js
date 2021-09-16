const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .options({
    l: {
      alias: "listar",
      type: "boolean",
      demandOption: false,
      default: false,
    },
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    } else {
      return true;
    }
  }).argv;

console.clear();

// console.log(argv.l);
// console.log(argv);
// console.log("base: ", argv.base);

//Forma vieja sin yargs
// const [, , arg3 = 'base=0'] = process.argv;
// const [, base = 0] = arg3.split("=");
// console.log(base);

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "ha sido creado"))
  .catch((err) => console.log(err));
