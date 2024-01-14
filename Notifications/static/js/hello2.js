
var width = parseInt($(document).width());
var height = parseInt($(document).height());
var request_paginate;
var request_expand_image;




var request, set, width = parseInt(document.width), pos = 0, margin_left = 0, margin_left1 = 0, timer, typecount = 0, fbconvo, scrolled = false, lastscroll = 0, startzone_selected = false, endzone_selected = false;

var zone_options;

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

$(document).ready(function(){

$(".hello_why_outer").height($(".hello_why").outerHeight());
//$(".hello_why_outer div.stripes").height($(".hello_why div.heading").outerHeight()+2.5*parseInt($(".hello_why").css('padding-top')));
//$(".hello_how_outer").height($(".hello_how").outerHeight() + 250);


  zone_options = JSON.parse($(".hello_pricing").attr('data-zones'));



//  
//  

	
	$('.tipsy1').tipsy({gravity: 'nw', fade: true, live: true});

  
  var cabroute_html1 = '<div class="border-box clearfix routebox card bgwhite"><h3 class="routename heading1 colorprim900span uppercased"></h3><div class="border-box clearfix"><div class="border-box clearfix title blackspan4 weight400"><i class="fa fa-home"></i> HOME</div><div class="border-box clearfix content blackspan7 weight300 start_zones"></div><div class="border-box clearfix title blackspan4 weight400"><i class="fa fa-building"></i> WORKPLACE</div><div class="border-box clearfix content blackspan7 weight300 end_zones"></div><div class="border-box clearfix title1 blackspan4 weight400"><i class="fa fa-clock-o"></i> Reach workplace at <span class="colorprim500span start_time"></span></div><div class="border-box clearfix title1 blackspan4 weight400"><i class="fa fa-clock-o"></i> Leave workplace at <span class="colorprim500span end_time"></span></div><div class="border-box clearfix title1 whitespan weight700"><i class="fa fa-taxi"></i> <span class="seats"></span> available</div><div class="border-box clearfix footer"><div class="border-box blackspan4"><i class="fa fa-tag"></i> <span class="colorprim500span"><i class="fa fa-inr"></i> <span class="fare"></span></span> per month <span class="colorprim500span reverse"></span></div><div class="border-box"><button class="btn btn_small btn_outline btn_transparent btncolorprim btnroutesignup" data-type="';

  var cabroute_html2 = '">Sign up</button></div></div></div></div>';

  $(".btnroutesignup").live('click', function(){
    window.location.replace('https://derbii.com/invite/signup');
  });

 /* for (i in cabroute_options){
//    
    $(".hello_routesmap .main").append(cabroute_html1+cabroute_options[i].id+cabroute_html2);
    var new_div = $(".hello_routesmap .main").children().eq(i);
    if (i==0){
//      new_div.addClass("active");
    }

    var start_zones = "";
    var end_zones = "";

//    

    for(j in zone_options){
//      
      if (zone_options[j].subarea__id == cabroute_options[i].start_subarea_id){
        start_zones+=zone_options[j].name + ", ";
      }
      if (zone_options[j].subarea__id == cabroute_options[i].end_subarea_id){
        end_zones+=zone_options[j].name + ", ";
      }
    }

//    
//    

    new_div.find('.start_zones').html(start_zones.substring(0, start_zones.length - 2));
    new_div.find('.end_zones').html(end_zones.substring(0, end_zones.length - 2));

    new_div.find('.routename').html(cabroute_options[i].start_subarea_name+" to " +cabroute_options[i].end_subarea_name);
    new_div.find('.start_time').html(cabroute_options[i].start_time);
    new_div.find('.end_time').html(cabroute_options[i].end_time);
    var seats = (cabroute_options[i].seats == 100) ? "8+" : cabroute_options[i].seats;
    new_div.find('.seats').html((seats == 1) ? seats+" seat" : seats+" seats");
    new_div.find('.fare').html(cabroute_options[i].fare);
    new_div.find('.reverse').html(cabroute_options[i].reverse ? "both ways" : "one way");


    
  }

  $(".hello_routesmap > div div.upper > div.main div.routebox").width(0.8*$(".hello_routesmap > div div.upper").width());
  $(".hello_routesmap > div div.upper > div.main div.routebox+div.routebox").css({'margin-left': 0.1*$(".hello_routesmap > div div.upper").width()});
  $(".hello_routesmap > div div.upper > div.main").height($(".hello_routesmap > div div.upper > div.main div.routebox").outerHeight()+50);
*/
  

  $(".routebox").on('click', function(e){
    if (!$(this).hasClass('active')){
//      $('.routebox.active').removeClass('active');
//      $(this).addClass('active');
      
//      curveMarkers[$(this).index].setMap(map);
    }
  });
	
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
  $("#routesbtn").on('click', function(e){
    if(!how_animating){
      how_animating = true;
      $('html, body').animate({
          scrollTop: $("div.hello_routesmap").offset().top - $(".topbar").height()
      }, 500, function(){how_animating = false});
    }
  });

	
/*	$(".hello_header > div+div > div.lower > div").on('click', function(e){
		$('html, body').animate({
	        scrollTop: $("div.hello_header+div").offset().top - $(".topbar").height()
	    }, 500);
	});*/


	function nexthow(pos, time){
		
		setTimeout(function(){
			$(".hello_how div.carousel_inner").animate({left: -(((pos == 4) ? 0 : pos+1)/5*$(".hello_how div.carousel_inner").outerWidth())}, 2000);
			$(".hello_how > div > div.right > div").eq(pos).fadeOut(1000, function() {
				$(".hello_how > div > div.right > div").eq((pos == 4) ? 0 : pos+1).css('display', 'flex').hide().fadeIn(1000, function() {
					
				});
			});
		}, time);
		
	}


	$("#showhow").on('click', function(e){
//		$(".hello_how > div > div.right > div").eq(0).slideUp(500, function() {});
		$(".hello_how div.carousel_inner").animate({left: -(0.2*$(".hello_how div.carousel_inner").outerWidth())}, 2000);
		$(".hello_how > div > div.right > div").eq(0).fadeOut(1000, function() {
			$(".hello_how > div > div.right > div").eq(1).css('display', 'flex').hide().fadeIn(1000, function() {
				
			});
		});

/*		nexthow(1,4000);
		nexthow(2,8000);
		nexthow(3,12000);
		nexthow(4,16000);*/
	});

  $(".buttonalt.next").on('click', function(e){
    var pos = parseInt($(this).attr('data-pos'));
    $(".hello_how div.carousel_inner").animate({left: -(((pos == 4) ? 0 : pos+1)/5*$(".hello_how div.carousel_inner").outerWidth())}, 1000);
      $(".hello_how > div > div.right > div").eq(pos).fadeOut(500, function() {
        $(".hello_how > div > div.right > div").eq((pos == 4) ? 0 : pos+1).css('display', 'flex').hide().fadeIn(500, function() {
          
        });
      });
  });

  $(".buttonalt.back").on('click', function(e){
    var pos = parseInt($(this).attr('data-pos'));
    $(".hello_how div.carousel_inner").animate({left: -((pos-1)/5*$(".hello_how div.carousel_inner").outerWidth())}, 1000);
      $(".hello_how > div > div.right > div").eq(pos).fadeOut(500, function() {
        $(".hello_how > div > div.right > div").eq(pos-1).css('display', 'flex').hide().fadeIn(500, function() {
          
        });
      });
  });


var iScrollPos = 0;


/*
$(document).scroll(function() {
  var iCurScrollPos = $(this).scrollTop();
  if(!how_animating){
    $(".hello_how > div > div.right > div:not(.highlight)").each(function() {

      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).outerHeight();

      if (iCurScrollPos > iScrollPos) {
        if ((elemTop < docViewBottom) && (elemTop > docViewTop) && $(this).index() != 0) {
          
          how_animating = true;
          $("body").animate({ scrollTop: $(this).offset().top }, 500, function(){
            $(".hello_how > div > div.right > div.highlight").removeClass("highlight");
            $(this).addClass("highlight");
            how_animating = false;
          });
          return false;
        }    
      } else if (iCurScrollPos < iScrollPos){
         if ((elemBottom < (docViewBottom)) && (elemBottom > (docViewTop))  && $(this).index() != 4) {
          
          how_animating = true;
          $("body").animate({ scrollTop: $(this).offset().top }, 500, function(){
            $(".hello_how > div > div.right > div.highlight").removeClass("highlight");
            $(this).addClass("highlight");
            how_animating = false;
          });
          return false;
        } 
      }
        
    });
  }
   iScrollPos = iCurScrollPos;
});*/
  
  

/*  var checkscroll = function(elem){
    

  }​;*/


var how_position = 0;

var how_height = $(".hello_how").outerHeight();

	$(window).scroll(function() {
    var wS = $(this).scrollTop();/*
    if ($(window).scrollTop() > $(".hello_how").offset().top && $(window).scrollTop() <= $(".hello_how > div > div.right > div:last-child").offset().top) {
      $(".hello_how > div > div.left").css({position: 'fixed', left: $('.hello_how').css('padding-left'), top:'0', bottom:'auto', width: $(".hello_how").width()/2});

      var childHeight = $(".hello_how > div > div.right > div:last-child").outerHeight();
      var innerScroll = $(this).scrollTop() - $(".hello_how").offset().top;
      how_position = Math.floor(innerScroll/childHeight);
      var how_mod = innerScroll%childHeight;

      var factor = innerScroll/$(".hello_how").outerHeight();
      $(".hello_how div.carousel_inner").css({left: -(factor*$(".hello_how div.carousel_inner").outerWidth())});

      var iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos > iScrollPos) {
        
      } else {
      	
      }

      iScrollPos = iCurScrollPos;
    }else {
      if ($(window).scrollTop() > $(".hello_how > div > div.right > div:last-child").offset().top) {

        $(".hello_how > div > div.left").css({position: 'absolute', left:'0', top:'auto', bottom:'0', width:$(".hello_how").width()/2});

        $(".hello_how div.carousel_inner").css({left: -0.8*$(".hello_how div.carousel_inner").outerWidth()});

        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            
        } else {
          
        }
        iScrollPos = iCurScrollPos;
      }else{
        $(".hello_how > div > div.left").css({position: 'absolute', left:'0', top:'0', bottom:'auto', width:$(".hello_how").width()/2});

        $(".hello_how div.carousel_inner").css({left: '0'});

        if ($(window).scrollTop() > 0 && scrolleddown) {
        }else{
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
          
        } else {
        }
        iScrollPos = iCurScrollPos;
          
        }
      }
    }*/

/*		if(wS > lastscroll && wS > 0 && wS < ($("div.hello_header+div").offset().top - $(".topbar").height())){
			
			disableScroll();
			$('html, body').animate({
	        	scrollTop: $("div.hello_header+div").offset().top - $(".topbar").height()
	    	}, 500, function(){
	    		enableScroll();
	    	});
		}
		if(wS < lastscroll && wS <= ($("div.hello_header+div").offset().top - $(".topbar").height()) && wS > 0){
			
			disableScroll();
			$('html, body').animate({
	        	scrollTop: 0
	    	}, 500, function(){
	    		enableScroll();
	    	});
		}*/
/*	   var hT = $(".hello_how div.fbconvoboxinput").offset().top,
	       hH = $(".hello_how div.fbconvoboxinput").outerHeight(),
	       wH = $(window).height(),
	       wS = $(this).scrollTop();
	   if (wS > (hT - wH) && wS < (hT - 200)){
	   		if(!scrolled){
		   		scrolled = true;
				timerconvo = setTimeout(fbconvo, 200);
	   		}
	   }else{
	   		scrolled = false;
	   		clearInterval(timertype);
			clearTimeout(timerconvo);
	   }*/
	   lastscroll = wS;
	});




  
  $("input[name=start_zone]").autocomplete({
    minLength: 0,
  source: function( request, response ) {
//    
    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response($.grep(zone_options, function(value) {
            return matcher.test(value.name);
    }));
/*    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
    response($.grep(zone_options, function (value) {
      return matcher.test(value.name);
    }));*/
  },
    create: function() {
//        rthat.val(zone_options.name);
    },
    focus: function(event, ui) {
//        rthat.val(ui.item.name);
        return false;
    },
    select: function(event, ui) {
//    if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//    else{rthat.val( ui.item.address );}
    startzone_selected = true;
    enableCalcBtn();
    $(this).val( ui.item.name );
//    rthat.siblings().val(ui.item.id);
    return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//  var lstr = item.name+' - '+item.address;
//  var lsubstr = lstr.substring(0,50)+'...';
//  var lsubstr = item.name.substring(0,50)+'...';
  var lsubstr = item.name;
    return $('<li>')
        .data('item.autocomplete', item)
        .append('<a>'+
          lsubstr +'</a>')
        .appendTo(ul);
};


  $("input[name=end_zone]").autocomplete({
    minLength: 0,
  source: function( request, response ) {
//    
    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response($.grep(zone_options, function(value) {
//      
            return matcher.test(value.name);
    }));
/*    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
    response($.grep(zone_options, function (value) {
      return matcher.test(value.name);
    }));*/
  },
    create: function() {
//        rthat.val(zone_options.name);
    },
    focus: function(event, ui) {
//        rthat.val(ui.item.name);
        return false;
    },
    select: function(event, ui) {
//    if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//    else{rthat.val( ui.item.address );}
    endzone_selected = true;
    enableCalcBtn();
    $(this).val( ui.item.name );
//    rthat.siblings().val(ui.item.id);
    return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//  var lstr = item.name+' - '+item.address;
//  var lsubstr = lstr.substring(0,50)+'...';
//  var lsubstr = item.name.substring(0,50)+'...';
  var lsubstr = item.name;
    return $('<li>')
        .data('item.autocomplete', item)
        .append('<a>'+
          lsubstr +'</a>')
        .appendTo(ul);
};

  var enableCalcBtn = function(){
    if ($.trim($("input[name=start_zone]").val()) != '' && $.trim($("input[name=end_zone]").val()) != ''){
      $("#calcbtn").removeAttr('disabled');  
    }else{
      $("#calcbtn").attr('disabled', 'disabled');
    }
  };
  
  $('input[name=start_zone]').change(function () {
    startzone_selected = false;
    enableCalcBtn();
  });
  $('input[name=end_zone]').change(function () {
    endzone_selected = false;
    enableCalcBtn();
  });
  $('input[name=start_zone]').keyup(function (e) {
    if(e.which != 13) {startzone_selected = false;enableCalcBtn();}
  });
  $('input[name=end_zone]').keyup(function (e) {
    if(e.which != 13) {endzone_selected = false;enableCalcBtn();}
  });



  $("#calcbtn").on('click', function(e){
    
//    e.preventDefault();
    var that;
    var that1=$(this);
//    if($(".formerrors").offset()){$(".formerrors").remove();}
//    $(".account_header div p.error").hide();
      that=$(this);
        var startzone = $("input[name=start_zone]");
        var endzone = $("input[name=end_zone]");
        
        $('.calcpricespan').text('Working');
        
        if ($.trim(startzone.val()) != '' && $.trim(endzone.val()) != ''){
          request=$.post("https://derbii.com/ajax/pricing/calculate", { 
            reason: "form",
            start_area: startzone.val(),
            end_area: endzone.val(),
          },
          function(data) {
            if (data.status == "success"){
//              mixpanel.track("privatesignuppagesuccess");
              
              $('.calcpricespan').html('<i class="fa fa-inr"></i> '+Math.round(data.pricing_monthly));

            }else{
//              $('.calcpricespan').text('Failure');
/*              that1.text('Sign up');
              if(data.reason == "exists_email"){
                $(".account_header div p.error").text("The email you provided is already registered with us. We'll contact you once we're ready to go live.").show();
              }
              if(data.reason == "exists_phone"){
                $(".account_header div p.error").text("The phone number you provided is already registered with us. We'll contact you once we're ready to go live.").show();
              }
              if(data.reason == "other"){
                $(".account_header div p.error").text("There was a problem while signing you up. Our servers seem to be overloaded. Please try again in a while.").show();
              }
              if(data.reason == "no_cookies"){
                $(".account_header div p.error").text("Your web browser does not appear to have cookies enabled. Cookies are required for signin up with Derbii.").show();
              }*/
            }
          });
            
          
            
          }
        else{
/*          if ($.trim(email.val()) == ''){
            $('<div class="formerrors">Please enter your email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
          }
          else if (email.val().length >=250){
            $('<div class="formerrors">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
          }*/
          
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