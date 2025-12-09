const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers.splice(3, 0, "Ermenegildo");

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
  teachers.splice(4, 1, "Patrick");

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
delete teachers[8];
const lastTeacher = "Luca";

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
delete teachers[0];

const firstTeacher = "Nathan";

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.push("Sarah");

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

const lewisIndex = teachers.indexOf("Lewis");
  console.log(lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

const isTeachersEmpty = teachers.lenght === 0;

  console.log(isTeachersEmpty)


console.log(teachers)