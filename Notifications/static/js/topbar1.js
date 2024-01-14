$(document).ready(function(){
//var is_ssb=window.macgap||window.winssb;
	$("nav .mobile_menu_btn").click(function(e){
		var $el=$(e.currentTarget);
		e.preventDefault();
		$("body").toggleClass("show_mobile_nav");
		return
		/*if(is_ssb&&$el.attr("target")){
			$("body").removeClass("show_mobile_nav")
		}*/
	});

	$("nav.mobile_menu a").click(function(e){
		var $el=$(e.currentTarget);
		if($el.hasClass("close")){
			e.preventDefault();
		}
		$("body").toggleClass("show_mobile_nav");
		return
		/*if(is_ssb&&$el.attr("target")){
			$("body").removeClass("show_mobile_nav")
		}*/
	});
});