const n1 = [3, -1, 7, 10, -2, 5];
let n2 = n1.filter(e => e > 0);
let somma = n2.reduce((sum,n)=> sum += n);
let media = somma/n2.length;
console.log(media);
