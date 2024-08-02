function nombreFuncion() {
  console.log("Hola desde mi función");
}

nombreFuncion();
const nombre = "Pepito";

function saludar(nombre, apellido) {
  console.log(`Hola, ${nombre} ${apellido}`);
  console.log(`Hola, ${nombre}`);
}

const nombreRonal = "Ronal";
const apellidoRoal = "dinho";

saludar("César", "Rolón");
saludar("Gerónimo", "Lucas");
saludar(nombreRonal, apellidoRoal);

const saludarExpresion = function (nombre) {
  console.log("Hola " + nombre);
};

saludarExpresion("Cesar");

const sumaDosNumeros = function (a, b) {
  const suma = a + b;
  return suma;
};

const resultadoDeSuma = sumaDosNumeros(10, 20);

console.log(resultadoDeSuma);

// Funciones flecha
const sumaDosNumerosConFlecha = (a, b) => a + b;

console.log(sumaDosNumerosConFlecha(1, 1));
