import "./cart-page.styles.css";

import { connect } from "react-redux";
// import { Redirect } from 'react-router-dom';
import { getCart } from "../../redux/carrito/getters";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import CartRow from "../../components/cart-row/cart-row.component";

function CartPage(props) {

    console.log(props);

	const itemList = (
		<>
			<h2>Carrito</h2>
			{props.items.map((it, index) => (
				<CartRow key={index} item={it} />
			))}
			<Button variant="contained" onClick={() => props.history.push('/checkout')}>Checkout</Button>
        </>
	);

	// const noItemsV1 = <Redirect to="/" />;

    const noItems = <h3>No tienes items en el carrito</h3>

	return (
        <Container fixed>
            {props.items.length > 0 ? itemList : noItems}
        </Container>
    );
}

const mapState = (state) => ({
	items: getCart(state),
});

export default connect(mapState)(CartPage);
