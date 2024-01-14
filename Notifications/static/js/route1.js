(function() {

		var oldFitBounds = google.maps.Map.prototype.fitBounds;

		google.maps.Map.prototype.fitBounds = function(bounds, opts) {
				if(opts) {
						var map     = this,
								scale   = Math.pow(2,this.getZoom());

						/* Helper methods */

						var _convertLatLngToPixel = function(latlng) {
								var proj = map.getProjection();
								var point = proj.fromLatLngToPoint(latlng);
								return {
										x: point.x * scale,
										y: point.y * scale
								}
						}

						var _convertPixelToLatLng = function(pixel) {
								var proj = map.getProjection();
								var point = new google.maps.Point(pixel.x / scale, pixel.y / scale);
								return proj.fromPointToLatLng(point);
						}

						var _getPixelBounds = function(bounds, cb) {
								if(map.getProjection()) {
										var returnVal = {
												sw: _convertLatLngToPixel(bounds.getSouthWest()),
												ne: _convertLatLngToPixel(bounds.getNorthEast())
										}
										cb(returnVal);
								}
								else {
										google.maps.event.addListener(map, 'projection_changed', function () {
												_getPixelBounds(bounds, cb);
										});
								}
						}

						var _extendBoundsByPaddingValue = function(bounds, opts) {
								_getPixelBounds(bounds, function(pxbounds) {
										for(var prop in opts) {
												switch(prop) {
												case 'left':
														pxbounds.sw.x -= opts.left;
														break;
												case 'top':
														pxbounds.ne.y -= opts.top;
														break;
												case 'right':
														pxbounds.ne.x += opts.right;
														break;
												case 'bottom':
														pxbounds.sw.y += opts.bottom;
														break;
												}
										}
										var bounds = new google.maps.LatLngBounds(_convertPixelToLatLng(pxbounds.sw), _convertPixelToLatLng(pxbounds.ne));
										oldFitBounds.call(map, bounds);
								});
						}

						_extendBoundsByPaddingValue(bounds, opts);
				}
				
				else {
					oldFitBounds.call(this, bounds);
				}

		}
})();

var map_style1 = 
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]




var infoW1content1 = '<div class="iwinner1top">driver</div><div class="iwinner1middle"><div class="iwinner1middleinner">'
var infoW2content1 = '<div class="iwinner1top">timestamp</div><div class="iwinner1middle"><div class="iwinner1middleinner">'
var infoW1content2 = '</div><div class="iwinner1middleinner">'
var infoW1content3 = '</div></div>'
var infoW1options = {
//              alignBottom: true,
                disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-100, 10)
                ,zIndex: null
                ,boxClass: "infowindowouter1"
                ,boxStyle: { 
                  opacity: 1,
                  overflow: "hidden"
                 }
                ,closeBoxMargin: "-20px -20px -20px -20px"
                ,closeBoxURL: "https://www.google.com/intl/en_us/mapfiles/close.gif"
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,pane: "floatPane"
                ,enableEventPropagation: false
        };

var width = parseInt($(document).width());
var height = parseInt($(document).height());
var request_paginate;
var request_expand_image;
var request_map;
var markers = [], marker_attrs = [], infoboxes = [], map, 
	bounds1 = new google.maps.LatLngBounds(), bounds2 = new google.maps.LatLngBounds(), mapinterval, openboxhover = null, openbox = null;

function resetvariables(){
    
    
    for (var i=0; i<markers.length;i++){
        markers[i].setMap(null);
    }
    markers.length = 0;
    marker_attrs.length = 0;
    for (var i=0; i<infoboxes.length;i++){
        infoboxes[i].close();
        infoboxes[i] = null;
    }
    infoboxes.length = 0;
    bounds1 = new google.maps.LatLngBounds(); bounds2 = new google.maps.LatLngBounds(); clearInterval(mapinterval); mapinterval=null;
}

function resetMapView(){
    resetvariables();
};

var trafficLayer = new google.maps.TrafficLayer();
/*
var toggleTrafficdivouter = document.createElement('div');

function TrafficControl(controlDiv, map) {

    var toggleTrafficdiv = document.createElement('div');
    toggleTrafficdiv.style.display = 'table';
    toggleTrafficdiv.style.tableLayout = 'fixed';
    toggleTrafficdiv.style.width = 'auto';
    toggleTrafficdiv.style.lineHeight = '30px';
    toggleTrafficdiv.style.height = '30px';
    toggleTrafficdiv.style.clear = 'both';
    toggleTrafficdiv.style.overflow = 'hidden';
    toggleTrafficdiv.style.borderRadius = '2px';
    toggleTrafficdiv.style.border = '1px solid #dddddd';
    toggleTrafficdiv.style.fontSize = '12px';
    toggleTrafficdiv.style.fontFamily = 'Lato, sans-serif';
    toggleTrafficdiv.style.fontWeight = '400';
    toggleTrafficdiv.style.textTransform = 'uppecase';
    toggleTrafficdivouter.appendChild(toggleTrafficdiv);

}

var toggleTrafficControl = new TrafficControl(toggleTrafficdivouter);*/

