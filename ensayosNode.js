// //break y continue
// console.log("Hola Mundo");

// const bucle = () => {
//   for (let i = 0; i < 20; i++) {
//     if (i % 2> 0) {
//       continue;
//     }
//     console.log(i);
//   }
// };

// bucle(0);

// //destructuración
// const numeros = [1, 2, 3];

// const uno = numeros[0],
//   dos = numeros[1],
//   tres = numeros[2];

// console.log(uno, dos, tres);

// const [one, two, three] = numeros;
// console.log(one, two, three);

// let yo = {
//   nombre: "Johann",
//   apellido: "Perez",
//   edad: 29,
// };

// const { apellido, edad } = yo;
// console.log(apellido, edad);

//Objetos literales. Agregar propiedadesa un objeto de forma mas simple

// let nombre = "Nilo",
//   edad = 4;

//Forma antigua:
// const perro = {
//   nombre: nombre,
//   edad: edad,
//   ladrar: function ladrar() {
//     console.log("Guau!");
//   },
// };
// console.log(perro);
// perro.ladrar();

// //Forma nueva:
// const dog = {
//     nombre,
//     edad,
//     ladrar() {
//       console.log("Guau!");
//     },
//   };
//   console.log(dog);
//   dog.ladrar();

// //Parametros Rest: Cuando no se cuantos argumentos va a recibir mi función y puede que le quiera enviar más de 1

// const parametrosREST = (a, b, ...c) => {
//   let resultado = a + b;
//   c.forEach((value, index, array) => {
//     resultado += value;
//     console.log(resultado);
//     console.log(index);
//     console.log(array);
//   });
// };

// console.log(parametrosREST(1, 2, 3, 4,5,6,7,8,9))

//SPREAD OPERATOR u operador de propagación

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];

// console.log(arr1, arr2);

// const arr3 = [arr1, arr2]; //esto me crea un arreglo con 2 arreglos internos
// console.log(arr3);

// const arr4 = [...arr1, ...arr2]; //ahora tengo un solo arreglo con los v<alores de los 2 arreglos originales
// console.log(arr4);

// //PROTOTIPOS

// //Función contructora básica

// function Animal(nombre, raza) {
//   this.nombre = nombre;
//   this.raza = raza;
//   this.sonar = function(){
//     console.log("Hago sonidos");
//   }
//   this.saludar = function(){
//     console.log(`Hola, me llamo ${this.nombre}`);
//   }
// }

// const snoopy = new Animal("Nilo", "Shitzu")
// const lolaBunny = new Animal("Lola Bunny", "Conejo")

// console.log(snoopy);
// console.log(lolaBunny);
// //esta tiene el problema que todos los métodos se van a duplicar en cada prototipo nuevo

//función constructora donde asignamos lo métodos al prototipo, no está en la función constructora
// function Animal(nombre, raza) {
//   this.nombre = nombre;
//   this.raza = raza;
// }

// //Métodos agregados al prototipo de la función constructora

// Animal.prototype.sonar = function () {
//   console.log("Hago sonidos");
// };
// Animal.prototype.saludar = function () {
//   console.log(`Hola, me llamo ${this.nombre}`);
// };

// //creando los metodos aparte, no se van a duplicar en cada prototipo

// const snoopy = new Animal("Nilo", "Shitzu");
// const lolaBunny = new Animal("Lola Bunny", "Conejo");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// lolaBunny.sonar();
// snoopy.saludar();
// lolaBunny.saludar();

//setTimeOut

// const imprimirEnOrden = () => {
//   setTimeout(() => {
//     console.log("primera");
//   }, 3000);
//   console.log("segunda");
//   setInterval(() => {
//     console.log("interval");
//   }, 1000);
// };

// imprimirEnOrden();

// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// const miFuncion = (id, callback) => {
//   const usuario = {
//     id,
//     nombre: "Fernando",
//   };

//   setTimeout(() => {
//     // console.log(usuario);
//     callback(usuario);
//   }, 1500);
// };

// miFuncion(10, ({ nombre }) => console.log("Hola", nombre));

const empleados = [
  {
    id: 1,
    nombre: "Juan",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Jose",
  },
];
const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
  {
    id: 3,
  },
];

// const id = 4;

// const getEmpleado = (id, callback) => {
//   const empleado = empleados.find((empleado) => empleado.id === id);
//   if (empleado) {
//     callback(null, empleado.nombre);
//   } else {
//     callback(`Empleado con id ${id} no existe`);
//   }
// };

// getEmpleado(id, (err, empleado) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(empleado);
//   }
// });

// const getSalario = (id, callback) => {
//   const salario = salarios.find((salario) => salario.id === id)?.salario;
//   if (salario) {
//     callback(null, salario);
//   } else {
//     callback(`Empleado con id ${id} no existe y no tiene salario`);
//   }
// };

// getSalario(id, (err, salario) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(salario);
//   }
// });

const id = 1;

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);
  });
};
const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((salario) => salario.id === id)?.salario;
    salario ? resolve(salario) : reject(`No existe salario con id ${id}`);
  });
};

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) => console.log(`El salario de ${nombre} es de: $${salario}`))
  .catch((err) => console.log(err));

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));
