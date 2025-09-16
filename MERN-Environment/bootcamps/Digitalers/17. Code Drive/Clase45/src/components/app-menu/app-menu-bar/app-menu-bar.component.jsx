import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Box from "@mui/material/Box";

import { Search, SearchIconWrapper, StyledInputBase } from './app-menu-bar.styled';

export default function AppMenuBar(props)
{
    return (
        <AppBar position="static" style={{ backgroundColor: "#f74040" }}>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Tu búsqueda..."
                    inputProps={{ "aria-label": "search" }}
                    onInput={(evt) => props.onSearch(evt.target.value)}
                    style={{ width: "100%" }}
                />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={props.clickCarrito}>
                    <Badge
                        badgeContent={props.cantidadItemsCarrito}
                        color="error">
                        <ShoppingBasketIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    onClick={props.clickNotificaciones}>
                    <Badge
                        badgeContent={props.cantidadNotificaciones}
                        color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={props.menuId}
                    aria-haspopup="true"
                    onClick={props.clickUsuarios}
                    color="inherit">
                    <AccountCircle />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={props.mobileMenuId}
                    aria-haspopup="true"
                    onClick={props.handleMobileMenuOpen}
                    color="inherit">
                    <MoreIcon />
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>

    );
}