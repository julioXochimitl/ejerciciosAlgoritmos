//Ejercicio 2 Escriba un programa para ordenar una lista de números en orden descendente (de mayor a menor)

const numeros = [3, 5, 7, 1, 6];
console.log(numeros);

function ordenar(valores){
    let valor = valores.sort(function(x,y){
        return y-x;
    });
    console.log(valor);
}
ordenar(numeros);