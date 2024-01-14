var request, pickupzone_selected = false, dropzone_selected=false, currentIndex = 0, price = 0;

var width = parseInt($(document).width());

var verifyFields = function(index){
	switch(index){
		case 4:
			finishSignup(index);
			break;

		case 5:
			return true;
			break;
	}
};



var finishSignup = function(index){
		var that1=$('button[name=finish]');
		if($(".formerrors").offset()){$(".formerrors").remove();}
				
				that1.text('Working');

			var pickupzone = $(".leftbar").find("span.home").html().toString();
			var dropzone = $(".leftbar").find("span.workplace").html().toString();

			var phone = $("input[name=phone]");
			var email = $("input[name=email]");
			
			if (($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 
				&& email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) 
				&& email.val().lastIndexOf('@') < email.val().lastIndexOf('.')
				&& ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val())){

      			$(".leftbar").find("span.email").html($("input[name=email]").val());
      			$(".leftbar").find("span.phone").html($("input[name=phone]").val());

				request=$.post("https://derbii.com/ajax/ads/signup", { 
						reason: "form",
						phone: phone.val(),
						email: email.val(),
						pickupzone: pickupzone,
						dropzone: dropzone,
					},
					function(data) {
						if (data.status == "success"){
//						if (true){
							$('.adsignup_header div.content div.card:not(.postsignup)').stop().hide();
							$('.adsignup_header div.content div.card.postsignup').stop().show();
							
							$('.adsignup_header div.content div.card.postsignup.result h1').addClass('colorprim700span');
							$('.adsignup_header div.content div.card.postsignup.result h1').html("DETAILS RECEIVED");
							$('.adsignup_header div.content div.card.postsignup.result p').html("We have received your request for a callback. You will receive a call from our team within the next 1 working day to confirm details. We can't wait to get you started.");

							$('.adsignup_header div.heading h1').stop().html("PERFECTLY DONE!");
							$('.adsignup_header div.heading h2+h2').stop().hide();
							$('.adsignup_header div.heading h2').stop().html("We are very thankful for your interest in Derbii.");

							$('html,body').scrollTop(0);

							if(width <= 768){
								$(".leftbar").hide();
							}
						}else{
							that1.text('Sign up');
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
							}
						}
					});
			}else{
					if ($.trim(email.val()) == ''){
						$('<div class="formerrors">Please enter your email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if (email.val().length >=250){
						$('<div class="formerrors">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if ($.trim(email.val()) != '' && (email.val().indexOf('.') == '-1' || email.val().indexOf('@') == '-1' || email.val().indexOf('@') == (email.val().length-1) || email.val().lastIndexOf('@') > email.val().lastIndexOf('.'))){
						$("<div class='formerrors'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrors">Please enter your phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrors">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrors'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					that1.text('Finish');
					return false;
			}
				
};



$(document).ready(function(){
	$('.adsignup_main > div > div.left > div.post').stop().hide();
	$('div.popup > div').stop().hide();

	var how_animating = false;

	
 /* 	$(".nextbtn").live('click', function(e){
  		var that = $(this);

  		var index = parseInt(that.closest('.card').attr('data-index'));
    	if(!how_animating && index < 5 && verifyFields(index)){
      		how_animating = true;
      		$('.invite_main > div > div.right').animate({
          		top: -(index+1)*$(".invite_main > div > div.right").children().eq(1).outerHeight()
      		}, 500, function(){
      			currentIndex = index+1;
      			how_animating = false;
      			if(currentIndex == 1){
      				$('.invite_main > div > div.left > div.pre').stop().hide();
      				$('.invite_main > div > div.left > div.post').stop().show();
      			}
      			switch(currentIndex){
      					case 4:
      						finishSignup();
      						break;
      					case 1:
      						var outer = $(".invite_main > div > div.left > div.post > div > div.locations");
      						outer.stop().show();
      						outer.find(".home").html($("input[name=pickup_zone]").val());
      						outer.find(".workplace").html($("input[name=drop_zone]").val());
      						break;
      					case 2:
      						var outer = $(".invite_main > div > div.left > div.post > div > div.schedule");
      						outer.stop().show();
      						outer.find(".starttime").html($("div.starttime > div.timebox.hour").html().toString()+":"+$("div.starttime > div.timebox.minute").html().toString()+" "+$("div.starttime > div.timebox.tod").html().toString());
      						outer.find(".endtime").html($("div.endtime > div.timebox.hour").html().toString()+":"+$("div.endtime > div.timebox.minute").html().toString()+" "+$("div.endtime > div.timebox.tod").html().toString());
      						break;
      					case 3:
      						var outer = $(".invite_main > div > div.left > div.post > div > div.seats");
      						outer.stop().show();
      						outer.find(".seats").html($(".seatbox .box.selected").html().toString());
      						break;
      					case 5:
      						
      						break;
      			}
      		});
    	}
  	});*/


	

	$(".content div.card:not(.postsignup).done.move").live('click', function(){
		var card = $(this);
		var activeCard = $(".content div.card:not(.postsignup).active");

		var index = parseInt(card.attr('data-index'));
		for (i = index; i <= 4; i++){
			var xcard = $(".content").find("[data-index='" + i + "']");
			xcard.removeClass('active').removeClass('done').removeClass('move');
			xcard.find(".heading2").removeClass("aftericon").removeClass("arrow");
		}
		card.addClass('active');
		card.find(".heading2").addClass("aftericon").addClass("arrow");
	});


	$(".nextbtn").live('click', function(e){
		
  		var that = $(this);
  		var card = that.closest('.card:not(.postsignup)');
  		var index = parseInt(card.attr('data-index'));
  		var leftmaincard = $(".leftbar").find("div.card");
  		leftmaincard.show();
  		var leftcard = $(".leftbar").find("[data-index='" + index + "']");
  		var nextcard = $(".content").find("[data-index='" + (index+1) + "']");

  		

  		

    	if(!how_animating && index < 5){
	      	verifyFields(index)
    	}
  	});

	



  	


	$('input').iCheck({
		checkboxClass: 'icheckbox_square-purple',
		radioClass: 'iradio_square-purple',
//		increaseArea: '20%' // optional
	});
	
	
	$(".field").keyup(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
	$(".field").change(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
//	$(".accountfields").keypress(function(e){});
	
});