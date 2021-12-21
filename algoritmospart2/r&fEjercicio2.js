/*Ejercicio 2
1. Asegúrese de ejecutar el programa para comprender lo que produce actualmente.
2. Escriba casos de prueba y corrija el código de acuerdo con la salida esperada.
El resultado debe ser: Reprobado si puntuaron 6 o menos, Insuficiente si puntuaron> 6 pero menos de 9.
(9 incluidos) Bueno si puntuaron> 9 pero menos de 14. (14 incluidos) Excelente si puntuaron 15. Error si los participantes ingresan un número negativo o un número fuera del rango admitido (fuera de 0 - 15)*/

function gradeLabel(grade) {
    if (grade <= 6 && grade >= 0) {
        console.log("Failed");
    }

    if (grade > 6 && grade <= 9) {
        console.log("Insufficient");
    }

    if (grade > 9 && grade <= 14) {
        console.log("Good");
    }

    if (grade == 15) {
        console.log("Excellent");
    }
    
    if (grade < 0 || grade > 15) {
        console.log("Error, outside of bounds");
    }
}