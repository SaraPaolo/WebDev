
        let cancButt = document.getElementById("cancella");
        let sendButt = document.getElementById("invia");
        let user;
        let psw;
        let text = document.getElementById("text");

        cancButt.addEventListener("click",canc);
        sendButt.addEventListener("click",send);

        function canc(){
            user.textContent = " ";
            psw.textContent = " ";
        }

        function send(){
            user = document.getElementById("user").value;
            psw = document.getElementById("psw").value;
            if(user.length == 0){
                alert("INSERIRE USERNAME");
                return;
            }

            if(psw.length < 5 || psw.length > 8) {
                alert("LA LUNGHEZZA DELLA PASSWORD DEVE ESSERE COMPRESA TRA 5 & 8");
            }else{
                text.innerHTML = "CORRETTO";
                user.textContent = " ";
                psw.textContent = " ";
            }
        }