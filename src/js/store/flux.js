const getState = ({ getStore, getActions, setStore }) => {
	const api_url_base = "https://3000-amethyst-prawn-77yw2dsz.ws-us03.gitpod.io";
	return {
		store: {
			api_url: "https://3000-amethyst-prawn-77yw2dsz.ws-us03.gitpod.io",
			characters: [],
			planets: [],
			favorites: [],
			data: [],
			species: [],
			films: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			createSessionStorage_vars: () => {
				sessionStorage.setItem("login", "false");
				sessionStorage.setItem("user", "1");
			},
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
				await fetch(api_url_base + "/character", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => (characters = data))
					.catch(err => console.error(err));

				const store = getStore();
				let data = store.data;
				let element = {};
				characters.forEach((character, index) => {
					element = {
						label: character.name,
						value: "/character/" + character.id
					};
					data.push(element);
				});
				setStore({ data: data });
				setStore({ characters: characters });
			},
			loadPlanets: async () => {
				let planets = [];
				await fetch(api_url_base + "/planet", {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => (planets = data))
					.catch(err => console.error(err));

				const store = getStore();
				let data = store.data;
				let element = {};
				planets.forEach((planet, index) => {
					element = {
						label: planet.name,
						value: "/planet/" + planet.id
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
			setLogin: i => {
				setStore({ login: i });
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
					favorite_name: name,
					favorite_type: type,
					favorite_id: index
				};
				const store = getStore();
				const favorites = store.favorites;
				favorites.push(item);
				setStore({ favorites: favorites });
			},
			addFavoriteAPI: async (name, type, index) => {
				const store = getStore();
				let item = {
					favorite_name: name,
					favorite_type: type,
					favorite_id: index
				};
				let result = false;

				await fetch(store.api_url + "/user/" + sessionStorage.getItem("user") + "/favorites", {
					method: "POST",
					body: JSON.stringify(item),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => (result = res.ok))
					.catch(err => console.error(err));

				if (result) {
					const favorites = store.favorites;
					favorites.push(item);
					setStore({ favorites: favorites });
				}
			},
			deleteFavorite: async favorite => {
				const store = getStore();
				let id_to_delete = "";
				await fetch(store.api_url + "/favorite", {
					method: "POST",
					body: JSON.stringify(favorite),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => (id_to_delete = data.id))
					.catch(err => console.error(err));

				let result = false;
				await fetch(store.api_url + "/favorite/" + id_to_delete, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => (result = res.ok))
					.catch(err => console.error(err));

				if (result) {
					const favorites = store.favorites.filter(f => {
						return f.favorite_name != favorite.favorite_name;
					});
					setStore({ favorites: favorites });
				}
			}
		}
	};
};

export default getState;
