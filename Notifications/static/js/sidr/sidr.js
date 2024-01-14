var sidr_open = false;

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

	$('.sidr-menu').sidr({
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
	});

});