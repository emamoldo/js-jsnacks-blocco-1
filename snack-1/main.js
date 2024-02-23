/* 
    L’utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore. 
*/ 

// Chiedo all'utente di inserire due numeri tramite il prompt
let numb1= prompt("Number1")
let numb2= prompt("Number2")

console.log(numb1, numb2);

if (numb1 > numb2) {
    console.log(numb1);
} else if(numb2 > numb1) {
    console.log(numb2);
} 