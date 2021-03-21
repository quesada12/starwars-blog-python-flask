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
			favorites: [],
			data: [],
			species: [
				{
					classification: "mammal",
					designation: "sentient",
					average_height: "180",
					average_lifespan: "120",
					hair_colors: "blonde, brown, black, red",
					skin_colors: "caucasian, black, asian, hispanic",
					eye_colors: "brown, blue, green, hazel, grey, amber",
					homeworld: "https://www.swapi.tech/api/planets/1",
					language: "Galactic Basic",
					people: [
						"https://www.swapi.tech/api/people/66",
						"https://www.swapi.tech/api/people/67",
						"https://www.swapi.tech/api/people/68",
						"https://www.swapi.tech/api/people/74"
					],
					created: "2021-03-20T19:22:54.404Z",
					edited: "2021-03-20T19:22:54.404Z",
					name: "Human",
					url: "https://www.swapi.tech/api/species/1"
				}
			],
			films: [
				{
					characters: [
						"https://www.swapi.tech/api/people/1",
						"https://www.swapi.tech/api/people/2",
						"https://www.swapi.tech/api/people/3",
						"https://www.swapi.tech/api/people/4",
						"https://www.swapi.tech/api/people/5",
						"https://www.swapi.tech/api/people/6",
						"https://www.swapi.tech/api/people/7",
						"https://www.swapi.tech/api/people/8",
						"https://www.swapi.tech/api/people/9",
						"https://www.swapi.tech/api/people/10",
						"https://www.swapi.tech/api/people/12",
						"https://www.swapi.tech/api/people/13",
						"https://www.swapi.tech/api/people/14",
						"https://www.swapi.tech/api/people/15",
						"https://www.swapi.tech/api/people/16",
						"https://www.swapi.tech/api/people/18",
						"https://www.swapi.tech/api/people/19",
						"https://www.swapi.tech/api/people/81"
					],
					planets: [
						"https://www.swapi.tech/api/planets/1",
						"https://www.swapi.tech/api/planets/2",
						"https://www.swapi.tech/api/planets/3"
					],
					starships: [
						"https://www.swapi.tech/api/starships/2",
						"https://www.swapi.tech/api/starships/3",
						"https://www.swapi.tech/api/starships/5",
						"https://www.swapi.tech/api/starships/9",
						"https://www.swapi.tech/api/starships/10",
						"https://www.swapi.tech/api/starships/11",
						"https://www.swapi.tech/api/starships/12",
						"https://www.swapi.tech/api/starships/13"
					],
					vehicles: [
						"https://www.swapi.tech/api/vehicles/4",
						"https://www.swapi.tech/api/vehicles/6",
						"https://www.swapi.tech/api/vehicles/7",
						"https://www.swapi.tech/api/vehicles/8"
					],
					species: [
						"https://www.swapi.tech/api/species/1",
						"https://www.swapi.tech/api/species/2",
						"https://www.swapi.tech/api/species/3",
						"https://www.swapi.tech/api/species/4",
						"https://www.swapi.tech/api/species/5"
					],
					created: "2021-03-20T19:22:54.375Z",
					edited: "2021-03-20T19:22:54.375Z",
					producer: "Gary Kurtz, Rick McCallum",
					title: "A New Hope",
					episode_id: 4,
					director: "George Lucas",
					release_date: "1977-05-25",
					opening_crawl:
						"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
					url: "https://www.swapi.tech/api/films/1"
				}
			]
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
				let total = 0;
				await fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => (total = data.total_records))
					.catch(err => console.error(err));

				let characters = [];
				for (let i = 1; i <= total; i++) {
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
				const store = getStore();
				let data = store.data;
				let element = {};
				characters.forEach((character, index) => {
					element = {
						label: character.name,
						value: "/character/" + index
					};
					data.push(element);
				});
				setStore({ data: data });
				console.log(store.data);
				setStore({ characters: characters });
			},
			loadPlanets: async () => {
				let total = 0;
				await fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => (total = data.total_records))
					.catch(err => console.error(err));

				let planets = [];
				for (let i = 1; i <= total; i++) {
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
				const store = getStore();
				let data = store.data;
				let element = {};
				planets.forEach((planet, index) => {
					element = {
						label: planet.name,
						value: "/planet/" + index
					};
					data.push(element);
				});
				setStore({ data: data });
				setStore({ planets: planets });
			},

			loadSpecies: async () => {
				let total = 0;
				await fetch("https://www.swapi.tech/api/species")
					.then(res => res.json())
					.then(data => (total = data.total_records))
					.catch(err => console.error(err));

				let species = [];
				for (let i = 1; i <= total; i++) {
					await fetch("https://www.swapi.tech/api/species/" + i)
						.then(res => res.json())
						.then(
							data =>
								data.result.properties != undefined
									? species.push(data.result.properties)
									: console.log("Undefined")
						)
						.catch(err => console.error(err));
				}
				const store = getStore();
				let data = store.data;
				let element = {};
				species.forEach((specie, index) => {
					element = {
						label: specie.name,
						value: "/specie/" + index
					};
					data.push(element);
				});
				setStore({ data: data });
				setStore({ species: species });
			},

			loadFilms: async () => {
				let films = [];
				for (let i = 1; i <= 6; i++) {
					await fetch("https://www.swapi.tech/api/films/" + i)
						.then(res => res.json())
						.then(
							data =>
								data.result.properties != undefined
									? films.push(data.result.properties)
									: console.log("Undefined")
						)
						.catch(err => console.error(err));
				}
				const store = getStore();
				let data = store.data;
				let element = {};
				films.forEach((film, index) => {
					element = {
						label: "Episode " + film.episode_id + ": " + film.title,
						value: "/film/" + index
					};
					data.push(element);
				});
				setStore({ data: data });
				setStore({ films: films });
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
			lookCharacters: urlList => {
				let result = [];
				const store = getStore();
				for (let i = 0; i < store.characters.length; i++) {
					urlList.forEach((element, index) => {
						if (store.characters[i].url === element) {
							let character = {
								name: store.characters[i].name,
								index: i
							};
							result.push(character);
						}
					});
				}
				return result;
			},
			lookPlanets: urlList => {
				let result = [];
				const store = getStore();
				for (let i = 0; i < store.planets.length; i++) {
					urlList.forEach((element, index) => {
						if (store.planets[i].url === element) {
							let planet = {
								name: store.planets[i].name,
								index: i
							};
							result.push(planet);
						}
					});
				}
				return result;
			},
			lookSpecies: urlList => {
				let result = [];
				const store = getStore();
				for (let i = 0; i < store.species.length; i++) {
					urlList.forEach((element, index) => {
						if (store.species[i].url === element) {
							let specie = {
								name: store.species[i].name,
								index: i
							};
							result.push(specie);
						}
					});
				}
				return result;
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
