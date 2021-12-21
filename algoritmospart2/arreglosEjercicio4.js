//Exercise #4
//Cree un programa que recorra las 2 matrices; si hay cursos comunes, imprímalos en la consola.

var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];

var i;
var j;

for(i=0;i<student1Courses.length;i++){
    for(j=0;j<student2Courses.length;j++){
        if(student1Courses[i]==student2Courses[j]){
            console.log(student1Courses[j]);
        }
    }
}