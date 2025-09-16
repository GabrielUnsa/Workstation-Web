/* Clase 15 - Estructura de Promesa

const promise = new Promise( (resolve, reject) => {
    //resolve('Aqui resolvimos la promesa');
    reject(new Error('Aqui hay un error')); //los reject se ejecutan antes del catch
});

promise
    .then((value)=>{
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally( () => {
        console.log('Aquí termino la promesa');
    });

//SugarSyntax
const promise = new Promise( (resolve, reject) => {
    resolve('Aqui resolvimos la promesa');
});

const start = async () => {
    try {
        const value = await promise;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
    console.log('Aqui termine la promesa');
}
start(); */

//Fetch
//Libreria de JS que me permite realizar requests http (XMLHttpRequest)
// Obtener los datos de latitud y longitud utilizando la API de JS geolocalizacion
// Van a utilizar los datos de latitud y longitud en los parametros que pasan en la url
// para consultar en la api de clima weatherapi https://www.weatherapi.com/docs/

navigator.geolocation.getCurrentPosition((position) => {
	const { latitude, longitude } = position.coords
	fetch(`http://api.weatherapi.com/v1/current.json?key=075939c0171443a3808220948210707&q=${latitude},${longitude}&aqi=no`)
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data)
		})
		.catch((e) => {
			console.log('Este es el error en el catch', e.message)
		})
});
