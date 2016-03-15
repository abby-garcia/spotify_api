

// showInfo function - this will show the information
//getInfo function - this will get the information
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});


function getInfo(query){
	var params ={
		id: // what do I put there?
	};
	url ="https://api.spotify.com/v1/artists/" + id + "related-artists";

	$.getJSON(url, params, function(data){
		console.log(data);
    	showResults(data.artists);
  	});


};

function showInfo(results){
	var html ="";
	$.each(results,function(){
		console.log(  artists.url)

	}

}
