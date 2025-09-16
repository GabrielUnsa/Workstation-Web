const express = require('express');
const app = express()
const PORT = 4000

//Los middleware utilizan use para ser invocada
app.use((req, res, next)=>{
	console.log('pase por el primer middleware de express');
	next();
});

app.get('/', (req, res) => {
	res.json({ id: 1 });
});
app.get('/hola', (req, res) => {
	console.log('Pase por la segunda');
	//throw new Error('Esto es un error que genere');
	//res.send('hello world');
	next();
});

app.use((req, res, next)=>{
	console.log('pase por el tercer middle');
	next();
	return res.send('Esto me habilita a poder utilizar la misma respuesta en todas las apis');
});

app.use((err, req, res, next) => {
	console.log('pase por la cuarta');
	res.status(400).json({ error: 'esto es un error' });
});

app.get('/hola', (req, res, next) =>{
	console.log('pase por el segundo middleware');
	next()
}, (req, res, next) => {
	console.log('pase por el tercer middleware');
	next();
}, (req, res, next) => {
	console.log('pase por el cuarto middleware');
	res.send('Terminamos!!');
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`)
});
