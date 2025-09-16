// Crear una funcion constructora maestra Person(name)
// Crear una function constructora hija de Person => Student(course)
// Crear una funcion constructora hija de Person => Teacher(studentQuantity)
// Crear el prototipo y con el prototipo llenan los campos del html

/**
 * Mejoras propuestas para el lunes
 * 1. Agregar un metodo a Person que permita agregar una nueva persona 
 * en el html cada que se cree mediante un new
 * 2. Agregar un metodo a person que se pueda heredar y agregar el nombre
 * a la persona que se agregó en el punto 1
 * 3. Agregar un metodo a Student que permita agregar el curso
 * al estudiante que se creo mediante el punto 1
 * 4. Agregar un metodo a Teacher que permita agregar la cantidad de estudiantes
 * al profesor que se creo mediante el punto 1
 * 5. Definir un listado de estudiantes y uno de profesores
 * 6. Recorrer los listados y utilizando los metodos creados y las diferentes funciones
 * constructoras agregarlos y mostrarlos en pantalla
 * 
 * !!!!! Para realizar lo propuesto se deberan agregar algunas propiedades a los objetos
 * Person, Student y Teacher, agreguen tantas como consideren necesarias !!!!
 * !!!! La idea de este ejercicio que generen el html de forma dinamica cuando agreguen 
 * una nueva persona (estudiante o profesor) !!!! 
*/

//Solucion con Prototype
function Person( name ){
	this.name = name;
}

function Student( name, course ){
	Person.call( this, name );
	this.course = course;
}

function Teacher( name, stdQty ){
	Person.call( this, name );
	this.stdQty = stdQty;
}

Student.prototype = Object.create( Person.prototype );
Teacher.prototype = Object.create( Person.prototype );

let student = new Student( 'Ana', 'HTML' );
let teacher = new Teacher( 'Andrea', 21 );

document.getElementById( 'student-name'  ).innerHTML = student.name;
document.getElementById( 'student-course' ).innerHTML = student.course;

document.getElementById( 'teacher-name' ).innerHTML = teacher.name;
document.getElementById( 'teacher-student-quantity' ).innerHTML = teacher.stdQty;

/*
//Con Clases
class Person{
	
	constructor( name ){
		this.name = name;
	}

}

class Student extends Person{

	constructor( name, course  ){
		super( name );
		this.course = course;
	}
	
}

class Teacher extends Person{

	constructor( name, stdQty ){
		super( name );
		this.stdQty = stdQty;
	}

}

const student = new Student( 'Ana', 'HTML' );
const teacher = new Teacher( 'Andrea', 21 );

document.getElementById( 'student-name' ).innerHTML = student.name;
document.getElementById( 'student-course' ).innerHTML = student.course;

document.getElementById( 'teacher-name' ).innerHTML = teacher.name;
document.getElementById( 'teacher-student-quantity' ).innerHTML = teacher.stdQty;
*/
