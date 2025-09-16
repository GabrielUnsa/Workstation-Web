const carritoState = {
		items: [
      // { id: 1, cantidad: 2 }
    ]
};

function carritoReducer(prevState = carritoState, action){
  
  switch (action.type) {
    case 'carrito/AGREGAR_ITEM':
      const item = action.item;
      const nuevosItems = prevState.items;
      nuevosItems.push(item);
      console.log("[CARRITO REDUCER] Nuevos items: ", nuevosItems);
      return {
        ...prevState,
        items: nuevosItems
      }

    default:
      return prevState;
  }
}

export default carritoReducer;