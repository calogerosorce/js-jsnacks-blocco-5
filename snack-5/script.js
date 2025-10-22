const nums = [2, 8, 4, 7, 12, 87];

const even = []
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element % 2 === 0) {
        even.push(element)
    }
}
console.log(even);

const evens = []
nums.forEach(element => {
    if (element % 2 === 0) {
        evens.push(element)
    }
})
console.log(evens);


const pari = nums.filter(element => element % 2 === 0)
console.log(pari);


// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]