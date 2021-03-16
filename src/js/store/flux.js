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
			cards: [
				{
					name: "Luke Skywalker",
					image:
						"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
				},
				{
					name: "Luke Skywalker",
					image:
						"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
				},
				{
					name: "Luke Skywalker",
					image:
						"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
				},
				{
					name: "Luke Skywalker",
					image:
						"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
				},
				{
					name: "Luke Skywalker",
					image:
						"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
				},
				{
					name: "Luke Skywalker",
					image:
						"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=1536",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu orci cursus faucibus. Mauris purus ligula"
				}
			],
			people: []
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

				fetch("https://swapi.dev/api/people", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => setStore({ people: data.results }))
					.catch(error => console.log("error", error));
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
			}
		}
	};
};

export default getState;
