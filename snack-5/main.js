/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. 

*/

/*
let dispari = [""];
console.log(dispari);

for (let i = 0; i < 6; i++) {
    const numbers = Number(prompt("Write your Numers"));
    console.log(numbers);

    if (numbers % 2 === 0) {
        console.log("è pari");
    } else {
        console.log("è dispari");
        dispari.unshift(numbers)
    }
}
// SE un numero è dispari aggiungerlo all'Array "dispari";
// per aggiungere elementi all'Array usiamo unshift() -> dispari.unshift(.....);

console.log(dispari);
*/

let dispari = [""];
let i = 0;
while (i <6) {
    const numbers = Number(prompt("Write your Numers"));
    console.log(numbers);

    if (numbers % 2 === 0) {
        console.log("è pari");
    } else {
        console.log("è dispari");
        dispari.unshift(numbers)
    }
    
    i++
}
console.log(dispari);