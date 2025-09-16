const carritoState = {
	items: [
		// { id: 1, cantidad: 2 }
	],
};

function carritoReducer(prevState = carritoState, action) {
	switch (action.type) {
		case "carrito/AGREGAR_ITEM":
			const item = action.item;
			let nuevosItems = prevState.items;
            const founded = nuevosItems.find(i => i.id == item.id);
            if(founded)
                nuevosItems = nuevosItems.map(i => {
                    if(i.id == item.id)
                    {
                        return {
                            id: item.id,
                            cantidad: ++i.cantidad
                        }
                    }
                    else
                    {
                        return i;
                    }
                });
            else
                nuevosItems.push({
                    id: item.id,
                    cantidad: 1
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
