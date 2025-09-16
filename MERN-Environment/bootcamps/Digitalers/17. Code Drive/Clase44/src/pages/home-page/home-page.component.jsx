import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "../../components/item/item.component";

import { connect } from "react-redux";

function HomePage(props) {
	const usp = new URLSearchParams(props.location.search);

	const items = usp.get("s")
		? props.items.filter((val) =>
				val.nombre.toLowerCase().includes(usp.get("s").toLowerCase())
		  )
		: props.items;

	return (
		<Container fixed>
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

const mapState = (state) => {
	return {
		items: state.catalogo.source,
	};
};

const adaptadorRedux = connect(mapState);

export default adaptadorRedux(HomePage);
