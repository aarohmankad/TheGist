
$("#submit").on('click', function () {
	getNews();
});

function callback(data) 
{

	// Length is 0-24

	var links = data.results.links;
	
	// Debugging purposes
	// console.log(links);


	for (var i = 0; i < links.length; i++) {
		
		// Header
		$(".row" + (i+1)).find("#article-name").html(links[i].title.text);

		// Link to Reddit Article
		$(".row" + (i+1)).find("#article-link").attr("href", links[i].title.href);

		// Submitters Profile
		$(".row" + (i+1)).find("#username").html("by " + links[i].submitter.text);

		// Link to submitters profile
		$(".row" + (i+1)).find("#username-link").attr("href", links[i].submitter.href);

		// Show number of comments
		$(".row" + (i+1)).find("#comment-num").html(links[i].numComments.text);

		// Link to comments
		$(".row" + (i+1)).find("#username-link").attr("href", links[i].numComments.href);		
	};
}

function getNews () {	
	$.ajax
	({
		"url":"http://www.kimonolabs.com/api/42h5m2oy?apikey=73388f3a9262f1c93b0116ffed06c96a&kimpath2=" + $("#subreddit").val() + "&callback=callback",
		"crossDomain":true,
		"dataType":"jsonp"
	});
}