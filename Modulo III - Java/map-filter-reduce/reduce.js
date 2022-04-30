/*
Reduce
1. Some todos os números de um array
*/

function somaNumeros(arr){
    return arr.reduce(function (prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const arr = [1, 2, 3, 4];

console.log(somaNumeros(arr));
