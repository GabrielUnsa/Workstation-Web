function Person( name ){
	this.name = name;
}

Person.prototype.getPerson = function(){
	let persona = document.createElement( "div" );
			persona.classList.add( "col" );
			persona.appendChild( document.createTextNode( this.name ) );
	return persona;
}

function Student( name, course ){
	Person.call( this, name );
	this.course = course;
}

Student.prototype = Object.create( Person.prototype );
Student.prototype.getCourse = function(){
	let curso = document.createElement( "div" );
			curso.classList.add( "col" );
			curso.appendChild( document.createTextNode( this.course ) );
	return curso;
}

function Teacher( name, stdQty ){
	Person.call( this, name );
	this.stdQty = stdQty; 
}

Teacher.prototype = Object.create( Person.prototype );
Teacher.prototype.getQuantity = function(){
	let cantidad = document.createElement( "div" );
			cantidad.classList.add( "col" );
			cantidad.appendChild( document.createTextNode( this.stdQty ) );
	return cantidad;
}

document.getElementById( 'addStudent' ).addEventListener( "click", e =>{
	e.preventDefault();
	e.stopPropagation();
	if( document.getElementById( 'studentName' ).value == "" || 
			document.getElementById( 'studentCourse' ).value == "" ){
		window.alert("Ingrese el nombre y el curso del estudiante");
	}else{
		let student = new Student( document.getElementById( 'studentName' ).value,
															 document.getElementById( 'studentCourse' ).value );
		let newrow = document.createElement( "div" );
		newrow.classList.add( "row", "card-body" );
		newrow.appendChild( student.getPerson() );
		newrow.appendChild( student.getCourse() );
		document.getElementById( 'cardStudent' ).appendChild( newrow );
		document.getElementById( 'studentName' ).value = "";
		document.getElementById( 'studentCourse' ).value = "";
	}
});

document.getElementById( 'addTeacher' ).addEventListener( "click", e =>{
	e.preventDefault();
	e.stopPropagation();
	if( document.getElementById( 'teacherName' ).value == "" || 
			document.getElementById( 'studentQuantity' ).value == "" ){
		window.alert("Ingrese el nombre y la cantidad del docente");
	}else{
		let teacher = new Teacher( document.getElementById( 'teacherName' ).value,
															 document.getElementById( 'studentQuantity' ).value );
		let newrow = document.createElement( "div" );
		newrow.classList.add( "row", "card-body" );
		newrow.appendChild( teacher.getPerson() );
		newrow.appendChild( teacher.getQuantity() );
		document.getElementById( 'cardTeacher' ).appendChild( newrow );
		document.getElementById( 'teacherName' ).value = "";
		document.getElementById( 'studentQuantity' ).value = "";	
	}
});

function isNumber( event ){
	return event.charCode >= 48 && event.charCode <= 57;
}
