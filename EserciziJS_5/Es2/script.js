        let o1 = document.getElementById("o1");
        let o2 = document.getElementById("o2");
        let o3 = document.getElementById("o3");
        let o4 = document.getElementById("o4");
        let ingredientiL = document.getElementById("ingredientiL");
        let ingredienti = document.getElementById("ingredienti");
        let pizzaBtn = document.getElementById("pizza");
        let calzonebtn = document.getElementById("calzone");
        let piadinaBtn = document.getElementById("piadina");
        let personalizza = document.getElementById("pers");
        let aggBtn = document.getElementById("aggBtn");

        pizzaBtn.addEventListener("click",function(event){
            event.preventDefault();
            pizza();
        });

        calzonebtn.addEventListener("click",function(event){
            event.preventDefault();
            calzone();
        });

        piadinaBtn.addEventListener("click",function(event){
            event.preventDefault();
            piadina();
        });

        function pizza(){
            aggBtn.style.display = "block";
            ingredienti.style.display = "block";
            personalizza.style.display = "block";
            ingredientiL.innerHTML = "<b>SCEGLIERE INGREDIENTI: PIZZA<b/>";
        
            o1.textContent = "patatine";
            o2.textContent = "kebab";
            o3.textContent = "margherita";
            o4.textContent = "bufala";
            
            aggBtn.addEventListener("click",function(event){
                event.preventDefault();
                
                let op = document.createElement("option");
                op.textContent = personalizza.value;
                ingredienti.appendChild(op);
                personalizza.value = "";

            });

        }

        function calzone(){
            aggBtn.style.display = "block";
            ingredienti.style.display = "block";
            ingredienti.style.display = "block";
            ingredientiL.innerHTML = "<b>SCEGLIERE INGREDIENTI: CALZONE<b/>";
            

            o1.textContent = "prosciutto cotto";
            o2.textContent = "funghi";
            o3.textContent = "margherita";
            o4.textContent = "prosciutto crudo";

            aggBtn.addEventListener("click",function(event){
                event.preventDefault();
                
                let op = document.createElement("option");
                op.textContent = personalizza.value;
                ingredienti.appendChild(op);
                personalizza.value = "";

            });

        }

        function piadina(){
            aggBtn.style.display = "block";
            ingredienti.style.display = "block";
            ingredienti.style.display = "block";
            ingredientiL.innerHTML = "<b>SCEGLIERE INGREDIENTI: PIADINA<b/>";

            o1.textContent= "nutella";
            o2.textContent = "prosciutto cudo e fontina";
            o3.textContent = "rucola e speck";
            o4.textContent = "prosciutto cotto e fontina";

            aggBtn.addEventListener("click",function(event){
                event.preventDefault();
                
                let op = document.createElement("option");
                op.textContent = personalizza.value;
                ingredienti.appendChild(op);
                personalizza.value = "";

            });
            
        }