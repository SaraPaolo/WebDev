let a1 = ['ciao', 'mondo', 'sole', 'albero', 'mare'];
let a2 = a1.filter(e => e.length % 2 === 0);
let a3 = a2.map(e => e.length**2);
let totale = a3.reduce((tot,n) => tot += n);
console.log(totale);