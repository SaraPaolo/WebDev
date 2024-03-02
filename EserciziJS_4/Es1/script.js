        let nRighe;
        let nColonne;
        let send = document.getElementById("send");

        send.addEventListener("click",function(event){
            event.preventDefault();
            table();
        });

        function table(){
        
        nRighe = document.getElementById("nRighe").value;
        nColonne = document.getElementById("nColonne").value;
        let tabella = document.createElement("table");
        document.querySelector("body").appendChild(tabella);
        if(nRighe == "" || nColonne == ""){
            console.log("error");
            for(let i = 0; i < 2; i++){
                let row = tabella();
                tabella.appendChild(row);
                for(let j = 0; j < 2; j++){
                    let cell = row.insertCell();
                    row.appendChild(cell);
                    cell.innerHTML = "CELL "+i+" - "+j;
                }
            }
        }else{
            console.log(nRighe);
            console.log(nColonne);
            for(let i = 0; i < nRighe; i++){
                let row = tabella.insertRow();
                tabella.appendChild(row);
                for(let j = 0; j < nColonne; j++){
                    let cell = row.insertCell();
                    row.appendChild(cell);
                    cell.innerHTML = "CELL "+i+" - "+j;
                }
            }
        }
        
    }