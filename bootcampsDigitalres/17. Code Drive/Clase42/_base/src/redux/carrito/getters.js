export function getCart(state) {
    const carrito = state.carrito.items;
    const catalogo = state.catalogo.source;

    return carrito.map(i => {
        
        let id, nombre, foto, precio, cantidad, total;

        id = i.id;
        cantidad = i.cantidad;

        const catalogoItem = catalogo.find(ic => ic.id == id);
        nombre = catalogoItem.nombre;
        foto = catalogoItem.foto;
        precio = catalogoItem.precio;

        total = precio * cantidad;

        return {
            id,
            nombre,
            foto,
            precio,
            cantidad,
            total
        }

    });
}