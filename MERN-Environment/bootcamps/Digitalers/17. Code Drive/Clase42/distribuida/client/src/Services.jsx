import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from "./redux/store";

function Services(props) {
	return (
    <Provider store={store}>
        <HashRouter>
            {props.children}
        </HashRouter>
    </Provider>);
}

export default Services;
