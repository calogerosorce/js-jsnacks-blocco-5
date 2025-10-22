const names = ['Edoardo', 'Simone', 'Francesco'];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}

names.forEach((element) => {
    console.log(element);

})

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'