var request, request_hovercard, searchbarselected;

$(document).ready(function(){

	$(".personalroutecontact1").live('click', function(){
//		if($(this).parents().eq(2) == $("#topbarinnerdropdownrides")){
//		}
//		if($("#fullscreenpopup").css('display') == 'none' || (typeof $(this).attr('data-another') !== 'undefined' && $(this).attr('data-another') !== false)){
			var popup = $("#fullscreenpopupcontentmain");
			$("#fullscreenpopup").show();
			var request1=$.post('https://winwinride.com/ajax/getcontact',
				{
					object_id:$(this).attr('data-personalroute-id'),
					id:'personalroutecontact'
				},
				function(data){
					popup.html('').append(data);
					popup.css('left', (($(window).width()-popup.width())/2));
					popup.css('top', ((($(window).height()-60)-popup.height())/2));
				});	
//		}
	});
	
	$(".rideoffercontact1").live('click', function(){
//		if($(this).parents().eq(2) == $("#topbarinnerdropdownrides")){
//		}
//		if($("#fullscreenpopup").css('display') == 'none' || (typeof $(this).attr('data-another') !== 'undefined' && $(this).attr('data-another') !== false)){
			var popup = $("#fullscreenpopupcontentmain");
			$("#fullscreenpopup").show();
			var request1=$.post('https://winwinride.com/ajax/getcontact',
				{
					object_id:$(this).attr('data-rideoffer-id'),
					id:'rideoffercontact'
				},
				function(data){
					popup.html('').append(data);
					popup.css('left', (($(window).width()-popup.width())/2));
					popup.css('top', ((($(window).height()-60)-popup.height())/2));
				});	
//		}
	});
	
	$(".ridequerycontact1").live('click', function(){
//		if($(this).parents().eq(2) == $("#topbarinnerdropdownrides")){
//		}
//		if($("#fullscreenpopup").css('display') == 'none' || (typeof $(this).attr('data-another') !== 'undefined' && $(this).attr('data-another') !== false)){
			var popup = $("#fullscreenpopupcontentmain");
			$("#fullscreenpopup").show();
			var request1=$.post('https://winwinride.com/ajax/getcontact',
				{
					object_id:$(this).attr('data-ridequery-id'),
					id:'ridequerycontact'
				},
				function(data){
					popup.html('').append(data);
					popup.css('left', (($(window).width()-popup.width())/2));
					popup.css('top', ((($(window).height()-60)-popup.height())/2));
				});	
//		}
	});
	
	$(".ridecontact1").live('click', function(){
//		if($(this).parents().eq(2) == $("#topbarinnerdropdownrides")){
//		}
//		if($("#fullscreenpopup").css('display') == 'none' || (typeof $(this).attr('data-another') !== 'undefined' && $(this).attr('data-another') !== false)){
			var popup = $("#fullscreenpopupcontentmain");
			$("#fullscreenpopup").show();
			var request1=$.post('https://winwinride.com/ajax/getcontact',
				{
					object_id:$(this).attr('data-ride-id'),
					id:'ridecontact'
				},
				function(data){
					popup.html('').append(data);
					popup.css('left', (($(window).width()-popup.width())/2));
					popup.css('top', ((($(window).height()-60)-popup.height())/2));
				});	
//		}
	});
	
	$(".poolinvitecontact1").live('click', function(){
//		if($(this).parents().eq(2) == $("#topbarinnerdropdownrides")){
//		}
//		if($("#fullscreenpopup").css('display') == 'none' || (typeof $(this).attr('data-another') !== 'undefined' && $(this).attr('data-another') !== false)){
			var popup = $("#fullscreenpopupcontentmain");
			$("#fullscreenpopup").show();
			var request1=$.post('https://winwinride.com/ajax/getcontact',
				{
					object_id:$(this).attr('data-poolinvite-id'),
					id:'poolinvitecontact'
				},
				function(data){
					popup.html('').append(data);
					popup.css('left', (($(window).width()-popup.width())/2));
					popup.css('top', ((($(window).height()-60)-popup.height())/2));
				});	
//		}
	});
	
	$(".poolrequestcontact1").live('click', function(){
//		if($(this).parents().eq(2) == $("#topbarinnerdropdownrides")){
//		}
//		if($("#fullscreenpopup").css('display') == 'none' || (typeof $(this).attr('data-another') !== 'undefined' && $(this).attr('data-another') !== false)){
			var popup = $("#fullscreenpopupcontentmain");
			$("#fullscreenpopup").show();
			var request1=$.post('https://winwinride.com/ajax/getcontact',
				{
					object_id:$(this).attr('data-poolrequest-id'),
					id:'poolrequestcontact'
				},
				function(data){
					popup.html('').append(data);
					popup.css('left', (($(window).width()-popup.width())/2));
					popup.css('top', ((($(window).height()-60)-popup.height())/2));
				});	
//		}
	});
	
	$(".poolcontact1").live('click', function(){
//		if($(this).parents().eq(2) == $("#topbarinnerdropdownrides")){
//		}
//		if($("#fullscreenpopup").css('display') == 'none' || (typeof $(this).attr('data-another') !== 'undefined' && $(this).attr('data-another') !== false)){
			var popup = $("#fullscreenpopupcontentmain");
			$("#fullscreenpopup").show();
			var request1=$.post('https://winwinride.com/ajax/getcontact',
				{
					object_id:$(this).attr('data-pool-id'),
					id:'poolcontact'
				},
				function(data){
					popup.html('').append(data);
					popup.css('left', (($(window).width()-popup.width())/2));
					popup.css('top', ((($(window).height()-60)-popup.height())/2));
				});	
//		}
	});
	
	
});