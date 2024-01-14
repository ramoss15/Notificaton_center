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
	    map.fitBounds(bounds1, { left: $('.hello_routesmap > div.overlay').width()+20, top: 0 });
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

	
	$(".hello_header > div+div > div.lower > div").on('click', function(e){
		$('html, body').animate({
	        scrollTop: $("div.hello_header+div").offset().top - $(".topbar").height()
	    }, 500);
	});
	

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


	$(".hello_routesmap > div.overlay > div > div.routebox").on('click', function(e){
		if(!$(this).hasClass('active')){
			$(".hello_routesmap > div.overlay > div > div.routebox.active").removeClass('active');
			$(this).addClass('active');
		}
	});



//    clearTimeout(timer);

});