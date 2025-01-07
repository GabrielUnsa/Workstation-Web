import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "./components/item/item.component";
import AppMenu from "./components/app-menu/app-menu.component";

import { connect } from "react-redux";

function App(props) {
	return (
		<div>
			<AppMenu />
			<Container fixed>
				<Grid style={{ marginTop: "10px" }} container spacing={3}>
					{props.items.map((item, index) => (
						<Grid key={index} item xs={12}>
							<Item item={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

const mapState = (state) => {
	return {
		items: state.catalogo.filtered ? state.catalogo.filtered : state.catalogo.source,
	};
}

const adaptadorRedux = connect(mapState);

export default adaptadorRedux(App);
