import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";

function Services(props) {
	return (
    <Provider store={store}>
        <BrowserRouter>
            {props.children}
        </BrowserRouter>
    </Provider>);
}

export default Services;
