const fs = require("fs");
const colors = require('colors');

//   console.log(`tabla-${base}.txt creado`);

const crearArchivo = async (base = 5, l = false, h) => {
  try {
    console.log("===============");
    console.log(`  Tabla del ${base}`.rainbow);
    console.log("===============");

    let salida = "";
    let consola = "";

    for (let i = 1; i <= h; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    if (l===true) {
      console.log(consola);
    }
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
