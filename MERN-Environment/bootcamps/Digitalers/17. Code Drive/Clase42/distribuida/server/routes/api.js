const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log('Autenticando...');
    next();
});

router.get('/producto', (req, res) => {
    res.json([
		{
			id: 1,
			nombre: "Pantalla",
			descripcion: "Lorem",
            precio: 1500,
			foto: "img/joshua-aragon-BMnhuwFYr7w-unsplash.jpg",
		},
		{
			id: 2,
			nombre: "Celular",
			descripcion: "Lorem",
            precio: 2500,
			foto: "img/jonas-lee-o6elTKWZ5bI-unsplash.jpg",
		},
		{
			id: 3,
			nombre: "Mouse",
			descripcion: "Lorem",
            precio: 1400,
			foto: "img/ryan-stone-6u64uoqRBZE-unsplash.jpg",
		},
		{
			id: 4,
			nombre: "Teclado",
			descripcion: "Lorem",
            precio: 4100,
			foto: "img/aryan-dhiman-iGLLtLINSkw-unsplash.jpg",
		},
	]);
});

module.exports = router;