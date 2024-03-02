        let body = document.getElementById("body");

        let textIn = document.getElementById("textIn");
        let bold = document.getElementById("bold");
        let ita = document.getElementById("ita");


        let coloreT = document.getElementById("coloreT");
        let coloreS = document.getElementById("coloreS");
        let dimCar = document.getElementById("dimCar");
        let send = document.getElementById("send");

        send.addEventListener("click",function(event){
            event.preventDefault();
            output()
        });

        function output(){
            coloreT = coloreT.value;
            coloreS = coloreS.value;
            dimCar = dimCar.value;

            let div = document.createElement("div");
            div.style.backgroundColor = coloreS;
            body.appendChild(div);
            let p = document.createElement("p");
            p.style.color = coloreT;
            p.style.fontSize = dimCar;
            p.textContent = textIn.value;

            if(bold.checked){
                p.style.fontWeight = 900;
            }
            if(ita.checked){
                ita = ita.value;
                p.style.fontStyle = ita.value;
            }
            div.appendChild(p);
        }
