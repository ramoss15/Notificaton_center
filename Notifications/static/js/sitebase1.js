var request, request_hovercard, searchbarselected, sidr_open = false;

var scrolleddown = false;
var iScrollPos = 0;
	$(window).scroll(function() {
         if ($(window).scrollTop() > 60 && !scrolleddown) {
			var iCurScrollPos = $(this).scrollTop();
			if (iCurScrollPos > iScrollPos) {
				scrolleddown = true;
				$(document.body).addClass('scrolleddown');
			} else {
				
			}
			iScrollPos = iCurScrollPos;
         }
         else {
			if ($(window).scrollTop() > 0 && scrolleddown) {
			}else{
			var iCurScrollPos = $(this).scrollTop();
			if (iCurScrollPos > iScrollPos) {
				
			} else {
				scrolleddown = false;
				$(document.body).removeClass('scrolleddown');
			}
			iScrollPos = iCurScrollPos;
				
			}
         }
    });

function cycleImagesFast(){
		$(".routesforwardbtn").unbind('click');
		$(".routesbackbtn").unbind('click');
      var x = parseInt($('#homemainroutesmiddle').css('margin-left'));
	  var y = 0;
	  var z = $('#firstroutebox').width();
	  var count = parseInt($('#homemainroutesmiddle').attr('data-route-count'));
	  var pos = parseInt($("#homemainroutestopright0").html());
//	  
	  if(x <= -((count-1)*z)){y = 0;}
	  else{y = x - z;}
	  $("#homemainroutesmiddle").stop().animate({'margin-left':y}, 200, 
			function(){
				if(pos != count){$("#homemainroutestopright0").html(pos+1);}else{$("#homemainroutestopright0").html(1);}
				$(".routesbackbtn").click(function(){cycleImagesFastReverse();});
				$(".routesforwardbtn").click(function(){cycleImagesFast();});
			}
		);
    }
function cycleImagesFastReverse(){
		$(".routesforwardbtn").unbind('click');
		$(".routesbackbtn").unbind('click');
      
	  var x = parseInt($('#homemainroutesmiddle').css('margin-left'));
	  var y = 0;
	  var z = $('#firstroutebox').width();
	  var count = parseInt($('#homemainroutesmiddle').attr('data-route-count'));
	  var pos = parseInt($("#homemainroutestopright0").html());
	  if(x >= 0){y = -((count-1)*z);}
	  else{y = x + z;}
	  $("#homemainroutesmiddle").stop().animate({'margin-left':y}, 200, 
			function(){
				if(pos != 1){$("#homemainroutestopright0").html(pos-1);}else{$("#homemainroutestopright0").html(count);}
				$(".routesbackbtn").click(function(){cycleImagesFastReverse();});
				$(".routesforwardbtn").click(function(){cycleImagesFast();});
			}
		);
    }


$(window).load(function() {
	$("#starter_screen").fadeOut(1000);
});

