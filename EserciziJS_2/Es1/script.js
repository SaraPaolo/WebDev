        let a1 = [1, 2 ,4, 6, 5, 3];
        let a2 = a1.filter(e => e % 2 === 0);
        let a3 = a2.map(e => e**2);
        let totale= a3.reduce((tot,n)=> tot += n);
        console.log(totale);
