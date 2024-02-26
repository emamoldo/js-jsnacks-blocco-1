// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

/*
for (let i = 0; i < 10; i++) {
    const numbers = Number(prompt("Write your Numbers"));
    console.log(numbers);

}
*/

let i=0;
let somma = 0;

while (i <10) {
    const numbers = Number(prompt("Write your Numbers"));
    console.log(numbers);
    let numbrs= parseFloat(numbers)
    somma += numbrs
    i++
}
alert("La somma dei numeri è: " + somma);
