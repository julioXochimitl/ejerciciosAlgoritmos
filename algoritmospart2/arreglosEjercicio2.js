/*Ejercicio 2
Escribe una función que:

Toma una serie de números.
Duplica el valor de cada número de la matriz.
Imprime la nueva matriz actualizada.
Ejemplo: dada una matriz [1, 2, 4, 5] La salida debe ser [2, 4, 8, 10] */

let arreglo = [1, 2, 4, 5];
console.log(arreglo);

function duplicarArreglo (arreglo){
    let dobles = arreglo.map(function(x) {
    return x*2;
    });
    return dobles;
}
console.log(duplicarArreglo(arreglo));