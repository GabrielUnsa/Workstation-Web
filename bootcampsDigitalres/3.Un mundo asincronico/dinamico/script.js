let btn = document.querySelector("button")

btn.addEventListener("click", () => {
	let xhr = new XMLHttpRequest;
	xhr.open("get","plantilla.html");
	xhr.addEventListener("load", () => {
		if ( xhr.status == 200 ){
			let plantilla = xhr.response;
			let div = document.createElement("div");
			div.innerHTML = plantilla;
			document.body.appendChild(div)
		}
	})
	xhr.send();
})
