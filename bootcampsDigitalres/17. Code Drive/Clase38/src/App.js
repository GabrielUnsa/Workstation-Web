import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "./components/item/item.component";
import { useState } from "react";
import AppMenu from './components/app-menu/app-menu.component';

function App() {
	const itemsIniciales = [
		{
			id: 1,
			nombre: "Pantalla",
			descripcion: "Lorem",
			foto: "img/joshua-aragon-BMnhuwFYr7w-unsplash.jpg",
		},
		{
			id: 2,
			nombre: "Celular",
			descripcion: "Lorem",
			foto: "img/jonas-lee-o6elTKWZ5bI-unsplash.jpg",
		},
		{
			id: 3,
			nombre: "Mouse",
			descripcion: "Lorem",
			foto: "img/ryan-stone-6u64uoqRBZE-unsplash.jpg",
		},
		{
			id: 4,
			nombre: "Teclado",
			descripcion: "Lorem",
			foto: "img/aryan-dhiman-iGLLtLINSkw-unsplash.jpg",
		},
	];

	const [items, setItems] = useState(itemsIniciales);

	const onSearch = (textoBusqueda) => {
		const nuevosItems = itemsIniciales.filter((val) =>
			val.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
		);

		setItems(nuevosItems);
	};

	return (
		<div>
			<AppMenu onSearch={onSearch} />
			<Container fixed>
				<Grid style={{ marginTop: "10px" }} container spacing={3}>
					{items.map((item, index) => (
						<Grid key={index} item xs={12}>
							<Item item={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
