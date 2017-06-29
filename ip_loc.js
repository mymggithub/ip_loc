$.get('http://jsonip.com/', function(r){
	query = encodeURI("select * from html where url='http://whatismyipaddress.com/ip/"+r.ip+"'");
	url = "https://query.yahooapis.com/v1/public/yql?q="+query;
	$.ajax({
		url:url,
		success:function(r){
			Country = $(r).find("th:contains('Country')").next("td").text().trim();
			State = $(r).find("th:contains('State/Region')").next("td").text().trim();
			City = $(r).find("th:contains('City')").next("td").text().trim();
			Lat = $(r).find("th:contains('Latitude')").next("td").text().trim().split("(")[0].trim();
			Long = $(r).find("th:contains('Longitude')").next("td").text().trim().split("(")[0].trim();
			console.log(Country);
			console.log(State);
			console.log(City);
			console.log(Lat);
			console.log(Long);
		}
	});
});
