// Ejercicio 1 Escriba un programa que tome una matriz de números y devuelva el número más grande de la lista. Ejemplo: la matriz dada es [3, 5, 7, 1, 6] El número más grande es 7.

const numeros = [3, 5, 7, 1, 6];
console.log(numeros);
function ordenar(valores){
    let valor = valores.sort(function(x,y){
        return y-x;
    });
    console.log(valor[0]);
}
ordenar(numeros);