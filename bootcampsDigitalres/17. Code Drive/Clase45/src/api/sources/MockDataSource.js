import DataSource from "./DataSource";

/**
 * Datos de prueba
 */
export default class MockDataSource extends DataSource {
	source() {
		return {
			users: [
				{
					id: 1,
					username: "Pol",
					password: "1234",
					email: "pol@gmail.com",
				},
				{
					id: 2,
					username: "Merlí",
					password: "1234",
					email: "merli@gmail.com",
				},
				{
					id: 3,
					username: "Bruno",
					password: "1234",
					email: "bruno@gmail.com",
				},
			],
			products: [
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
			],
		};
	}

	async all(resource) {
		return this.source()[resource];
	}
}
