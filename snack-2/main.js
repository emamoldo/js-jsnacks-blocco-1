
/*
Snack 2:
    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// Chiedo all'untente di inserire due parole tramite il prompt

let firstWord = prompt("First Word");
let secondWord = prompt("Second Word");

//console.log(firstWord.length, secondWord.length);

if (firstWord.length > secondWord.length) {
    console.log("The First Word is bigger");

} else if (secondWord > firstWord) {
    console.log("The Second Word is bigger");

} else{
    console.log("Same Word");
}
