const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
//const reversedTeachers = teachers.reverse();
const reversedTeachers = "";
for (let index = teachers.length - 1; index >= 0; index--);
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];

//Abbreviazione di for (let i = 0; i < teachers.length; i++) {const teacherName = teachers[i];}
for (const teacherName of teachers) {
  if (teacherName.length >= 5) {
    longNames.push(teacherName);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers (perché teachers è invertito? non dovrebbe essere reversedTeachers a essere invertito?)
  teachers.splice(teachers.indexOf("Ed"), 1);

  console.log(teachers);
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
//const isFabioPresent = teachers.find(item => item === 'Fabio'); //funzione find/includes
const isFabioPresent = teachers.indexOf("Fabio") > -1;
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');

console.log(teachersString);