function TrafficControl(controlDiv, map) {

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.display = 'table';
    controlUI.style.tableLayout = 'fixed';
    controlUI.style.width = '250px';
    controlUI.style.lineHeight = '30px';
    controlUI.style.height = '30px';
    controlUI.style.clear = 'both';
    controlUI.style.overflow = 'hidden';
    controlUI.style.borderRadius = '2px';
    controlUI.style.border = '1px solid #dddddd';
    controlUI.style.fontSize = '12px';
    controlUI.style.fontFamily = 'Lato, sans-serif';
    controlUI.style.fontWeight = '400';
    controlUI.style.textTransform = 'uppecase';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.marginTop = '11px';
    controlUI.style.marginLeft = '11px';
    controlUI.style.textAlign = "center";
    controlUI.title = 'Click to toggle traffic layer';
    controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
    var controlUI1 = document.createElement('div');
    controlUI1.style.display = 'table-cell';
    controlUI1.style.overflow = 'hidden';
    controlUI1.style.background = '#2980b9';
    controlUI1.style.color = '#f9f9f9';
    controlUI1.style.cursor = 'pointer';
    controlUI1.innerHTML = 'SHOW TRAFFIC';
    controlUI1.setAttribute("selected", "true");
    controlUI.appendChild(controlUI1);

    var controlUI2 = document.createElement('div');
    controlUI2.style.display = 'table-cell';
    controlUI2.style.overflow = 'hidden';
    controlUI2.style.background = '#f9f9f9';
    controlUI2.style.color = '#888888';
    controlUI2.style.cursor = 'pointer';
    controlUI2.innerHTML = 'HIDE TRAFFIC';
    controlUI2.setAttribute("selected", "false");
    controlUI.appendChild(controlUI2);

  // Setup the click event listeners: simply set the map to
  // Chicago
    google.maps.event.addDomListener(controlUI1, 'click', function() {
        if(controlUI1.getAttribute("selected") == "false"){
            trafficLayer.setMap(map);
            controlUI1.style.background = '#2980b9';
            controlUI1.style.color = '#f9f9f9';
            controlUI1.setAttribute("selected", "true");
            controlUI2.style.background = '#f9f9f9';
            controlUI2.style.color = '#888888';
            controlUI2.setAttribute("selected", "false");
        }
    });
    google.maps.event.addDomListener(controlUI2, 'click', function() {
        if(controlUI2.getAttribute("selected") == "false"){
            
            trafficLayer.setMap(null);
            controlUI2.style.background = '#2980b9';
            controlUI2.style.color = '#f9f9f9';
            controlUI2.setAttribute("selected", "true");
            controlUI1.style.background = '#f9f9f9';
            controlUI1.style.color = '#888888';
            controlUI1.setAttribute("selected", "false");    
        }
        
    });

}

function processPoints(geometry, callback, thisArg) {
  if (geometry instanceof google.maps.LatLng) {
    callback.call(thisArg, geometry);
  } else if (geometry instanceof google.maps.Data.Point) {
    callback.call(thisArg, geometry.get());
  } else {
    geometry.getArray().forEach(function(g) {
      processPoints(g, callback, thisArg);
    });
  }
}

function initializemap() {
	
		var mapOptions = {
          center: { lat: 28.61, lng: 77.23},
          zoom: 13,
          streetViewControl: false,
          scrollwheel: false,
          mapTypeControl: false,
          zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: map_style1
        };
        map = new google.maps.Map(document.getElementById('mapcontainer'),
            mapOptions);
        
//  		trafficLayer.setMap(map);

//        var trafficControlDiv = document.createElement('div');
//        var trafficControl = new TrafficControl(trafficControlDiv, map);

//        trafficControlDiv.index = 1;
//        map.controls[google.maps.ControlPosition.TOP_LEFT].push(trafficControlDiv);

        google.maps.event.addListener(map, 'click', function(event) {
        if(openbox){
            openbox.close();
            openbox = null;}
        });
    }





var request, set, width = parseInt(document.width), pos = 0, margin_left = 0, margin_left1 = 0, timer, typecount = 0, fbconvo, scrolled = false, lastscroll = 0;

var pickupzone_selected = false, dropzone_selected=false;

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

$(document).ready(function(){
	initializemap();

	map.data.addListener('addfeature', function(e) {
	    processPoints(e.feature.getGeometry(), bounds1.extend, bounds1);
	    map.fitBounds(bounds1, { left: $('.route_routesmap > div.overlay').width()+20, top: 0 });
  	});

//	map.data.loadGeoJson('https://derbiicdn.storage.googleapis.com/maps/kml-layers/Dwarka-Layer.geojson');
	map.data.loadGeoJson('https://derbii.com/media/maps/data/Dwarka-Layer.geojson');
	map.data.loadGeoJson('https://derbii.com/media/maps/data/Gurgaon-Layer.geojson');

	map.data.setStyle(function(feature) {
/*          var color = '#FFC400';
          if (feature.getProperty('isColorful')) {
            color = feature.getProperty('color');
          }*/
          return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: '#FFC400',
            strokeColor: '#FFAB00',
            strokeWeight: 2
          });
        });

