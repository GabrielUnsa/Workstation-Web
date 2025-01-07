import { Provider } from "react-redux";
import store from "./redux/store";

function Services(props) {
	return <Provider store={store}>{props.children}</Provider>;
}

export default Services;
