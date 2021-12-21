/*Parte 2:
Escriba un algoritmo para encontrar el mayor entre 5 números diferentes ingresados por el usuario.
Imprima el número más grande en la consola.*/

var a = parseInt(prompt("Dame el primer numero")); //Imprime en pantalla solicitando un número y lo guarda en variable "a", parseInt() traduce un caracter a número
var b = parseInt(prompt("Dame el primer numero")); //Imprime en pantalla solicitando un número y lo guarda en variable "b", parseInt() traduce un carácter a número
var c = parseInt(prompt("Dame el primer numero")); //Imprime en pantalla solicitando un número y lo guarda en variable "c", parseInt() traduce un carácter a número
var d = parseInt(prompt("Dame el primer numero")); //Imprime en pantalla solicitando un número y lo guarda en variable "d", parseInt() traduce un carácter a número
var e = parseInt(prompt("Dame el primer numero")); //Imprime en pantalla solicitando un número y lo guarda en variable "e", parseInt() traduce un caracter a número

comparar(a,b,c,d,e); //La función recibe los parámetros

function comparar(a, b, c, d, e){ //Inicia función comparar
    if (a > b && a > c && a > d && a > e) { //Inicia if, compara el valor de "a" con las demás variables "b, c, d y e"
        alert(a); //Imprime en pantalla valor de "a" si este es el mayor
    }
    if (b > a && b > c && b > d && b > e) { //Inicia if, compara el valor de "b" con las demás variables "a, c, d y e"
        alert(b); //Imprime en pantalla valor de "b" si este es el mayor
    }
    if (c > a && c > b && c > d && c > e) { //Inicia if, compara el valor de "c" con las demás variables "a, b, d y e"
        alert(c); //Imprime en pantalla valor de "c" si este es el mayor
    }
    if (d > a && d > b && d > c && d > e) { //Inicia if, compara el valor de "d" con las demás variables "a, b, c y e"
        alert(d); //Imprime en pantalla valor de "d" si este es el mayor
    }
    if (e > a && e > b && e > c && e > d) { //Inicia if, compara el valor de "e" con las demás variables "a, b, c y d"
        alert(e); //Imprime en pantalla valor de "e" si este es el mayor
    }
} //Termina función comparar