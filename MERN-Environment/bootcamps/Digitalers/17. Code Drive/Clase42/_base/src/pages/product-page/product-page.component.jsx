import { connect } from "react-redux";
import { Redirect } from "react-router";

import Button from '@mui/material/Button';

function ProductPage(props) {
	const notFound = <Redirect to="/" />;

    const click = () => {
		props.addToCart(props.item);
	};

	return props.item === undefined ? notFound : (
        <div>
            <h1>{props.item.nombre}</h1>
            <Button variant="contained" onClick={click}>
                ADD TO CART
            </Button>

        </div>
    );
}

const mapState = (state, prevState) => {
	return {
		item: state.catalogo.source.find(
			(v) => v.id === Number(prevState.match.params.id)
		),
	};
};

const mapDispatch = (dispatch) => ({
	addToCart: (item) => dispatch({ type: "carrito/AGREGAR_ITEM", item: item }),
});

export default connect(mapState, mapDispatch)(ProductPage);
