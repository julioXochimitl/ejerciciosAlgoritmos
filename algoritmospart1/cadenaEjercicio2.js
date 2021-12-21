/*Ejercicio 2:
Queremos comparar dos cadenas y comprobar si son iguales: no distinguen entre mayúsculas y
minúsculas.
Devuelve un valor booleano: verdadero si las dos cadenas son lo mismo, y falso si no lo son*/

let str1 = prompt("Dame el texto"); //Imprime en pantalla solicitando una palabra y lo guarda en variable "str1"
let str2 = prompt("Otro texto"); //Imprime en pantalla solicitando una palabra y lo guarda en variable "str2"

compare(str1,str2); //La función recibe los parámetros

function compare(str1,str2){ //Inicia función compare
    if(str1.toLowerCase()===str2.toLowerCase()){ //Inicia if, toLowerCase() convierte la cadena en minúsculas para compararlas mejor
        alert(true); //Imprime en pantalla que son iguales
    }else{ //Termina if e inicia else
        alert(false); //Imprime en pantalla que no son iguales
    } //Termina else
} //Termina función compare