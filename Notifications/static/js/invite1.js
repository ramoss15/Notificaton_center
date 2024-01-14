var request, pickupzone_selected = false, dropzone_selected=false, currentIndex = 0, price = 0, place1, place2, pickupzone_id, dropzone_id, pickup_address, drop_address, start_lat, end_lat, start_lng, end_lng;

var placeSearch, autocomplete1, autocomplete2;

var NCR_LOWERLEFT_LAT = 27.965;
var NCR_LOWERLEFT_LNG = 76.7756;
var NCR_UPPERRIGHT_LAT = 28.854;
var NCR_UPPERRIGHT_LNG = 77.75;

var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(27.965, 76.7756),
  new google.maps.LatLng(28.854, 77.75));



var goog_snippet_vars = function() {
    var w = window;
    w.google_conversion_id = 836495621;
    w.google_conversion_label = "4gL4CLjMqngQhdLvjgM";
    w.google_remarketing_only = false;
}

var goog_report_conversion = function(url) {
    goog_snippet_vars();
    window.google_conversion_format = "3";
    var opt = new Object();
    opt.onload_callback = function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
    var conv_handler = window['google_trackConversion'];
    if (typeof(conv_handler) == 'function') {
      conv_handler(opt);
    }
  }


var width = parseInt($(document).width());


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var verifyFields = function(index){
	switch(index){
		case 4:
			finishSignup(index);
			break;

		case 1:
			var pickupzone = $("input[name=pickup_zone]");
			var dropzone = $("input[name=drop_zone]");
			if ($.trim(pickupzone.val()) != '' && $.trim(dropzone.val()) != '' && pickupzone_selected && dropzone_selected && pickup_address != null && drop_address != null
					&& start_lat > NCR_LOWERLEFT_LAT && start_lng > NCR_LOWERLEFT_LNG && start_lat < NCR_UPPERRIGHT_LAT && start_lat < NCR_UPPERRIGHT_LNG
					&& end_lat > NCR_LOWERLEFT_LAT && end_lng > NCR_LOWERLEFT_LNG && end_lat < NCR_UPPERRIGHT_LAT && end_lat < NCR_UPPERRIGHT_LNG){
				
				return true;
			}else{
				
					if ($.trim(pickupzone.val()) == ''){
						$('<div class="formerrors">Please enter a pickup address!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if ($.trim(dropzone.val()) == ''){
						$('<div class="formerrors">Please enter a drop address!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					if (pickup_address == null){
						$('<div class="formerrors">Please enter a pickup address!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if (drop_address == null){
						$('<div class="formerrors">Please enter a drop address!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					if (start_lat != null && (start_lat <= NCR_LOWERLEFT_LAT || start_lng <= NCR_LOWERLEFT_LNG || start_lat >= NCR_UPPERRIGHT_LAT || start_lat >= NCR_UPPERRIGHT_LNG)){
						$('<div class="formerrors">Please enter a location within Delhi-NCR!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if (end_lat != null && (end_lat <= NCR_LOWERLEFT_LAT || end_lng <= NCR_LOWERLEFT_LNG || end_lat >= NCR_UPPERRIGHT_LAT || end_lat >= NCR_UPPERRIGHT_LNG)){
						$('<div class="formerrors">Please enter a location within Delhi-NCR!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					return false;
			}
			break;

		case 2:
			var starthour = $("div.schedule div.starttime > div.timebox.hour");
			var endhour = $("div.schedule div.endtime > div.timebox.hour");
			var startminute = $("div.schedule div.starttime > div.timebox.minute");
			var endminute = $("div.schedule div.endtime > div.timebox.minute");
			var starttod = $("div.schedule div.starttime > div.timebox.tod");
			var endtod = $("div.schedule div.endtime > div.timebox.tod");
			if (!(starthour.html().toString() == endhour.html().toString() && startminute.html().toString() == endminute.html().toString() && starttod.html().toString() == endtod.html().toString())){
				return true;
			}else{
				$('<div class="formerrors">Please choose different times!</div>').css('top', $("div.schedule div.starttime").offset().top - 15).css('left', $("div.schedule div.starttime").offset().left + 10).appendTo("body");
				return false;
			}
			break;
		case 3:
			var seats = $(".seatbox .box.selected");
			if (seats.length){
				return true;
			}else{
				$('<div class="formerrors">Please choose seats!</div>').css('top', seats.parent().offset().top - 15).css('left', seats.parent().offset().left + 10).appendTo("body");
				return false;
			}
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

			var pickupzone = $("input[name=pickup_zone]");
			var dropzone = $("input[name=drop_zone]");

			var starthour = $("div.schedule div.starttime > div.timebox.hour").html().toString();
			var endhour = $("div.schedule div.endtime > div.timebox.hour").html().toString();
			var startminute = $("div.schedule div.starttime > div.timebox.minute").html().toString();
			var endminute = $("div.schedule div.endtime > div.timebox.minute").html().toString();
			var starttod = $("div.schedule div.starttime > div.timebox.tod").html().toString();
			var endtod = $("div.schedule div.endtime > div.timebox.tod").html().toString();

			if(starttod == "AM"){
				if(starthour == "12"){
					starthour == "00";
				}
			}else{
				if(parseInt(starthour) < 12){
					starthour = (parseInt(starthour) + 12) + "";
				}
			}

			if(endtod == "AM"){
				if(endhour == "12"){
					endhour == "00";
				}
			}else{
				if(parseInt(endhour) < 12){
					endhour = (parseInt(endhour) + 12) + "";
				}
			}
			
			var phone = $("input[name=phone]");
			var email = $("input[name=email]");
			var name1 = $("input[name=first_name]");
			var name2 = $("input[name=last_name]");
			var gender = $(".genderbox").parent();
			if (($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 
				&& email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) 
				&& email.val().lastIndexOf('@') < email.val().lastIndexOf('.') && $.trim(name1.val()) != '' 
				&& $.trim(name2.val()) != ''
				&& ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val())
				&& $(".genderbox.selected").length){

				var leftcard = $(".leftbar").find("[data-index='" + index + "']");
				leftcard.addClass('active');
				leftcard.find("span.name").html($("input[name=first_name]").val() + " " + $("input[name=last_name]").val());
      			leftcard.find("span.email").html($("input[name=email]").val());
      			leftcard.find("span.phone").html($("input[name=phone]").val());
      			leftcard.find("span.gender").html($(".genderbox.selected").attr('data-type'));

				request=$.post("https://derbii.com/ajax/hello/signup_from_coords", { 
						reason: "form",
						phone: phone.val(),
						email: email.val(),
						first_name: name1.val(),
						last_name: name2.val(),
						gender: $(".genderbox.selected").html().toString(),
						pickup_lat: start_lat,
						pickup_lng: start_lng,
						drop_lat: end_lat,
						drop_lng: end_lng,
						pickup_address: pickup_address,
						drop_address: drop_address,
						pickupzone_id: pickupzone_id,
						dropzone_id: dropzone_id,
						pickuptime: starthour+":"+startminute,
						droptime: endhour+":"+endminute,
						seats: $(".seatbox .box.selected").attr('data-type'),
					},
					function(data) {
						if (data.status == "success"){
							$('.invite_header div.content div.card:not(.postsignup)').stop().hide();
							$('.invite_header div.content div.card.postsignup').stop().show();
							if (data.av_status == "A"){
								$('.invite_header div.content div.card.postsignup.result h1').addClass('colorprim700span');
								$('.invite_header div.content div.card.postsignup.result h1').html("cab available");
								$('.invite_header div.content div.card.postsignup.result p').html("We have a cab available on this route. You will receive a call from our team within the next 2 days to confirm details. We can't wait to get you started.");
							}else if (data.av_status == "PR"){
								$('.invite_header div.content div.card.postsignup.result h1').addClass('colorsec700span');
								$('.invite_header div.content div.card.postsignup.result h1').html("awaiting co-passengers");
								$('.invite_header div.content div.card.postsignup.result p').html("We are at full-capacity on this route and do not have enough passengers to deploy a new cab. We expect to start facilities soon, however. Our team will contact you within the next week. We request your patience.");
							}else{
								$('.invite_header div.content div.card.postsignup.result h1').addClass('colortert700span');
								$('.invite_header div.content div.card.postsignup.result h1').html("service not available");
								$('.invite_header div.content div.card.postsignup.result p').html("We do not have services available on this route and these timings. We will contact you if and when we start facilities on this route and these timings. We regret our inability to serve you at the moment.");
							}

							$('.invite_header div.heading h1').stop().html("Perfectly done!");
							$('.invite_header div.heading h2+h2').stop().hide();
							$('.invite_header div.heading h2').stop().html("We are very thankful for your interest in Derbii.");

							$('html,body').scrollTop(0);

							if(width <= 768){
								$(".leftbar").hide();
							}

							

							if (getParameterByName('source') == 'gmail_rm_ad_campaign'){
								
								goog_report_conversion();
							}

						}else{
							that1.text('Finish');
							
							if(data.reason == "exists_email"){
								$('<div class="formerrors">The email you provided is already registered with us!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
//								$(".account_header div p.error").text("The email you provided is already registered with us. We'll contact you once we're ready to go live.").show();
							}
							if(data.reason == "exists_phone"){
								$('<div class="formerrors">The phone number you provided is already registered with us!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
							}
							if(data.reason == "other"){
								$('<div class="formerrors">There was a problem while signing you up. Our servers seem to be overloaded. Please try again in a while.</div>').css('top', first_name.offset().top - 15).css('left', first_name.offset().left + 10).appendTo("body");
							}
							if(data.reason == "no_cookies"){
								$('<div class="formerrors">our web browser does not appear to have cookies enabled. Cookies are required for signing up with Derbii.</div>').css('top', first_name.offset().top - 15).css('left', first_name.offset().left + 10).appendTo("body");
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
					if ($.trim(name1.val()) == ''){
						$('<div class="formerrors">Please enter your first name!</div>').css('top', name1.offset().top - 15).css('left', name1.offset().left + 10).appendTo("body");
					}
					if ($.trim(name2.val()) == ''){
						$('<div class="formerrors">Please enter your last name!</div>').css('top', name2.offset().top - 15).css('left', name2.offset().left + 10).appendTo("body");
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
					if(!$(".genderbox.selected").length){
						$('<div class="formerrors">Please choose your gender!</div>').css('top', gender.offset().top - 10).css('left', gender.offset().left + 120).appendTo("body");
					}
					that1.text('Finish');
					return false;
			}
				
};



function fillInAddress1() {
        // Get the place details from the autocomplete object.
        place1 = autocomplete1.getPlace();

        
        
        

        pickup_address = place1.formatted_address;
        pickupzone_selected = true;
        start_lat = place1.geometry.location.lat();
        start_lng = place1.geometry.location.lng();
//        for (var component in componentForm) {
//          document.getElementById(component).value = '';
//          document.getElementById(component).disabled = false;
//        }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.

/*        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
          }
        }*/
      }

function fillInAddress2() {
        // Get the place details from the autocomplete object.
        place2 = autocomplete2.getPlace();

        
        
        

        drop_address = place2.formatted_address;
        dropzone_selected = true;
        end_lat = place2.geometry.location.lat();
        end_lng = place2.geometry.location.lng();

//        for (var component in componentForm) {
//          document.getElementById(component).value = '';
//          document.getElementById(component).disabled = false;
//        }

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.

/*        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
          }
        }*/
      }



$(document).ready(function(){

	autocomplete1 = new google.maps.places.Autocomplete(
			(document.getElementById('zone1')),
            {bounds: defaultBounds, types: ['geocode']});
        autocomplete1.addListener('place_changed', fillInAddress1);

    autocomplete2 = new google.maps.places.Autocomplete(
			(document.getElementById('zone2')),
            {bounds: defaultBounds, types: ['geocode']});
        autocomplete2.addListener('place_changed', fillInAddress2);





	$('.invite_main > div > div.left > div.post').stop().hide();
	$('div.popup > div').stop().hide();

	var how_animating = false;

	var timebox_selected;


	$(".timebox.hour").live('click', function(e){
		$('div.popupscreen').stop().show();
		$('div.popup').stop().show();
		$('div.popup > div.hour').stop().show();
		timebox_selected = $(this);
	});

	$(".timebox.minute").live('click', function(e){
		$('div.popupscreen').stop().show();
		$('div.popup').stop().show();
		$('div.popup > div.minute').stop().show();
		timebox_selected = $(this);
	});

	$(".timebox.tod").live('click', function(e){
		$('div.popupscreen').stop().show();
		$('div.popup').stop().show();
		$('div.popup > div.tod').stop().show();
		timebox_selected = $(this);
	});

	$(".popup .closebtn").live('click', function(e){
		$('div.popup > div').stop().hide();
		$('div.popupscreen').stop().hide();
		$('div.popup').stop().hide();
		timebox_selected = null;
	});

	$(".popup .box").live('click', function(e){
		timebox_selected.html($(this).html().toString());
		$('div.popup > div').stop().hide();
		$('div.popupscreen').stop().hide();
		$('div.popup').stop().hide();
		timebox_selected = null;
	});

	$(".seatbox .box").live('click', function(e){
		if (!$(this).hasClass('selected')){
			$(".seatbox .box.selected").removeClass('selected');
			$(this).addClass('selected');
			if($(".seatbox .box.selected").attr('data-type') != "1"){
				if($(".seatbox .box.selected").attr('data-type') != "100"){
					$("span.fare.large").html(price+" x "+$(".seatbox .box.selected").attr('data-type'));
				}else{
					$("span.fare.large").html(price+" x 8+");
				}
			}else{
				$("span.fare.large").html(price);
			}
		}
	});

	$(".genderbox").live('click', function(e){
		if (!$(this).hasClass('selected')){
			$(".genderbox.selected").removeClass('selected');
			$(this).addClass('selected');
			$(".formerrors").remove();if (request){request.abort();}
		}
	});

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


	$(".leftbar > div.card span.pricingdetailsclick").live('click', function(){
		var box = $(".leftbar div.main.pricingdetails");
		if (box.is(':visible')){
			box.hide();
		}else{
			box.show();
		}
	});

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

  		

  		

    	if(!how_animating && index < 5 && verifyFields(index)){
//      		how_animating = true;
      		card.removeClass('active').addClass('done').addClass('move');
      		card.find(".heading2").addClass("aftericon").addClass("arrow");
      		nextcard.addClass('active');
      		leftcard.addClass('active');

      		switch(index){
      			case 1:
      				leftcard.find("span.home").html($("input[name=pickup_zone]").val());
      				leftcard.find("span.workplace").html($("input[name=drop_zone]").val());
      				console.log(start_lat);console.log(start_lng);
      				console.log(end_lat);console.log(end_lng);
      				request=$.post("https://derbii.com/ajax/pricing/calculate_from_coords", { 
			            reason: "form",
			            start_lat: start_lat,
			            start_lng: start_lng,
			            end_lat: end_lat,
			            end_lng: end_lng,
			          },
			          function(data) {
			            if (data.status == "success"){
			            	console.log(data);
			//              mixpanel.track("privatesignuppagesuccess");
							price = Math.round(data.pricing_monthly);
			              leftcard.find("span.fare").html(Math.round(data.pricing_monthly));
			              $(".leftbar div.main.pricingdetails").find("span.base_price").html(data.base_price);
			              $(".leftbar div.main.pricingdetails").find("span.price_per_km").html(data.price_per_km);
			              $(".leftbar div.main.pricingdetails").find("span.fare").html(Math.round(data.pricing_monthly));
			              $(".leftbar div.main.pricingdetails").find("span.distance").html(Math.round(data.distance));
			              $(".leftbar div.main.pricingdetails").find("span.discount").html(data.discount);
			              pickupzone_id = data.pickupzone_id;
			              dropzone_id = data.dropzone_id;
//			              $('.calcpricespan').html('<i class="fa fa-inr"></i> '+Math.round(data.pricing_monthly));

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
      				break;
      			case 2:
      				leftcard.find("span.starttime").html($("div.starttime > div.timebox.hour").html().toString()+":"+$("div.starttime > div.timebox.minute").html().toString()+" "+$("div.starttime > div.timebox.tod").html().toString());
      				leftcard.find("span.endtime").html($("div.endtime > div.timebox.hour").html().toString()+":"+$("div.endtime > div.timebox.minute").html().toString()+" "+$("div.endtime > div.timebox.tod").html().toString());
      				break;
      			case 3:
      				leftcard.find("span.seats").html($(".seatbox .box.selected").html().toString());
      				break;
      			case 4:
      				break;
      		}
/*      		card.removeClass('active').animate({
      			left:0,top:0
      		}, 500, function(){

      		});*/
      		/*
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
      		});*/
    	}
  	});

	

/*
  	$(document).keypress(function(e) {
    if(e.which == 13) {
        
        if(!how_animating && currentIndex < 5 && verifyFields(currentIndex)){
      		how_animating = true;
      		$("input").blur();
      		$('.invite_main > div > div.right').animate({
          		top: -(currentIndex+1)*$(".invite_main > div > div.right").children().eq(1).outerHeight()
      		}, 500, function(){
      			currentIndex+=1;
      			how_animating = false;
      			if(currentIndex == 1){
      				$('.invite_main > div > div.left > div.pre').stop().hide();
      				$('.invite_main > div > div.left > div.post').stop().show();
      			}
      			switch(currentIndex){
      					case 4:
      						var outer = $(".invite_main > div > div.left > div.post > div > div.about");
      						outer.stop().show();
      						outer.find(".name").html($("input[name=first_name]").val() + " " + $("input[name=last_name]").val());
      						outer.find(".email").html($("input[name=email]").val());
      						outer.find(".phone").html($("input[name=phone]").val());
      						outer.find(".gender").html($(".genderbox.selected").attr('data-type'));
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

     }


    });*/
  	

/*    $(document).keyup(function(e) {
    if(e.which == 8) {
        
        if(!how_animating && currentIndex > 0 && !$("input").is(":focus")){
      		how_animating = true;
      		$('.invite_main > div > div.right').animate({
          		top: -(currentIndex-1)*$(".invite_main > div > div.right").children().eq(1).outerHeight()
      		}, 500, function(){
      			currentIndex-=1;
      			how_animating = false;
      			if(currentIndex == 0){
      				$('.invite_main > div > div.left > div.post').stop().hide();
      				$('.invite_main > div > div.left > div.pre').stop().show();
      			}
      		});
    	}
     }
    });*/
  	


	$('input').iCheck({
		checkboxClass: 'icheckbox_square-purple',
		radioClass: 'iradio_square-purple',
//		increaseArea: '20%' // optional
	});


/*
	$("input[name=pickup_zone]").autocomplete({
    minLength: 0,
	source: function( request, response ) {
//		
//		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
//        response($.grep(zone_options, function(value) {
//			
//            return matcher.test(value.name);
//		}));
		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
		response($.grep(zone_options, function (value) {
			return matcher.test(value.name);
		}));
	},
    create: function() {
//        rthat.val(zone_options.name);
    },
    focus: function(event, ui) {
//        rthat.val(ui.item.name);
        return false;
    },
    select: function(event, ui) {
//		if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//		else{rthat.val( ui.item.address );}
		pickupzone_selected = true;
		
		$(this).val( ui.item.name );
		$(".formerrors").remove();if (request){request.abort();}
//		rthat.siblings().val(ui.item.id);
		return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//	var lstr = item.name+' - '+item.address;
//	var lsubstr = lstr.substring(0,50)+'...';
//	var lsubstr = item.name.substring(0,50)+'...';
	var lsubstr = item.name;
    return $('<li>')
        .data('item.autocomplete', item)
        .append('<a>'+
					lsubstr +'</a>')
        .appendTo(ul);
};*/

/*
	$("input[name=drop_zone]").autocomplete({
    minLength: 0,
	source: function( request, response ) {
//		
//		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
//        response($.grep(zone_options, function(value) {
//			
//            return matcher.test(value.name);
//		}));
		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
		response($.grep(zone_options, function (value) {
			return matcher.test(value.name);
		}));
	},
    create: function() {
//        rthat.val(zone_options.name);
    },
    focus: function(event, ui) {
//        rthat.val(ui.item.name);
        return false;
    },
    select: function(event, ui) {
//		if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//		else{rthat.val( ui.item.address );}
		dropzone_selected = true;
		
		$(this).val( ui.item.name );
		$(".formerrors").remove();if (request){request.abort();}
//		rthat.siblings().val(ui.item.id);
		return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//	var lstr = item.name+' - '+item.address;
//	var lsubstr = lstr.substring(0,50)+'...';
//	var lsubstr = item.name.substring(0,50)+'...';
	var lsubstr = item.name;
    return $('<li>')
        .data('item.autocomplete', item)
        .append('<a>'+
					lsubstr +'</a>')
        .appendTo(ul);
};*/

	
/*	$('input[name=pickup_zone]').change(function () {
		
		pickupzone_selected = false;
	});
	$('input[name=drop_zone]').change(function () {
		
		dropzone_selected = false;
	});*/
	$('input[name=pickup_zone]').keyup(function (e) {
		if(e.which != 13) {pickup_selected = false;}
	});
	$('input[name=drop_zone]').keyup(function (e) {
		if(e.which != 13) {drop_selected = false;}
	});





	var searchParams = new URLSearchParams(window.location.search);

	var pa = searchParams.get("pickup_address");
	var da = searchParams.get("drop_address");
	var slat = searchParams.get("start_lat");
	var slng = searchParams.get("start_lng");
	var elat = searchParams.get("end_lat");
	var elng = searchParams.get("end_lng");

	if(pa && da && slat && slng && elat && elng){
		pickup_address = pa;
		$("input[name=pickup_zone]").val(pa);
		pickupzone_selected = true;
		drop_address = da;
		$("input[name=drop_zone]").val(da);
		dropzone_selected = true;
		start_lat = slat;
		start_lng = slng;
		end_lat = elat;
		end_lng = elng;


		var that = $("#nextbtn2");
  		var card = that.closest('.card:not(.postsignup)');
  		var index = parseInt(card.attr('data-index'));
  		var leftmaincard = $(".leftbar").find("div.card");
  		leftmaincard.show();
  		var leftcard = $(".leftbar").find("[data-index='" + index + "']");
  		var nextcard = $(".content").find("[data-index='" + (index+1) + "']");

  		

  		if(!how_animating && index < 5 && verifyFields(index)){
//      		how_animating = true;
      		card.removeClass('active').addClass('done').addClass('move');
      		card.find(".heading2").addClass("aftericon").addClass("arrow");
      		nextcard.addClass('active');
      		leftcard.addClass('active');


      		leftcard.find("span.home").html($("input[name=pickup_zone]").val());
      				leftcard.find("span.workplace").html($("input[name=drop_zone]").val());
      				request=$.post("https://derbii.com/ajax/pricing/calculate_from_coords", { 
			            reason: "form",
			            start_lat: start_lat,
			            start_lng: start_lng,
			            end_lat: end_lat,
			            end_lng: end_lng,
			          },
			          function(data) {
			            if (data.status == "success"){
			//              mixpanel.track("privatesignuppagesuccess");
							price = Math.round(data.pricing_monthly);
			              leftcard.find("span.fare").html(Math.round(data.pricing_monthly));
			              $(".leftbar div.main.pricingdetails").find("span.base_price").html(data.base_price);
			              $(".leftbar div.main.pricingdetails").find("span.price_per_km").html(data.price_per_km);
			              $(".leftbar div.main.pricingdetails").find("span.fare").html(Math.round(data.pricing_monthly));
			              $(".leftbar div.main.pricingdetails").find("span.distance").html(Math.round(data.distance));
			              $(".leftbar div.main.pricingdetails").find("span.discount").html(data.discount);
			              pickupzone_id = data.pickupzone_id;
			              dropzone_id = data.dropzone_id;
//			              $('.calcpricespan').html('<i class="fa fa-inr"></i> '+Math.round(data.pricing_monthly));

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
	}



	
	$(".invitesignupform").submit(function(e){
		
		e.preventDefault();
		var that;
		var that1=$('button[name=invitesignup_btn]');
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$(".account_header div p.error").hide();		that=$(this);
				var pickupzone = $("input[name=pickup_zone]");
				var dropzone = $("input[name=drop_zone]");
				var phone = $("input[name=phone]");
				var email = $("input[name=email]");
				var name1 = $("input[name=first_name]");
				var name2 = $("input[name=last_name]");
				var gender = $("input[type='radio'][name='gender']:checked");
				var pickuptime = $("select[name=pickuptime]");
				var droptime = $("select[name=droptime]");

				that1.text('Working');
				
				if ($.trim(pickupzone.val()) != '' && $.trim(dropzone.val()) != '' && $.trim($('option:selected', pickuptime).val()) != 'none'
					 && $.trim($('option:selected', droptime).val()) != 'none' && $.trim($('option:selected', droptime).val()) != $.trim($('option:selected', pickuptime).val())
					 && pickupzone_selected && dropzone_selected &&
					($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 && email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) && email.val().lastIndexOf('@') < email.val().lastIndexOf('.') && $.trim(name1.val()) != '' && $.trim(name2.val()) != '' && $("input:radio[name='gender']").is(":checked")
					 && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val())){
					request=$.post("https://derbii.com/ajax/hello/signup", { 
						reason: "form",
						phone: phone.val(),
						email: email.val(),
						first_name: name1.val(),
						last_name: name2.val(),
						gender: gender.val(),
						pickupzone: pickupzone.val(),
						dropzone: dropzone.val(),
						pickuptime: $('option:selected', $("select[name=pickuptime]")).val(),
						droptime: $('option:selected', $("select[name=droptime]")).val(),
					},
					function(data) {
						if (data.status == "success"){
//							mixpanel.track("privatesignuppagesuccess");
							
							$(".account_presignup").hide();
							$(".account_postsignup").show();
							

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
						
					
						
					}
				else{
					if ($.trim(email.val()) == ''){
						$('<div class="formerrors">Please enter your email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if (email.val().length >=250){
						$('<div class="formerrors">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if ($.trim(email.val()) != '' && (email.val().indexOf('.') == '-1' || email.val().indexOf('@') == '-1' || email.val().indexOf('@') == (email.val().length-1) || email.val().lastIndexOf('@') > email.val().lastIndexOf('.'))){
						$("<div class='formerrors'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
/*					else{
						$("<div class='formerrors'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}*/
					if ($.trim(name1.val()) == ''){
						$('<div class="formerrors">Please enter your first name!</div>').css('top', name1.offset().top - 15).css('left', name1.offset().left + 10).appendTo("body");
					}
					if ($.trim(name2.val()) == ''){
						$('<div class="formerrors">Please enter your last name!</div>').css('top', name2.offset().top - 15).css('left', name2.offset().left + 10).appendTo("body");
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
					if(!$("input:radio[name='gender']").is(":checked")){
						$('<div class="formerrors">Please choose your gender!</div>').css('top', $("input:radio[name='gender']").offset().top - 10).css('left', $("input:radio[name='gender']").offset().left + 120).appendTo("body");
					}
					if ($.trim(pickupzone.val()) == ''){
						$('<div class="formerrors">Please enter a pickup area!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if ($.trim(dropzone.val()) == ''){
						$('<div class="formerrors">Please enter a drop area!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					if($.trim($('option:selected', pickuptime).val()) == 'none'){
						$('<div class="formerrors">Please choose a pickup time!</div>').css('top', pickuptime.offset().top - 15).css('left', pickuptime.offset().left + 10).appendTo("body");
					}
					if($.trim($('option:selected', droptime).val()) == 'none'){
						$('<div class="formerrors">Please choose a return-pickup time!</div>').css('top', droptime.offset().top - 15).css('left', droptime.offset().left + 10).appendTo("body");
					}
					if($.trim($('option:selected', droptime).val()) == $.trim($('option:selected', pickuptime).val())){
						$('<div class="formerrors">Please choose different times!</div>').css('top', pickuptime.offset().top - 15).css('left', pickuptime.offset().left + 10).appendTo("body");
					}
					
					that1.text('Sign up');
				}
	});




	
	
	


$(document).keypress(function(e){
	if(e.which == 13) {

    	if($('form').attr('data-type') == 'invitesignup'){
		
		e.preventDefault();
		var that;
		var that1=$('button[name=invitesignup_btn]');
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$(".account_header div p.error").hide();
			that=$(this);
				var pickupzone = $("input[name=pickup_zone]");
				var dropzone = $("input[name=drop_zone]");
				var phone = $("input[name=phone]");
				var email = $("input[name=email]");
				var name1 = $("input[name=first_name]");
				var name2 = $("input[name=last_name]");
				var gender = $("input[type='radio'][name='gender']:checked");
				var pickuptime = $("select[name=pickuptime]");
				var droptime = $("select[name=droptime]");

				that1.text('Working');
				
				if ($.trim(pickupzone.val()) != '' && $.trim(dropzone.val()) != '' && $.trim($('option:selected', pickuptime).val()) != 'none'
					 && $.trim($('option:selected', droptime).val()) != 'none' && $.trim($('option:selected', droptime).val()) != $.trim($('option:selected', pickuptime).val())
					 && pickupzone_selected && dropzone_selected &&
					($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 && email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) && email.val().lastIndexOf('@') < email.val().lastIndexOf('.') && $.trim(name1.val()) != '' && $.trim(name2.val()) != '' && $("input:radio[name='gender']").is(":checked")
					 && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val())){
					request=$.post("https://derbii.com/ajax/hello/signup", { 
						reason: "form",
						phone: phone.val(),
						email: email.val(),
						first_name: name1.val(),
						last_name: name2.val(),
						gender: gender.val(),
						pickupzone: pickupzone.val(),
						dropzone: dropzone.val(),
						pickuptime: $('option:selected', $("select[name=pickuptime]")).val(),
						droptime: $('option:selected', $("select[name=droptime]")).val(),
					},
					function(data) {
						if (data.status == "success"){
//							mixpanel.track("privatesignuppagesuccess");
							
							
							$('#hellomaindivinnermainsignupformbox').stop().hide();
							$('#hellomaindivinnermainsignupinfobox').html("Thank you for signing up with us. We can't wait to get you started. Looking forward to contact you soon!");
							

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
						
					
						
					}
				else{
					if ($.trim(email.val()) == ''){
						$('<div class="formerrors">Please enter your email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if (email.val().length >=250){
						$('<div class="formerrors">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if ($.trim(email.val()) != '' && (email.val().indexOf('.') == '-1' || email.val().indexOf('@') == '-1' || email.val().indexOf('@') == (email.val().length-1) || email.val().lastIndexOf('@') > email.val().lastIndexOf('.'))){
						$("<div class='formerrors'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
/*					else{
						$("<div class='formerrors'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}*/
					if ($.trim(name1.val()) == ''){
						$('<div class="formerrors">Please enter your first name!</div>').css('top', name1.offset().top - 15).css('left', name1.offset().left + 10).appendTo("body");
					}
					if ($.trim(name2.val()) == ''){
						$('<div class="formerrors">Please enter your last name!</div>').css('top', name2.offset().top - 15).css('left', name2.offset().left + 10).appendTo("body");
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
					if(!$("input:radio[name='gender']").is(":checked")){
						$('<div class="formerrors">Please choose your gender!</div>').css('top', $("input:radio[name='gender']").offset().top - 10).css('left', $("input:radio[name='gender']").offset().left + 120).appendTo("body");
					}
					if ($.trim(pickupzone.val()) == ''){
						$('<div class="formerrors">Please enter a pickup area!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if ($.trim(dropzone.val()) == ''){
						$('<div class="formerrors">Please enter a drop area!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					if($.trim($('option:selected', pickuptime).val()) == 'none'){
						$('<div class="formerrors">Please choose a pickup time!</div>').css('top', pickuptime.offset().top - 15).css('left', pickuptime.offset().left + 10).appendTo("body");
					}
					if($.trim($('option:selected', droptime).val()) == 'none'){
						$('<div class="formerrors">Please choose a return-pickup time!</div>').css('top', droptime.offset().top - 15).css('left', droptime.offset().left + 10).appendTo("body");
					}
					if($.trim($('option:selected', droptime).val()) == $.trim($('option:selected', pickuptime).val())){
						$('<div class="formerrors">Please choose different times!</div>').css('top', pickuptime.offset().top - 15).css('left', pickuptime.offset().left + 10).appendTo("body");
					}
					
					that1.text('Sign up');
				}
	}

	}
	
  });
	
	
	$(".field").keyup(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
	$(".field").change(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
//	$(".accountfields").keypress(function(e){});
	
});