// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

/*
for (let i = 0; i < 3; i++) {
    const n = Number(prompt("Write your Numbers"));
    const cubo = n*n*n;
    console.log(cubo);
    console.log("Il Cubo del numero è " +cubo);
}
*/

let i=0;

while (i<3) {
    const n = Number(prompt("Write your Numbers"));
    const cubo = n*n*n;
    console.log(cubo);
    
    i++
    console.log("Il Cubo del numero è " +cubo);
}
