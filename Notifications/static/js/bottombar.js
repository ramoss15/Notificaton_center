var request;

$(document).ready(function(){
	var footer=$(".bottombar");
	$(".bottombar .bottombar_nav .nav_col").click(function(e){
		$(this).toggleClass("open");
	});
	$(".bottombar .bottombar_nav a").click(function(e){
		e.stopPropagation()
	});
});