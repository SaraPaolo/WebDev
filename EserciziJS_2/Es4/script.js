const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

let check = array1.filter(e => array2.includes(e));
console.log(check);
