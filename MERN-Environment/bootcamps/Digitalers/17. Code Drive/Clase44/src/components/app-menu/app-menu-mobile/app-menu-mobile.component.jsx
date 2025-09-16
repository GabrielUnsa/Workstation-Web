import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function AppMenuMobile(props)
{
    return (
		<Menu
			anchorEl={props.mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={props.mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={props.isMobileMenuOpen}
			onClose={props.handleMobileMenuClose}>
			<MenuItem onClick={props.clickCarrito}>
				<IconButton
					size="large"
					aria-label={`Items del carrito: ${props.cantidadItemsCarrito}`}
					color="inherit">
					<Badge badgeContent={props.cantidadItemsCarrito} color="error">
						<ShoppingBasketIcon />
					</Badge>
				</IconButton>
				<p>Carrito</p>
			</MenuItem>
			<MenuItem onClick={props.clickNotificaciones}>
				<IconButton
					size="large"
					aria-label={`Muestra ${props.cantidadNotificaciones} nuevas notificaciones`}
					color="inherit">
					<Badge badgeContent={props.cantidadNotificaciones} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notificaciones</p>
			</MenuItem>
			<MenuItem onClick={props.clickUsuarios}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit">
					<AccountCircle />
				</IconButton>
				<p>Perfil</p>
			</MenuItem>
		</Menu>
	)
}