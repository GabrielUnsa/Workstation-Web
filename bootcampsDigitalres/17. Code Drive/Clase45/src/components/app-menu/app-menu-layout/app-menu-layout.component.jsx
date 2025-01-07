import * as React from "react";

import Box from "@mui/material/Box";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import AppMenuMobile from "../app-menu-mobile/app-menu-mobile.component";
import AppMenuBar from "../app-menu-bar/app-menu-bar.component";

// Centro y mediador de todos los componentes y estados de la barra (el Mauro de la barra)
function AppMenuLayout(props) {
	const onSearch = (search) => {
		props.history.replace(`/?s=${search}`);
	};

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const cantidadNotificaciones = 2;
	const cantidadItemsCarrito = props.cantItemsCarrito;

	const clickUsuarios = (event) => {
		props.history.push(`/dashboard`);
	};

	const clickNotificaciones = () => {
		alert("Click en notificaciones");
	};

	const clickCarrito = () => {
		props.history.push(`/cart`);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";

	const mobileMenuId = "primary-search-account-menu-mobile";

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppMenuBar
				onSearch={onSearch}

				clickCarrito={clickCarrito}
				cantidadItemsCarrito={cantidadItemsCarrito}
				clickNotificaciones={clickNotificaciones}
				cantidadNotificaciones={cantidadNotificaciones}
				clickUsuarios={clickUsuarios}
                
                menuId={menuId}
				mobileMenuId={mobileMenuId}
				handleMobileMenuOpen={handleMobileMenuOpen}
			/>
			<AppMenuMobile
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                mobileMenuId={mobileMenuId}
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                
                clickCarrito={clickCarrito}
				cantidadItemsCarrito={cantidadItemsCarrito}
				clickNotificaciones={clickNotificaciones}
				cantidadNotificaciones={cantidadNotificaciones}
				clickUsuarios={clickUsuarios}
            />
		</Box>
	);
}

const mapState = (state) => ({
	cantItemsCarrito: state.carrito.items.length,
});

/*
const mapDispatch = (dispatch) => ({
	onSearch: function (search) {
		dispatch({
			type: "catalogo/SEARCH",
			search: search,
		});
	},
});
*/
const conector = connect(mapState);

export default withRouter(conector(AppMenuLayout));
