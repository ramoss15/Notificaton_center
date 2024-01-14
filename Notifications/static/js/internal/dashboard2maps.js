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
        $("#dashboardprime").html('<div id="mapcontainer1" style="height:100%; width:100%;"></div>');
        map = new google.maps.Map(document.getElementById('mapcontainer1'),
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

//    var serviceAccount = '/home/test2/derbii-2506-firebase-adminsdk-a166r-23a81f595f.json';

    var config = {
        apiKey: "AIzaSyBR1cPBciRn-60kY9QcFpt_6F6vkCgMJ1g",
        authDomain: "derbii-2506.firebaseapp.com",
        databaseURL: "https://derbii-2506.firebaseio.com",
        storageBucket: "derbii-2506.appspot.com",
    };
    firebase.initializeApp(config);

    firebase.auth().signInWithEmailAndPassword("go@derbii.com", "yoyoyo").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error);
  // ...
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    console.log(user);
    console.log("uid");
    console.log(user.uid);
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});

  // Get a reference to the database service
    var database = firebase.database();

    var zoneRef = firebase.database().ref('place/models/zones');

    console.log("haha");
    
    zoneRef.once('value').then(function(snapshot) {
        console.log("yoyo1");
      // ...
    });

    zoneRef.on('child_added', function(data) {
//            if(data.val().city_name == 'Faridabad'){
    if(true){
                console.log(data.val().id);console.log(data.val().lat+", "+data.val().lng);
                                var latlng = new google.maps.LatLng(data.val().lat,data.val().lng);
                                var marker = new google.maps.Marker({
                                    position: latlng,
                                    map: map,
//                                    title: 'Hello World!',
                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                    data_index: data.val().id,
                                    data_name: data.val().name,
                                    data_phone: data.val().city_name,
                                });
                                markers.push(marker);
                                marker_attrs.push(data.val().id);
                                bounds1.extend(latlng);

                            
                            map.fitBounds(bounds1);

                            var options = infoW1options;
                                options['content'] = infoW1content1+data.val().name+infoW1content2+data.val().id+infoW1content3;
                                infoboxes.push(new InfoBox(options));
                                
                                google.maps.event.addListener(marker, 'mouseover', function() {
                                        if(openbox && (openbox == infoboxes[markers.indexOf(this)])){}
                                        else{
                                        infoboxes[markers.indexOf(this)].open(map,markers[markers.indexOf(this)]);
                                        openboxhover=infoboxes[markers.indexOf(this)];}
                                    
                                });
                                google.maps.event.addListener(marker, 'mouseout', function() {
                                        infoboxes[markers.indexOf(this)].close();
                                        openboxhover=null;
                                    
                                });
}

    });

	
//    page_drivers();


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