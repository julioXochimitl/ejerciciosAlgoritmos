/*Ejercicio # 5
Para cada uno de los ejercicios a continuación, suponga que está comenzando con la siguiente matriz de personas.*/

const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

//1.Escribe un comando que imprima a todas las personas de la lista.

for(var i=0;i<people.length;i++){
    console.log(people[i]+"\n")
}

//2.Escribe el comando para eliminar "Dani" de la matriz.

const daniEliminado = people;
daniEliminado.splice(1,1);
console.log(daniEliminado);

//3.Escribe el comando para eliminar "Juan" de la matriz.

const juanEliminado = people;
juanEliminado.splice(2,1);
console.log(juanEliminado);

//4.Escriba el comando para agregar "Luis" al frente de la matriz.

const luisEliminado = people;
luisEliminado.splice(1,1);
luisEliminado.unshift("Luis");
console.log(luisEliminado);


//5.Escriba el comando para agregar su nombre al final de la matriz.

people.push("Julio");
console.log(people);

//6.Usando un ciclo, iterar a través de esta matriz y después de console.log-ing "Maria", salir del ciclo.

for(var i=0;i<people.length;i++){
    console.log(people[i]);
    if(people[i]=="Maria"){
        break;
    }
}

//7.Escribe el comando que da el indexOf donde se encuentra "Maria".

console.log("Su indice es: "+people.indexOf("Maria"));

//Al final del ejercicio, debería haber 4 personas en la matriz.

console.log(people);
let tam = people.length;
console.log("Hay "+tam+" personas en el erreglo");