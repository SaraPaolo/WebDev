
let cancButt = document.getElementById("cancella");
let sendButt = document.getElementById("invia");
let nom;
let cog;
let user;
let psw;
let text = document.getElementById("text");

cancButt.addEventListener("click",canc);
sendButt.addEventListener("click",send);

function canc(){
    nom.textContent = " ";
    cog.textContent = " ";
    user.textContent = " ";
    psw.textContent = " ";
}

function send(){
    nom = document.getElementById("nom").value;
    cog = document.getElementById("cog").value;
    user = document.getElementById("user").value;
    psw = document.getElementById("psw").value;
    if(nom.length > 20 || cog.length > 20){
        alert("NOME E COGNOME NON DEVONO SUPERARE I 20 CARATTERI");
    }
    if(!(nom.charAt(0) === nom.charAt(0).toUpperCase() && cog.charAt(0) === cog.charAt(0).toUpperCase())){
        alert("LA PRIMA LETTERA DEL NOME E DEL COGNOME DEVONO ESSERE MAIUSCOLE");
        return;
    }

    if(user.length < 6 || user.length > 10) {
        alert("LA LUNGHEZZA DELl' USERNAME DEVE ESSERE COMPRESA TRA 6 & 10");
        return;
    }
    if(!([a-zA-Z0-9]+$.test(str))){
        alert("NELL'USERNAME DEVONO ESSERCI SOLO CARATTERI ALFANUMERICI");
        return;
    }
    if(psw.length < 5 || psw.length > 10) {
        alert("LA LUNGHEZZA DELLA PASSWORD DEVE ESSERE COMPRESA TRA 5 & 10");
        return;
    }
    let checkNum = 0;
    let checkMai = 0;
    let checkMin = 0;
    for (let i; i = 0; i++) {
        if(psw.charAt(i).isNumber){
            checkNum += 1;
        }
        if(psw.charAt(i) === psw.charAt(i).toUpperCase){
            checkMai += 1;
        }
        if(psw.charAt(i) === psw.charAt(i).toLowerCase){
            checkMin += 1;
        }
    }
    if(!(checkNum >= 2 && checkMai >= 1 && checkMin >= 1)){
        alert("LA DELLA PASSWORD deve contenere almeno due cifre, una lettera maiuscola e una minuscola".toUpperCase);
        return;
    }
        alert("CORRETTO");
        nom.textContent = " ";
        cog.textContent = " ";
        user.textContent = " ";
        psw.textContent = " ";
    
}