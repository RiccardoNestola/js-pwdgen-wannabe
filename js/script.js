document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })

const nome = prompt ("Dimmi io tuo nome!");
const cognome = prompt ("Dimmi il tuo cognome!");
const colore = prompt ("Qual'è il tuo colore preferito?");
let password = nome + cognome + colore + 22;


document.getElementById(`psw`).innerHTML = `Ciao, la tua password è ` + password;
