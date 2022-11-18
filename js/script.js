

const nome = prompt ("Dimmi io tuo nome!");
const cognome = prompt ("Dimmi il tuo cognome!");
const colore = prompt ("Qual'è il tuo colore preferito?");
let password = nome + cognome + colore + 22;


document.getElementById(`psw`).innerHTML = `Ciao la tua password è ` + password;