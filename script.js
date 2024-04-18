function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

}



const divAccedi = document.getElementById("accedi");
const divRegistrati = document.getElementById("registrati");
const divBtnAccReg = document.getElementById("divBtnAccReg");

const btnAccedi = document.getElementById("btnAccedi");
const btnRegistrati = document.getElementById("btnRegistrati");

const areaPrivata = document.getElementById("areaPrivata");

const btnAccediFooter = document.getElementById("btnAccediFooter");
const btnRegistratiFooter = document.getElementById("btnRegistratiFooter");

//input accedi
const usernameAccedi = document.getElementById("usernameAccedi");
const passwordAccedi = document.getElementById("passwordAccedi");

//input registrati
const nomeRegistrati = document.getElementById("nomeRegistrati");
const cognomeRegistrati = document.getElementById("cognomeRegistrati");
const usernameRegistrati = document.getElementById("usernameRegistrati");
const passwordRegistrati = document.getElementById("passwordRegistrati");

const divAfterLog = document.getElementById("divAfterLog");


areaPrivata.onclick = () => {
  divRegistrati.classList.remove("mostra");
  divRegistrati.classList.add("nascondi");

  divAccedi.classList.remove("mostra");
  divAccedi.classList.add("nascondi");
}

btnAccedi.onclick = () => {
  divRegistrati.classList.remove("mostra");
  divRegistrati.classList.add("nascondi");

  divAccedi.classList.remove("nascondi");
  divAccedi.classList.add("mostra");
}

btnRegistrati.onclick = () => {
  divAccedi.classList.remove("mostra");
  divAccedi.classList.add("nascondi");

  divRegistrati.classList.remove("nascondi");
  divRegistrati.classList.add("mostra");

}


btnAccediFooter.onclick = () => {
  let credenziali = {
    "username": usernameAccedi.value,
    "password": passwordAccedi.value
  }
  console.log("Credenziali Accedi:");
  console.log(credenziali);
  console.log("------------------------------")
  divAccedi.classList.remove("mostra");
  divAccedi.classList.add("nascondi");

  divAfterLog.classList.remove("nascondi");
  divAfterLog.classList.add("mostra");
}

btnRegistratiFooter.onclick = () => {
  let credenziali = {
    "nome": nomeRegistrati.value,
    "cognome": cognomeRegistrati.value,
    "username": usernameAccedi.value,
    "password": passwordAccedi.value
  }
  console.log("Credenziali Registrati:");
  console.log(credenziali);
  console.log("------------------------------")
  divRegistrati.classList.remove("mostra");
  divRegistrati.classList.add("nascondi");

  divAfterLog.classList.remove("nascondi");
  divAfterLog.classList.add("mostra");
}