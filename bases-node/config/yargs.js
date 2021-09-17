const argv = require("yargs")
  .options({
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: 'Es la tabla de multiplicar'
    },
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: 'Muestra la tabla en consola'
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    } else {
      return true;
    }
  }).argv;

module.exports = argv;
