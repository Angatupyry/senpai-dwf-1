// Imprimir=mostra en pantalla los numeros impares del 1 al 10
// Inicio
//     Loop - Recorrer el cálculo por la cantidad de números
//         -Cálculo números impares
//     Fin Loop
// Fin

function mostrarEnPantallaNumerosImpares(condicion) {
  for (let i = 1; i <= condicion; i++) {
    const esPar = i % 2 === 0;
    if (esPar) {
      continue;
    }
    console.log(i);

    if (i === 7) {
      break;
    }
  }
}

let contador = 1;

while (contador <= 10) {
  const esPar = contador % 2 === 0;
  if (esPar) {
    continue;
  }
  console.log(contador);

  if (contador === 7) {
    break;
  }
  ++contador;
  console.log(contador);
}

//Escribe una función que devuelva la diferencia entre un número dado y 15.
// Si el número dado es negativo o
// igual a 15, debe mostrar un texto de error.

function ejercicioUno(numero) {
  const SUSTRAENDO = 15;

  if (numero < 0 || numero === 15) {
    return "Debe mostrar un texto de error";
  }

  return numero - SUSTRAENDO;
}

const resultado = ejercicioUno(20);
const resultadoConError = ejercicioUno(15);
const resultadoConErrorNegativo = ejercicioUno(-1);

console.log(resultado);
console.log(resultadoConError);
console.log(resultadoConErrorNegativo);
