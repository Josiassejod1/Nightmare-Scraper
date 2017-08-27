var jquery = require('jquery');
var Nightmare = require('nightmare');

	nightmare = Nightmare()

//using command line
//var city = process.argv[2]


nightmare.goto('https://newjersey.craigslist.org/search/eng')
	.wait(2000)
	.evaluate(function(){
		var gigs = [];
		$('.result-title').each(function(){
			item ={}
			item['title'] = $(this).text()
			item['link'] = $(this).attr("href")
			gigs.push(item)
		})
		return gigs
	})
	.end()
	.then(function(result){
		for(gig in result){
			console.log(result[gig].title)
			console.log(result[gig].link)
			console.log("\n")
		}
	})