/*	var ctaLayer = new google.maps.KmlLayer({
          url: 'https://derbiicdn.storage.googleapis.com/maps/kml-layers/Dwarka-Layer.kmz',
          map: map
        });*/


	$('.tipsy1').tipsy({gravity: 'nw', fade: true, live: true});


	
	var type = 1;

	
	

	$(window).scroll(function() {
		wS = $(this).scrollTop();
/*		if(wS > lastscroll && wS > 0 && wS < ($("div.hello_header+div").offset().top - $(".topbar").height())){
			
			disableScroll();
			$('html, body').animate({
	        	scrollTop: $("div.hello_header+div").offset().top - $(".topbar").height()
	    	}, 500, function(){
	    		enableScroll();
	    	});
		}
		if(wS < lastscroll && wS <= ($("div.hello_header+div").offset().top - $(".topbar").height()) && wS > 0){
			
			disableScroll();
			$('html, body').animate({
	        	scrollTop: 0
	    	}, 500, function(){
	    		enableScroll();
	    	});
		}*/
/*	   var hT = $(".hello_how div.fbconvoboxinput").offset().top,
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
	   }*/
	   lastscroll = wS;
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


	$(".route_routesmap > div.overlay > div > div.routebox").on('click', function(e){
		if(!$(this).hasClass('active')){
			$(".route_routesmap > div.overlay > div > div.routebox.active").removeClass('active');
			$(this).addClass('active');
		}
	});



  var zone_options = JSON.parse($("form").attr('data-zones'));

  $("input[name=pickup_zone]").autocomplete({
    minLength: 0,
  source: function( request, response ) {
//    
/*    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
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
//    if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//    else{rthat.val( ui.item.address );}
    pickupzone_selected = true;
    $(this).val( ui.item.name );
//    rthat.siblings().val(ui.item.id);
    return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//  var lstr = item.name+' - '+item.address;
//  var lsubstr = lstr.substring(0,50)+'...';
//  var lsubstr = item.name.substring(0,50)+'...';
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
/*    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
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
//    if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//    else{rthat.val( ui.item.address );}
    dropzone_selected = true;
    $(this).val( ui.item.name );
//    rthat.siblings().val(ui.item.id);
    return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//  var lstr = item.name+' - '+item.address;
//  var lsubstr = lstr.substring(0,50)+'...';
//  var lsubstr = item.name.substring(0,50)+'...';
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



  $("#signupbtn").on('click', function(e){
    $(".route_routesmap > div.overlay > div.upper > div.first").hide();
    $(".route_routesmap > div.overlay > div.upper > div.second").show();
  });

  
  $(".invitesignupform").submit(function(e){
    
    e.preventDefault();
    var that;
    var that1=$('button[name=invitesignup_btn]');
    if($(".formerrors").offset()){$(".formerrors").remove();}
    $(".route_routesmap > div.overlay > div.upper > div.second > p.error").hide();
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
//              mixpanel.track("privatesignuppagesuccess");
              
              $(".route_routesmap > div.overlay > div.upper > div.second").hide();
              $(".route_routesmap > div.overlay > div.upper > div.third").show();
              

            }else{
              that1.text('Sign up');
              if(data.reason == "exists_email"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("The email you provided is already registered with us. We'll contact you once we're ready to go live.").show();
              }
              if(data.reason == "exists_phone"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("The phone number you provided is already registered with us. We'll contact you once we're ready to go live.").show();
              }
              if(data.reason == "other"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("There was a problem while signing you up. Our servers seem to be overloaded. Please try again in a while.").show();
              }
              if(data.reason == "no_cookies"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("Your web browser does not appear to have cookies enabled. Cookies are required for signin up with Derbii.").show();
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
/*          else{
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
    $(".route_routesmap > div.overlay > div.upper > div.second > p.error").hide();
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
//              mixpanel.track("privatesignuppagesuccess");
              
              
              $(".route_routesmap > div.overlay > div.upper > div.second").hide();
              $(".route_routesmap > div.overlay > div.upper > div.third").show();
              

            }else{
              that1.text('Sign up');
              if(data.reason == "exists_email"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("The email you provided is already registered with us. We'll contact you once we're ready to go live.").show();
              }
              if(data.reason == "exists_phone"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("The phone number you provided is already registered with us. We'll contact you once we're ready to go live.").show();
              }
              if(data.reason == "other"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("There was a problem while signing you up. Our servers seem to be overloaded. Please try again in a while.").show();
              }
              if(data.reason == "no_cookies"){
                $(".route_routesmap > div.overlay > div.upper > div.second > p.error").text("Your web browser does not appear to have cookies enabled. Cookies are required for signin up with Derbii.").show();
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
/*          else{
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


//    clearTimeout(timer);

});