$(document).ready(function(){

	

/*	$('#topbarinnerleft').live('click', function(){
		if(sidr_open){
		 	$.sidr('close', 'sidr');
		 	sidr_open = false;
		}else{
			$.sidr('open', 'sidr');
			sidr_open = true;
		}
	});*/
	
/*	$('.sidr-menu').live('click', function(){
		if(sidr_open){
			$("#sidr-overlay").hide();
		}else{
			$("#sidr-overlay").show();
		}
	});*/

/*	$('.sidr-menu').sidr({
		renaming: false,
		source: '#sidr',
		onOpen: function() {
			sidr_open = true;
        	$("#sidr-overlay").show();
      	},
      	onClose: function() {
      		sidr_open = false;
      		$("#sidr-overlay").hide();
      	}
	});*/

	
	$(".routesbackbtn").live('click', function(){cycleImagesFastReverse();});
	$(".routesforwardbtn").live('click', function(){cycleImagesFast();});
	

	$('.tipsy1').tipsy({gravity: 'nw', fade: true, live: true});
	
	$("#fullscreendarktabclose").click(function(){
		$("#fullscreendark").hide();
	});
	
	$("#fullscreenlighttabclose").click(function(){
		$("#fullscreenlight").hide();
	});
	
	$("#topbarinnerrighttopbox5").hover(function() {
      $("#topbarinnerdropdownrides").stop().show();
	  var right5 = $("#topbarinnerrighttopbox1").width()+$("#topbarinnerrighttopbox4").width()-($("#topbarinnerrighttopbox5").width()/4);
	  $("#topbarinnerdropdownrides").css('right', right5);
	}, function(){
      $("#topbarinnerdropdownrides").stop().hide();
	});
	
	$("#topbarinnerdropdownrides").hover(function() {
	  $("#topbarinnerrighttopbox5").addClass("hovered1");
      $("#topbarinnerdropdownrides").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox5").removeClass("hovered1");
      $("#topbarinnerdropdownrides").stop().hide();
	});
	
	$("#topbarinnerrighttopbox4").hover(function() {
      $("#topbarinnerdropdownpools").stop().show();
	  var right5 = $("#topbarinnerrighttopbox1").width()-($("#topbarinnerrighttopbox4").width()/4);
	  $("#topbarinnerdropdownpools").css('right', right5);
	}, function(){
      $("#topbarinnerdropdownpools").stop().hide();
	});
	
	$("#topbarinnerdropdownpools").hover(function() {
	  $("#topbarinnerrighttopbox4").addClass("hovered1");
      $("#topbarinnerdropdownpools").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox4").removeClass("hovered1");
      $("#topbarinnerdropdownpools").stop().hide();
	});
	
	
	$("#topbarinnerrighttopbox3").hover(function() {
      $("#topbarinnerdropdownnotices").stop().show();
	  var right5 = $("#topbarinnerrighttopbox2").width()+$("#topbarinnerrighttopbox5").width()+$("#topbarinnerrighttopbox1").width()+$("#topbarinnerrighttopbox4").width() - ($("#topbarinnerdropdownnotices").width()-$("#topbarinnerrighttopbox3").width())/2;
	  $("#topbarinnerdropdownnotices").css('right', right5);
	}, function(){
      $("#topbarinnerdropdownnotices").stop().hide();
	});
	
	$("#topbarinnerdropdownnotices").hover(function() {
	  $("#topbarinnerrighttopbox3").addClass("hovered1");
      $("#topbarinnerdropdownnotices").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox3").removeClass("hovered1");
      $("#topbarinnerdropdownnotices").stop().hide();
	});
	
	
	$("#topbarinnerrighttopbox2").hover(function() {
      $("#topbarinnerdropdownmessages").stop().show();
	  var right5 = $("#topbarinnerrighttopbox5").width()+$("#topbarinnerrighttopbox1").width()+$("#topbarinnerrighttopbox4").width() - ($("#topbarinnerdropdownmessages").width()-$("#topbarinnerrighttopbox2").width())/2;
	  $("#topbarinnerdropdownmessages").css('right', right5);
	}, function(){
      $("#topbarinnerdropdownmessages").stop().hide();
	});
	
	$("#topbarinnerdropdownmessages").hover(function() {
	  $("#topbarinnerrighttopbox2").addClass("hovered1");
      $("#topbarinnerdropdownmessages").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox2").removeClass("hovered1");
      $("#topbarinnerdropdownmessages").stop().hide();
	});
	
	
	$("#topbarinnerrighttopbox1").hover(function() {
      $("#topbarinnerdropdownuser").stop().show();
	}, function(){
      $("#topbarinnerdropdownuser").stop().hide();
	});
	
	$("#topbarinnerdropdownuser").hover(function() {
	  $("#topbarinnerrighttopbox1").addClass("hovered1");
      $("#topbarinnerdropdownuser").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox1").removeClass("hovered1");
      $("#topbarinnerdropdownuser").stop().hide();
	});
	
	
	
	
	$('#topbar').click(function(event){
//		if($("#searchbigbardropdown").css('display') != 'none'){
//		event.stopPropagation();}
	});
//	$("#topbarinnerdropdownuser").click(function(event){
//		if($("#searchbigbar").css('display') != 'none'){
//		event.stopPropagation();}
//	});
	
//	$('#searchbigbar').click(function(event){
//		event.stopPropagation();
//	});
	/*
	$(".searchbigbardropdowninnerright1").hover(function(){
		$("#searchbardeletedark").stop().hide();
		$("#searchbardeletelight").stop().show();
	}, function(){
		$("#searchbardeletelight").stop().hide();
		$("#searchbardeletedark").stop().show();
	});
	
	$(".searchbigbardropdowninnerright2").hover(function(){
		$("#searchbarsettingsdark").stop().hide();
		$("#searchbarsettingslight").stop().show();
	}, function(){
		$("#searchbarsettingslight").stop().hide();
		$("#searchbarsettingsdark").stop().show();
	});
	*/
	
	
	
	
	
	$(".fullscreenpopupcloseimg").live('click', function(){
		$("#fullscreenpopupcontentmain").html('');
		$("#fullscreenpopup").stop().hide();
	});
	
	
	
/*	

	var s_saver;

	$('body').mousemove(function() {
	    clearTimeout(s_saver);

	    s_saver = setTimeout(function(){
	        $('#screensaver').fadeIn(500);
	    }, 5000);

	    $('#screensaver').fadeOut(50);
	});*/

/*	function addEvent(obj, evt, fn) {
	    if (obj.addEventListener) {
	        obj.addEventListener(evt, fn, false);
	    }
	    else if (obj.attachEvent) {
	        obj.attachEvent("on" + evt, fn);
	    }
	}
	addEvent(window,"load",function(e) {
	    addEvent(document, "mouseout", function(e) {
	        e = e ? e : window.event;
	        var from = e.relatedTarget || e.toElement;
	        if (!from || from.nodeName == "HTML") {
	            // stop your drag event here
	            // for now we can just use an alert
	            $('#screensaver').fadeIn(500);
	        }
	    });
	});
	addEvent(window,"load",function(e) {
	    addEvent(document, "mouseover", function(e) {
	        e = e ? e : window.event;
	        var from = e.relatedTarget || e.toElement;
	        if (!from || from.nodeName == "HTML") {
	            // stop your drag event here
	            // for now we can just use an alert
	            $('#screensaver').fadeOut(50);
	        }
	    });
	});*/

	$('body').live('mouseout', function(){
		$('#screensaver').stop().fadeIn(200);
	});
	$('body').live('mouseover', function(){
		$('#screensaver').stop().fadeOut(10);
	});





	$(".socialboxesinnerright").hover(function(){
		$(this).next().stop().animate({width:100}, 200);
	}, function(){
		$(this).next().stop().animate({width:0}, 200);
	});
	$(".socialboxesinnerleft").hover(function(){
		$(this).prev().stop().addClass('socialboxesinnerrightselected');
		$(this).stop().css({'width':'100px'});
	}, function(){
		$(this).prev().stop().removeClass('socialboxesinnerrightselected');
		$(this).stop().animate({width:0}, 200);
	});


	$(".choiceboxinner").live('click', function(){
		var selectedtab = $(".choiceboxinnerselected");
		if($(this) != selectedtab){
			if(selectedtab){
				selectedtab.removeClass('choiceboxinnerselected');
			}
			$(this).addClass('choiceboxinnerselected');

			if($(".formerrors").offset()){$(".formerrors").remove();}
		}
	});
	$(".choiceboxmultiinner").live('click', function(){
			if($(this).hasClass('choiceboxmultiinnerselected')){
				$(this).removeClass('choiceboxmultiinnerselected');
			}else{
				$(this).addClass('choiceboxmultiinnerselected');
			}
			if($(".formerrors").offset()){$(".formerrors").remove();}
	});
	$(".choiceboxmulti1inner").live('click', function(){
			if($(this).hasClass('choiceboxmulti1innerselected')){
				$(this).removeClass('choiceboxmulti1innerselected');
			}else{
				$(this).addClass('choiceboxmulti1innerselected');
			}
			if($(".formerrors").offset()){$(".formerrors").remove();}
	});



	
});


$(document).ready(function(){
	$('#fullscreenlighttabclose').tipsy({gravity: 'ne', fade: true});
	$('#fullscreendarktabclose').tipsy({gravity: 'ne', fade: true});
});

