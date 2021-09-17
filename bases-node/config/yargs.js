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

module.exports = argv;
