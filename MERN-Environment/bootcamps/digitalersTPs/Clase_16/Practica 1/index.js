/*
1. Crear una funcion constructora maestra Person(name);
2. Crear una funcion constructora hija de Person => Student(course);
3. Crear una funcion constructora hija dep Person => Teacher(studentQuantity)
4. Crear el prototipo y con el prototipo llamar los campos html
*/

// En vez de utilizar la palabra class usamos function (pero es lo mismo) 
/**
 * Creamos el objeto persona. Clase constructora.
 * @param {string} name - Nombre de la persona.
 */
function Person(name){
    this.name = name;
}

/**
 * Creamos el objeto estudiante. Clase constructora.
 * @param {string} name - Nombre del estudiante.
 * @param {string} course - Curso del estudiante.
*/
function Student(name, course){
    Person.call(this, name);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype); //Creamos el objeto studiante heredando el prototipo de Persona. (persona es padre de estudiante)
Student.prototype.constructor = Student; //Corregimos el constructor perdido por la sentencia anterior agregandolo

/**
 * Constructor de la clase Teacher.
 * @param {string} name - Nombre del profesor
 * @param {int} studentQuantity - Cantidad de estudiantes
 */
function Teacher(name, studentQuantity){
    Person.call(this, name);
    this.studentQuantity = studentQuantity;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

//Intanciacion de las dos clases
const student = new Student('Ayelen', 'Js Avanzado');
const teacher = new Teacher('Diego', 40);

//Lo visualizamos en el frondend
document.getElementById('student-name').innerHTML = student.name;
document.getElementById('student-course').innerHTML = student.course;

document.getElementById('student-name').innerHTML = student.name;
document.getElementById('student-course').innerHTML = student.course;
