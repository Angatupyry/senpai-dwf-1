const miPrimerArray = ["Hola", "chau", 35];

// console.log(miPrimerArray.length);
// console.log(miPrimerArray[0]); //hola
// console.log(miPrimerArray[2]); // 35
// console.log(miPrimerArray[miPrimerArray.length - 1]); // 40

for (let i = 0; i <= miPrimerArray.length; i++) {
  console.log(miPrimerArray[i]);
}

const arrayUno = [2, 5, 7];

const arrayDos = [10, 5, 90];

// Quiero mostrar en pantalla un mensaje que diga "Hola, mundo" si algún elemento del array es igual al
// otro array. Además mostrar la posición en donde la igualdad es verdadera
//
for (let index = 0; index < arrayUno.length; index++) {
  if (arrayUno[index] === arrayDos[index]) {
    //Template literals
    console.log("Hola, mundo");
    console.log(`El elemento que se encuentra tanto en el array uno y en el array dos es: ${arrayDos[index]}
        y se encuentra en la posición ${index}. Btw, Ronaldinho es el mejor`);
  }
}
