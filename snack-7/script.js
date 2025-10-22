const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

const studente = []
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  if (element.id === 2) {
    studente.push(element)
  }
}
console.log(studente);

const alunni = []
students.forEach(element => {
  if (element.id === 2) {
    alunni.push(element)
  }
})
console.log(alunni);



const student = students.find(element => element.id === 2)
console.log(student);



// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }