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
