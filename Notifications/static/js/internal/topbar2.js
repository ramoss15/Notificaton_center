$(document).ready(function(){
var scrolleddown = false;
var iScrollPos = 0;
	$(window).scroll(function() {
         if ($(window).scrollTop() > 60 && !scrolleddown) {
			var iCurScrollPos = $(this).scrollTop();
			if (iCurScrollPos > iScrollPos) {
				scrolleddown = true;
				$('#topbar').removeClass('absolute').addClass('fixed').addClass('topbarscrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
				$('#topbarblue').removeClass('absolute').addClass('fixed').addClass('topbarbluescrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
				$('#topbargray').removeClass('absolute').addClass('fixed').addClass('topbargrayscrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
				$('#topbarred').removeClass('absolute').addClass('fixed').addClass('topbarredscrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
				$('#topbarbluet').removeClass('absolute').addClass('fixed').addClass('topbarbluetscrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
				$('#topbargrayt').removeClass('absolute').addClass('fixed').addClass('topbargraytscrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
				$('#topbarwhitet').removeClass('absolute').addClass('fixed').addClass('topbarwhitetscrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
				$('#topbarredt').removeClass('absolute').addClass('fixed').addClass('topbarredtscrolled').css({top:-64}).animate({top : "0px"}, 300, function(){});
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
				$('#topbar').removeClass('topbarscrolled').removeClass('fixed').addClass('absolute');
				$('#topbarblue').removeClass('topbarbluescrolled').removeClass('fixed').addClass('absolute');
				$('#topbargray').removeClass('topbargrayscrolled').removeClass('fixed').addClass('absolute');
				$('#topbarred').removeClass('topbarredscrolled').removeClass('fixed').addClass('absolute');
				$('#topbarbluet').removeClass('topbarbluetscrolled').removeClass('fixed').addClass('absolute');
				$('#topbargrayt').removeClass('topbargraytscrolled').removeClass('fixed').addClass('absolute');
				$('#topbarwhitet').removeClass('topbarwhitetscrolled').removeClass('fixed').addClass('absolute');
				$('#topbarredt').removeClass('topbarredtscrolled').removeClass('fixed').addClass('absolute');
			}
			iScrollPos = iCurScrollPos;
				
			}
         }
    });	
	
	
	$("#topbarinnerrighttopbox_user").hover(function() {
      $("#topbarinnerdropdownuser").stop().show();
	}, function(){
      $("#topbarinnerdropdownuser").stop().hide();
	});
	
	$("#topbarinnerdropdownuser").hover(function() {
	  $("#topbarinnerrighttopbox_user").addClass("hovereduser");
      $("#topbarinnerdropdownuser").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox_user").removeClass("hovereduser");
      $("#topbarinnerdropdownuser").stop().hide();
	});
	
	$("#topbarinnerrighttopbox_blue_user").hover(function() {
      $("#topbarinnerdropdownuser_blue").stop().show();
	}, function(){
      $("#topbarinnerdropdownuser_blue").stop().hide();
	});
	
	$("#topbarinnerdropdownuser_blue").hover(function() {
	  $("#topbarinnerrighttopbox_blue_user").addClass("hovereduser");
      $("#topbarinnerdropdownuser_blue").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox_blue_user").removeClass("hovereduser");
      $("#topbarinnerdropdownuser_blue").stop().hide();
	});

	$("#topbarinnerrighttopbox_gray_user").hover(function() {
      $("#topbarinnerdropdownuser_gray").stop().show();
	}, function(){
      $("#topbarinnerdropdownuser_gray").stop().hide();
	});
	
	$("#topbarinnerdropdownuser_gray").hover(function() {
	  $("#topbarinnerrighttopbox_gray_user").addClass("hovereduser");
      $("#topbarinnerdropdownuser_gray").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox_gray_user").removeClass("hovereduser");
      $("#topbarinnerdropdownuser_gray").stop().hide();
	});

	$("#topbarinnerrighttopbox_gray_user_fixed").hover(function() {
      $("#topbarinnerdropdownuser_gray").stop().show();
	}, function(){
      $("#topbarinnerdropdownuser_gray").stop().hide();
	});
	
	$("#topbarinnerdropdownuser_gray_fixed").hover(function() {
	  $("#topbarinnerrighttopbox_gray_user_fixed").addClass("hovereduser");
      $("#topbarinnerdropdownuser_gray").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox_gray_user_fixed").removeClass("hovereduser");
      $("#topbarinnerdropdownuser_gray").stop().hide();
	});

	$("#topbarinnerrighttopbox_gray_user_ets").hover(function() {
      $("#topbarinnerdropdownuser_ets").stop().show();
	}, function(){
      $("#topbarinnerdropdownuser_ets").stop().hide();
	});
	
	$("#topbarinnerdropdownuser_gray_ets").hover(function() {
	  $("#topbarinnerrighttopbox_gray_user_ets").addClass("hovereduser");
      $("#topbarinnerdropdownuser_gray").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox_gray_user_ets").removeClass("hovereduser");
      $("#topbarinnerdropdownuser_gray").stop().hide();
	});

	$("#topbarinnerrighttopbox_red_user").hover(function() {
      $("#topbarinnerdropdownuser_red").stop().show();
	}, function(){
      $("#topbarinnerdropdownuser_red").stop().hide();
	});
	
	$("#topbarinnerdropdownuser_red").hover(function() {
	  $("#topbarinnerrighttopbox_red_user").addClass("hovereduser");
      $("#topbarinnerdropdownuser_red").stop().show();
	}, function(){
	  $("#topbarinnerrighttopbox_red_user").removeClass("hovereduser");
      $("#topbarinnerdropdownuser_red").stop().hide();
	});
	
});