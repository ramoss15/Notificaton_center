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
        "color": "#ffffff"
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
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
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
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f2f2f2"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
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


var zone_options, cabroute_options;

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
          zoom: 14,
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





var request, set, width = parseInt(document.width), pos = 0, margin_left = 0, margin_left1 = 0, timer, typecount = 0, fbconvo, scrolled = false, lastscroll = 0, startzone_selected = false, endzone_selected = false;

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
  zone_options = JSON.parse($(".hello_routesmap").attr('data-zones'));
  cabroute_options = JSON.parse($(".hello_routesmap").attr('data-cabroutes')).reverse();

  var ffroutes_options = JSON.parse($(".hello_routesmap").attr('data-ffroutes'));

  

  var ffroutes_centers = {};

  for (route in ffroutes_options.features){
//    
    var id = ffroutes_options.features[route].properties.Name;
    var coordinates = ffroutes_options.features[route].geometry.coordinates[0];
    var lng_sum = 0.0, lat_sum = 0.0;
    for (coords in coordinates){
//      
      lng_sum+=coordinates[coords][0];
      lat_sum+=coordinates[coords][1];
    }
    ffroutes_centers[id] = {lat: lat_sum/coordinates.length, lng: lng_sum/coordinates.length};
  };

  



//  
//  

	initializemap();

	map.data.addListener('addfeature', function(e) {
	    processPoints(e.feature.getGeometry(), bounds1.extend, bounds1);
	    map.fitBounds(bounds1, { left: 0, top: 0 });
  	});

