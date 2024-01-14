var width = parseInt($(document).width())
$(document).ready(function(){
var selectedtab, selectedtab1 = $(".dashboardmainleft3leftboxesselected"), request_right;
	
	$("#filtersbtn").live('click', function(e) {
		console.log("sdsd");
	  $("#filtersdropdown").css('top', 265).css('left', 132).stop().show();
//	  $("#filtersdropdown").css('top', $("#filtersbtn").offset().top+45).css('left', $("#filtersbtn").offset().left).stop().show();
	  e.stopPropagation();
	});
	
	$(document).click(function() {
		$("#filtersdropdown").stop().hide();
	});
	
	$('#filtersdropdown').click(function(event){
		if($("#filtersdropdown").css('display') != 'none'){
		event.stopPropagation();}
	});
	$("#filtersdropdown").click(function(event){
		if($("#filtersdropdown").css('display') != 'none'){
		event.stopPropagation();}
	});
	
	
	
	
	$(".dashboardprimemainboxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemainboxesouterselected')){
			selectedtab.removeClass('dashboardprimemainboxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemainboxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
				console.log("code");
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookings/selectbooking", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	$(".dashboardprimemain1boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain1boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain1boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain1boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/employees/selectemployee", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	$(".dashboardprimemain2boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain2boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain2boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain2boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/billing/selectbilling", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});

	$(".dashboardprimemain4boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain4boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain4boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain4boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/locations/selectlocation", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	
	$(".dashboardmainleft3leftboxes").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab1 && selectedtab1.hasClass('dashboardmainleft3leftboxesselected')){
			selectedtab1.removeClass('dashboardmainleft3leftboxesselected');
		}
		selectedtab1 = $(this);
		$(this).addClass('dashboardmainleft3leftboxesselected');
				
				$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
				console.log("code");
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: $(this).attr('data-type'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('<table class="stdtable" style="height:450px; text-align:left; padding-left:20px;"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>');
						$("#dashboardmainleft3right").html('').html(data);
					});
				
	});
	
	$(".accountfields").keyup(function(){$(".formerrorsaccount").remove();if (request){request.abort();}});
	$(".accountfields").change(function(){$(".formerrorsaccount").remove();if (request){request.abort();}});
	
	
	$("#dashboardmainrightclose").css({'left':((width-1110)/2)+5-81});
	$("#dashboardmainrightclose").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
		if($(".formerrorsbook").offset()){$(".formerrorsbook").remove();}

		$('#archivetoggle').iCheck('destroy');
		if(request_right){request_right.abort();}
		
		$("#dashboardmainright").html('<table class="stdtable" style="height:450px; text-align:left; padding-left:20px;"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmain")).removeClass('dashboardmainrightactive').stop().animate({
			width: 300
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#dashboardmainrightclose").hide();
		var url='/dashboard/';
		History.pushState('','',url);
	});
	
	$("#booknowbtnprivate").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/booknow", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
	
	$("#booknowbtncorporate").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/booknow_corporate", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
	
	$("#booknowbtnadmin").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/booknow_admin", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

	
	$("#booknowbtnprivatewwc").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/booknow_wwc", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
	
	$("#booknowbtncorporatewwc").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/booknow_corporate_wwc", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
	
	
	$(".btncancel").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	
	$(".btnrefuse").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	
	$(".btnconfirm").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	
	$(".btndetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});

	$(".btnredetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	
	$(".btnbill").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});
	
	$(".settingsbtn_admin").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/settings_admin", { 
						type: $(this).attr('data-type'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
	
	
	$("#addemployeebtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/addemployee_admin", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

	$("#addlocationbtnadmin").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/addlocation_admin", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

	$("#addlocationbtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request_right=$.post("https://winwincab.com/ajax/dashboard/addlocation_private", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
	
	$("#feedbackbtn").live('click', function(){
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
				if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
				if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
				if(request_right){request_right.abort();}
					request_right=$.post("https://winwincab.com/ajax/corporate/dashboard/feedback", { 
						type: $(this).attr('data-type'),
//						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').append(data);
					});
				
	});
	
	$("#complaintbtn").live('click', function(){
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
				if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
				if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
				if(request_right){request_right.abort();}
					request_right=$.post("https://winwincab.com/ajax/corporate/dashboard/complaint", { 
						type: $(this).attr('data-type'),
//						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').append(data);
					});
				
	});

	$("#buttonconfirmdetail").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingconfirmdetail", { 
								id: that.attr('data-booking-id'),
								driver_id: $('option:selected', $('#driver')).val(),
								vehicle_id: $('option:selected', $('#vehicle')).val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonconfirmdetail1").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingconfirmdetail", { 
								id: that.attr('data-booking-id'),
								operator_id: $('option:selected', $('#operator')).val(),
								vehiclemodel_id: $('option:selected', $('#vehiclemodel')).val(),
								drivername: $('#drivername').val(),
								driverphone: $('#driverphone').val(),
								vehiclenumber: $('#vehiclenumber').val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonconfirmredetail").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingconfirmredetail", { 
								id: that.attr('data-booking-id'),
								driver_id: $('option:selected', $('#driver')).val(),
								vehicle_id: $('option:selected', $('#vehicle')).val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonconfirmredetail1").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingconfirmredetail", { 
								id: that.attr('data-booking-id'),
								operator_id: $('option:selected', $('#operator')).val(),
								vehiclemodel_id: $('option:selected', $('#vehiclemodel')).val(),
								drivername: $('#drivername').val(),
								driverphone: $('#driverphone').val(),
								vehiclenumber: $('#vehiclenumber').val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});
	
	$("#buttonconfirm").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingconfirm", { 
								id: that.attr('data-booking-id'),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonbill").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingbill", { 
								id: that.attr('data-booking-id'),
								amount: $("#amount").val(),
								status: $("#status").val(),
								extra_charges: $("#extra_charges").val(),
								distance: $("#distance").val(),
								time: $("#time").val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttoncancel").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingcancel", { 
								id: that.attr('data-booking-id'),
							},
							function(data) {
								if (data.status == "success"){
									if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		
		$("#dashboardmainright").html('<table class="stdtable" style="height:400px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		
				console.log("code");
				console.log($('.dashboardprimemainboxesouterselected').attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookings/selectbooking", { 
						id: $('.dashboardprimemainboxesouterselected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
								}else{
									alert(data['status']);
								}
							});
	});
	
	$("#buttoncancel1").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingcancel", { 
								id: that.attr('data-booking-id'),
								phone: $("#adminphone").val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonrefuse").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingrefuse", { 
								id: that.attr('data-booking-id'),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$(".btneditemployee").live('click', function(){
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request=$.post("https://winwincab.com/ajax/dashboard/editemployee_admin", { 
						type: 'yes',
						id: $(this).attr('data-employee-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
	
	$(".btnstatusemployee").live('click', function(){
		$("#dashboardmainright").detach().css({"top":60}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: 1105+(width-1100)/2
		}, 600, "easeOutQuart", function(){
			$("#dashboardmainrightclose").show();
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
		request=$.post("https://winwincab.com/ajax/dashboard/changestatusemployee_admin", { 
						type: 'yes',
						id: $(this).attr('data-employee-id'),
						changetype: $(this).attr('data-type'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

	$("#employeesavebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var firstname = $("#fieldemployeefirstname");
				var lastname = $("#fieldemployeelastname");
				var email = $("#fieldemployeeemail");
				var phone = $("#fieldemployeephone");
				var level = $("#fieldemployeelevel");
				var gender = $("input[type='radio'][name='employeegender']:checked");
				
				
				if (($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 && email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) && email.val().lastIndexOf('@') < email.val().lastIndexOf('.')
					&& $.trim(firstname.val()) != '' && $.trim(lastname.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val()) 
					&& $.trim(level.val()) != '' && $("input:radio[name='employeegender']").is(":checked")){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/addemployee_admin_save", { 
								level: level.val(),
								firstname: firstname.val(),
								lastname: lastname.val(),
								email: email.val(),
								phone: phone.val(),
								gender: gender.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmain")).removeClass('dashboardmainrightactive').stop().animate({
										width: 300
									}, 600, "easeOutQuart", function(){
										$('html, body').stop().scrollTop(0);
									});
									$("#dashboardmainrightclose").hide();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(email.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if (email.val().length >=250){
						$('<div class="formerrorsbookgreen">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if ($.trim(email.val()) != '' && (email.val().indexOf('.') == '-1' || email.val().indexOf('@') == '-1' || email.val().indexOf('@') == (email.val().length-1) || email.val().lastIndexOf('@') > email.val().lastIndexOf('.'))){
						$("<div class='formerrorsbookgreen'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					if ($.trim(level.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter designation!</div>').css('top', level.offset().top - 15).css('left', level.offset().left + 10).appendTo("body");
					}
					if ($.trim(firstname.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter first name!</div>').css('top', firstname.offset().top - 15).css('left', firstname.offset().left + 10).appendTo("body");
					}
					if ($.trim(lastname.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter last name!</div>').css('top', lastname.offset().top - 15).css('left', lastname.offset().left + 10).appendTo("body");
					}
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrorsbookgreen">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrorsbookgreen'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					if(!$("input:radio[name='employeegender']").is(":checked")){
						$('<div class="formerrorsbookgreen">Please choose gender!</div>').css('top', $("input:radio[name='employeegender']").offset().top - 10).css('left', $("input:radio[name='employeegender']").offset().left + 120).appendTo("body");
					}
				}
	});

	$("#employeestatusbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('WORKING');
							request=$.post("https://winwincab.com/ajax/dashboard/changestatusemployee_admin_save", { 
								changetype: $(this).attr('data-changetype'),
								id: $(this).attr('data-employee-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val($(this).attr('data-changetype')+'d');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmain")).removeClass('dashboardmainrightactive').stop().animate({
										width: 300
									}, 600, "easeOutQuart", function(){
										$('html, body').stop().scrollTop(0);
									});
									$("#dashboardmainrightclose").hide();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.val($(this).attr('data-changetype'));
								}
							});
							
					}
				else{
					
				}
	});

	$("#employeeeditbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var firstname = $("#fieldemployeefirstname");
				var lastname = $("#fieldemployeelastname");
				var email = $("#fieldemployeeemail");
				var phone = $("#fieldemployeephone");
				var level = $("#fieldemployeelevel");
				var gender = $("input[type='radio'][name='employeegender']:checked");
				
				
				if (($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 && email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) && email.val().lastIndexOf('@') < email.val().lastIndexOf('.')
					&& $.trim(firstname.val()) != '' && $.trim(lastname.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val()) 
					&& $.trim(level.val()) != '' && $("input:radio[name='employeegender']").is(":checked")){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/editemployee_admin_save", { 
								level: level.val(),
								firstname: firstname.val(),
								lastname: lastname.val(),
								email: email.val(),
								phone: phone.val(),
								gender: gender.val(),
								id: $(this).attr('data-employee-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val('SAVED');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmain")).removeClass('dashboardmainrightactive').stop().animate({
										width: 300
									}, 600, "easeOutQuart", function(){
										$('html, body').stop().scrollTop(0);
									});
									$("#dashboardmainrightclose").hide();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(email.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if (email.val().length >=250){
						$('<div class="formerrorsbookgreen">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if ($.trim(email.val()) != '' && (email.val().indexOf('.') == '-1' || email.val().indexOf('@') == '-1' || email.val().indexOf('@') == (email.val().length-1) || email.val().lastIndexOf('@') > email.val().lastIndexOf('.'))){
						$("<div class='formerrorsbookgreen'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					if ($.trim(level.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter designation!</div>').css('top', level.offset().top - 15).css('left', level.offset().left + 10).appendTo("body");
					}
					if ($.trim(firstname.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter first name!</div>').css('top', firstname.offset().top - 15).css('left', firstname.offset().left + 10).appendTo("body");
					}
					if ($.trim(lastname.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter last name!</div>').css('top', lastname.offset().top - 15).css('left', lastname.offset().left + 10).appendTo("body");
					}
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrorsbookgreen">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrorsbookgreen'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					if(!$("input:radio[name='employeegender']").is(":checked")){
						$('<div class="formerrorsbookgreen">Please choose gender!</div>').css('top', $("input:radio[name='employeegender']").offset().top - 10).css('left', $("input:radio[name='employeegender']").offset().left + 120).appendTo("body");
					}
				}
	});

	$("#locationstatusbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('WORKING');
							if(!request_dl){
								request_dl=$.post("https://winwincab.com/ajax/dashboard/deletelocation_admin_save", { 
								changetype: $(this).attr('data-changetype'),
								id: $(this).attr('data-location-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val($(this).attr('data-changetype')+'d');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmain")).removeClass('dashboardmainrightactive').stop().animate({
										width: 300
									}, 600, "easeOutQuart", function(){
										$('html, body').stop().scrollTop(0);
									});
									$("#dashboardmainrightclose").hide();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
				if(true){
					request_sp=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: 'locations',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable" style="height:450px; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
						$("#dashboardmainleft3right").html('').html(data);
					});
				}
					
								}else{
									that.val($(this).attr('data-changetype'));
								}
							});
							}
							
					}
				else{
					
				}
	});

	$("#locationaddbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var zone = $("#fieldzone");
				var address = $("#fieldaddress");
				
				
				if ($.trim(zone.val()) != '' && $.trim(address.val()) != ''){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							if(request_al){request_al.abort();}
							if(true){
								that.val('SAVING');
								request_al=$.post("https://winwincab.com/ajax/dashboard/addlocation_admin_save", { 
								zone: zone.val(),
								address: address.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmain")).removeClass('dashboardmainrightactive').stop().animate({
										width: 300
									}, 600, "easeOutQuart", function(){
										$('html, body').stop().scrollTop(0);
									});
									$("#dashboardmainrightclose").hide();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center"><img src="/media/images/white.gif" height="100"></td></tr></table>');
				
				if(true){
					request_sp=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: 'locations',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable" style="height:450px; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
						$("#dashboardmainleft3right").html('').html(data);
					});
				}
					

								}else{
									that.val('SAVE');
								}
							});
							}
							
					}
				else{
					if ($.trim(zone.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter a zone!</div>').css('top', zone.offset().top - 15).css('left', zone.offset().left + 10).appendTo("body");
					}
					if ($.trim(address.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter address!</div>').css('top', address.offset().top - 15).css('left', address.offset().left + 10).appendTo("body");
					}
				}
	});

});