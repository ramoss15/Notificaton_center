
var width = parseInt($(document).width());
var height = parseInt($(document).height());
var request_paginate;
var request_expand_image;

var NCR_LOWERLEFT_LAT = 27.965;
var NCR_LOWERLEFT_LNG = 76.7756;
var NCR_UPPERRIGHT_LAT = 28.854;
var NCR_UPPERRIGHT_LNG = 77.75;



var request, set, width = parseInt(document.width), pos = 0, margin_left = 0, margin_left1 = 0;
var timer, typecount = 0, fbconvo, scrolled = false, lastscroll = 0;

var request, pickupzone_selected = false, dropzone_selected=false, place1, place2, pickupzone_id, dropzone_id;

var placeSearch, autocomplete1, autocomplete2;

var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(27.965, 76.7756),
  new google.maps.LatLng(28.854, 77.75));



var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}





function fillInAddress1() {
        // Get the place details from the autocomplete object.
        place1 = autocomplete1.getPlace();

        
        
        

        pickupzone_selected = true;
      }

function fillInAddress2() {
        // Get the place details from the autocomplete object.
        place2 = autocomplete2.getPlace();

        
        
        

        dropzone_selected = true;
      }





$(document).ready(function(){

$(".hello_why_outer").height($(".hello_why").outerHeight());
//$(".hello_why_outer div.stripes").height($(".hello_why div.heading").outerHeight()+2.5*parseInt($(".hello_why").css('padding-top')));
//$(".hello_how_outer").height($(".hello_how").outerHeight() + 250);


	autocomplete1 = new google.maps.places.Autocomplete(
			(document.getElementById('zone1')),
            {bounds: defaultBounds, types: ['geocode']});
        autocomplete1.addListener('place_changed', fillInAddress1);

    autocomplete2 = new google.maps.places.Autocomplete(
			(document.getElementById('zone2')),
            {bounds: defaultBounds, types: ['geocode']});
        autocomplete2.addListener('place_changed', fillInAddress2);






//  
//  

	
	$('.tipsy1').tipsy({gravity: 'nw', fade: true, live: true});

	
	var type = 1;

  var how_animating = false;

  $("#pricingbtn").on('click', function(e){
    if(!how_animating){
      how_animating = true;
      $('html, body').animate({
          scrollTop: $("div.hello_pricing").offset().top - $(".topbar").height()
      }, 500, function(){how_animating = false});
    }
  });




var iScrollPos = 0;


  
  

/*  var checkscroll = function(elem){
    

  }​;*/


var how_position = 0;

var how_height = $(".hello_how").outerHeight();

	$(window).scroll(function() {
    var wS = $(this).scrollTop();

	   lastscroll = wS;
	});






  var enableCalcBtn = function(){
    if ($.trim($("input[name=start_zone]").val()) != '' && $.trim($("input[name=end_zone]").val()) != ''){
      $("#calcbtn").removeAttr('disabled');  
    }else{
      $("#calcbtn").attr('disabled', 'disabled');
    }
  };
  
  $('input[name=start_zone]').change(function () {
    pickupzone_selected = false;
    enableCalcBtn();
  });
  $('input[name=end_zone]').change(function () {
    dropzone_selected = false;
    enableCalcBtn();
  });
  $('input[name=start_zone]').keyup(function (e) {
    if(e.which != 13) {pickupzone_selected = false;enableCalcBtn();}
  });
  $('input[name=end_zone]').keyup(function (e) {
    if(e.which != 13) {dropzone_selected = false;enableCalcBtn();}
  });



  $("#calcbtn").on('click', function(e){
    
//    e.preventDefault();
    var that;
    var that1=$(this);
//    if($(".formerrors").offset()){$(".formerrors").remove();}
//    $(".account_header div p.error").hide();
      that=$(this);
        var pickupzone = $("input[name=start_zone]");
        var dropzone = $("input[name=end_zone]");
        
        
        if ($.trim(pickupzone.val()) != '' && $.trim(dropzone.val()) != '' && pickupzone_selected && dropzone_selected && place1 != null && place2 != null &&
        		place1.geometry.location.lat() > NCR_LOWERLEFT_LAT && place1.geometry.location.lng() > NCR_LOWERLEFT_LNG && 
        		place1.geometry.location.lat() < NCR_UPPERRIGHT_LAT && place1.geometry.location.lng() < NCR_UPPERRIGHT_LNG && 
        		place2.geometry.location.lat() > NCR_LOWERLEFT_LAT && place2.geometry.location.lng() > NCR_LOWERLEFT_LNG && 
        		place2.geometry.location.lat() < NCR_UPPERRIGHT_LAT && place2.geometry.location.lng() < NCR_UPPERRIGHT_LNG){

        	var queryString = "?pickup_address="+place1.formatted_address+"&drop_address="+place2.formatted_address;
        	queryString += "&start_lat="+place1.geometry.location.lat()+"&start_lng="+place1.geometry.location.lng();
			queryString += "&end_lat="+place2.geometry.location.lat()+"&end_lng="+place2.geometry.location.lng();

			window.location.href = "http://derbii.com/invite/signup/"+queryString;
            
          }
        else{
			if ($.trim(pickupzone.val()) == ''){
						$('<div class="formerrors">Please enter a pickup address!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if ($.trim(dropzone.val()) == ''){
						$('<div class="formerrors">Please enter a drop address!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					if (place1 == null){
						$('<div class="formerrors">Please enter a pickup address!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if (place2 == null){
						$('<div class="formerrors">Please enter a drop address!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					if (place1 != null && (place1.geometry.location.lat() <= NCR_LOWERLEFT_LAT || place1.geometry.location.lng() <= NCR_LOWERLEFT_LNG || place1.geometry.location.lat() >= NCR_UPPERRIGHT_LAT || place1.geometry.location.lng() >= NCR_UPPERRIGHT_LNG)){
						$('<div class="formerrors">Please enter a location within Delhi-NCR!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if (place2 != null && (place2.geometry.location.lat() <= NCR_LOWERLEFT_LAT || place2.geometry.location.lng() <= NCR_LOWERLEFT_LNG || place2.geometry.location.lat() >= NCR_UPPERRIGHT_LAT || place2.geometry.location.lng() >= NCR_UPPERRIGHT_LNG)){
						$('<div class="formerrors">Please enter a location within Delhi-NCR!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
          
//          that1.text('Sign up');
        }
  });



	$('input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
//		increaseArea: '20%' // optional
	});

	$('.support_main > ul > li > h4 > a').on('click', function(e){
		e.preventDefault();
		$(this).parents("li").toggleClass('expanded');
		$(this).find('.fa').toggleClass('fa-plus-square-o').toggleClass('fa-minus-square-o');
	});




//    clearTimeout(timer);

});