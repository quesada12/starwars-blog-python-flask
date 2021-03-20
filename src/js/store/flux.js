const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			characters: [
				{
					height: "167",
					mass: "75",
					hair_color: "n/a",
					skin_color: "gold",
					eye_color: "yellow",
					birth_year: "112BBY",
					gender: "n/a",
					created: "2021-03-19T18:55:40.819Z",
					edited: "2021-03-19T18:55:40.819Z",
					name: "C-3PO",
					homeworld: "https://www.swapi.tech/api/planets/1",
					url: "https://www.swapi.tech/api/people/12"
				}
			],
			planets: [
				{
					diameter: "10200",
					rotation_period: "24",
					orbital_period: "4818",
					gravity: "1 standard",
					population: "1000",
					climate: "temperate, tropical",
					terrain: "jungle, rainforests",
					surface_water: "8",
					created: "2021-03-19T18:55:40.825Z",
					edited: "2021-03-19T18:55:40.825Z",
					name: "Yavin IV",
					url: "https://www.swapi.tech/api/planets/1"
				}
			],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},

			loadCharacters: async () => {
				let characters = [];
				for (let i = 1; i < 83; i++) {
					await fetch("https://www.swapi.tech/api/people/" + i)
						.then(res => res.json())
						.then(
							data =>
								data.result.properties != undefined
									? characters.push(data.result.properties)
									: console.log("Undefined")
						)
						.catch(err => console.error(err));
				}
				setStore({ characters: characters });
			},
			loadPlanets: async () => {
				let planets = [];
				for (let i = 1; i < 61; i++) {
					await fetch("https://www.swapi.tech/api/planets/" + i)
						.then(res => res.json())
						.then(
							data =>
								data.result.properties != undefined
									? planets.push(data.result.properties)
									: console.log("Undefined")
						)
						.catch(err => console.error(err));
				}
				setStore({ planets: planets });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			lookPlanetID: url => {
				const store = getStore();

				// store.planets.filter((planet, index) => {
				// 	return planet.url == url ? index : "";
				// });

				for (let i = 0; i < store.planets.length; i++) {
					if (store.planets[i].url == url) {
						return i;
					}
				}
			},
			addFavorite: (name, type, index) => {
				let item = {
					name: name,
					type: type,
					index: index
				};
				const store = getStore();
				const favorites = store.favorites;
				favorites.push(item);
				setStore({ favorites: favorites });
			},
			deleteFavorite: index => {
				const store = getStore();
				const favorites = store.favorites.filter((f, i) => {
					return i != index;
				});
				setStore({ favorites: favorites });
			}
		}
	};
};

export default getState;
