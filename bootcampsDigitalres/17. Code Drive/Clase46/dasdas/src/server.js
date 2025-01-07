const express = require("express");

const app = express();

app.get("/api/products", (req, res) => {
	res.send([
		{ id: 1, name: "Cell" },
		{ id: 2, name: "Mouse" },
	]);
});

app.get("/api/products/:id", (req, res) => {
	res.send({ id: 1, name: "Cell" });
});

app.post("/api/products/", (req, res) => {
	res.send({ id: 1, name: "Cell" });
});

app.put("/api/products/:id", (req, res) => {
	res.send({ id: 1, name: "Cell" });
});

app.delete("/api/products/:id", (req, res) => {
	res.send({ id: 1, name: "Cell" });
});

app.listen(3000);