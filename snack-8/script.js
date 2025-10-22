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

const classe = []
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  if (element.name === 'Marco Lanci') {
    classe.push(element.class)

  }
}
console.log(classe);

const clas = students.map(element => {
  if (element.name === 'Marco Lanci') {
    return element.class
  }
})
console.log(clas);


// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'