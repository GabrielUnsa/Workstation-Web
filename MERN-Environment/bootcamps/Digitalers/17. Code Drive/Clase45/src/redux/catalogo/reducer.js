const catalogoState = {
	source: [
		{
			id: 1,
			nombre: "Pantalla",
			descripcion: "Lorem",
            precio: 1500,
			foto: "img/joshua-aragon-BMnhuwFYr7w-unsplash.jpg",
		},
		{
			id: 2,
			nombre: "Celular",
			descripcion: "Lorem",
            precio: 2500,
			foto: "img/jonas-lee-o6elTKWZ5bI-unsplash.jpg",
		},
		{
			id: 3,
			nombre: "Mouse",
			descripcion: "Lorem",
            precio: 1400,
			foto: "img/ryan-stone-6u64uoqRBZE-unsplash.jpg",
		},
		{
			id: 4,
			nombre: "Teclado",
			descripcion: "Lorem",
            precio: 4100,
			foto: "img/aryan-dhiman-iGLLtLINSkw-unsplash.jpg",
		},
	],
};

function catalogoReducer(prevState = catalogoState, action) {
	switch (action.type) {
        /*
		case "catalogo/SEARCH":
			const search = action.search;
			const srcItems = prevState.source;
			const filteredItems = srcItems.filter((val) =>
				val.nombre.toLowerCase().includes(search.toLowerCase())
			);
			return {
				...prevState,
				filtered: filteredItems,
			};
        */
		/*
			return Object.assign({}, prevState.filtered, {
				filtered: filteredItems,
			});
      */
		default:
			return prevState;
	}
}

export default catalogoReducer;
