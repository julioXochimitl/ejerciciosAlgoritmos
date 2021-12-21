/*Cree una función que tome 2 entradas (usando el indicador) y pasa por los 5 operadores aritméticos (+, -, /, *, %).
El resultado esperado en la consola es:
- `La suma es x` -> x es la suma calculada.
- `La resta es y` -> y es la diferencia calculada.
- `La multiplicación es z` -> z es la multiplicación calculada.
- `La división es w` -> w es la división calculada.
- `El resto es q` -> q es el resto calculado.*/

let a = parseInt(prompt("Dame un numero: ")); //Imprime en pantalla solicitando un número y lo guarda en variable "a", parseInt() traduce un caracter a número
let b = parseInt(prompt("Dame otro numero: ")); //Imprime en pantalla solicitando un número y lo guarda en variable "b", parseInt() traduce un caracter a número

operaciones(a,b); //La función recibe los parámetros

function operaciones(a,b){  //Inicia función operaciones
    suma=a+b; //Realiza operación, a más b
    alert("Suma = "+suma); //Imprime en pantalla el resultado de la suma
    
    resta=a-b; //Realiza operación, a menos b
    alert("Resta = "+resta); //Imprime en pantalla el resultado de la resta

    division=a/b; //Realiza operación, a entre b
    alert("Division = "+division); //Imprime en pantalla el resultado de la division

    multiplicacion=a*b; //Realiza operación, a por b
    alert("Multipicacion = "+multiplicacion); //Imprime en pantalla el resultado de la multiplicacion

    resto=a%b; //Calcula el residuo de la división, a entre b
    alert("Residuo = "+resto); //Imprime en pantalla el residuo
} //Termina funcion operaciones