const numbers = [2, 8, 4, 7, 2, 87];
const addNum = []
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    ++element
    addNum.push(element)
}

console.log(addNum);

numAdd = []
numbers.forEach(element => {
    ++element
    numAdd.push(element)
})
console.log(numAdd);


const addOneNum = numbers.map(element => ++element)
console.log(addOneNum);


// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]