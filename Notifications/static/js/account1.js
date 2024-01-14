var request, pickupzone_selected = false, dropzone_selected=false;

$(document).ready(function(){

	$('input').iCheck({
		checkboxClass: 'icheckbox_square-purple',
		radioClass: 'iradio_square-purple',
//		increaseArea: '20%' // optional
	});

	var zone_options = JSON.parse($("form").attr('data-zones'));


	$("input[name=pickup_zone]").autocomplete({
    minLength: 0,
	source: function( request, response ) {
//		
/*		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response($.grep(zone_options, function(value) {
			
            return matcher.test(value.name);
		}));*/
		var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
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
};


	$("input[name=drop_zone]").autocomplete({
    minLength: 0,
	source: function( request, response ) {
//		
/*		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response($.grep(zone_options, function(value) {
			
            return matcher.test(value.name);
		}));*/
		var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
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
};

	
	$('input[name=pickup_zone]').change(function () {
		pickupzone_selected = false;
	});
	$('input[name=drop_zone]').change(function () {
		dropzone_selected = false;
	});
	$('input[name=pickup_zone]').keyup(function (e) {
		if(e.which != 13) {pickup_selected = false;}
	});
	$('input[name=drop_zone]').keyup(function (e) {
		if(e.which != 13) {drop_selected = false;}
	});


	
	$(".invitesignupform").submit(function(e){
		
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