var request, set, width = parseInt(document.width), height=parseInt($(window).height());

$(document).ready(function(){
	
	$('.tipsy1').tipsy({gravity: 'nw', fade: true, live: true});

	if($(".scroll_nav").length){
		var _$nav=$(".sections_nav");
		var _$window=$(window);
		var _win_scroll_top=_$window.scrollTop();
		var _win_height=_$window.height();
		var _nav_offset=_$nav.offset();
		var _nav_height=_$nav.height();
		var _$hello_support=$(".hello_support");
		var _section_offset=_$hello_support.offset();
		var _section_height=_$hello_support.height();

		var _top_padding=_win_height/2-_nav_height/2;
		var _fixed_set=false;
		var _stuck_to_bottom=false;
		var _CATEGORY_PADDING_TOP_PX= parseInt($(".support_main ul.sections > li").css('marginTop'));

		function _calculateQuestionCategoryOffsets(){
			var categories=[];
			$(".hello_support ul.sections > li").each(function(){
				categories.push({
					id:$(this).attr("data-section-id"),
					top:$(this).offset().top-_CATEGORY_PADDING_TOP_PX
				})
			});
			return categories;
		}

		var _categories=_calculateQuestionCategoryOffsets();
		
		var _updateQuestionNavPosition = function(force_reposition){
//			var FUDGE_FACTOR=16;
			var FUDGE_FACTOR=0;
			if(_win_scroll_top>_nav_offset.top-_top_padding){
				
				if(_win_scroll_top>_section_offset.top+_section_height-_nav_height-_top_padding-FUDGE_FACTOR){
					_$nav.addClass("stuck_to_bottom").css({top:_section_offset.top+_section_height-_nav_height-FUDGE_FACTOR});
					_stuck_to_bottom=true
				}else if(_stuck_to_bottom){
					var nav_top = _$nav.offset().top;
					var nav_left = _$nav.offset().left;
					_$nav.removeClass("stuck_to_bottom").css({'top': nav_top - _win_scroll_top, 'left': nav_left});
					_stuck_to_bottom=false
				}else if(!_fixed_set||force_reposition){
					var nav_top = _$nav.offset().top;
					var nav_left = _$nav.offset().left;
					_$nav.detach().appendTo("body").addClass("fixed").css({'top': nav_top - _win_scroll_top, 'left': nav_left});
					_fixed_set=true
				}
			}else if(_fixed_set){
				_resetQuestionNavPosition()
			}
		};


		_updateQuestionNavState(_categories,_win_scroll_top);
		

		var _scrollHander = function(){
			_win_scroll_top=_$window.scrollTop();
			_updateQuestionNavPosition();
			_updateQuestionNavState(_categories,_win_scroll_top);
		};


		$('.hello_support ul.questions > li > h4 > a').on('click', function(e){
			e.preventDefault();
			$(this).parents("ul.questions > li").toggleClass('expanded');
			$(this).find('.fa').toggleClass('fa-plus-square-o').toggleClass('fa-minus-square-o');

			_categories=_calculateQuestionCategoryOffsets();
			_updateQuestionNavState(_categories,_$window.scrollTop());
			_section_height=_$hello_support.height();
		});

		$(".sections_nav > ul > li > a").on("click",function(e){
			var id=$(e.target).data("section-id");
			var category=_categories.filter(function(element){return element.id===id});
			if(category.length===0)return;
			var scroll_position=category[0].top - (height/2 - _nav_height/2);
			$("html, body").animate({scrollTop:scroll_position+20},500);
			e.preventDefault();
		});


		

		_$window.scroll(_scrollHander);

		
		
		

		
		function _resetQuestionNavPosition(){
			_$nav.removeClass("stuck_to_bottom").css({top:"", left:""});
			_$nav.removeClass("fixed").detach();
			$(".hello_support > div > h1").after(_$nav);
			_stuck_to_bottom=false;
			_fixed_set=false
		}

		function _updateQuestionNavState(categories,win_scroll_top){
			$(".sections_nav > ul > li > a").removeClass("active");
			for(var i=categories.length-1;i>=0;i--){
				if(win_scroll_top>categories[i].top - (height/2 - _nav_height/2)){
					$('.sections_nav > ul > li > a[data-section-id="'+categories[i].id+'"]').addClass("active");
					return;
				}
			}
			$('.sections_nav > ul > li > a[data-section-id="Service"]').addClass("active");
		}
	}












	$(".feedbackform").submit(function(e){
		
		e.preventDefault();
		var that;
		var that1=$('button[name=feedback_btn]');
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$(".feedback div p.error").hide();
			that=$(this);
				var phone = $("input[name=phone]");
				var email = $("input[name=email]");
				var subject = $("input[name=subject]");
				var message = $("textarea[name=message]");

				that1.text('Working');
				
				if (($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 && email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) && email.val().lastIndexOf('@') < email.val().lastIndexOf('.')
					 && ($.trim(message.val()) != '') && 
					 ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val())){
					request=$.post("https://derbii.com/ajax/support/feedback", { 
						reason: "form",
						subject: subject.val(),
						email: email.val(),
						phone: phone.val(),
						message: message.val(),
					},
					function(data) {
						if (data.status == "success"){
//							mixpanel.track("privatesignuppagesuccess");
							
							$(".feedback_prefeedback").hide();
							$(".feedback_postfeedback").show();
							

						}else{
							that1.text('Send');
							if(data.reason == "other"){
								$(".feedback div p.error").text("There was a problem while saving your feedback. Our servers seem to be overloaded. Please try again in a while.").show();
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
					if ($.trim(phone.val()) == ''){
						$('<div class="formerrors">Please enter your phone number!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (phone.val().length !=10){
						$('<div class="formerrors">Should be 10 digits long!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					else if (isNaN(parseFloat(phone.val())) || !isFinite(phone.val())){
						$("<div class='formerrors'>That doesn't look like a valid phone number!</div>").css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
					}
					if ($.trim(message.val()) == ''){
						$('<div class="formerrors">Please enter a message!</div>').css('top', message.offset().top - 15).css('left', message.offset().left + 10).appendTo("body");
					}
					
					that1.text('Send');
				}
	});




	
	
	


	$(document).keypress(function(e){
		if(e.which == 13) {
			e.preventDefault();
		var that;
		var that1=$('button[name=feedback_btn]');
		if($(".formerrors").offset()){$(".formerrors").remove();}
		$(".feedback div p.error").hide();
			that=$(this);
				var email = $("input[name=email]");
				var subject = $("input[name=subject]");
				var message = $("textarea[name=message]");

				that1.text('Working');
				
				if (($.trim(email.val()) != '') && email.val().length <= 250 && email.val().indexOf('.') != -1 && email.val().indexOf('@') != -1 && email.val().indexOf('@') != (email.val().length-1) && email.val().lastIndexOf('@') < email.val().lastIndexOf('.')
					 && ($.trim(message.val()) != '')){
					request=$.post("https://derbii.com/ajax/support/feedback", { 
						reason: "form",
						subject: subject.val(),
						email: email.val(),
						message: message.val(),
					},
					function(data) {
						if (data.status == "success"){
//							mixpanel.track("privatesignuppagesuccess");
							
							$(".feedback_prefeedback").hide();
							$(".feedback_postfeedback").show();
							

						}else{
							that1.text('Send');
							if(data.reason == "other"){
								$(".feedback div p.error").text("There was a problem while saving your feedback. Our servers seem to be overloaded. Please try again in a while.").show();
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
					if ($.trim(message.val()) == ''){
						$('<div class="formerrors">Please enter a message!</div>').css('top', message.offset().top - 15).css('left', message.offset().left + 10).appendTo("body");
					}
					
					that1.text('Send');
				}
		}
		
	});
	
	
	$(".field").keyup(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
	$(".field").change(function(e){if(e.which != 13){$(".formerrors").remove();if (request){request.abort();}}});
});