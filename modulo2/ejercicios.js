/**
 * Escribir un programa que pida ingresar la coordenada de un punto en el plano,
 * es decir dos valores enteros x e y.
 * Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto.
 * (1º Cuadrante si x > 0 e y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
 */

// 55
// -5 2
// -1 -1
// 2 -2
function ejercicioCinco(x, y) {
  if (x > 0 && y > 0) {
    console.log("Primer cuadrante");
  } else if (x < 0 && y > 0) {
    console.log("Segundo cuadrante");
  } else if (x < 0 && y < 0) {
    console.log("Tercer cuadrante");
  } else if (x > 0 && y < 0) {
    console.log("Cuarto cuadrante");
  }
}

ejercicioCinco(5, 5);
ejercicioCinco(-5, 2);
ejercicioCinco(-1, -1);
ejercicioCinco(2, -2);

/**
 * Escriba un programa que calcule un descuento en función del importe de la compra.
 *  Si la compra es mayor a 50$ el descuento será del 20%,
 *  si es mayor o igual a 50 será de 10, de lo contrario no tendrá ningún descuento. Mostrar en pantalla el importe sin descuento
 * y el importe con descuento si lo tuviere. Si no lo tuviere imprimir solo el importe.
 */

const ejercicioTres = (a, b, c) => {
  const todosIguales = a === b && b === c;
  if (todosIguales) {
    const sumaPrimeroConSegundo = a + b;
    const resultado = sumaPrimeroConSegundo * c;
    return resultado;
  }

  return "Los números no son iguales";
};

const sonIguales = console.log(ejercicioTres(1, 1, 1));
const noSonIguales = console.log(ejercicioTres(1, 1, 0));

const obtenerSueldo = (sueldo, antiguedad) => {
  let sueldoBase = sueldo;
  const SUELDO_PROMOCION = 500;

  if (sueldoBase < SUELDO_PROMOCION && antiguedad >= 10) {
    return sueldoBase + sueldoBase * 0.2;
  } else if (sueldoBase < SUELDO_PROMOCION && antiguedad < 10) {
    return sueldoBase + sueldoBase * 0.02;
  }

  return sueldoBase;
};

obtenerSueldo(400, 11); // Entra en la primera iteración
obtenerSueldo(400, 9); // Entra en el segundo if
obtenerSueldo(501, 8);

/**
 *
 *   500
 */

/**
 * Esciba un programa que toma el número como entrada. 
 * Completa el programa para que de salida a la consola el tema según el número de entrada.
 *  El usuario puede elegir el tema de color para el navegador:
1. Claro
2. Oscuro
3. Nocturno
4. Terminal
5. Índigo 
 */

const obtenerTemaDeUsuario = (tema) => {
  if (typeof tema !== Number) {
    return "El parámetro debe ser un número";
  }
  switch (tema) {
    case 1:
      return "Claro";

    case 2:
      return "Nocturno";

    default:
      return "No se encontró el tema";
  }
};

// const nocturno = obtenerTemaDeUsuario(2);
const claro = obtenerTemaDeUsuario("10");
console.log(claro);

// console.log(nocturno);
