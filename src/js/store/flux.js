const getState = ({ getStore, getActions, setStore }) => {
	const api_url_base = "https://3000-white-macaw-83vb2z62.ws-us03.gitpod.io";
	return {
		store: {
			api_url: "https://3000-white-macaw-83vb2z62.ws-us03.gitpod.io",
			characters: [],
			planets: [],
			favorites: [],
			data: [],
			species: [],
			films: [],
			login: sessionStorage.getItem("login")
		},
		actions: {
			// Use getActions to call a function within a fuction
			createSessionStorage_vars: () => {
				sessionStorage.setItem("login", "false");
				sessionStorage.setItem("user", "1");
			},

			loadCharacters: async () => {
				let characters = [];
				await fetch(api_url_base + "/character", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
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
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
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
				let species = [];
				await fetch(api_url_base + "/specie", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
				})
					.then(res => res.json())
					.then(data => (species = data))
					.catch(err => console.error(err));

				const store = getStore();
				let data = store.data;
				let element = {};
				species.forEach((specie, index) => {
					element = {
						label: specie.name,
						value: "/specie/" + specie.id
					};
					data.push(element);
				});
				setStore({ data: data });
				setStore({ species: species });
			},

			loadFilms: async () => {
				let films = [];
				await fetch(api_url_base + "/film", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
				})
					.then(res => res.json())
					.then(data => (films = data))
					.catch(err => console.error(err));

				const store = getStore();
				let data = store.data;
				let element = {};
				films.forEach((film, index) => {
					element = {
						label: "Episode " + film.episode_id + ": " + film.title,
						value: "/film/" + film.id
					};
					data.push(element);
				});
				setStore({ data: data });
				setStore({ films: films });
			},
			setLogin: i => {
				setStore({ login: i });
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
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
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
			cleanFavorites: () => {
				const store = getStore();
				const favorites = [];
				setStore({ favorites: favorites });
			},
			updateLogin: () => {
				const store = getStore();
				const login = sessionStorage.getItem("login");
				setStore({ login: login });
			},
			deleteFavorite: async favorite => {
				const store = getStore();
				let id_to_delete = "";
				await fetch(store.api_url + "/favorite", {
					method: "POST",
					body: JSON.stringify(favorite),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					}
				})
					.then(res => res.json())
					.then(data => (id_to_delete = data.id))
					.catch(err => console.error(err));

				let result = false;
				await fetch(store.api_url + "/favorite/" + id_to_delete, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
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
