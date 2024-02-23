console.log("Gatsby's Party");

/*
Snack 4
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
*/

const partyList = ["Giulio, Carlo, Luca, Cristiano"]

const userName= prompt("Write ur Name")

if (userName === partyList) {
    console.log("Welcome");
}   else{
    console.log("Ur not in the list");
}