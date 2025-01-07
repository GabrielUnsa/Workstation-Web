import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchBox from "./components/search-box/search-box.component";
import Item from "./components/item/item.component";
import { useState } from "react";

function App() {
	const itemsIniciales = [
		{ id: 1, nombre: "Pantalla", descripcion: "Lorem", foto: "" },
		{ id: 2, nombre: "Celular", descripcion: "Lorem", foto: "" },
		{ id: 3, nombre: "Mouse", descripcion: "Lorem", foto: "" },
		{ id: 4, nombre: "Teclado", descripcion: "Lorem", foto: "" },
	];

	const [items, setItems] = useState(itemsIniciales);

	const onSearch = (textoBusqueda) => {
		const nuevosItems = itemsIniciales.filter((val) =>
			val.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
		);

		setItems(nuevosItems);
	};

	return (
		<Container fixed>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<SearchBox onSearch={onSearch} />
				</Grid>
			</Grid>

			<Grid style={{ marginTop: "10px" }} container spacing={3}>
				{items.map((item, index) => (
					<Grid key={index} item xs={12}>
						<Item item={item} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default App;
