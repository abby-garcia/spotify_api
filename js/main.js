

// showInfo function - this will show the information
//getInfo function - this will get the information
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getInfo(query);
  });
});

// we need to get the id! 


function getInfo(query){
	var params ={
		id: 'artists.id'
	};
	url ="https://api.spotify.com/v1/artists/" + id + "related-artists";

	$.getJSON(url, params, function(data){
		console.log(data);
    	showInfo(data.artists);
  	});
}

function showInfo(results){
	var html ="";
	$.each(results,function(value){
		console.log(value.artists.url);
		html += '<p>' + value.artists + '</p>';
 });
  $('#newArtists').html(html);
}

// for class  artists.name
// for picture artists.images.url
// for link 
