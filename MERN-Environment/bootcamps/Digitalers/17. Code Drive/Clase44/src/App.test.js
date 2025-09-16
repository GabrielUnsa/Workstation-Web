import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Services from "./Services";

test("renders learn react link", () => {
	render(
		<Services>
			<App />
		</Services>
	);
});