//	map.data.loadGeoJson('https://derbiicdn.storage.googleapis.com/maps/kml-layers/Dwarka-Layer.geojson');
	map.data.loadGeoJson('https://derbii.com/media/maps/data/FFRoutes.geojson');

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

  var curvature = 0.5;

  var cabroute_html1 = '<div class="border-box clearfix routebox"><h3 class="routename"></h3><div class="border-box clearfix"><div class="border-box clearfix title whitespan1 weight400"><i class="fa fa-home"></i> HOME</div><div class="border-box clearfix content whitespan2 weight300 start_zones"></div><div class="border-box clearfix title whitespan1 weight400"><i class="fa fa-building"></i> WORKPLACE</div><div class="border-box clearfix content whitespan2 weight300 end_zones"></div><div class="border-box clearfix title1 whitespan1 weight400"><i class="fa fa-clock-o"></i> Reach workplace at <span class="colorprim500span start_time"></span></div><div class="border-box clearfix title1 whitespan1 weight400"><i class="fa fa-clock-o"></i> Leave workplace at <span class="colorprim500span end_time"></span></div><div class="border-box clearfix title1 whitespan weight700"><i class="fa fa-taxi"></i> <span class="seats"></span> available</div><div class="border-box clearfix footer"><div class="border-box whitespan1"><i class="fa fa-tag"></i> <span class="colorprim500span"><i class="fa fa-inr"></i> <span class="fare"></span></span> per month <span class="colorprim500span reverse"></span></div><div class="border-box"><button class="btn btn_small btn_outline btn_transparent btnwhite btnroutesignup" data-type="';

  var cabroute_html2 = '">Sign up</button></div></div></div></div>';

  $(".btnroutesignup").live('click', function(){
    window.location.replace('https://derbii.com/invite/signup');
  });

  for (i in cabroute_options){
//    
    $(".hello_routesmap .main").append(cabroute_html1+cabroute_options[i].id+cabroute_html2);
    var new_div = $(".hello_routesmap .main").children().eq(i);
    if (i==0){
//      new_div.addClass("active");
    }

    var start_zones = "";
    var end_zones = "";

//    

    for(j in zone_options){
//      
      if (zone_options[j].subarea__id == cabroute_options[i].start_subarea_id){
        start_zones+=zone_options[j].name + ", ";
      }
      if (zone_options[j].subarea__id == cabroute_options[i].end_subarea_id){
        end_zones+=zone_options[j].name + ", ";
      }
    }

//    
//    

    new_div.find('.start_zones').html(start_zones.substring(0, start_zones.length - 2));
    new_div.find('.end_zones').html(end_zones.substring(0, end_zones.length - 2));

    new_div.find('.routename').html(cabroute_options[i].start_subarea_name+" to " +cabroute_options[i].end_subarea_name);
    new_div.find('.start_time').html(cabroute_options[i].start_time);
    new_div.find('.end_time').html(cabroute_options[i].end_time);
    var seats = (cabroute_options[i].seats == 100) ? "8+" : cabroute_options[i].seats;
    new_div.find('.seats').html((seats == 1) ? seats+" seat" : seats+" seats");
    new_div.find('.fare').html(cabroute_options[i].fare);
    new_div.find('.reverse').html(cabroute_options[i].reverse ? "both ways" : "one way");


    
  }

  var curveMarkers = new Array(cabroute_options.length);

    function updateCurveMarker() {
      for (i in cabroute_options){
        var start_lat = ffroutes_centers[cabroute_options[i].start_subarea_id]['lat'];
        var end_lat = ffroutes_centers[cabroute_options[i].end_subarea_id]['lat'];
        var start_lng = ffroutes_centers[cabroute_options[i].start_subarea_id]['lng'];
        var end_lng = ffroutes_centers[cabroute_options[i].end_subarea_id]['lng'];
        var start_pos = new google.maps.LatLng({lat: start_lat, lng: start_lng});
        var end_pos = new google.maps.LatLng({lat: end_lat, lng: end_lng});

/*        var sitepath = new google.maps.Polyline({
          path: [start_pos, end_pos],
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2,
          map: map
        });*/

        var projection = map.getProjection(), p1 = projection.fromLatLngToPoint(start_pos), p2 = projection.fromLatLngToPoint(end_pos);

        var e = new google.maps.Point(p2.x - p1.x, p2.y - p1.y), // endpoint (p2 relative to p1)
            m = new google.maps.Point(e.x / 2, e.y / 2), // midpoint
            o = new google.maps.Point(e.y, -e.x), // orthogonal
            c = new google.maps.Point( // curve control point
                m.x + curvature * o.x,
                m.y + curvature * o.y);

        var pathDef = 'M 0,0 ' +
            'q ' + c.x + ',' + c.y + ' ' + e.x + ',' + e.y;

        var zoom = map.getZoom(),
            scale = 1 / (Math.pow(2, -zoom));

        var symbol = {
            path: pathDef,
            scale: scale,
            strokeWeight: 2,
            fillColor: '#439fe0',
            strokeColor: '#439fe0'
        };

        if (!curveMarkers[i]) {
            curveMarkers[i] = new google.maps.Marker({
                position: start_pos,
                clickable: false,
                icon: symbol,
                zIndex: 0, // behind the other markers
                map: map
            });
        } else {
            curveMarkers[i].setOptions({
                position: start_pos,
                icon: symbol,
            });
        }
      }
        

/*        if (!curveMarker) {
            curveMarker = new Marker({
                position: pos1,
                clickable: false,
                icon: symbol,
                zIndex: 0, // behind the other markers
                map: map
            });
        } else {
            curveMarker.setOptions({
                position: pos1,
                icon: symbol,
            });
        }*/
    }

    google.maps.event.addListener(map, 'projection_changed', updateCurveMarker);
    google.maps.event.addListener(map, 'zoom_changed', updateCurveMarker);

  function hideCurverMarkers(){
    for (i in curveMarkers){
      curveMarkers[i].setVisible(false);
//      curveMarkers[i].setMap(null);
    }
  }

  $(".routebox").on('click', function(e){
    if (!$(this).hasClass('active')){
      $('.routebox.active').removeClass('active');
      $(this).addClass('active');
      hideCurverMarkers();
//      curveMarkers[$(this).index].setVisible(true);
      var marker = curveMarkers[$(this).index()];
      marker.setVisible(true);
//      curveMarkers[$(this).index].setMap(map);
    }
  });
	
	var type = 1;

  var how_animating = false;

  $("#pricingbtn").on('click', function(e){
    if(!how_animating){
      how_animating = true;
      $('html, body').animate({
          scrollTop: $("div.hello_pricing").offset().top - $(".topbar").height()
      }, 500, function(){how_animating = false});
    }
  });
  $("#routesbtn").on('click', function(e){
    if(!how_animating){
      how_animating = true;
      $('html, body').animate({
          scrollTop: $("div.hello_routesmap").offset().top - $(".topbar").height()
      }, 500, function(){how_animating = false});
    }
  });

	
/*	$(".hello_header > div+div > div.lower > div").on('click', function(e){
		$('html, body').animate({
	        scrollTop: $("div.hello_header+div").offset().top - $(".topbar").height()
	    }, 500);
	});*/


var iScrollPos = 0;



$(document).scroll(function() {
  var iCurScrollPos = $(this).scrollTop();
  if(!how_animating){
    $(".hello_how > div > div.right > div:not(.highlight)").each(function() {

      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).outerHeight();

      if (iCurScrollPos > iScrollPos) {
        if ((elemTop < docViewBottom) && (elemTop > docViewTop) && $(this).index() != 0) {
          
          how_animating = true;
          $("body").animate({ scrollTop: $(this).offset().top }, 500, function(){
            $(".hello_how > div > div.right > div.highlight").removeClass("highlight");
            $(this).addClass("highlight");
            how_animating = false;
          });
          return false;
        }    
      } else if (iCurScrollPos < iScrollPos){
         if ((elemBottom < (docViewBottom)) && (elemBottom > (docViewTop))  && $(this).index() != 4) {
          
          how_animating = true;
          $("body").animate({ scrollTop: $(this).offset().top }, 500, function(){
            $(".hello_how > div > div.right > div.highlight").removeClass("highlight");
            $(this).addClass("highlight");
            how_animating = false;
          });
          return false;
        } 
      }
        
    });
  }
   iScrollPos = iCurScrollPos;
});
  
  

