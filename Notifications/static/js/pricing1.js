var request, set, width = parseInt(document.width), pickupzone_selected = false, dropzone_selected=false;

$(document).ready(function(){

	$('.tipsy1').tipsy({gravity: 'nw', fade: true, live: true});

	$('input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
//		increaseArea: '20%' // optional
	});

	var zone_options = JSON.parse($(".pricing_calc").attr('data-zones'));



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
//		
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
//		
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
		if(e.which != 13) {pickupzone_selected = false;}
	});
	$('input[name=drop_zone]').keyup(function (e) {
		if(e.which != 13) {dropzone_selected = false;}
	});

	

	$('button[name=price_btn]').click(function(e){
		
	});

	$(".pricingform").submit(function(e){
		$(".calc_bottom").hide();
		
		
		e.preventDefault();
		var that;
		var that1=$('button[name=price_btn]');
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".signupboxerror").hide();
			that=$(this);
				var pickupzone = $("input[name=pickup_zone]");
				var dropzone = $("input[name=drop_zone]");
				var pickuptime = $("#pickuptime");

				that1.text('Working');
				
				if ($.trim(pickupzone.val()) != '' && $.trim(dropzone.val()) != ''
					 && pickupzone_selected && dropzone_selected){
					request=$.post("https://derbii.com/ajax/pricing/calculate", { 
						reason: "form",
						pickupzone: pickupzone.val(),
						dropzone: dropzone.val(),
					},
					function(data) {
						if (data.status == "success"){
							
							$(".calc_bottom").find(".amount").text(data.pricing);
							$(".calc_bottom").show();
						}else{
							that1.text('Calculate');
							if(data.reason == "other"){
								$(".accountmaincenterlowererror").html("There was a problem while calculating the price. Our servers seem to be overloaded. Please try again in a while.").show();
							}
						}
						that1.text('Calculate');
					});
						
					
						
					}
				else{
					if ($.trim(pickupzone.val()) == ''){
						$('<div class="formerrors">Please enter a pickup area!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if ($.trim(dropzone.val()) == ''){
						$('<div class="formerrors">Please enter a drop area!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					if (!pickupzone_selected){
						$('<div class="formerrors">Please choose a pickup area from list!</div>').css('top', pickupzone.offset().top - 15).css('left', pickupzone.offset().left + 10).appendTo("body");
					}
					if (!dropzone_selected){
						$('<div class="formerrors">Please choose a drop area from list!</div>').css('top', dropzone.offset().top - 15).css('left', dropzone.offset().left + 10).appendTo("body");
					}
					
					that1.text('Calculate');
				}
	});
	
	
	
	
	$(".field").keyup(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
	$(".field").change(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
	
});