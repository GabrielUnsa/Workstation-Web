let input = document.getElementById( "input" );
let button = document.getElementById( "button" );
button.addEventListener("click", e => {
	e.preventDefault();
	e.stopPropagation();
	window.onpopstate = input.value;
  location.href = "./about.html";
});
if (input.value == NULL) {
	input.value = window.onpopstate;
}
