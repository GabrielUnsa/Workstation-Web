import React from "react";
import Router from "./components/router/router.component";
import Layout from "./components/layout/layout.component";

import { users_all } from './api/users';

// import RedList from "./test/RedList";

// Llamar al Layout
// Llama al Router
function App(props) {
    console.log(users_all());

	return (
		<Layout>
            {/*
            <RedList>
                <div>Hola</div>
                <div>Mundo</div>
                <button>Esto es un boton</button>
                <p>Esto es un párrafo</p>
            </RedList>
            */}
            <Router />
		</Layout>
	);
}

export default App;
