/*Ejercicio 2:
Crea una función que incluya un número y comprueba si es divisible por 4 o divisible por 9.
Imprima en la consola verdadero si es un número si es divisible por 4 o 9, y falso si un el número no
es divisible por ningún número.*/

let numA = parseInt(prompt("Ingresa numero que sea divisible entre 9 o 4")); //Imprime en pantalla solicitando un número y lo guarda en variable "numA"

divisible(numA); //La función recibe los parámetros

function divisible(a){ //Inicia función divisible
    if(a%9===0||a%4===0){ //Inicia if
        alert("Verdadero"); //Imprime en pantalla
    }else{ //Termina if e inicia else
        alert("Falso"); //Imprime en pantalla
    } //Termina else
} //Termina función divisible