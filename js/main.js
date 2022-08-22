//Get quote API - Inspire API
document.querySelector(".btn-quote").addEventListener("click", getQuote);

function getQuote() {
	const url = `https://api.goprogram.ai/inspiration`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((response) => {
			console.log(response);
			document.querySelector(".quote").innerText = response.quote;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
//Get dog API - The Dog API
document.querySelector(".btn-dog").addEventListener("click", getDog);

function getDog() {
	const url = `https://api.thedogapi.com/v1/images/search?x-api-key=live_yGGMgLaViMEb5L8FpzQWxu1yZDqLHCZblYXpBsMUbzb8dX5o85nFoGxErjxcRVwL`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((response) => {
			console.log(response);
			document.querySelector(".dog").src = response[0].url;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
