/*Parte 3:
Tenemos 3 artículos y sabemos el precio de cada uno. Sin embargo, solo podemos comprar los dos
artículos menos costosos.
Escriba un algoritmo que tome tres entradas de usuario y envíe los dos precios más pequeños a la
consola.*/

var numUno = parseInt(prompt("Precio del articulo uno"));//Imprime en pantalla solicitando un número y lo guarda en variable "numUno", parseInt() traduce un caracter a número
var numDos = parseInt(prompt("Precio del articulo dos"));//Imprime en pantalla solicitando un número y lo guarda en variable "numDos", parseInt() traduce un caracter a número
var numTres = parseInt(prompt("Precio del articulo tres"));//Imprime en pantalla solicitando un número y lo guarda en variable "numTres", parseInt() traduce un caracter a número

soloDosArticulos(numUno, numDos, numTres); //La función recibe los parámetros

function soloDosArticulos(a,b,c){ //Inicia función soloDosArticulos
    if(a<c&&b<c){ //Inicia if que compara el artículo "a" y "b" con el artículo "c", determinan si "a" y "b" son menores que "c"
        alert( //Inicia alerta que imprime el resultado en pantalla
            "Solo te alcanza para:"+
            "\nArticulo uno, precio: $"+a+
            "\nArticulo dos, precio $"+b
        ); //Termina alerta que imprime el resultado en pantalla
    }
    if(b<a&&c<a){ //Inicia if que compara el articulo "b" y "c" con el articulo "a", determinan si "b" y "c" son menores que "a"
        alert( //Inicia alerta que imprime el resultado en pantalla
            "Solo te alcanza para:"+
            "\nArticulo dos, precio: $"+b+
            "\nArticulo tres, precio $"+c
        ); //Termina alerta que imprime el resultado en pantalla
    }
    if(a<b&&c<b){ //Inicia if que compara el artículo "a" y "c" con el artículo "b", determinan si "a" y "c" son menores que "b"
        alert( //Inicia alerta que imprime el resultado en pantalla
            "Solo te alcanza para:"+
            "\nArticulo uno, precio: $"+a+
            "\nArticulo tres, precio $"+c
        ); //Termina alerta que imprime el resultado en pantalla
    }
} //Termina función soloDosArticulos