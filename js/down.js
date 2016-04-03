
$(document).ready(function(){
	//Change text to 'close' after fully collasping, + automatic scrollto
	$('.collapse').on("shown.bs.collapse", function () {
	    $('html, body').animate({
	        scrollTop: $('.scroll_to').offset().top
	    }, 'slow');
		$('.btn-main').text("Close");
	});
	//Vice-versa here
	$('.collapse').on("hidden.bs.collapse", function () {
		$('.btn-main').text("Show Featured Work"); 
	});
});