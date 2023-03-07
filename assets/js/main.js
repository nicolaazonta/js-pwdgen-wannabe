
//chiedere all'utente il suo nome
const nameUser = prompt("please write here your name");

//chiedere all'utente il suo cognome
const surnameUser = prompt("please write here your surname");

//chiedere il suo colore preferito
const preferredColorUser = prompt("please write here your preferred color");

//chiedere il suo numero preferito
const preferredNumberUser = prompt("please write here your preferred number");

//scrivere il risultato usando il seguente formato nomecognomecolorepreferito23 preceduto da un testo a scelta
document.getElementById("final_report");

//associamo tutti i valori ad una costante unica
const report = nameUser+surnameUser+preferredColorUser+preferredNumberUser;
console.log(report);
final_report.innerHTML=report;




















