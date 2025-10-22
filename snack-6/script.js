const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

const zucchineLunghe = []
for (let i = 0; i < zucchine.length; i++) {
  const element = zucchine[i];
  if (element.length >= 15) {
    zucchineLunghe.push(element)
  }
}
console.log(zucchineLunghe);

const zuccinaEach = []
zucchine.forEach(element => {
  if (element.length >= 15) {
    zuccinaEach.push(element)
  }
})
console.log(zuccinaEach);


const altreZucchine = []
for (let i = 0; i < zucchine.length; i++) {
  const element = zucchine[i];
  if (element.length < 15) {
    altreZucchine.push(element)
  }
}
console.log(altreZucchine);

const zuccinaEachAnother = []
zucchine.forEach(element => {
  if (element.length < 15) {
    zuccinaEachAnother.push(element)
  }
})
console.log(zuccinaEachAnother);

const zucchineLenght = zucchine.filter(element => element.length >= 15)
console.log(zucchineLenght);

const anotherZucchine = zucchine.filter(element => element.length < 15)
console.log(anotherZucchine);


// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.