// Condicionales
const valorUno = 10;
let valorDos = 10;

if (valorUno < valorDos) {
  console.log("Es menor");
} else if (valorUno === valorDos) {
  console.log("Es igual");
} else {
  console.log("Es mayor");
}

// Switch
const animal = "Perro";

switch (animal) {
  case "Ronal":
    console.log("Es un crack");
    break;
  case "Gato":
    console.log("Es un miau");
    break;
  case "Jirafa":
    console.log("Es una jirafa");
    break;
  case "Perro":
    console.log("Es un perro");
    break;
  default:
    console.log("No se encontró ningún animal");
}

function suma(a, b) {
  console.log(a + b);
}

suma(5, 6);

suma(10, 20);
