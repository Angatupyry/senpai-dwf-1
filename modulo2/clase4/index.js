// Conjunto de elementos
// const alumnos = [
//   "Santiago Consul",
//   "Santiago Ripa",
//   "Gerónimo Lucas",
//   "Ronaldinho",
// ];

const number = 20;

const persona = {
  nombre: "César",
  edad: 17.5,
  comeMucho: true,
};

const alumno = {
  nombre: "Fulano",
  apellido: "Mengano",
  curso: 1,
  anhoIngreso: 2016,
  materiasCursadas: 22,
  carrera: "Informática",
  totalMateria: 50,
  materiasAnual: ["Álgebra", "Programación 3"],
};

const alumnos = [
  {
    nombre: "Santiago",
    apellido: "Consul",
    curso: 1,
    anhoIngreso: 2016,
    materiasCursadas: 35,
    carrera: "Informática",
    totalMateria: 50,
    materiasAnual: ["Álgebra", "Programación 3"],
  },
  {
    nombre: "Santiago",
    apellido: "Ripa",
    curso: 1,
    anhoIngreso: 2018,
    materiasCursadas: 18,
    carrera: "Informática",
    totalMateria: 50,
    materiasAnual: ["Álgebra", "Programación 3"],
  },
  {
    nombre: "Gerónimo",
    apellido: "Lucas",
    curso: 1,
    anhoIngreso: 2016,
    materiasCursadas: 49,
    carrera: "Informática",
    totalMateria: 50,
    materiasAnual: ["Álgebra", "Programación 3"],
  },
];

for (let i = 0; i < alumnos.length; i++) {
  const materiasRestantes =
    alumnos[i].totalMateria - alumnos[i].materiasCursadas;

  const faltaPlural = materiasRestantes <= 1 ? "falta" : "faltan";
  const materiaPlural = materiasRestantes <= 1 ? "materia" : "materias";

  console.log(
    `Al alumno ${alumnos[i].nombre} ${alumnos[i].apellido} le ${faltaPlural} ${materiasRestantes} ${materiaPlural} para terminar la carrera`
  );
}