/*  var checkscroll = function(elem){
    

  }​;*/


var how_position = 0;

var how_height = $(".hello_how").outerHeight();

	$(window).scroll(function() {
    var wS = $(this).scrollTop();
    if ($(window).scrollTop() > $(".hello_how").offset().top && $(window).scrollTop() <= $(".hello_how > div > div.right > div:last-child").offset().top) {
      $(".hello_how > div > div.left").css({position: 'fixed', left: $('.hello_how').css('padding-left'), top:'0', bottom:'auto', width: $(".hello_how").width()/2});

      var childHeight = $(".hello_how > div > div.right > div:last-child").outerHeight();
      var innerScroll = $(this).scrollTop() - $(".hello_how").offset().top;
      how_position = Math.floor(innerScroll/childHeight);
      var how_mod = innerScroll%childHeight;

      var factor = innerScroll/$(".hello_how").outerHeight();
      $(".hello_how div.carousel_inner").css({left: -(factor*$(".hello_how div.carousel_inner").outerWidth())});

      var iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos > iScrollPos) {
        
      } else {
      	
      }

      iScrollPos = iCurScrollPos;
    }else {
      if ($(window).scrollTop() > $(".hello_how > div > div.right > div:last-child").offset().top) {

        $(".hello_how > div > div.left").css({position: 'absolute', left:'0', top:'auto', bottom:'0', width:$(".hello_how").width()/2});

        $(".hello_how div.carousel_inner").css({left: -0.8*$(".hello_how div.carousel_inner").outerWidth()});

        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            
        } else {
          
        }
        iScrollPos = iCurScrollPos;
      }else{
        $(".hello_how > div > div.left").css({position: 'absolute', left:'0', top:'0', bottom:'auto', width:$(".hello_how").width()/2});

        $(".hello_how div.carousel_inner").css({left: '0'});

        if ($(window).scrollTop() > 0 && scrolleddown) {
        }else{
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
          
        } else {
        }
        iScrollPos = iCurScrollPos;
          
        }
      }
    }

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




  
  $("input[name=start_zone]").autocomplete({
    minLength: 0,
  source: function( request, response ) {
//    
    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response($.grep(zone_options, function(value) {
            return matcher.test(value.name);
    }));
/*    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
    response($.grep(zone_options, function (value) {
      return matcher.test(value.name);
    }));*/
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
    startzone_selected = true;
    enableCalcBtn();
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


  $("input[name=end_zone]").autocomplete({
    minLength: 0,
  source: function( request, response ) {
//    
    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
        response($.grep(zone_options, function(value) {
//      
            return matcher.test(value.name);
    }));
/*    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
    response($.grep(zone_options, function (value) {
      return matcher.test(value.name);
    }));*/
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
    endzone_selected = true;
    enableCalcBtn();
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

  var enableCalcBtn = function(){
    if ($.trim($("input[name=start_zone]").val()) != '' && $.trim($("input[name=end_zone]").val()) != ''){
      $("#calcbtn").removeAttr('disabled');  
    }else{
      $("#calcbtn").attr('disabled', 'disabled');
    }
  };
  
  $('input[name=start_zone]').change(function () {
    startzone_selected = false;
    enableCalcBtn();
  });
  $('input[name=end_zone]').change(function () {
    endzone_selected = false;
    enableCalcBtn();
  });
  $('input[name=start_zone]').keyup(function (e) {
    if(e.which != 13) {startzone_selected = false;enableCalcBtn();}
  });
  $('input[name=end_zone]').keyup(function (e) {
    if(e.which != 13) {endzone_selected = false;enableCalcBtn();}
  });



  $("#calcbtn").on('click', function(e){
    
//    e.preventDefault();
    var that;
    var that1=$(this);
//    if($(".formerrors").offset()){$(".formerrors").remove();}
//    $(".account_header div p.error").hide();
      that=$(this);
        var startzone = $("input[name=start_zone]");
        var endzone = $("input[name=end_zone]");
        
        $('.calcpricespan').text('Working');
        
        if ($.trim(startzone.val()) != '' && $.trim(endzone.val()) != ''){
          request=$.post("https://derbii.com/ajax/pricing/calculate", { 
            reason: "form",
            start_area: startzone.val(),
            end_area: endzone.val(),
          },
          function(data) {
            if (data.status == "success"){
//              mixpanel.track("privatesignuppagesuccess");
              
              $('.calcpricespan').html('<i class="fa fa-inr"></i> '+Math.round(data.pricing_monthly));

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
        else{
/*          if ($.trim(email.val()) == ''){
            $('<div class="formerrors">Please enter your email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
          }
          else if (email.val().length >=250){
            $('<div class="formerrors">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
          }*/
          
//          that1.text('Sign up');
        }
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




//    clearTimeout(timer);

});