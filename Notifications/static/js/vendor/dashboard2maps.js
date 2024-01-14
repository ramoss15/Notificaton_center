var map_style1 = 
[
    /*{
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },*/
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fafafa"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ecf0f1"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e8e8e8"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#85cba2"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#d5e6dc"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dddddd"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e8e8e8"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#b4e3c7"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e2e2e2"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e2e2e2"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e2e2e2"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c2c2c2"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#34495e"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#cccccc"
            },
            {
                "weight": "0.5"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d5d5d5"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "gamma": "0.7"
            },
            {
                "weight": "0.2"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ededed"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ededed"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ededed"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2980b9"
            }
        ]
    }
]


var sonic_blue_black;
sonic_blue_black = new Sonic({
            
    width: 100,height: 100,stepsPerFrame: 5,trailLength: 0.7,pointDistance: 0.01,fps: 25,
    backgroundColor: 'rgba(0,0,0,0)',fillColor: '#2980b9',

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
    console.log("resetting");
    console.log(markers.length);
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
            console.log("traffic1");
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

function initializemap() {
	
		var mapOptions = {
          center: { lat: 28.61, lng: 77.23},
          zoom: 13,
          streetViewControl: false,
          zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: map_style1
        };
        $("#dashboardmainleft3right").html('<div id="mapcontainer1" style="height:100%; width:100%;"></div>');
        map = new google.maps.Map(document.getElementById('mapcontainer1'),
            mapOptions);
        
  		trafficLayer.setMap(map);

        var trafficControlDiv = document.createElement('div');
        var trafficControl = new TrafficControl(trafficControlDiv, map);

        trafficControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(trafficControlDiv);

        google.maps.event.addListener(map, 'click', function(event) {
        if(openbox){
            openbox.close();
            openbox = null;}
        });
    }



function getdriverlocationsall(){
    	if(request_map){request_map.abort();}
    	request_map=$.post("https://winwincab.com/ajax/locations/driver/get_all", { 
                        type: "query",
                    },
                    function(data) {
                            for (var i = 0; i < data.list.length; i++){
                                var latlng = new google.maps.LatLng(data.list[i].lat,data.list[i].lng);
                                var marker = new google.maps.Marker({
                                    position: latlng,
                                    map: map,
//                                    title: 'Hello World!',
                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                    data_index: data.list[i].dprofile_id,
                                    data_name: data.list[i].name,
                                    data_phone: data.list[i].phone,
                                });
                                markers.push(marker);
                                marker_attrs.push(data.list[i].dprofile_id);
                                bounds1.extend(latlng);

                            }
                            map.fitBounds(bounds1);

                            for (var i=0; i < markers.length; i++){
                                var options = infoW1options;
                                options['content'] = infoW1content1+markers[i]['data_name']+infoW1content2+markers[i]['data_phone']+infoW1content3;
                                infoboxes.push(new InfoBox(options));
                                
/*                                google.maps.event.addListener(markers[i], 'click', function() {
                                        if(openboxhover){openboxhover.close();}
                                        infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                        if(openbox && (openbox != infoboxes[markers.indexOf(this)])){openbox.close();}
                                        openbox=infoboxes[markers.indexOf(this)];
                                    
                                });*/
                                google.maps.event.addListener(markers[i], 'mouseover', function() {
                                        if(openbox && (openbox == infoboxes[markers.indexOf(this)])){}
                                        else{
                                        infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                        openboxhover=infoboxes[markers.indexOf(this)];}
                                    
                                });
                                google.maps.event.addListener(markers[i], 'mouseout', function() {
                                        infoboxes[markers.indexOf(this)].close();
                                        openboxhover=null;
                                    
                                });
                            }

                        mapinterval = setInterval(getdriverlocationsallrepeat, 30000);
                    });
      
	}

function getdriverlocationsallrepeat(){
        if(request_map){request_map.abort();}
        request_map=$.post("https://winwincab.com/ajax/locations/driver/get_all", { 
                        type: "query",
                    },
                    function(data) {
                        console.log("updated");
                            var markers_temp = [], marker_attrs_temp = [], infoboxes_temp = [];
                            bounds1 = new google.maps.LatLngBounds();
                            for (var i = 0; i < data.list.length; i++){
                                var latlng = new google.maps.LatLng(data.list[i].lat,data.list[i].lng);
                                if(marker_attrs.indexOf(data.list[i].dprofile_id) != -1){
                                    marker = markers[marker_attrs.indexOf(data.list[i].dprofile_id)];   
                                }else{
                                    marker = new google.maps.Marker({
                                        position: latlng,
                                        map: map,
//                                        title: 'Hello World!',
                                        icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                        data_index: data.list[i].dprofile_id
                                    });
                                }
                                marker.setPosition(latlng);
                                markers_temp.push(marker);
                                marker_attrs_temp.push(data.list[i].dprofile_id);
                                bounds1.extend(latlng);
                            }
                            markers = markers_temp.slice(0); marker_attrs = marker_attrs_temp.slice(0);

                            for (var i=0; i < markers.length; i++){
                                var options = infoW1options;
                                options['content'] = infoW1content1+markers[i]['data_name']+infoW1content2+markers[i]['data_phone']+infoW1content3;
                                infoboxes_temp.push(new InfoBox(options));
                                
/*                                google.maps.event.addListener(markers[i], 'click', function() {
                                        if(openboxhover){openboxhover.close();}
                                        infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                        if(openbox && (openbox != infoboxes[markers.indexOf(this)])){openbox.close();}
                                        openbox=infoboxes[markers.indexOf(this)];
                                    
                                });*/
                                google.maps.event.addListener(markers[i], 'mouseover', function() {
                                        if(openbox && (openbox == infoboxes[markers.indexOf(this)])){}
                                        else{
                                        infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                        openboxhover=infoboxes[markers.indexOf(this)];}
                                    
                                });
                                google.maps.event.addListener(markers[i], 'mouseout', function() {
                                        infoboxes[markers.indexOf(this)].close();
                                        openboxhover=null;
                                    
                                });
                            }
                            infoboxes = infoboxes_temp.slice(0);
                    });
      
    }

    function getdriverlocationsbyidcurrent(){
        if(request_map){request_map.abort();}
        request_map=$.post("https://winwincab.com/ajax/locations/driver/get_by_id_current", { 
                        id: $('option:selected', $('#fielddriver')).val(),
                    },
                    function(data) {
                                console.log("old_length: "+markers.length);
                                console.log(data);
                                    var latlng = new google.maps.LatLng(data.list[0].lat,data.list[0].lng);
                                    var marker = new google.maps.Marker({
                                        position: latlng,
                                        map: map,
//                                        title: 'Hello World!',
                                        icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                        data_index: data.list[0].dprofile_id
                                    });
                                    markers.push(marker);
                                    marker_attrs.push(data.list[0].dprofile_id);
                                    console.log("new_length: "+markers.length);

                                    for (var i=0; i < markers.length; i++){
                                        var options = infoW1options;
                                        options['content'] = infoW1content1+markers[i]['data_name']+infoW1content2+markers[i]['data_phone']+infoW1content3;
                                        infoboxes.push(new InfoBox(options));
                                        
        /*                                google.maps.event.addListener(markers[i], 'click', function() {
                                                if(openboxhover){openboxhover.close();}
                                                infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                                if(openbox && (openbox != infoboxes[markers.indexOf(this)])){openbox.close();}
                                                openbox=infoboxes[markers.indexOf(this)];
                                            
                                        });*/
                                        google.maps.event.addListener(markers[i], 'mouseover', function() {
                                                if(openbox && (openbox == infoboxes[markers.indexOf(this)])){}
                                                else{
                                                infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                                openboxhover=infoboxes[markers.indexOf(this)];}
                                            
                                        });
                                        google.maps.event.addListener(markers[i], 'mouseout', function() {
                                                infoboxes[markers.indexOf(this)].close();
                                                openboxhover=null;
                                            
                                        });
                                    }

                            mapinterval = setInterval(getdriverlocationsbyidcurrentrepeat, 30000);
                    });
      
    }

    function getdriverlocationsbyidcurrentrepeat(){
        if(request_map){request_map.abort();}
        request_map=$.post("https://winwincab.com/ajax/locations/driver/get_by_id_current", { 
                        id: $('option:selected', $('#fielddriver')).val(),
                    },
                    function(data) {
                                console.log("updated1");
                                    var latlng = new google.maps.LatLng(data.list[0].lat,data.list[0].lng);
                                    markers[0].setPosition(latlng);
                                    
                    });
      
    }


    function searchdriverlocationsbyid(){
        if(request_map){request_map.abort();}
        request_map=$.post("https://winwincab.com/ajax/locations/driver/search_by_id", { 
                        id: $('option:selected', $('#fielddriver')).val(),
                        datefrom: $('#fielddatefrom').val(),
                        dateto: $('#fielddateto').val(),
                        timefrom: $('option:selected', $('#fieldtimefrom')).val(),
                        timeto: $('option:selected', $('#fieldtimeto')).val(),
                    },
                    function(data) {
                        console.log("search");
                        console.log(data.list.length);
                        console.log(data);
                        for (var i = 0; i < data.list.length; i++){
                                var latlng = new google.maps.LatLng(data.list[i].lat,data.list[i].lng);
                                var marker = new google.maps.Marker({
                                    position: latlng,
                                    map: map,
                                    title: 'Hello World!',
                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-30.png",
                                    data_index: i,
                                    data_date: data.list[i].date,
                                    data_time: data.list[i].time
                                });
                                markers.push(marker);
                                marker_attrs.push(data.list[i].time);
                                bounds1.extend(latlng);
                            }
                            map.fitBounds(bounds1);

                            for (var i=0; i < markers.length; i++){
                                        var options = infoW1options;
                                        options['content'] = infoW2content1+markers[i]['data_date']+infoW1content2+markers[i]['data_time']+infoW1content3;
                                        infoboxes.push(new InfoBox(options));
                                        
        /*                                google.maps.event.addListener(markers[i], 'click', function() {
                                                if(openboxhover){openboxhover.close();}
                                                infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                                if(openbox && (openbox != infoboxes[markers.indexOf(this)])){openbox.close();}
                                                openbox=infoboxes[markers.indexOf(this)];
                                            
                                        });*/
                                        google.maps.event.addListener(markers[i], 'mouseover', function() {
                                                if(openbox && (openbox == infoboxes[markers.indexOf(this)])){}
                                                else{
                                                infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                                openboxhover=infoboxes[markers.indexOf(this)];}
                                            
                                        });
                                        google.maps.event.addListener(markers[i], 'mouseout', function() {
                                                infoboxes[markers.indexOf(this)].close();
                                                openboxhover=null;
                                            
                                        });
                                    }
                    });
      
    }


	function post_map_request() {
		if(request_map){request.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
			$("#sonicbox").html(sonic_blue_black.canvas);
			request_map=$.post("https://winwincab.com/ajax/corporate/dashboard/search/maps/wwc", { 
							dprofile: $('option:selected', $('#fielddriver')).val(),
							viewtype: $('#fieldviewtype').val(),
						},
						function(data) {
							$("#dashboardmainright").html('');
							$('.dashboardprimemain').html('').html(data);
						});
	}






function page_drivers(){
    getdriverlocationsall();
}



$(document).ready(function(){
sonic_blue_black.play();

var selectedtab, selectedtab1 = $(".dashboardmainleft3leftboxesselected"), request_right;

	initializemap();
    page_drivers();


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
	

	
	$(".dashboardprimemainboxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemainboxesouterselected')){
			selectedtab.removeClass('dashboardprimemainboxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemainboxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
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
	

	$(".dashboardprimemain4boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain4boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain4boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain4boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
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

	$(".dashboardprimemain5boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain5boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain5boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain5boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/fixedcabs/selectfixedcab", { 
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

	$(".dashboardprimemain6boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain6boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain6boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain6boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/vehicles/selectvehicle", { 
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

	$(".dashboardprimemain7boxesouter").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain7boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain7boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain7boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/drivers/selectdriver", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain9boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain9boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain9boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/drivers/selectdriverprofile", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab && selectedtab.hasClass('dashboardprimemain8boxesouterselected')){
			selectedtab.removeClass('dashboardprimemain8boxesouterselected');
		}
		selectedtab = $(this);
		$(this).addClass('dashboardprimemain8boxesouterselected');
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
				console.log("code");
				console.log($(this).attr('data-id'));
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttles/selectshuttle", { 
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
				
				$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
				$("#sonicbox").html(sonic_blue_black.canvas);
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
						$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
						$("#dashboardmainleft3right").html('').html(data);

						
					});
				
	});
	
	$(".accountfields").keyup(function(){$(".formerrorsaccount").remove();if (request){request.abort();}});
	$(".accountfields").change(function(){$(".formerrorsaccount").remove();if (request){request.abort();}});
	
	
	$("#dashboardmainclosebtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
		if($(".formerrorsbook").offset()){$(".formerrorsbook").remove();}

		$('#archivetoggle').iCheck('destroy');
		if(request_right){request_right.abort();}
		
		$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
        .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
					
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);

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


	
	$("#addfixedshuttlebtnadmin").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://winwincab.com/ajax/dashboard/addfixedshuttle_admin", { 
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
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
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

	$(".btnredetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingchange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttlechange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttlechange", { 
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

	$(".btnattach").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttlechange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttlechange", { 
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

	$(".btnshuttledetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttlechange", { 
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
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
	
	$("#addfixedcabbtnwwc").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://winwincab.com/ajax/dashboard/addfixedcab_wwc", { 
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

	$("#fixedcabsavebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var company = $("#fieldfixedcabcompany");
				var vehicle = $("#fieldfixedcabvehicle");
				
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/addfixedcab_wwc_save", { 
								company: $('option:selected', company).val(),
								vehicle: $('option:selected', vehicle).val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
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
									that.val('SAVE');
								}
							});
							
					}
				else{
					
				}
	});

	$(".btnstatusfixedcab").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://winwincab.com/ajax/dashboard/changestatusfixedcab_wwc", { 
						type: 'yes',
						id: $(this).attr('data-fixedcab-id'),
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

	$("#fixedcabstatusbtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('WORKING');
							request=$.post("https://winwincab.com/ajax/dashboard/changestatusfixedcab_wwc_save", { 
								changetype: $(this).attr('data-changetype'),
								id: $(this).attr('data-fixedcab-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val($(this).attr('data-changetype')+'d');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
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

	$("#addvehiclebtnwwc").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://winwincab.com/ajax/dashboard/addvehicle_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var operator = $("#fieldvehicleoperator");
				var vehiclemodel = $("#fieldvehiclevehiclemodel");
				var number = $("#fieldvehiclenumber");
				
				
				if ($.trim(number.val()) != ''){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/addvehicle_wwc_save", { 
								operator: $('option:selected', operator).val(),
								vehiclemodel: $('option:selected', vehiclemodel).val(),
								number: number.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
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
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(number.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter number!</div>').css('top', number.offset().top - 15).css('left', number.offset().left + 10).appendTo("body");
					}
				}
	});

	$(".btneditvehicle").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://winwincab.com/ajax/dashboard/editvehicle_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var number = $("#fieldvehiclenumber");
				
				
				if ($.trim(number.val()) != ''){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/editvehicle_wwc_save", { 
								number: number.val(),
								id: $(this).attr('data-vehicle-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(number.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter number!</div>').css('top', number.offset().top - 15).css('left', number.offset().left + 10).appendTo("body");
					}
				}
	});

	$(".btndeletevehicle").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://winwincab.com/ajax/dashboard/deletevehicle_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('WORKING');
								request=$.post("https://winwincab.com/ajax/dashboard/deletevehicle_wwc_save", { 
								changetype: $(this).attr('data-changetype'),
								id: $(this).attr('data-vehicle-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val($(this).attr('data-changetype')+'d');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
									$("#sonicbox").html(sonic_blue_black.canvas);
				if(true){
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: 'vehicles',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
						$("#dashboardmainleft3right").html('').html(data);
					});
				}
					
								}else{
									that.val($(this).attr('data-changetype'));
								}
							});
							
					}
				else{
					
				}
	});

	$("#adddriverbtnwwc").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://winwincab.com/ajax/dashboard/adddriver_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var operator = $("#fielddriveroperator");
				var name = $("#fielddrivername");
				var phone = $("#fielddriverphone");
				
				
				if ($.trim(name.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val()) ){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/adddriver_wwc_save", { 
								operator: $('option:selected', operator).val(),
								name: name.val(),
								phone: phone.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
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
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(name.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
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
				}
	});

	$(".btneditdriver").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://winwincab.com/ajax/dashboard/editdriver_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var name = $("#fielddrivername");
				var phone = $("#fielddriverphone");
				
				
				if ($.trim(name.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val())){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/editdriver_wwc_save", { 
								name: name.val(),
								phone: phone.val(),
								id: $(this).attr('data-driver-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(name.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
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
				}
	});

	$(".btndeletedriver").live('click', function(){
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://winwincab.com/ajax/dashboard/deletedriver_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				
				if (true){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('WORKING');
								request=$.post("https://winwincab.com/ajax/dashboard/deletedriver_wwc_save", { 
								changetype: $(this).attr('data-changetype'),
								id: $(this).attr('data-driver-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
									that.val($(this).attr('data-changetype')+'d');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
									$("#sonicbox").html(sonic_blue_black.canvas);
				if(true){
					request=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: 'drivers',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
						$("#dashboardmainleft3right").html('').html(data);
					});
				}
					
								}else{
									that.val($(this).attr('data-changetype'));
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
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request=$.post("https://winwincab.com/ajax/dashboard/activatedriverprofile_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var operator = $("#fielddriveroperator");
				var name = $("#fielddrivername");
				var phone = $("#fielddriverphone");
				
				
				if ($.trim(name.val()) != '' && ($.trim(phone.val()) != '') && $.trim(phone.val()).length == 10 && !isNaN(parseFloat(phone.val())) && isFinite(phone.val()) ){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/activatedriverprofile_wwc_save", { 
								operator: $('option:selected', operator).val(),
								name: name.val(),
								phone: phone.val(),
								id: $(this).attr('data-driverprofile-id'),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
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
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(name.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
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
				}
	});

	$("#addoperatorbtnwwc").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_right=$.post("https://winwincab.com/ajax/dashboard/addoperator_wwc", { 
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
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var name = $("#fieldoperatorname");
				var code = $("#fieldoperatorcode");
				
				
				if (($.trim(code.val()) != '') && code.val().length == 3 && $.trim(name.val()) != ''){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/addoperator_wwc_save", { 
								code: code.val(),
								name: name.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);
								}else{
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(code.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter code!</div>').css('top', code.offset().top - 15).css('left', code.offset().left + 10).appendTo("body");
					}
					else if (code.val().length != 3){
						$('<div class="formerrorsbookgreen">Keep it exactly 3 characters long!</div>').css('top', code.offset().top - 15).css('left', code.offset().left + 10).appendTo("body");
					}
					if ($.trim(name.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter name!</div>').css('top', name.offset().top - 15).css('left', name.offset().left + 10).appendTo("body");
					}
				}
	});

	
	$("#addemployeebtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		console.log(window.location.pathname);
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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


	$(".removeimagebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingbill/removeimage", { 
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

	$("#emailinvoicebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
		$("#emailinvoicebtn").attr('disabled', 'disabled');
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingbill/emailinvoice", { 
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
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingbill", { 
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
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingbill", { 
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
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingbill", { 
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
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/bookingcancel", { 
								id: that.attr('data-booking-id'),
							},
							function(data) {
								if (data.status == "success"){
									if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		
		$("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
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



	$("#buttonactivate").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttleactivate", { 
								id: that.attr('data-shuttle-id'),
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

	$("#buttondeactivate").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttledeactivate", { 
								id: that.attr('data-shuttle-id'),
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

	$("#buttonattach").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttleattach", { 
								id: that.attr('data-shuttle-id'),
								phone: $("#adminphone").val(),
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

	$("#buttondetach").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttledetach", { 
								id: that.attr('data-shuttle-id'),
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

	$("#buttonshuttledetail1").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttledetail", { 
								id: that.attr('data-shuttle-id'),
								operator_id: $('option:selected', $('#operator')).val(),
								vehiclemodel_id: $('option:selected', $('#vehiclemodel')).val(),
								drivername: $('#drivername').val(),
								driverphone: $('#driverphone').val(),
								vehiclenumber: $('#vehiclenumber').val(),
								date: $('#date').val(),
							},
							function(data) {
								if (data.status == "success"){
									$("#dashboardmainright").html('');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonshuttleredetail1").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://winwincab.com/ajax/corporate/dashboard/shuttleredetail", { 
								id: that.attr('data-shuttle-id'),
								operator_id: $('option:selected', $('#operator')).val(),
								vehiclemodel_id: $('option:selected', $('#vehiclemodel')).val(),
								drivername: $('#drivername').val(),
								driverphone: $('#driverphone').val(),
								vehiclenumber: $('#vehiclenumber').val(),
								date: $('#date').val(),
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
		$("#topbarinnerlogo").hide();
		$("#topbarinnerright").hide();
		$("#topbarinnerlogoclose").show();	
		$("#dashboardmainright").detach().css({"top":41}).appendTo("body").addClass('dashboardmainrightactive').html('<div id="dashboardmainrightactual"></div>').stop().animate({
			width: '100%'
		}, 600, "easeOutQuart", function(){
				
			$('html, body').stop().scrollTop(0);
		});
		
		$("#dashboardmainrightactual").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
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
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
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
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
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
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
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
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
									$("#sonicbox").html(sonic_blue_black.canvas);
				if(true){
					request_sp=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: 'locations',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
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
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
									$("#sonicbox").html(sonic_blue_black.canvas);
				
				if(true){
					request_sp=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: 'locations',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
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

	$("#locationaddbtnets").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var zone = $("#fieldzone");
				var address = $("#fieldaddress");
				var type = $("input[type='radio'][name='type']:checked");
				var employeehidden = $("#fieldemployeehidden");
				
				
				if ($.trim(zone.val()) != '' && $.trim(address.val()) != '' && $("input:radio[name='type']").is(":checked")){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							
							if(request_al){request_al.abort();}
							if(true){
								that.val('SAVING');
								request_al=$.post("https://winwincab.com/ajax/dashboard/addlocation_admin_save", { 
								zone: zone.val(),
								address: address.val(),
								type: type.val(),
								employee: employeehidden.val(),
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>')
                                    .detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
			width: 320
		}, 600, "easeOutQuart", function(){
			$('html, body').stop().scrollTop(0);
		});
		$("#topbarinnerlogoclose").hide();
		$("#topbarinnerlogo").show();
		$("#topbarinnerright").show();
									var url='/dashboard/';
									History.pushState('','',url);


									$("#dashboardmainleft3right").html('<table class="stdtable" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
									$("#sonicbox").html(sonic_blue_black.canvas);
				
				if(true){
					request_sp=$.post("https://winwincab.com/ajax/corporate/dashboard/selectpage", { 
						type: 'locations',
					},
					function(data) {
/*						if (data.status == "success"){
							console.log(data);
						}else{
							
						}*/
	$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
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
					if(!$("input:radio[name='type']").is(":checked")){
						$('<div class="formerrorsbookgreen">Please choose type!</div>').css('top', $("input:radio[name='type']").offset().top - 10).css('left', $("input:radio[name='type']").offset().left + 120).appendTo("body");
					}
				}
	});

	$("#settingsbtnpersonal").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
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
							
							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/settingspersonal_admin_save", { 
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
									that.val('SAVED');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
										width: 320
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
										$('<div class="formerrorsbookgreen">That email address is already registered with us. Please enter one of your own emails!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
									}
									if (data.reasons.indexOf("phone") >= 0) {
										$('<div class="formerrorsbookgreen">That phone number is already registered with us. Please enter one of your own numbers!</div>').css('top', phone.offset().top - 15).css('left', phone.offset().left + 10).appendTo("body");
									}
									if (data.reasons.indexOf("passwordold") >= 0) {
										$("<div class='formerrorsbookgreen'>The old password you entered is incorrect!</div>").css('top', password0.offset().top - 15).css('left', password0.offset().left + 10).appendTo("body");
									}
									if (data.reasons.indexOf("password") >= 0) {
										$("<div class='formerrorsbookgreen'>There was an error while changing your password. Please try again in a short while.</div>").css('top', password1.offset().top - 15).css('left', password1.offset().left + 10).appendTo("body");
									}
									that.val('SAVE');
								}
							});
							
					}
				else{
//					console.log("nono");
					if ($.trim(email.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter email!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if (email.val().length >=250){
						$('<div class="formerrorsbookgreen">Keep it shorter than 250 characters!</div>').css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
					}
					else if ($.trim(email.val()) != '' && (email.val().indexOf('.') == '-1' || email.val().indexOf('@') == '-1' || email.val().indexOf('@') == (email.val().length-1) || email.val().lastIndexOf('@') > email.val().lastIndexOf('.'))){
						$("<div class='formerrorsbookgreen'>That doesn't look like a valid email address!</div>").css('top', email.offset().top - 15).css('left', email.offset().left + 10).appendTo("body");
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
/*					if(!$("input:radio[name='employeegender']").is(":checked")){
						$('<div class="formerrorsbookgreen">Please choose gender!</div>').css('top', $("input:radio[name='employeegender']").offset().top - 10).css('left', $("input:radio[name='employeegender']").offset().left + 120).appendTo("body");
					}*/
					if(!((($.trim(password0.val()) != '' && $.trim(password1.val()) != '' && password1.val().length >= 6 && $.trim(password2.val()) != '' && $.trim(password1.val()) == $.trim(password2.val())) || ($.trim(password0.val()) == '' && $.trim(password1.val()) == '')))){
						if ($.trim(password0.val()) == ''){
							$("<div class='formerrorsbookgreen'>Please enter your old password!</div>").css('top', password0.offset().top - 15).css('left', password0.offset().left + 10).appendTo("body");
						}
						if ($.trim(password1.val()) == ''){
							$("<div class='formerrorsbookgreen'>Please enter a new password!</div>").css('top', password1.offset().top - 15).css('left', password1.offset().left + 10).appendTo("body");
						}
						if (password1.val().length < 6){
							$("<div class='formerrorsbookgreen'>Keep it at least 6 chars long!</div>").css('top', password1.offset().top - 15).css('left', password1.offset().left + 10).appendTo("body");
						}
						if ($.trim(password2.val()) == ''){
							$("<div class='formerrorsbookgreen'>Please re-enter the new password!</div>").css('top', password2.offset().top - 15).css('left', password2.offset().left + 10).appendTo("body");
						}
						if ($.trim(password1.val()) != '' && $.trim(password2.val()) != '' && $.trim(password1.val()) != $.trim(password2.val())){
							$("<div class='formerrorsbookgreen'>The two passwords do not match! Please try again!</div>").css('top', password2.offset().top - 15).css('left', password2.offset().left + 10).appendTo("body");
						}
					}
				}
	});

	$("#settingsbtncompany").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);
				var companyname = $("#fieldcompanyname");
//				var gender = $("input[type='radio'][name='employeegender']:checked");
				
				
				if ($.trim(companyname.val()) != ''){

							that.val('SAVING');
							request=$.post("https://winwincab.com/ajax/dashboard/settingscompany_admin_save", { 
								companyname: companyname.val(),
								allowemployee: $("#fieldallowemployee").is(':checked') ? "yes" : "no",
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
									$("#dashboardmainright").html('').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('dashboardmainrightactive').stop().animate({
										width: 320
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
									that.val('SAVE');
								}
							});
							
					}
				else{
					if ($.trim(companyname.val()) == ''){
						$('<div class="formerrorsbookgreen">Please enter company name!</div>').css('top', companyname.offset().top - 15).css('left', companyname.offset().left + 10).appendTo("body");
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
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);

		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/bookings/corporate", { 
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
						$('.dashboardprimemain').html('').html(data);
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
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/bookings/corporate", { 
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
						$('.dashboardprimemain').html('').html(data);
					});	
	}

		
	});


	$('#forwardbtnpaginate').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/bookings/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type,
						booking_type: $('option:selected', $('#fieldbookingtype')).val(),
						status: $('option:selected', $('#fieldbookingstatustype')).val(),
						datefrom: $('#fielddatefrom').val(),
						dateto: $('#fielddateto').val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginate').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/bookings/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type,
						booking_type: $('option:selected', $('#fieldbookingtype')).val(),
						status: $('option:selected', $('#fieldbookingstatustype')).val(),
						datefrom: $('#fielddatefrom').val(),
						dateto: $('#fielddateto').val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
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
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type
					},
					function(data) {
						console.log(data);
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/bookings/corporate", { 
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
						$('.dashboardprimemain').html('').html(data);
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
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/bookings", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/bookings/corporate", { 
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
						$('.dashboardprimemain').html('').html(data);
					});	
	}

		
	});



	$('#forwardbtnpaginatefixedshuttle').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/shuttles", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type
					},
					function(data) {
						console.log(data);
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/shuttles/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type,
						shuttle_type: 'Fixed',
						status: $('option:selected', $('#fieldshuttlestatustype')).val(),
						timefrom: $('option:selected', $('#fieldtimefrom')).val(),
						timeto: $('option:selected', $('#fieldtimeto')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginatefixedshuttle').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/shuttles", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/shuttles/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type,
						shuttle_type: 'Fixed',
						status: $('option:selected', $('#fieldshuttlestatustype')).val(),
						timefrom: $('option:selected', $('#fieldtimefrom')).val(),
						timeto: $('option:selected', $('#fieldtimeto')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						ref: $('#fieldsearchbyid').val(),
						employee: $('#fieldsearchbyemployeehidden').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}

		
	});



	$('#forwardbtnpaginatefixedshuttlewwc').live('click', function(){
		console.log("jajajaja");
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/shuttles", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/shuttles/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						toggle_type: toggle_type,
						shuttle_type: 'Fixed',
						company: $('option:selected', $('#fieldcompanysearch')).val(),
						status: $('option:selected', $('#fieldshuttlestatustype')).val(),
						timefrom: $('option:selected', $('#fieldtimefrom')).val(),
						timeto: $('option:selected', $('#fieldtimeto')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						ref: $('#fieldsearchbyid').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}

		
	});

	$('#backbtnpaginatefixedshuttlewwc').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var toggle_type = $("#paginatedataholder").attr('data-toggle-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/shuttles", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		$('.dashboardprimemain').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_paginate=$.post("https://winwincab.com/ajax/corporate/dashboard/paginate/search/shuttles/corporate", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						toggle_type: toggle_type,
						shuttle_type: 'Fixed',
						company: $('option:selected', $('#fieldcompanysearch')).val(),
						status: $('option:selected', $('#fieldshuttlestatustype')).val(),
						timefrom: $('option:selected', $('#fieldtimefrom')).val(),
						timeto: $('option:selected', $('#fieldtimeto')).val(),
						day: $('option:selected', $('#fieldday')).val(),
						dir_type: $('option:selected', $('#fielddirection')).val(),
						ref: $('#fieldsearchbyid').val(),
					},
					function(data) {
						$("#dashboardmainright").html('');
						$('.dashboardprimemain').html('').html(data);
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

	

	$(".expandimagebtn").live('click', function(){
		$("#imageoverlaybox").show();
		var that = $(this);
		$(".imageoverlayboxmain").html('').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		request_expand_image=$.post("https://winwincab.com/ajax/corporate/dashboard/expand_billing_image", { 
								id: that.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that.attr('data-image-pos')+"  of  "+that.attr('data-images-count'));
								$(".imageoverlayboxtopbarinnerleft").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/billing/download/slips/'+that.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/billing/print/slips/'+that.attr('data-image-id')+'/');
							});
	})

	$(".imageoverlayclosebtn").live('click', function(){
		$(".imageoverlayboxmain").html('');
		$(".imageoverlaycounttext").text('');
		$(".imageoverlayboxtopbarinnerleft").text('');
		$(".imageoverlaydownloadlink").attr('href', '#');
		$("#imageoverlaybox").hide();
	});

	$(".imageoverlayforwardbtn").live('click', function(){
		var pos = parseInt($("#imageoverlayboxmainimage").attr('data-pos'));
		new_pos = pos+1;
		var that3 = $(".dashboardmainrightinnermaininnerphoto").find("[data-image-pos='"+new_pos+"']");
		if(that3.length != 0){

		$(".imageoverlayboxmain").html('').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		$(".imageoverlaycounttext").text('');
		$(".imageoverlayboxtopbarinnerleft").text('');
		$(".imageoverlaydownloadlink").attr('href', '#');

		request_expand_image=$.post("https://winwincab.com/ajax/corporate/dashboard/expand_billing_image", { 
								id: that3.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that3.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that3.attr('data-image-pos')+"  of  "+that3.attr('data-images-count'));
								$(".imageoverlayboxtopbarinnerleft").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/billing/download/slips/'+that3.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/billing/print/slips/'+that3.attr('data-image-id')+'/');
							});

		}

		
	});

	$(".imageoverlaybackbtn").live('click', function(){
		var pos = parseInt($("#imageoverlayboxmainimage").attr('data-pos'));
		new_pos = pos-1;
		var that3 = $(".dashboardmainrightinnermaininnerphoto").find("[data-image-pos='"+new_pos+"']");
		if(that3.length != 0){

		$(".imageoverlayboxmain").html('').html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
		$("#sonicbox").html(sonic_blue_black.canvas);
		$(".imageoverlaycounttext").text('');
		$(".imageoverlayboxtopbarinnerleft").text('');
		$(".imageoverlaydownloadlink").attr('href', '#');

		request_expand_image=$.post("https://winwincab.com/ajax/corporate/dashboard/expand_billing_image", { 
								id: that3.attr('data-image-id'),
							},
							function(data) {
								$(".imageoverlayboxmain").html('').html(data);
//								$("#imageoverlayboxmainimage").css({"left":(width - parseInt($("#imageoverlayboxmainimage").width()))/2});
								var that2 = $("#imageoverlayboxmainimage");
								that2.attr('data-pos', that3.attr('data-image-pos'));
								$(".imageoverlaycounttext").text(that3.attr('data-image-pos')+"  of  "+that3.attr('data-images-count'));
								$(".imageoverlayboxtopbarinnerleft").text(that2.attr('data-image-name'));
								$(".imageoverlaydownloadlink").attr('href', '/billing/download/slips/'+that3.attr('data-image-id')+'/');
								$(".imageoverlayprintlink").attr('href', '/billing/print/slips/'+that3.attr('data-image-id')+'/');
							});

		}

		
	});

});