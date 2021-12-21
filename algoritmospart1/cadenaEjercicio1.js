/*Ejercicio 1:
Queremos comprobar si una cadena está vacía.
Si una cadena no está vacía, queremos imprimir sacar el primer carácter de esa cadena.
Si una cadena está vacía, imprima un texto que diga "Esta cadena está vacía"*/

let cadena = prompt("Una palabra:"); //Imprime en pantalla solicitando una palabra y lo guarda en variable "cadena"

cadenaVacia(cadena); //La función recibe los parámetros

function cadenaVacia(a){ //Inicia función cadenaVacia
    if(a!=""){ //Inicia if
        alert("No esta vacia\nLa palabra es: "+ a); //Imprime en pantalla
        alert("El primer caracter es: "+a.charAt(0)); //Imprime en pantalla, charAt(0) determina el primer caracter
    }else{ //Termina if e inicia else
        alert("Esta vacia") //Imprime en pantalla
    } //Termina else
} //Termina función cadenaVacia