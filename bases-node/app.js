const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

const base = 14;

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'))
.catch(err => console.log(err))

