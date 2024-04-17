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


let afterLog = `
<p>Accesso eseguito.</p>
<hr>
<h3>Azioni Account</h3>
<div class="row justify-content-center text-center" >
  <div class="col">
    <button class="btn btn-light" id="btnGoToChat" style="width: 150px; height: 50px; padding-left: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
      <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      </svg> Chat</button>
  </div>
  <div class="col">
    <button class="btn btn-light" id="btnGoToChat" style="width: 150px; height: 50px; padding-left: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      </svg> Chat</button>
  </div>
<hr class="mt-3 mb-2" style="width:90%">
</div>

<div class="row justify-content-center text-center" >
                        <div class="col">
                            <button class="btn btn-light" id="btnGoToChat" style="width: 150px; height: 50px; padding-left: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                            <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                          </svg> Chat</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-light" id="btnGoToChat" style="width: 150px; height: 50px; padding-left: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                            <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                          </svg> Chat</button>
                        </div>
                        <hr class="mt-3 mb-2" style="width:90%">
                    </div>
         
<button class='btn btn-outline-danger'>Esci dal tuo Account</button>
`;

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

  divBtnAccReg.innerHTML = afterLog;
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

  divBtnAccReg.innerHTML = afterLog;
}