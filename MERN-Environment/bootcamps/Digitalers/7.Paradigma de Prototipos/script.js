//Prototipo
let prototipo = {
	saludo:function(){
		console.log("hola");
	}
}

let b = Object.create( prototipo );

//Configuracion avanzada de prototipo
let a = object.create( null, {
	x: {
		value: 1; //valor real
		writable: false; //admite escritura
		enumerable: false; //admite iterabilidad
		configurable: false; //admite borrado x dentro de a
	} 
}); 
	//null = no tiene prototipo
	//{ .. code .. } todas las propiedades que va a tener a
