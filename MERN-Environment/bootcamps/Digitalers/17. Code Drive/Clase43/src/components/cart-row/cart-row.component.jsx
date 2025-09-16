import "./cart-row.styles.css";
import Grid from "@mui/material/Grid";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

import { connect } from "react-redux";

function CartRow(props) {
	return (
		<Grid container className="cart-row">
			<Grid item xs={2} className="cart-row-cell">
				<img src={props.item.foto} alt="" width="150" height="150" />
			</Grid>
			<Grid item xs={2} className="cart-row-cell">
				{props.item.nombre}
			</Grid>
			<Grid item xs={2} className="cart-row-cell">
				<span className="cart-row-button">
					<ArrowBackIos onClick={() => props.sub()} />
				</span>
				<span className="cart-row-count">{props.item.cantidad}</span>
				<span className="cart-row-button">
					<ArrowForwardIos onClick={() => props.add()} />
				</span>
			</Grid>
			<Grid item xs={2} className="cart-row-cell">
				<span className="cart-row-inner-text">Precio por unidad:</span>
				<span className="cart-row-price">{props.item.precio}</span>
			</Grid>
			<Grid item xs={2} className="cart-row-cell">
				<span className="cart-row-inner-text">Total:</span>
				<span className="cart-row-price">{props.item.total}</span>
			</Grid>
			<Grid item xs={2} className="cart-row-cell">
				<Close className="cart-row-button" onClick={() => props.del()} />
			</Grid>
		</Grid>
	);
}

const mapDispatch = (dispatch, prevProps) => {
	const prevCant = prevProps.item.cantidad;
	return {
		del: () =>
			dispatch({ type: "carrito/BORRAR_ITEM", item: prevProps.item }),
		sub: () =>
			dispatch({
				type: "carrito/EDITAR_ITEM",
				item: {
					...prevProps.item,
					cantidad: prevCant - 1,
				},
			}),
		add: () =>
			dispatch({
				type: "carrito/EDITAR_ITEM",
				item: {
					...prevProps.item,
					cantidad: prevCant + 1,
				},
			}),
	};
};

const conector = connect(null, mapDispatch);

export default conector(CartRow);
