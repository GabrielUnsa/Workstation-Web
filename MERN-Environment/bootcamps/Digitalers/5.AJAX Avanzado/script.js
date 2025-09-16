/*Binarios*/
let form = document.querySelector("form");
form.addEventListener("submit", e => {
	e.preventDefault();
	let valor = form[0].files;
	console.log(valor);
});

/*API URL*/
let xhr = new XMLHttpRequest;

xhr.responseType = "blob";
xhr.open ("get", "image.jpg");
xhr.addEventListener("load",() => {
	if (xhr.status == 200) {
		let image_blob = xhr.response;
		let url = URL.createObjectURL(image_blob);
		let img = document.createElement("img");
		img.src = url;
		document.body.appendChild(img);
	}
});

/*PROGRESS*/
let progreso = document.querySelector("progress");
let p = document.querySelector("p");
xhr.addEventListener( "progress", e => {
	if ( e.lengthComputable ) {
		let porcentaje = e.loaded * 100 / e.total;
		console.log(porcentaje);
		progreso.value = porcentaje;
		p.innerText = `Se descargo el ${porcentaje} del archivo`;
	}
});
xhr.send();

//DRAG y DROP
let drop = document.getElementById("drop");
let input = document.getElementById("texto");

input.addEventListener("change", () => {
	manejarArchivos(input.files);
});

drop.addEventListener("dragenter", (e) => {
	e.preventDefault();
});

drop.addEventListener("dragleave", (e) => {
	e.preventDefault();
});

drop.addEventListener("dragover", (e) => {
	e.preventDefault();
});

drop.addEventListener("drop", (e) => {
	e.preventDefault();
	manejarArchivos(e.dataTransfer.files);
});

function manejarArchivos(archivos){
	console.log(archivos);
	let data = new FormData();
	for( var i = 0; i < archivos.length; i++ ){
		data.append(`imagen-{$i}`, archivos[i]);
	}
	let xhr = new XMLHttpRequest;
	xhr.open("POST", "url");
	//xhr.setRequestHeader("content-type", "?");
	xhr.send(data);
}


