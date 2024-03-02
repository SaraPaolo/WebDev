let decButt = document.getElementById("dec");
        let incButt = document.getElementById("inc");
        let count = 0;

        incButt.addEventListener("click",aum);
        decButt.addEventListener("click",dim);

        function aum(){
            count = count + 1;
            document.getElementById("count").innerHTML = count;
            console.log("aum");
        }

        function dim(){
            count = count - 1;
            document.getElementById("count").innerHTML = count;
            console.log("dim");
        }