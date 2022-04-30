/*
Filter
Filtre e retorne todos os números pares de um array.
*/

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item %2 === 0;
    }

const meuArray = [7, 4, 19, 22, 40, 57, 63, 70];

console.log(filtraPares(meuArray));
console.log(meuArray);
