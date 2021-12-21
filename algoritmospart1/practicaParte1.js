/*Parte 1:
Escriba un programa donde un usuario ingrese la cantidad de tareas que ha completado. El programa
devuelve una de las siguientes etiquetas a la consola:
- Falló si obtuvo 6 o menos
- Insuficiente si puntuaron> 6 pero menos de 9 (9 incluidos)
- Bueno si puntuaron> 9 pero menos de 14 (14 incluidos)
- Excelente si anotaron 15
- Error si los participantes ingresan un número negativo o un número fuera del rango admitido
(fuera de 0-15)*/

let tareasEntregadas = prompt("¿Cuantas tareas entregaste?"); //Imprime en pantalla solicitando una palabra y lo guarda en variable "tareasEntregadas"

puntuacion(tareasEntregadas); //La función recibe los parámetros

function puntuacion(tEntregadas){ //Inicia función puntuacion
    if(tEntregadas>=0||tEntregadas<=15){ //Inicia if, define un rango entre 0 y 15
        if(tEntregadas<=6){ //Inicia if anidado (anidado quiere decir que está dentro de otra estructura), este indica 6 o menos tareas entregadas
            alert("**Fallaste**"); //Imprime en pantalla Fallaste
        }
        if(tEntregadas>6&&tEntregadas<=9){ //Inicia if anidado (anidado quiere decir que está dentro de otra estructura), este indica de 7 a 9 tareas entregadas
            alert("**Insuficiente**"); //Imprime en pantalla Insuficiente
        }
        if(tEntregadas>9&&tEntregadas<=14){ //Inicia if anidado (anidado quiere decir que está dentro de otra estructura), este indica de 10 a 14 tareas entregadas
            alert("**Bueno**"); //Imprime en pantalla Bueno
        }
        if(tEntregadas==15){ //Inicia if anidado (anidado quiere decir que está dentro de otra estructura), este indica que entrego las 15 tareas
            alert("**Excelente**"); //Imprime en pantalla Excelente
        }
    }else{ //Termina if, define un rango entre 0 y 15 e inicia else
        alert("**Error**"); //Imprime en pantalla Error
    } //Termina else
} //Termina función puntuacion