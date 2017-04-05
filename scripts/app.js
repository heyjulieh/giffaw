$(document).on("ready", function(){

  $("form").on("submit", function(e) {
     e.preventDefault();
     showGifGallery();
  });
});
function showGifGallery(){
  $.ajax({
  	// What kind of request
  	method: "GET",

  	// The URL for the request
  	url: "http://api.giphy.com/v1/gifs/trending",

  	// The data to send aka query parameters
  	datatype: 'json',

    data: $("form").serialize(),

  	// Code to run if the request succeeds;
  	// the response is passed to the function
  	success: onSuccess,

  	// Code to run if the request fails; the raw request and
  	// status codes are passed to the function
  	error: onError
  });
}

function onSuccess(results) {
$(".gif-img").remove();
results.data.forEach(function(k,i){
  $(".gif-gallery").append($("<img src="+k.images.fixed_height.url+">"));
});
}

  function onError(xhr, status, errorThrown) {
  	alert("Sorry, there was a problem!");
  	console.log("Error: " + errorThrown);
  	console.log("Status: " + status);
  	console.dir(xhr);
  }
