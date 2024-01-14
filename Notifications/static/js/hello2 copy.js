var request, set, width = parseInt(document.width), pos = 0, margin_left = 0, margin_left1 = 0, timer, timerconvo, timertype, convocount = 0, typecount = 0, fbconvo, scrolled = false;

$(document).ready(function(){
	$('.tipsy1').tipsy({gravity: 'nw', fade: true, live: true});


	var fbstrings = ["Hi", "Add a commute", "Start", "A-10, Sector 9 Dwarka, Near Metro Station, Dwarka, New Delhi", "Derbii, C-2819, Sushant Lok Phase 1, Gurgaon", "9:00", "5:45 PM", "Yes, save commute"];
	var convocount1 = [1,2,3,4,5,6,7,8];
	var convocount2 = ["b1","b2","b3","b4","b5","b6","b7","b8"];

	var type = 1;

	fbconvo = function(){
		
		if(convocount < 8){
			if (type == 1){
				timertype = setInterval(typeconvo, 50);
			}else{
				clearTimeout(timerconvo);
				$(".hello_how div.fbconvoboxupperinner").animate({marginTop: (parseInt($(".hello_how div.fbconvoboxupperinner").css("marginTop").replace('px', ''))-$(".hello_how div.fbconvoblock."+convocount2[convocount]+" > div").outerHeight(true) - parseInt($(".hello_how div.fbconvoblock."+convocount2[convocount]).css("padding-top").replace('px', '')) - parseInt($(".hello_how div.fbconvoblock."+convocount2[convocount]).css("padding-bottom").replace('px', '')))}, 200);
				$(".hello_how div.fbconvoblock."+convocount2[convocount]+" > div").show().animate({marginLeft: '0%'}, 200);
				type = 1;
				convocount++;
				timerconvo = setTimeout(fbconvo, 2000);
			}
			
		}else{
			clearTimeout(timerconvo);
		}

/*		$("#slider_img").animate({
    		marginLeft: margin
		}, 50);

		$("#slider_text").animate({
    		marginLeft: margin1
		}, 50);*/
	}

	var typeconvo = function(){
		if (typecount < (fbstrings[convocount].length) ){
			$(".hello_how div.fbconvoboxinput").append(fbstrings[convocount].charAt(typecount));
			typecount++;
		}else{
			clearInterval(timertype);
			clearTimeout(timerconvo);
			setTimeout(function(){
				$(".hello_how div.fbconvoboxinput").html('');
				$(".hello_how div.fbconvoboxupperinner").animate({marginTop: (parseInt($(".hello_how div.fbconvoboxupperinner").css("marginTop").replace('px', ''))-$(".hello_how div.fbconvoblock."+convocount1[convocount]+" > div").outerHeight(true) - parseInt($(".hello_how div.fbconvoblock."+convocount1[convocount]).css("padding-top").replace('px', '')) - parseInt($(".hello_how div.fbconvoblock."+convocount1[convocount]).css("padding-bottom").replace('px', '')))}, 200);
				$(".hello_how div.fbconvoblock."+convocount1[convocount]+" > div").show().animate({marginRight: '0%'}, 200);
				typecount = 0;
//				convocount++;
				type = 2;
				
				timerconvo = setTimeout(fbconvo, 2000);
			}, 500)
		}
	}

	

	$(window).scroll(function() {
	   var hT = $(".hello_how div.fbconvoboxinput").offset().top,
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