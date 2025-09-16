const carritoState = {
	items: [
		// { id: 1, cantidad: 2 }
	],
};
/*
aumentar cantidad
{
    type: "carrito/EDITAR_ITEM",
    item: {
        cantidad: 3
        foto: "img/joshua-aragon-BMnhuwFYr7w-unsplash.jpg"
        id: 1
        nombre: "Pantalla"
        precio: 1500
        total: 4500
    }
}
*/

function carritoReducer(prevState = carritoState, action) {
	switch (action.type) {
		case "carrito/BORRAR_ITEM":
			return {
				...prevState,
				items: prevState.items.filter((it) => it.id !== action.item.id),
			};

		case "carrito/EDITAR_ITEM":
			return {
				...prevState,
				items: prevState.items
					.map((it) => (it.id === action.item.id ? action.item : it))
					.filter((it) => it.cantidad > 0),
			};

		case "carrito/AGREGAR_ITEM":
			const item = action.item;
			let nuevosItems = prevState.items;
			const founded = nuevosItems.find((i) => i.id === item.id);
			if (founded)
				nuevosItems = nuevosItems.map((i) => {
					if (i.id === item.id) {
						return {
							id: item.id,
							cantidad: ++i.cantidad,
						};
					} else {
						return i;
					}
				});
			else
				nuevosItems.push({
					id: item.id,
					cantidad: 1,
				});

			console.log(nuevosItems);

			return {
				...prevState,
				items: nuevosItems,
			};

		default:
			return prevState;
	}
}

export default carritoReducer;
