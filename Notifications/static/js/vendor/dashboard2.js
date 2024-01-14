var width = parseInt($(document).width());
var height = parseInt($(document).height());
var request_paginate, sonic_blue_black;
var request_expand_image;






sonic_blue_black = new Sonic({
			
	width: 100,height: 100,stepsPerFrame: 5,trailLength: 0.7,pointDistance: 0.01,fps: 25,
	backgroundColor: 'rgba(0,0,0,0)',fillColor: '#FDA55D',

	path: [['arc', 50, 50, 30, 0, 360]],

	step: function(point, index, frame) {
		var sizeMultiplier = 3; // try changing this :)
		
		this._.beginPath();
		this._.moveTo(point.x, point.y);
		this._.arc(
			point.x, point.y,
			index * sizeMultiplier, 0,
			Math.PI*2, false
		);
		this._.closePath();
		this._.fill();
	}

});

$(document).ready(function(){
sonic_blue_black.play();

var selectedtab, selectedtab1 = $(".tabs.selected"), request_right;

var dashboardmainrightwidth = $("#dashboardmainright").width();



	function loadinitial(){
		
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		
            $("#dashboardprime").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
                $("#sonicbox").html(sonic_blue_black.canvas);
                console.log("code");
                console.log(selectedtab1.attr('data-id'));
            
            request=$.post("https://derbii.com/vendor/dashboard/selectpage", { 
                        type: selectedtab1.attr('data-type'),
                    },
                    function(data) {
                        $("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
            Select an item on the left to view its details.
        </td></tr></table>');
                        $("#dashboardprime").html('').html(data);

             });			
	}

	loadinitial();



	
	$(document).keyup(function(e) {
    	if (e.keyCode == 27) { // escape key maps to keycode `27`
        	if(request_right){request_right.abort();}
        	if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
			if($(".formerrors").offset()){$(".formerrors").remove();}
		
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
    	}
	});


//	$("#containermain1").css({'height':height});
	
	function get_calendar_height() {
		return parseInt($(document).height()) - 70;
	}

	$(window).resize(function() {
		$('#calendarbox').fullCalendar('option', 'height', get_calendar_height());
	});
	
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
	

	
	$("#dashboardprime > div.main > div.boxes.commutes").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log("code");
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/internal/dashboard/commutes/selectcommute", { 
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
	$("#dashboardprime > div.main > div.boxes.derbiis").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/derbiis/selectderbii", { 
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
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain2boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain2boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain2boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/billing/selectbilling", { 
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
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain4boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain4boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain4boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/locations/selectlocation", { 
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

	$(".dashboardprimemain5boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain5boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain5boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain5boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/fixedcabs/selectfixedcab", { 
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

	$("#dashboardprime > div.main > div.boxes.vehicles").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/vehicles/selectvehicle", { 
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

	$("#dashboardprime > div.main > div.boxes.drivers").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/drivers/selectdriver", { 
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

	$(".dashboardprimemain9boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain9boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain9boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain9boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/drivers/selectdriverprofile", { 
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

	$(".dashboardprimemain8boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain8boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain8boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain8boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log("code");
				console.log($(this).attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/shuttles/selectshuttle", { 
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
	
	$(".tabs").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if(selectedtab1 && selectedtab1.hasClass('selected')){
			selectedtab1.removeClass('selected');
		}
		selectedtab1 = $(this);
		$(this).addClass('selected');

        if(selectedtab1.attr('data-type') == "maps"){
            window.location.replace("https://derbii.com/vendor/dashboard/maps");
        }else{
            $("#dashboardprime").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
                $("#sonicbox").html(sonic_blue_black.canvas);
                console.log("code");
                console.log($(this).attr('data-id'));
                    request=$.post("https://derbii.com/vendor/dashboard/selectpage", { 
                        type: $(this).attr('data-type'),
                    },
                    function(data) {
/*                      if (data.status == "success"){
                            console.log(data);
                        }else{
                            
                        }*/
                        $("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
            Select an item on the left to view its details.
        </td></tr></table>');
                        $("#dashboardprime").html('').html(data);
/*
                        if(selectedtab1.attr('data-type') == "mapalldrivers"){
                            initializemap();
                            requestlocations();
                            map.fitBounds(bounds1);
                            mapinterval = setInterval(requestlocations, 30000);
                        }else{
                            clearInterval(mapinterval);
                        }*/
                    });
        }
				
				
				
	});
	
	$(".accountfields").keyup(function(){$(".formerrors").remove();if (request){request.abort();}});
	$(".accountfields").change(function(){$(".formerrors").remove();if (request){request.abort();}});
	
	
	$("#dashboardmainclosebtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}

		$('#archivetoggle').iCheck('destroy');
		if(request_right){request_right.abort();}
		
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();

		var url='/dashboard/';
		History.pushState('','',url);
	});
	
	$("#booknowbtnprivate").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
					
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/vendor/dashboard/booknow", { 
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
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/vendor/dashboard/booknow_corporate", { 
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
	
	$("#addcommutebtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/internal/dashboard/addcommute", { 
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

	$("#addderbiibtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/internal/dashboard/addderbii", { 
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

	$(".btneditderbii").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/internal/dashboard/editderbii", { 
						type: 'yes',
						id: $(this).attr('data-id'),
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
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/vendor/dashboard/booknow_wwc", { 
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
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);

		request_right=$.post("https://derbii.com/vendor/dashboard/booknow_corporate_wwc", { 
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
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
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
	
	$(".btnrefuse").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
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
	
	$(".btnconfirm").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
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
	
	$(".btndetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
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

	$(".btnundetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
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
	
	$(".btnbill").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/bookingchange", { 
						type: $(this).attr('data-type'),
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

	$(".btnactivate").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
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

	$(".btndeactivate").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
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



	$(".btnnotifyderbii").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiinotify", { 
								id: that.attr('data-id'),
								type: that.attr('data-type'),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});




	$(".btnattach").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
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

	$(".btndetach").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://derbii.com/vendor/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
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

	
	$(".settingsbtn_admin").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/vendor/dashboard/settings_admin", { 
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
	
	

	

	$("#addvehiclebtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/vendor/dashboard/addvehicle", { 
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

	$("#vehiclesavebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var operator = $("#fieldvehicleoperator");
				var vehiclemodel = $("#fieldvehiclevehiclemodel");
				var number = $("#fieldvehiclenumber");
				
				
				if ($.trim(number.val()) != ''){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('SAVING');
							request=$.post("https://derbii.com/vendor/dashboard/addvehicle_save", { 
								operator: $('option:selected', operator).val(),
								vehiclemodel: $('option:selected', vehiclemodel).val(),
								number: number.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.text('SAVED');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									console.log('failure');
									that.text('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(number.val()) == ''){
						$('<div class="formerrors">Please enter number!</div>').css('top', number.offset().top - 15).css('left', number.offset().left + 10).appendTo("body");
					}
				}
	});

	$(".btneditvehicle").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://derbii.com/vendor/dashboard/editvehicle", { 
						type: 'yes',
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

	$("#vehicleeditbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var number = $("#fieldvehiclenumber");
				
				
				if ($.trim(number.val()) != ''){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('SAVING');
							request=$.post("https://derbii.com/vendor/dashboard/editvehicle_save", { 
								number: number.val(),
								id: $(this).attr('data-vehicle-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.text('SAVED');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.text('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(number.val()) == ''){
						$('<div class="formerrors">Please enter number!</div>').css('top', number.offset().top - 15).css('left', number.offset().left + 10).appendTo("body");
					}
				}
	});

	$(".btndeletevehicle").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://derbii.com/vendor/dashboard/deletevehicle", { 
						type: 'yes',
						id: $(this).attr('data-id'),
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

	$("#vehicledeletebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('WORKING');
								request=$.post("https://derbii.com/vendor/dashboard/deletevehicle_save", { 
								changetype: $(this).attr('data-changetype'),
								id: $(this).attr('data-vehicle-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.text($(this).attr('data-changetype')+'d');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardprime").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
									$("#sonicbox").html(sonic_blue_black.canvas);
				if(true){
					request=$.post("https://derbii.com/vendor/dashboard/selectpage", { 
						type: 'vehicles',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
						$("#dashboardprime").html('').html(data);
					});
				}
					
								}else{
									that.text($(this).attr('data-changetype'));
								}
							});
							
					}
				else{
					
				}
	});

	$("#adddriverbtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/vendor/dashboard/adddriver", { 
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

	$("#driversavebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var operator = $("#fielddriveroperator");
				var name = $("#fielddrivername");
				var phone = $("#fielddriverphone");
				
				
				if ($.trim(name.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val()) ){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('SAVING');
							request=$.post("https://derbii.com/vendor/dashboard/adddriver_save", { 
								operator: $('option:selected', operator).val(),
								name: name.val(),
								phone: phone.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.text('SAVED');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									console.log('failure');
									that.text('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(name.val()) == ''){
						$('<div class="formerrors">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
					}
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrors">Please enter phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrors">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrors'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
				}
	});

	$(".btneditdriver").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://derbii.com/vendor/dashboard/editdriver", { 
						type: 'yes',
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

	$("#drivereditbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var name = $("#fielddrivername");
				var phone = $("#fielddriverphone");
				
				
				if ($.trim(name.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val())){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('SAVING');
							request=$.post("https://derbii.com/vendor/dashboard/editdriver_save", { 
								name: name.val(),
								phone: phone.val(),
								id: $(this).attr('data-driver-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.text('SAVED');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.text('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(name.val()) == ''){
						$('<div class="formerrors">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
					}
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrors">Please enter phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrors">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrors'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
				}
	});

	$(".btndeletedriver").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://derbii.com/vendor/dashboard/deletedriver", { 
						type: 'yes',
						id: $(this).attr('data-id'),
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

	$("#driverdeletebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('WORKING');
								request=$.post("https://derbii.com/vendor/dashboard/deletedriver_save", { 
								changetype: $(this).attr('data-changetype'),
								id: $(this).attr('data-driver-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.text($(this).attr('data-changetype')+'d');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardprime").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
									$("#sonicbox").html(sonic_blue_black.canvas);
				if(true){
					request=$.post("https://derbii.com/vendor/dashboard/selectpage", { 
						type: 'drivers',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
						$("#dashboardprime").html('').html(data);
					});
				}
					
								}else{
									that.text($(this).attr('data-changetype'));
								}
							});
							
					}
				else{
					
				}
	});

	$(".btnactivatedriverprofile").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://derbii.com/vendor/dashboard/activatedriverprofile_wwc", { 
						type: 'yes',
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

	$("#driverprofileactivatebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var operator = $("#fielddriveroperator");
				var name = $("#fielddrivername");
				var phone = $("#fielddriverphone");
				
				
				if ($.trim(name.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val()) ){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('SAVING');
							request=$.post("https://derbii.com/vendor/dashboard/activatedriverprofile_wwc_save", { 
								operator: $('option:selected', operator).val(),
								name: name.val(),
								phone: phone.val(),
								id: $(this).attr('data-driverprofile-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.text('SAVED');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									console.log('failure');
									that.text('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(name.val()) == ''){
						$('<div class="formerrors">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
					}
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrors">Please enter phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrors">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrors'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
				}
	});

	$("#addoperatorbtnwwc").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":51}).appendTo("body").addClass('active').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://derbii.com/vendor/dashboard/addoperator_wwc", { 
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


	
	$("#operatorsavebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var name = $("#fieldoperatorname");
				var code = $("#fieldoperatorcode");
				
				
				if (($.trim(code.val()) != '') && code.val().length == 3 && $.trim(name.val()) != ''){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.text('SAVING');
							request=$.post("https://derbii.com/vendor/dashboard/addoperator_wwc_save", { 
								code: code.val(),
								name: name.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.text('SAVED');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.text('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(code.val()) == ''){
						$('<div class="formerrors">Please enter code!</div>').css('top', code.offset().top - 15).css('left', code.offset().left + 10).appendTo("body");
					}
					else if (code.val().length != 3){
						$('<div class="formerrors">Keep it exactly 3 characters long!</div>').css('top', code.offset().top - 15).css('left', code.offset().left + 10).appendTo("body");
					}
					if ($.trim(name.val()) == ''){
						$('<div class="formerrors">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
					}
				}
	});

	
	
	
	$("#feedbackbtn").live('click', function(){
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
				if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
				if($(".formerrors").offset()){$(".formerrors").remove();}
				if(request_right){request_right.abort();}
					request_right=$.post("https://derbii.com/vendor/dashboard/feedback", { 
						type: $(this).attr('data-type'),
//						id: $('#dashboardprime > div.main > div.boxes.selected').attr('data-id'),
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
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
				if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
				if($(".formerrors").offset()){$(".formerrors").remove();}
				if(request_right){request_right.abort();}
					request_right=$.post("https://derbii.com/vendor/dashboard/complaint", { 
						type: $(this).attr('data-type'),
//						id: $('#dashboardprime > div.main > div.boxes.selected').attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
						$("#dashboardmainright").html('').append(data);
					});
				
	});


	$(".removevehicledocbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/vehicle/removedoc", { 
								id: that.attr('data-image-id'),
							},
							function(data) {
								if (data.status == "success"){
									that.parents().eq(1).remove();
								}else{
									alert(data['status']);
								}
							});
	});

	$(".removedriverdocbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/driver/removedoc", { 
								id: that.attr('data-image-id'),
							},
							function(data) {
								if (data.status == "success"){
									that.parents().eq(1).remove();
								}else{
									alert(data['status']);
								}
							});
	});


	$("#buttonconfirmdetail").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/bookingconfirmdetail", { 
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
				request=$.post("https://derbii.com/vendor/dashboard/bookingconfirmdetail", { 
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
				request=$.post("https://derbii.com/vendor/dashboard/bookingconfirmredetail", { 
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
				request=$.post("https://derbii.com/vendor/dashboard/bookingconfirmredetail", { 
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
				request=$.post("https://derbii.com/vendor/dashboard/bookingconfirm", { 
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

	$("#emailinvoicebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
		$("#emailinvoicebtn").attr('disabled', 'disabled');
				request=$.post("https://derbii.com/vendor/dashboard/bookingbill/emailinvoice", { 
								id: that.attr('data-booking-id'),
							},
							function(data) {
								if (data.status == "success"){
									$("#emailinvoicebtn").removeAttr('disabled');
								}else{
									$("#emailinvoicebtn").removeAttr('disabled');
									alert(data['status']);
								}
							});
	});

	$("#buttonbill_localrental").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/bookingbill", { 
								id: that.attr('data-booking-id'),
								status: $("#status").val(),
								advance: $("#advance").val(),
								extra_charges: $("#extra_charges").val(),
								extra_km: $("#extra_km").val(),
								extra_hr: $("#extra_hr").val(),
								tax_charges: $("#tax_charges").val(),
								parking_charges: $("#parking_charges").val(),
								night_charges: $("#night_charges").val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonbill_airport").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/bookingbill", { 
								id: that.attr('data-booking-id'),
								status: $("#status").val(),
								advance: $("#advance").val(),
								extra_charges: $("#extra_charges").val(),
								tax_charges: $("#tax_charges").val(),
								parking_charges: $("#parking_charges").val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonbill_outstation").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/bookingbill", { 
								id: that.attr('data-booking-id'),
								status: $("#status").val(),
								advance: $("#advance").val(),
								extra_charges: $("#extra_charges").val(),
								extra_km: $("#extra_km").val(),
								driver_allowance_charges: $("#driver_allowance_charges").val(),
								tax_charges: $("#tax_charges").val(),
								parking_charges: $("#parking_charges").val(),
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
				request=$.post("https://derbii.com/vendor/dashboard/bookingcancel", { 
								id: that.attr('data-booking-id'),
							},
							function(data) {
								if (data.status == "success"){
									if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		
		$("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log("code");
				console.log($('#dashboardprime > div.main > div.boxes.selected').attr('data-id'));
					request=$.post("https://derbii.com/vendor/dashboard/bookings/selectbooking", { 
						id: $('#dashboardprime > div.main > div.boxes.selected').attr('data-id'),
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
				request=$.post("https://derbii.com/vendor/dashboard/bookingcancel", { 
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
				request=$.post("https://derbii.com/vendor/dashboard/bookingrefuse", { 
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



	$("#buttonactivate").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiiactivate", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttondeactivate").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiideactivate", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonattach").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/derbiiattach", { 
								id: that.attr('data-derbii-id'),
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

	$("#buttondetach").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/derbiidetach", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttondetail").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/derbiidetail", { 
								id: that.attr('data-derbii-id'),
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

	$("#buttonundetail").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/vendor/dashboard/derbiiundetail", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});



	


	$("#derbiisavebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);

			
				var values_list = new Array();

				$(".bookingcommuteboxes").each(function(index, element){
					if($(element).find("#fieldcommuteid").val() == ''){
						return false;
					}
					var obj = {commute_id: $(element).find("#fieldcommuteid").val(), pickuppos: $(element).find("#fieldpickuppos").val(), 
								droppos: $(element).find("#fielddroppos").val(), pickuptime: $.trim($('option:selected', $(element).find("#fieldpickuptime")).val()), 
								droptime: $.trim($('option:selected', $(element).find("#fielddroptime")).val()), 
								direction: $.trim($('option:selected', $(element).find("#fielddirection")).val())};
					values_list.push(obj);
				});

				var commutes = values_list;
				var reverse = $("#fieldreverse").val();
//				var gender = $("input[type='radio'][name='employeegender']:checked");
				
				
				if ( commutes.length != 0){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							that.attr('disabled', 'disabled');
							that.text('SAVING');
							request=$.post("https://derbii.com/internal/dashboard/addderbii_save", { 
								commutes: JSON.stringify(commutes),
								reverse: reverse,
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.text('SAVED');
									$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
			width: dashboardmainrightwidth
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									if(data.reason == "no_reverse_derbii"){
										alert('No reverse Derbii');				
									}
									if(data.reason == "no_commute"){
										alert('No commute');				
									}
									that.removeAttr('disabled');
									that.text('SAVE');
								}
							});
							
					}
				else{
					if (commutes.length == 0){
						alert('Please enter commutes');
					}
				}
	});



	

	

	$("#settingsbtnpersonal").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var firstname = $("#fieldfirstname");
				var lastname = $("#fieldlastname");
				var email = $("#fieldemail");
				var phone = $("#fieldphone");
				var password0 = $("#fieldpassword0");
				var password1 = $("#fieldpassword1");
				var password2 = $("#fieldpassword2");
//				var gender = $("input[type='radio'][name='employeegender']:checked");
				
				
				if (($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 && email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) && email.val().lastIndexOf('@') < email.val().lastIndexOf('.')
					&& $.trim(firstname.val()) != '' && $.trim(lastname.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val()) 
					&& 
					(($.trim(password0.val()) != '' && $.trim(password1.val()) != '' && password1.val().length >= 6 && $.trim(password2.val()) != '' && $.trim(password1.val()) == $.trim(password2.val())) || ($.trim(password0.val()) == '' && $.trim(password1.val()) == '')) ){

							var passwordchange = "no";
							if ($.trim(password0.val()) != '' && $.trim(password1.val()) != '' && password1.val().length >= 6 && $.trim(password2.val()) != '' && $.trim(password1.val()) == $.trim(password2.val())){
								passwordchange = "yes";
							}else{
								passwordchange = "no";
							}
							
							that.text('SAVING');
							request=$.post("https://derbii.com/vendor/dashboard/settingspersonal_admin_save", { 
								firstname: firstname.val(),
								lastname: lastname.val(),
								email: email.val(),
								phone: phone.val(),
								password0: password0.val(),
								password1: password1.val(),
								password2: password2.val(),
								passwordchange: passwordchange,
								promoemail: $("#fieldpromoemail").is(':checked') ? "yes" : "no",
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.text('SAVED');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
										width: dashboardmainrightwidth
									}, 600, "easeOutQuart", function(){
										$('html, body').stop().scrollTop(0);
									});
									$("#topbarinnerlogoclose").hide();
									$("#topbarinnerlogo").show();
									$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
//									console.log(data.reasons);
									if (data.reasons.indexOf("email") >= 0) {
										$('<div class="formerrors">That email address is already registered with us. Please enter one of your own emails!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
									}
									if (data.reasons.indexOf("phone") >= 0) {
										$('<div class="formerrors">That phone number is already registered with us. Please enter one of your own numbers!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
									}
									if (data.reasons.indexOf("passwordold") >= 0) {
										$("<div class='formerrors'>The old password you entered is incorrect!</div>").css('top', password0.offset().top - 15).css('left', password0.offset().left + 10).appendTo("body");
									}
									if (data.reasons.indexOf("password") >= 0) {
										$("<div class='formerrors'>There was an error while changing your password. Please try again in a short while.</div>").css('top', password1.offset().top - 15).css('left', password1.offset().left + 10).appendTo("body");
									}
									that.text('SAVE');
								}
							});
							
					}
				else{
//					console.log("nono");
					if ($.trim(email.val()) == ''){
						$('<div class="formerrors">Please enter email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if (email.val().length >=250){
						$('<div class="formerrors">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if ($.trim(email.val()) != '' && (email.val().indexOf('.') == '-1' || email.val().indexOf('@') == '-1' || email.val().indexOf('@') == (email.val().length-1) || email.val().lastIndexOf('@') > email.val().lastIndexOf('.'))){
						$("<div class='formerrors'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					if ($.trim(firstname.val()) == ''){
						$('<div class="formerrors">Please enter first name!</div>').css('top', firstname.offset().top - 15).css('left', firstname.offset().left + 10).appendTo("body");
					}
					if ($.trim(lastname.val()) == ''){
						$('<div class="formerrors">Please enter last name!</div>').css('top', lastname.offset().top - 15).css('left', lastname.offset().left + 10).appendTo("body");
					}
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrors">Please enter phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrors">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrors'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
/*					if(!$("input:radio[name='employeegender']").is(":checked")){
						$('<div class="formerrors">Please choose gender!</div>').css('top', $("input:radio[name='employeegender']").offset().top - 10).css('left', $("input:radio[name='employeegender']").offset().left + 120).appendTo("body");
					}*/
					if(!((($.trim(password0.val()) != '' && $.trim(password1.val()) != '' && password1.val().length >= 6 && $.trim(password2.val()) != '' && $.trim(password1.val()) == $.trim(password2.val())) || ($.trim(password0.val()) == '' && $.trim(password1.val()) == '')))){
						if ($.trim(password0.val()) == ''){
							$("<div class='formerrors'>Please enter your old password!</div>").css('top', password0.offset().top - 15).css('left', password0.offset().left + 10).appendTo("body");
						}
						if ($.trim(password1.val()) == ''){
							$("<div class='formerrors'>Please enter a new password!</div>").css('top', password1.offset().top - 15).css('left', password1.offset().left + 10).appendTo("body");
						}
						if (password1.val().length < 6){
							$("<div class='formerrors'>Keep it at least 6 chars long!</div>").css('top', password1.offset().top - 15).css('left', password1.offset().left + 10).appendTo("body");
						}
						if ($.trim(password2.val()) == ''){
							$("<div class='formerrors'>Please re-enter the new password!</div>").css('top', password2.offset().top - 15).css('left', password2.offset().left + 10).appendTo("body");
						}
						if ($.trim(password1.val()) != '' && $.trim(password2.val()) != '' && $.trim(password1.val()) != $.trim(password2.val())){
							$("<div class='formerrors'>The two passwords do not match! Please try again!</div>").css('top', password2.offset().top - 15).css('left', password2.offset().left + 10).appendTo("body");
						}
					}
				}
	});

	


	
	$('#forwardbtnpaginatewwc').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);

		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/search/bookings/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type,
						booking_type: $('option:selected', $('#fieldbookingtype')).val(),
						company: $('option:selected', $('#fieldcompanysearch')).val(),
						status: $('option:selected', $('#fieldbookingstatustype')).val(),
						datefrom: $('#fielddatefrom').val(),
						dateto: $('#fielddateto').val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginatewwc').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/search/bookings/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type,
						booking_type: $('option:selected', $('#fieldbookingtype')).val(),
						company: $('option:selected', $('#fieldcompanysearch')).val(),
						status: $('option:selected', $('#fieldbookingstatustype')).val(),
						datefrom: $('#fielddatefrom').val(),
						dateto: $('#fielddateto').val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}

		
	});




	$('#forwardbtnpaginatesignups').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						commute_type: $('option:selected', $('#fieldcommutetype')).val(),
						status: $('option:selected', $('#fieldcommutestatustype')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						starttimefrom: $('option:selected', $('#fieldstarttimefrom')).val(),
						starttimeto: $('option:selected', $('#fieldstarttimeto')).val(),
						endtimefrom: $('option:selected', $('#fieldendtimefrom')).val(),
						endtimeto: $('option:selected', $('#fieldendtimeto')).val(),
						ref: $('#fieldsearchbyid').val(),
						startarea: $('option:selected', $('#fieldstartarea')).val(),
						endarea: $('option:selected', $('#fieldendarea')).val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginatesignups').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						commute_type: $('option:selected', $('#fieldcommutetype')).val(),
						status: $('option:selected', $('#fieldcommutestatustype')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						starttimefrom: $('option:selected', $('#fieldstarttimefrom')).val(),
						starttimeto: $('option:selected', $('#fieldstarttimeto')).val(),
						endtimefrom: $('option:selected', $('#fieldendtimefrom')).val(),
						endtimeto: $('option:selected', $('#fieldendtimeto')).val(),
						ref: $('#fieldsearchbyid').val(),
						startarea: $('option:selected', $('#fieldstartarea')).val(),
						endarea: $('option:selected', $('#fieldendarea')).val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});
	}

		
	});



	$('#forwardbtnpaginatesignups1').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups1", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/signups1", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						commute_type: $('option:selected', $('#fieldcommutetype')).val(),
						status: $('option:selected', $('#fieldcommutestatustype')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						starttimefrom: $('option:selected', $('#fieldstarttimefrom')).val(),
						starttimeto: $('option:selected', $('#fieldstarttimeto')).val(),
						endtimefrom: $('option:selected', $('#fieldendtimefrom')).val(),
						endtimeto: $('option:selected', $('#fieldendtimeto')).val(),
						ref: $('#fieldsearchbyid').val(),
						startarea: $('option:selected', $('#fieldstartarea')).val(),
						endarea: $('option:selected', $('#fieldendarea')).val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginatesignups1').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups1", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/signups1", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						commute_type: $('option:selected', $('#fieldcommutetype')).val(),
						status: $('option:selected', $('#fieldcommutestatustype')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						starttimefrom: $('option:selected', $('#fieldstarttimefrom')).val(),
						starttimeto: $('option:selected', $('#fieldstarttimeto')).val(),
						endtimefrom: $('option:selected', $('#fieldendtimefrom')).val(),
						endtimeto: $('option:selected', $('#fieldendtimeto')).val(),
						ref: $('#fieldsearchbyid').val(),
						startarea: $('option:selected', $('#fieldstartarea')).val(),
						endarea: $('option:selected', $('#fieldendarea')).val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});
	}

		
	});







	$('#forwardbtnpaginatecommutes').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						commute_type: $('option:selected', $('#fieldcommutetype')).val(),
						status: $('option:selected', $('#fieldcommutestatustype')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						starttimefrom: $('option:selected', $('#fieldstarttimefrom')).val(),
						starttimeto: $('option:selected', $('#fieldstarttimeto')).val(),
						endtimefrom: $('option:selected', $('#fieldendtimefrom')).val(),
						endtimeto: $('option:selected', $('#fieldendtimeto')).val(),
						ref: $('#fieldsearchbyid').val(),
						startarea: $('option:selected', $('#fieldstartarea')).val(),
						endarea: $('option:selected', $('#fieldendarea')).val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginatecommutes').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						commute_type: $('option:selected', $('#fieldcommutetype')).val(),
						status: $('option:selected', $('#fieldcommutestatustype')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						starttimefrom: $('option:selected', $('#fieldstarttimefrom')).val(),
						starttimeto: $('option:selected', $('#fieldstarttimeto')).val(),
						endtimefrom: $('option:selected', $('#fieldendtimefrom')).val(),
						endtimeto: $('option:selected', $('#fieldendtimeto')).val(),
						ref: $('#fieldsearchbyid').val(),
						startarea: $('option:selected', $('#fieldstartarea')).val(),
						endarea: $('option:selected', $('#fieldendarea')).val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});
	}

		
	});


	$('#forwardbtnpaginatefixed').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type
					},
					function(data) {
						console.log(data);
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/search/bookings/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type,
						booking_type: 'Fixed',
						status: $('option:selected', $('#fieldbookingstatustype')).val(),
						datefrom: $('#fielddatefrom').val(),
						dateto: $('#fielddateto').val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginatefixed').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://derbii.com/vendor/dashboard/paginate/search/bookings/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type,
						booking_type: 'Fixed',
						status: $('option:selected', $('#fieldbookingstatustype')).val(),
						datefrom: $('#fielddatefrom').val(),
						dateto: $('#fielddateto').val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('#dashboardprime > div.main').html('').html(data);
					});	
	}

		
	});



	





	
/*	var myDropzone = new Dropzone(document.querySelector("#dashboardmainrightimageuploadleft"), { // Make the whole body a dropzone
		  url: "/billing/submitphoto/", // Set the url
		  thumbnailWidth: 80,
		  thumbnailHeight: 80,
		  parallelUploads: 20,
//		  previewTemplate: previewTemplate,
		  autoQueue: false, // Make sure the files aren't queued until manually added
		  previewsContainer: "#dashboardmainrightimageuploadpreviewsleft", // Define the container to display the previews
//		  clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
	});*/

	

	$(".expandvehicledocbtn").live('click', function(){
		$("#imageoverlaybox").show();
		$("#imageoverlaybox").attr('data-type', 'vehicle');
		var that = $(this);
		$(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_expand_image=$.post("https://derbii.com/vendor/dashboard/vehicle/expanddoc", { 
								id: that.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that.attr('data-image-pos')+"  of  "+that.attr('data-images-count'));
								$(".imageoverlayboxtopbar > div > div.left").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/vendor/dashboard/vehicle/download/docs/'+that.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/vendor/dashboard/vehicle/print/docs/'+that.attr('data-image-id')+'/');
							});
	});

	$(".expanddriverdocbtn").live('click', function(){
		$("#imageoverlaybox").show();
		$("#imageoverlaybox").attr('data-type', 'driver');
		var that = $(this);
		$(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_expand_image=$.post("https://derbii.com/vendor/dashboard/driver/expanddoc", { 
								id: that.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that.attr('data-image-pos')+"  of  "+that.attr('data-images-count'));
								$(".imageoverlayboxtopbar > div > div.left").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/vendor/dashboard/driver/download/docs/'+that.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/vendor/dashboard/driver/print/docs/'+that.attr('data-image-id')+'/');
							});
	});



	$(".imageoverlayclosebtn").live('click', function(){
		$(".imageoverlayboxmain").html('');
		$(".imageoverlaycounttext").text('');
		$(".imageoverlayboxtopbar > div > div.left").text('');
		$(".imageoverlaydownloadlink").attr('href', '#');
		$("#imageoverlaybox").attr('data-type', '');
		$("#imageoverlaybox").hide();
	});

	$(".imageoverlayforwardbtn").live('click', function(){
		var pos = parseInt($("#imageoverlayboxmainimage").attr('data-pos'));
		new_pos = pos+1;
		var that3 = $(".photomain").find("[data-image-pos='"+new_pos+"']");
		if(that3.length != 0){

		$(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		$(".imageoverlaycounttext").text('');
		$(".imageoverlayboxtopbar > div > div.left").text('');
		$(".imageoverlaydownloadlink").attr('href', '#');

		if($("#imageoverlaybox").attr('data-type') == 'vehicle'){
			request_expand_image=$.post("https://derbii.com/vendor/dashboard/vehicle/expanddoc", { 
								id: that3.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that3.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that3.attr('data-image-pos')+"  of  "+that3.attr('data-images-count'));
								$(".imageoverlayboxtopbar > div > div.left").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/vendor/dashboard/vehicle/download/docs/'+that3.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/vendor/dashboard/vehicle/print/docs/'+that3.attr('data-image-id')+'/');
							});

		}

		if($("#imageoverlaybox").attr('data-type') == 'driver'){
			request_expand_image=$.post("https://derbii.com/vendor/dashboard/driver/expanddoc", { 
								id: that3.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that3.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that3.attr('data-image-pos')+"  of  "+that3.attr('data-images-count'));
								$(".imageoverlayboxtopbar > div > div.left").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/vendor/dashboard/driver/download/docs/'+that3.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/vendor/dashboard/driver/print/docs/'+that3.attr('data-image-id')+'/');
							});

		}

		

		}

		
	});

	$(".imageoverlaybackbtn").live('click', function(){
		var pos = parseInt($("#imageoverlayboxmainimage").attr('data-pos'));
		new_pos = pos-1;
		var that3 = $(".photomain").find("[data-image-pos='"+new_pos+"']");
		if(that3.length != 0){

		$(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		$(".imageoverlaycounttext").text('');
		$(".imageoverlayboxtopbar > div > div.left").text('');
		$(".imageoverlaydownloadlink").attr('href', '#');


		if($("#imageoverlaybox").attr('data-type') == 'vehicle'){
			request_expand_image=$.post("https://derbii.com/vendor/dashboard/vehicle/expanddoc", { 
								id: that3.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that3.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that3.attr('data-image-pos')+"  of  "+that3.attr('data-images-count'));
								$(".imageoverlayboxtopbar > div > div.left").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/vendor/dashboard/vehicle/download/docs/'+that3.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/vendor/dashboard/vehicle/print/docs/'+that3.attr('data-image-id')+'/');
							});	
		}
		
		if($("#imageoverlaybox").attr('data-type') == 'driver'){
			request_expand_image=$.post("https://derbii.com/vendor/dashboard/driver/expanddoc", { 
								id: that3.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that3.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that3.attr('data-image-pos')+"  of  "+that3.attr('data-images-count'));
								$(".imageoverlayboxtopbar > div > div.left").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/vendor/dashboard/driver/download/docs/'+that3.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/vendor/dashboard/driver/print/docs/'+that3.attr('data-image-id')+'/');
							});	
		}
		}

		
	});

});