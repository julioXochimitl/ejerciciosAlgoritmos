/* Ejercicio # 3
Escriba un programa para calcular la suma y el producto (multiplicación) de una matriz de números. Imprime la suma y el producto.

Ejemplo: dada una matriz La suma es 10. El producto es 24. */

const numbers = [1, 2, 3, 4];

function sum(total, num) {
    return total + num;
}

function product(total, num) {
    return total * num;
}
result1 = numbers.reduce(sum);
result2 = numbers.reduce(product);
console.log (result1);
console.log (result2);