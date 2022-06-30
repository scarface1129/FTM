const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coingecko.p.rapidapi.com/coins/bitcoin-cash/history?date=11-11-2021",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "fea82aca20msh09e0680190c7a7ep178f22jsna58827443fdf"
	}
};


collectible = ['']

$.ajax(settings).done(function (response) {
	console.log(response.market_data);
});