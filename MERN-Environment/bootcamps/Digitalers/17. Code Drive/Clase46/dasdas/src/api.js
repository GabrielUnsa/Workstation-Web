const express = require("express");

const app = express();

app.use((req, res, next) => {

    // Autenticación por x-access-token

});

app.post("/m", (req, res) => {
	res.send([
		{ id: 1, name: "Cell" },
		{ id: 2, name: "Mouse" },
	]);
});

app.get("/m/:code", (req, res) => {
	res.send([
		{ id: 1, name: "Cell" },
		{ id: 2, name: "Mouse" },
	]);
});


app.listen(3000);