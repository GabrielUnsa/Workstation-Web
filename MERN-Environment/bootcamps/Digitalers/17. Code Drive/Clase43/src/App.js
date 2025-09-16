import React from "react";
import AppMenu from "./components/app-menu/app-menu.component";

import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import CartPage from './pages/cart-page/cart-page.component';
import ProductPage from './pages/product-page/product-page.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import LoginPage from "./pages/login-page/login-page.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

import { connect } from "react-redux";
import { isLoggedIn } from './redux/user/getters';

function App(props) {
	return (
		<div>
			<AppMenu />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/checkout">
                {
                        props.isLoggedIn ? 
                        <CheckoutPage /> :
                        <Redirect to="/login" />
                    }
                </Route>
                <Route path="/dashboard">
                    {
                        props.isLoggedIn ? 
                        <DashboardPage /> :
                        <Redirect to="/login" />
                    }
                </Route>
            </Switch>
		</div>
	);
}

const mapState = state => ({
    isLoggedIn: isLoggedIn(state)
})

const conector = connect(mapState);

export default conector(App);