var timeoptions = '<option value="00:00" selected>12:00 am</option><option value="00:15">12:15 am</option><option value="00:30">12:30 am</option><option value="00:45">12:45 am</option><option value="01:00">01:00 am</option><option value="01:15">01:15 am</option><option value="01:30">01:30 am</option><option value="01:45">01:45 am</option><option value="02:00">02:00 am</option><option value="02:15">02:15 am</option><option value="02:30">02:30 am</option><option value="02:45">02:45 am</option><option value="03:00">03:00 am</option><option value="03:15">03:15 am</option><option value="03:30">03:30 am</option><option value="03:45">03:45 am</option><option value="04:00">04:00 am</option><option value="04:15">04:15 am</option><option value="04:30">04:30 am</option><option value="04:45">04:45 am</option><option value="05:00">05:00 am</option><option value="05:15">05:15 am</option><option value="05:30">05:30 am</option><option value="05:45">05:45 am</option><option value="06:00">06:00 am</option><option value="06:15">06:15 am</option><option value="06:30">06:30 am</option><option value="06:45">06:45 am</option><option value="07:00">07:00 am</option><option value="07:15">07:15 am</option><option value="07:30">07:30 am</option><option value="07:45">07:45 am</option><option value="08:00">08:00 am</option><option value="08:15">08:15 am</option><option value="08:30">08:30 am</option><option value="08:45">08:45 am</option><option value="09:00">09:00 am</option><option value="09:15">09:15 am</option><option value="09:30">09:30 am</option><option value="09:45">09:45 am</option><option value="10:00">10:00 am</option><option value="10:15">10:15 am</option><option value="10:30">10:30 am</option><option value="10:45">10:45 am</option><option value="11:00">11:00 am</option><option value="11:15">11:15 am</option><option value="11:30">11:30 am</option><option value="11:45">11:45 am</option><option value="12:00">12:00 pm</option><option value="12:15">12:15 pm</option><option value="12:30">12:30 pm</option><option value="12:45">12:45 pm</option><option value="13:00">01:00 pm</option><option value="13:15">01:15 pm</option><option value="13:30">01:30 pm</option><option value="13:45">01:45 pm</option><option value="14:00">02:00 pm</option><option value="14:15">02:15 pm</option><option value="14:30">02:30 pm</option><option value="14:45">03:45 pm</option><option value="15:00">03:00 pm</option><option value="15:15">03:15 pm</option><option value="15:30">03:30 pm</option><option value="15:45">03:45 pm</option><option value="16:00">04:00 pm</option><option value="16:15">04:15 pm</option><option value="16:30">04:30 pm</option><option value="16:45">04:45 pm</option><option value="17:00">05:00 pm</option><option value="17:15">05:15 pm</option><option value="17:30">05:30 pm</option><option value="17:45">05:45 pm</option><option value="18:00">06:00 pm</option><option value="18:15">06:15 pm</option><option value="18:30">06:30 pm</option><option value="18:45">06:45 pm</option><option value="19:00">07:00 pm</option><option value="19:15">07:15 pm</option><option value="19:30">07:30 pm</option><option value="19:45">07:45 pm</option><option value="20:00">08:00 pm</option><option value="20:15">08:15 pm</option><option value="20:30">08:30 pm</option><option value="20:45">08:45 pm</option><option value="21:00">09:00 pm</option><option value="21:15">09:15 pm</option><option value="21:30">09:30 pm</option><option value="21:45">09:45 pm</option><option value="22:00">10:00 pm</option><option value="22:15">10:15 pm</option><option value="22:30">10:30 pm</option><option value="22:45">10:45 pm</option><option value="23:00">11:00 pm</option><option value="23:15">11:15 pm</option><option value="23:30">11:30 pm</option><option value="23:45">11:45 pm</option>';

var commute_colors1 = {Active : 'colorprim500span', Processing: 'colorsec500span', 
        Available : 'colorcommuteavailablespan', Potential: 'colorcommutepotentialspan', Declined: 'colorcommutedeclinedspan', 
        Inactive: 'colortert500span'};
var commute_colors2 = {Active : 'blackspan65', Processing: 'blackspan65', 
        Available : 'blackspan65', Potential: 'blackspan65', Declined: '', 
        Inactive: ''};

var fbad_colors1 = {Processing: 'colorsec500span', Primed : 'colorprim500span', Detailed: 'blackspan4'};

var months = {1 : 'Jan', 2 : 'Feb', 3 : 'Mar', 4 : 'Apr', 5 : 'May', 6 : 'Jun', 7 : 'Jul', 8 : 'Aug', 9 : 'Sep', 10 : 'Oct', 11 : 'Nov', 12 : 'Dec'};

var billing_class_names = {ManualUpdate: 'Manual<br>Update', BillingDebit: 'Billing<br>Debit', 
                            UploadedInvoiceCredit: 'Uploaded<br>Invoice<br>Credit', Debit: 'Debit', Recharge: 'Recharge',
                            BankRecharge: 'Bank<br>Recharge', PayTMRecharge: 'PayTM<br>Recharge'}

function ivr_colors1(agent_number){
    if(agent_number == 'Call Missed'){
        return 'colortert500span';
    }else{
        return 'colorprim500span';
    }
}
function ivr_colors2(agent_number){
    if(agent_number == 'Call Missed'){
        return 'colortert500span';
    }else{
        return 'blackspan65';
    }
}

function derbii_colors1(status){
    if(status == 'Active' || status == 'Processing'){
        if(false){
            return 'colorsec500span';
        }else{
            return 'colorprim500span';
        }
    }else{
        return '';
    }
}
function derbii_colors2(status){
    if(status == 'Active' || status == 'Processing'){
        return 'blackspan65';
    }else{
        return '';
    }
}
function derbii_colors0(status){
    if(false){
        return 'colorsec500span';
    }else{
        return 'colorprim500span';
    }
}




var markerColors = ["#000000",
    "#f5f5dc",
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#00ffff",
    "#ffff00",
    "#22313F",
"#6fc1d2",
"#428e9e",
"#3498db",
"#22A7F0",
"#dd6bae",
"#a0497c",
"#9b59b6",
"#8e44ad",
"#DFBC42",
"#9d8222",
"#f1c40f",
"#f39c12",
"#e67e22",
"#d35400",
"#7dc692",
"#508b61",
"#2ecc71",
"#27ae60",
"#16a085",
"#e65d5d",
"#c43434",
"#e74c3c",
"#c0392b",
"#d98e64"];


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



var derbii_adding = false;


var width = parseInt($(document).width());
var height = parseInt($(document).height());
var request_paginate, sonic_blue_black;
var request_expand_image, zone_options, city_options, area_options;

var myDropzone, request_upload;
var minSteps = 6, maxSteps = 60, timeBetweenSteps = 100, bytesPerStep = 100000;


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


function initializemap() {
	
		var mapOptions = {
          center: { lat: 28.61, lng: 77.23},
          zoom: 13,
          streetViewControl: false,
          zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: map_style1
        };
        $("#dashboardprime div.map").html('<div id="mapcontainer1" style="height:100%; width:100%;"></div>');
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



var commentsstartzone_selected = false, commentsendzone_selected=false;



function autocomplete_initiate(){
	$("input[name=commentsstartzone]").autocomplete({
    minLength: 0,
	source: function( request, response ) {
//		
/*		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
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
//		if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//		else{rthat.val( ui.item.address );}
		commentsstartzone_selected = true;
		$(this).val( ui.item.name );
//		rthat.siblings().val(ui.item.id);
		return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//	var lstr = item.name+' - '+item.address;
//	var lsubstr = lstr.substring(0,50)+'...';
//	var lsubstr = item.name.substring(0,50)+'...';
	var lsubstr = item.name;
    return $('<li>')
        .data('item.autocomplete', item)
        .append('<a>'+
					lsubstr +'</a>')
        .appendTo(ul);
};


	$("input[name=commentsendzone]").autocomplete({
    minLength: 0,
	source: function( request, response ) {
//		
/*		var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
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
//		if($.trim(ui.item.name) != ''){rthat.val( ui.item.name+' - '+ui.item.address);}
//		else{rthat.val( ui.item.address );}
		commentsendzone_selected = true;
		$(this).val( ui.item.name );
//		rthat.siblings().val(ui.item.id);
		return false;
    }
}).focus(function(){ $(this).autocomplete("search"); }).data('autocomplete')._renderItem = function(ul, item) {
//	var lstr = item.name+' - '+item.address;
//	var lsubstr = lstr.substring(0,50)+'...';
//	var lsubstr = item.name.substring(0,50)+'...';
	var lsubstr = item.name;
    return $('<li>')
        .data('item.autocomplete', item)
        .append('<a>'+
					lsubstr +'</a>')
        .appendTo(ul);
};
}



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





function rightaddselect(){
    var htmlstr = '';
    htmlstr += '<table class="stdtable"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>';
    $("#dashboardmainright").html(htmlstr);
}

function rightaddsonic(){
    $("#dashboardmainright").html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
    $("#sonicbox").html(sonic_blue_black.canvas);
}

function primeaddsonic(){
    $("#dashboardprime").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
    $("#sonicbox").html(sonic_blue_black.canvas);
}

function primemainaddsonic(){
    $('#dashboardprime > div.main').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
    $("#sonicbox").html(sonic_blue_black.canvas);
}






function rightaddcommute(that){
    var str = '';
                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    if(that.attr('data-status') != 'Active'){
                        str += '<table class="stdtable"><tr><td valign="center">';
                        if(that.attr('data-status') != 'Declined'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btndecline" value="Decline" data-type="decline" data-id="'+that.attr('data-id')+'">';
                        }
                        if(that.attr('data-status') != 'Potential'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnpotential" value="Potential" data-type="potential" data-id="'+that.attr('data-id')+'">';
                        }
                        if(that.attr('data-status') != 'Available'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnavailable" value="Available" data-type="available" data-id="'+that.attr('data-id')+'">';
                        }
                        str += '</td></tr></table>';
                    }
                    str += '</div></div>';
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + that.attr('data-start-subarea') + ' <span class="weight300">to</span> '+ that.attr('data-end-subarea') + '</div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Commute Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Commute ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += that.attr('data-code');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-status');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-address');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-address');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-time');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-time');
                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}




function rightaddbilling(that){
    var str = '';
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + that.attr('data-amount') + '</div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Billing Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Billing ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += that.attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-status');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Month</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-month');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Year</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-year');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start date</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-date');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-time');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End date</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-date');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-time');
                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddwalletupdate(that){
    var str = '';
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + that.attr('data-amount') + '</div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Update Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Update ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += that.attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Wallet balance</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-wallet-balance');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Type</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-type');
                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}



function rightaddwallet(that){
    var str = '';

                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    str += '<table class="stdtable"><tr><td valign="center">';

                    str += '<input type="button" class="btn btn_small btnwhite btncard move btncolorprim btnupdatebalance" value="Update balance" data-type="updatebalance" data-name="'+that.attr('data-name')+'" data-id="'+that.attr('data-profile-id')+'">';
                        
                    str += '</td></tr></table>';
                    str += '</div></div>';


                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">';
                    str += that.attr('data-name');
                    str += '</div><div class="border-box clearfix name blackspan65 leftalign weight500"><span style="text-transform:none;">';
                    str += that.attr('data-balance');
                    str += '</span></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Wallet Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Wallet ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += that.attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Type</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-type');
                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}



function rightaddlead(that){
    var str = '';
                    str += '<div class="border-box clearfix buttons">';
                    str += '<div class="border-box blackspan9 weight500">';
                    if(true){
                        str += '<table class="stdtable"><tr><td valign="center">';
                        if(true){
                            str += '<button class="btn btn_small btncolorprim btncard move btnleadcomments" data-type="comments" data-id="'+that.attr('data-id')+'">Comments</button>';
                            str += '</td><td valign="center">'
                        }
                        if(true){
                            str += '<button class="btn btn_small btnwhite btncard move btnsendnrnotif" data-type="nr" data-id="'+that.attr('data-id')+'">Send NR Notif</button>';
                            str += '</td><td valign="center">'
                        }
                        if(true){
                            str += '<button class="btn btn_small btnwhite btncard move btnsendnanotif" data-type="na" data-id="'+that.attr('data-id')+'">Not available</button>';
                        }
                        str += '</td></tr></table>';
                    }
                    str += '</div>';

                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    if(true){
                        str += '<table class="stdtable"><tr>';
                        if(that.attr('data-bucket') != 'Hot'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Hot" data-id="'+that.attr('data-id')+'" style="color:#19d623;">Hot</button>';
                            str += '</td>';
                        }
                        if(that.attr('data-bucket') != 'Warm'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Warm" data-id="'+that.attr('data-id')+'" style="color:#ffee00;">Warm</button>';
                            str += '</td>';
                        }
                        if(that.attr('data-bucket') != 'Lukewarm'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Lukewarm" data-id="'+that.attr('data-id')+'" style="color:#ff9400;">Lukewarm</button>';
                            str += '</td>';
                        }
                        if(that.attr('data-bucket') != 'Cold'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Cold" data-id="'+that.attr('data-id')+'" style="color:#ff0000;">Cold</button>';
                            str += '</td>';
                        }
                        if(that.attr('data-bucket') != 'NoResp'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="NoResp" data-id="'+that.attr('data-id')+'" style="color:#00faff;">No response</button>';
                            str += '</td>';
                        }
                        if(that.attr('data-bucket') != 'NC'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="NC" data-id="'+that.attr('data-id')+'" style="color:#ff00ff;">No Cat</button>';
                            str += '</td>';
                        }
                        str += '</tr></table>';
                    }

                    str += '</div></div>';

                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + that.attr('data-start-subarea') + ' <span class="weight300">to</span> '+ that.attr('data-end-subarea') + '</div>';
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span style="color:'+that.attr('data-bucket-color')+'" style="text-transform:none;">'+that.attr('data-phone')+'</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Lead Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += that.attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Bucket</span></td></tr></table></div><div class="border-box inner"><table class="stdtable" style="color:'+that.attr('data-bucket-color')+'"><tr><td valign="center">';
                    str += that.attr('data-bucket');
                    if(that.attr('data-nr-count') != "None"){
                        str +=  " "+that.attr('data-nr-count');
                    }
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Source</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-source');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-time');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-time');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-zone');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-zone');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Seats</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-seats');

                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-address');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-address');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Remarks 1</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-remarks1');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Remarks 2</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-remarks2');

                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddsignup(that){
    var str = '';
                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                        str += '<table class="stdtable"><tr><td valign="center">';
                        if(that.attr('data-status') != 'Declined'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignupdecline" value="Decline" data-type="decline" data-id="'+that.attr('data-id')+'">';
                        }
                        if(that.attr('data-status') != 'Potential'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignuppotential" value="Potential" data-type="potential" data-id="'+that.attr('data-id')+'">';
                        }
                        if(that.attr('data-status') != 'Available'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignupavailable" value="Available" data-type="available" data-id="'+that.attr('data-id')+'">';
                        }
                        str += '</td></tr></table>';
                    str += '</div></div>';
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + that.attr('data-start-subarea') + ' <span class="weight300">to</span> '+ that.attr('data-end-subarea') + '</div>';
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span style="text-transform:none;">';
                    str += that.attr('data-status');
                    str += '</span></div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Signup Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Signup ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-id');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-status');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start subarea</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-subarea');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End subarea</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-subarea');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-start-time');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-end-time');
                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddcall(that){
    var color = '';
                    if(that.attr('data-agent-number') == 'Call Missed'){
                        color = 'colortert500span';
                    }else{
                        color = 'colorprim500span';
                    }

                    var str = '';
                    
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + that.attr('data-customer-number') + '</div>';
                    
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="' + color + '" style="text-transform:none;">'; 
                    if(that.attr('data-call-type') == '0'){
                        str += "Incoming";
                    }
                    if(that.attr('data-call-type') == '1'){
                        str += "Outgoing";
                    }
                    str += '</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Call Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Ad Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+that.attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status/Agent</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+that.attr('data-agent-number');
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+that.attr('data-startdate')+" "+that.attr('data-starttime');
                    str += '</span></td></tr></table></div></div>';
                    str += '</div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddfbad(that){
    var color = '';
                    if(that.attr('data-status') == 'Processing'){
                        color = 'colorsec500span';
                    }
                    if(that.attr('data-status') == 'Primed'){
                        color = 'colorprim500span';
                    }
                    if(that.attr('data-status') == 'Detailed'){
                        color = 'blackspan4';
                    }

                    var str = '';
                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> ';
                    str += that.attr('data-posteddate')+ ' '+that.attr('data-postedtime');
                    str += '</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
                    
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + that.attr('data-name') + '</div>';
                    
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="' + color + '" style="text-transform:none;">' + that.attr('data-phone') + '</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Ad Lead Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Ad Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+that.attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+that.attr('data-status');
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">FB Ad ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+that.attr('data-fb-ad-id');
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-name');
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Email</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-email');
                    str += '</td></tr></table></div></div>';


                    str += '</div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightadduser(that){
    var str = '';
                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    str += '<table class="stdtable"><tr><td valign="center">';

                    str += '<input type="button" class="btn btn_small btnwhite btncard move btncolorprim btnupdatebalance" value="Update balance" data-type="updatebalance" data-name="'+that.attr('data-name')+'" data-id="'+that.attr('data-id')+'">';
                        
                    str += '</td></tr></table>';
                    str += '</div></div>';

                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">';
                    str += that.attr('data-name');
                    str += '</div><div class="border-box clearfix name blackspan65 leftalign weight500"><span style="text-transform:none;">';
                    str += that.attr('data-email');
                    str += '</span></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Profile ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-id');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-phone');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Gender</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-gender');
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddderbii(that){
    var str = '';
                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500">';
                    if (that.attr('data-status') != 'Inactive'){
                        str += '<table class="stdtable"><tr><td valign="center"><button class="btn btn_small btncolorprim btncard move btneditderbii" data-type="edit" data-title="'+that.attr('data-title')+'" data-id="'+that.attr('data-id')+'"'+' data-reverse-code="'+that.attr('data-reverse-code')+'"'+'>Edit</button></td><td valign="center"><button class="btn btn_small btnwhite btncard move btndeactivate" data-type="deactivate" data-id="'+that.attr('data-id')+'" style="color:#FC6B58;">Deactivate</button></td>';
                        if (that.attr('data-status') != 'Processing'){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnprocess" data-type="process" data-id="'+that.attr('data-id')+'">Set processing</button></td>';
                        }
                        if (that.attr('data-status') != 'Active'){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnactivate" data-type="activate" data-id="'+that.attr('data-id')+'">Activate</button></td>';
                        }
                        str += '</tr></table>';
//                        '+that.attr('data-id')+'
                    }
                    str += '</div><div class="border-box blackspan9 weight500 rightalign">';
                    str += '</div><div class="border-box blackspan9 weight500 rightalign">';
                    str += '</div></div>';

                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">';
                    str += that.attr('data-start-zone') + ' <span class="weight300">to</span> ' + that.attr('data-end-zone') + '</div>';
                    
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Derbii Details</div><div class="border-box clearfix"><div class=""><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Derbii ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                    str += that.attr('data-code');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Commutes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-commutes-count');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Nodes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    console.log(that.attr('data-nodes'));
                    var nodes = JSON.parse(that.attr('data-nodes'));

                    str += nodes.length;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">People</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-commutes');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Direction</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-direction');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    if (that.attr('data-status') == 'Active'){
                        str += '<span class="colorprim500span">';
                    }
                    if (that.attr('data-status') == 'Inactive'){
                        str += '<span class="colortert500span">';
                    }
                    str += that.attr('data-status');
                    if (that.attr('data-status') == 'Active' || that.attr('data-status') == 'Inactive'){
                        str += '</span>';
                    }
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Days</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">';
                    str += that.attr('data-days') + '</span>';
                    str += '</td></tr></table></div></div>';

                    for (var i = 0; i < nodes.length; i++){
                        str += '<div class="border-box clearfix card bgwhite addboxes commutes leftalign"><div class="border-box clearfix shadow-box ';
                        str += 'bgcolorsec500';
                        str += ' leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left leftalign weight600">';

                        str += '</div><div class="border-box clearfix rightalign right weight900"><span class="position">';
                        str += nodes[i].position;
                        str += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign" style="width:100%;"><div><span class="weight600">Address: </span> ';
                        str += nodes[i].address;
                        str += '</div><div><span class="weight600">Time: &nbsp;&nbsp;</span> ';
                        str += nodes[i].arrival_time + ' to ' + nodes[i].departure_time;
                        str += '</div></div></div></div>';
                    }

                    str += '</div></div></div>';

                    $("#dashboardmainright").html('').html(str);
}









function rightaddfbadsame(data){
    var color = '';
                    if(data.status__status == 'Processing'){
                        color = 'colorsec500span';
                    }
                    if(data.status__status == 'Primed'){
                        color = 'colorprim500span';
                    }
                    if(data.status__status == 'Detailed'){
                        color = 'blackspan4';
                    }

                    console.log(data);
                    var str = '';

                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> '+ data.posteddatef +', '+ data.postedtimef +'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center">Hello</td></tr></table></div></div>';
                    
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + data.first_name + ' ' + data.last_name + '</div>';
                    
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="' + color + '" style="text-transform:none;">' + data.phone + '</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Ad Lead Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Ad Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.id;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.status__status;
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">FB ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.fb_id;
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">FB Ad ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.fb_ad_id;
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">FB Campaign name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.name;
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">FB Ad name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.ad_name;
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.first_name + ' ' + data.last_name;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Gender</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.gender;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Email</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.email;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.extra__start_address;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.extra__end_address;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Timings</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.extra__timings;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Raw name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.extra__name;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Raw phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.raw_phone;
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Raw email</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.raw_email;
                    str += '</td></tr></table></div></div>';




                    str += '</div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}



function rightaddwalletupdatesame(data){

                    console.log(data);
                    var str = '';

                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> '+ data.posteddate_f +', '+ data.postedtime_f +'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center">Hello</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + data.amount + '</div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Update Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Update ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += data.id;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Wallet balance</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.wallet__balance;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Type</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.type;
                    if (data.class_name == "ManualUpdate" || data.class_name == "Debit" || data.class_name == "BankRecharge"){
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Comments</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.comments;
                    }else if (data.class_name == "BillingDebit"){
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Comments</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.comments;
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Billing ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.billing_id;
                    }else if (data.class_name == "UploadedInvoiceCredit"){
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Month</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.month;
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Year</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.year;
                    }else {
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Txn ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.txnid;
                    }
                    
                    if (data.class_name == "UploadedInvoiceCredit"){
                        str += '</td></tr></table></div></div><div class="border-box clearfix">';
                        str += '<div class="border-box clearfix docs blackspan65 leftalign weight300"><div class="border-box clearfix" style="margin-top:20px;"><div class="border-box clearfix blackspan56 leftalign weight500" style="margin-bottom:10px;">Doc</div><div class="photomain border-box clearfix"><div class="border-box" data-image-id="'+data.id+'">
                <div class="top border-box clearfix">
                    <div class="border-box clearfix centeralign"><img class="mainimage" src="'+data.url+'"></div><div class="border-box clearfix expanduploadedinvoicebtn" data-image-id="'+data.id+'" data-image-url="'+data.url+'" data-image-filename="'+data.filename+'">
                        <table class="stdtable"><tr><td valign="center">
                            <img src="https://derbiicdn.storage.googleapis.com/images/icons/expand32.png">
                        </td></tr></table>
                    </div>
                </div>
                <div class="bottom border-box clearfix blackspan9 weight400">
                    <div class="border-box centeralign left">
                        '+data.filename+'
                    </div>
                    <div class="border-box centeralign">
                    <a href="'+data.url+'" target="_blank">
                        <table class="stdtable"><tr><td valign="center">
                            <img src="https://derbiicdn.storage.googleapis.com/images/icons/download16.png" height="14">
                        </td></tr></table>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>';



                    }

                    str += '</div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.wallet__profile__user__first_name + " " + data.wallet__profile__user__last_name;
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddwalletsame(data){

                    console.log(data);
                    var str = '';

                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    str += '<table class="stdtable"><tr><td valign="center">';

                    str += '<input type="button" class="btn btn_small btnwhite btncard move btncolorprim btnupdatebalance" value="Update balance" data-name="'+data.profile__user__first_name + ' ' + data.profile__user__last_name+'" data-type="updatebalance" data-id="'+data.profile__id+'">';
                        
                    str += '</td></tr></table>';
                    str += '</div></div>';

                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">'; 
                    str+ = data.profile__user__first_name + " " + data.profile__user__last_name + '</div>';
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span style="text-transform:none;">';
                    str += data.balance;
                    str += '</span></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Wallet Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Wallet ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += data.id;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Type</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.type;
                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.profile__user__first_name + " " + data.profile__user__last_name;
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddbillingsame(data){

                    console.log(data);
                    var str = '';

                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> '+ data.postedtime +'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center">Hello</td></tr></table></div></div>';
                    
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + data.amount + '</div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Billing Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Billing ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += data.id;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.status;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Month</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.month;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Year</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.year;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start date</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.start_date_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.start_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End date</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.end_date_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.end_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Billing type</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.billing_type;
                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.profile__user__first_name +" " + data.profile__user__last_name;
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}

function rightaddcallsame(data){
    var color = '';
                    if(data.agent_number == 'Call Missed'){
                        color = 'colortert500span';
                    }else{
                        color = 'colorprim500span';
                    }

                    console.log(data);
                    var str = '';

                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> '+ data.posteddatef +', '+ data.postedtimef +'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center">Hello</td></tr></table></div></div>';
                    
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + data.customer_number + '</div>';
                    
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="' + color + '" style="text-transform:none;">'; 
                    if(data.call_type == '0'){
                        str += "Incoming";
                    }
                    if(data.call_type == '1'){
                        str += "Outgoing";
                    }
                    str += '</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Call Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Ad Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.id;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status/Agent</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+data.agent_number;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.startdatef+" "+data.starttimef;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Duration</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.call_duration;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Recording</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    if (data.call_recording != ''){
                        str += '<a class="colorprim500span underlinelinks" style="text-transform:none;" target="_blank" href="'+data.call_recording+'">Download MP3</a>';
                    }
                    str += '</td></tr></table></div></div>';
                    str += '</div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}



function rightaddusersame(data){
    console.log(data);
    var str = '';

                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    str += '<table class="stdtable"><tr><td valign="center">';

                    str += '<input type="button" class="btn btn_small btnwhite btncard move btncolorprim btnupdatebalance" value="Update balance" data-type="updatebalance" data-name="'+data.user__first_name + ' ' + data.user__last_name+'" data-id="'+data.id+'">';
                        
                    str += '</td></tr></table>';
                    str += '</div></div>';


                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">';
                    str += data.user__first_name + ' ' + data.user__last_name;
                    str += '</div><div class="border-box clearfix name blackspan65 leftalign weight500"><span style="text-transform:none;">';
                    str += data.user__email;
                    str += '</span></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Profile ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.id;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.simplev__phone__number;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Gender</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.gender;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Device</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.device;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Facebook Link</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += '<a class="colorprim500span underlinelinks" style="text-transform:none;" target="_blank" href="'+data.facebookv__link+'">URL</a>';
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Google Link</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += '<a class="colorprim500span underlinelinks" style="text-transform:none;" target="_blank" href="'+data.googlev__photo_link+'">URL</a>';
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}


function rightaddcommutesame(data){
    console.log(data);
    var str = '';

                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> '+ data.posteddatef +', '+ data.postedtimef +'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center">Hello</td></tr></table></div></div>';
                    
                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    if(data.status != 'Active'){
                        str += '<table class="stdtable"><tr><td valign="center">';
                        if(data.status != 'Declined'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btndecline" value="Decline" data-type="decline" data-id="'+data.id+'">';
                        }
                        if(data.status != 'Potential'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnpotential" value="Potential" data-type="potential" data-id="'+data.id+'">';
                        }
                        if(data.status != 'Available'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnavailable" value="Available" data-type="available" data-id="'+data.id+'">';
                        }
                        str += '</td></tr></table>';
                    }
                    str += '</div></div>';
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + data.route__start__place__zone__subarea__name + ' <span class="weight300">to</span> '+ data.route__end__place__zone__subarea__name + '</div>';

                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="';
                    if(data.status == 'Active'){
                        str += 'colorprim500span';
                    }
                    if(data.status == 'Processing'){
                        str += 'colorsec500span';
                    }
                    if(data.status == 'Available'){
                        str += 'colorcommuteavailablespan';
                    }
                    if(data.status == 'Potential'){
                        str += 'colorcommutepotentialspan';
                    }
                    if(data.status == 'Declined'){
                        str += 'colorcommutedeclinedspan';
                    }
                    if(data.status == 'Inactive'){
                        str += 'colortert500span';
                    }
                    str += '" style="text-transform:none;">'+data.reverse_type+'</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Commute Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Commute ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    if(data.status == 'Active'){
                        str += 'colorprim500span';
                    }
                    if(data.status == 'Processing'){
                        str += 'colorsec500span';
                    }
                    if(data.status == 'Available'){
                        str += 'colorcommuteavailablespan';
                    }
                    if(data.status == 'Potential'){
                        str += 'colorcommutepotentialspan';
                    }
                    if(data.status == 'Declined'){
                        str += 'colorcommutedeclinedspan';
                    }
                    if(data.status == 'Inactive'){
                        str += 'colortert500span';
                    }
                    str += '">';
                    str += data.code;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Seats</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    if (data.seats__seats == "100"){
                        str += '8+';
                    }else{
                        str += data.seats__seats;
                    }
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Type</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.type;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    if(data.status == 'Active'){
                        str += '<span class="colorprimlight500span">';
                    }
                    if(data.status == 'Inactive'){
                        str += '<span class="colortert500spanspan">';
                    }
                    str += data.status;
                    if (data.status == 'Active' || data.status == 'Inactive'){
                        str += '</span>';
                    }
                    
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.route__start__address;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.route__end__address;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.route__start__place__zone__name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.route__end__place__zone__name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Days</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.days;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.start_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.end_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Distance</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.distance;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Duration</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.duration;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Price</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.fare__amount;
                    str += '</td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move btneditprice" value="Edit" data-type="editprice" data-id="'+data.id+'"></td><td valign="center"><input id="buttonresetprice" type="button" class="btn btn_small btnwhite btncard move" value="Reset" data-type="resetprice" data-commute-id="'+data.id+'">';
                    str += '</td></tr></table></div></div></div></div></div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Profile ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.profile__id;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.profile__user__first_name + ' ' + data.profile__user__last_name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Email</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.profile__user__email;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.profile__simplev__phone__number;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Gender</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.profile__gender;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Device</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.device;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Facebook Link</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += '<a class="colorprim500span underlinelinks" style="text-transform:none;" target="_blank" href="'+data.profile__facebookv__link+'">URL</a>'
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}



function rightaddsignupsame(data){
    console.log(data);
    var str = '';
                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> '+ data.posteddatef +', '+ data.postedtimef +'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center">Hello</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                        str += '<table class="stdtable"><tr><td valign="center">';
                        if(data.status__status != 'Declined'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignupdecline" value="Decline" data-type="decline" data-id="'+data.id+'">';
                        }
                        if(data.status__status != 'Potential'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignuppotential" value="Potential" data-type="potential" data-id="'+data.id+'">';
                        }
                        if(data.status__status != 'Available'){
                            str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignupavailable" value="Available" data-type="available" data-id="'+data.id+'">';
                        }
                        str += '</td></tr></table>';
                    str += '</div></div>';
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + data.pickup_zone__zone__subarea__name + ' <span class="weight300">to</span> '+ data.drop_zone__zone__subarea__name + '</div>';
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="';
                    if(data.status__status == 'Active'){
                        str += 'colorprim500span';
                    }
                    if(data.status__status == 'Processing'){
                        str += 'colorsec500span';
                    }
                    if(data.status__status == 'Available'){
                        str += 'colorcommuteavailablespan';
                    }
                    if(data.status__status == 'Potential'){
                        str += 'colorcommutepotentialspan';
                    }
                    if(data.status__status == 'Declined'){
                        str += 'colorcommutedeclinedspan';
                    }
                    if(data.status__status == 'Inactive'){
                        str += 'colortert500span';
                    }
                    str += '" style="text-transform:none;">'+data.status__status+'</span></div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Signup Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Signup ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.id;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Type</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += '';
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.status__status;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.address__pickup_address;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.address__drop_address;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.pickup_zone__zone__name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.drop_zone__zone__name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Days</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += '';
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.pickup_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.return_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Distance</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.distance;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Duration</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.duration;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Price</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.fare__amount;
                    str += '</td></tr></table></div></div></div></div></div>';
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Profile ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += '';
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.first_name + ' ' + data.last_name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Email</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.email;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.phone;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Gender</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.gender;
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}




function rightaddleadsame(data){
    console.log(data);
    var str = '';

                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> '+ data.posteddatef +', '+ data.postedtimef +'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center">Hello</td></tr></table></div></div>';

                    console.log('here');

                    str += '<div class="border-box clearfix buttons">';
                    str += '<div class="border-box blackspan9 weight500">';
                    if(true){
                        str += '<table class="stdtable"><tr><td valign="center">';
                        if(true){
                            str += '<button class="btn btn_small btncolorprim btncard move btnleadcomments" data-type="comments" data-id="'+data.id+'">Comments</button>';
                            str += '</td><td valign="center">'
                        }
                        if(true){
                            str += '<button class="btn btn_small btnwhite btncard move btnsendnrnotif" data-type="nr" data-id="'+data.id+'">Send NR Notif</button>';
                            str += '</td><td valign="center">'
                        }
                        if(true){
                            str += '<button class="btn btn_small btnwhite btncard move btnsendnanotif" data-type="na" data-id="'+data.id+'">Not available</button>';
                        }
                        str += '</td></tr></table>';
                    }
                    str += '</div>';

                    str += '<div class="border-box blackspan9 weight500 rightalign">';
                    if(true){
                        str += '<table class="stdtable"><tr>';
                        if(data.bucket__name != 'Hot'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Hot" data-id="'+data.id+'" style="color:#19d623;">Hot</button>';
                            str += '</td>';
                        }
                        if(data.bucket__name != 'Warm'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Warm" data-id="'+data.id+'" style="color:#ffee00;">Warm</button>';
                            str += '</td>';
                        }
                        if(data.bucket__name != 'Lukewarm'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Lukewarm" data-id="'+data.id+'" style="color:#ff9400;">Lukewarm</button>';
                            str += '</td>';
                        }
                        if(data.bucket__name != 'Cold'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Cold" data-id="'+data.id+'" style="color:#ff0000;">Cold</button>';
                            str += '</td>';
                        }
                        if(data.bucket__name != 'NoResp'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="NoResp" data-id="'+data.id+'" style="color:#00faff;">No response</button>';
                            str += '</td>';
                        }
                        if(data.bucket__name != 'NC'){
                            str += '<td valign="center">';
                            str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="NC" data-id="'+data.id+'" style="color:#ff00ff;">No Cat</button>';
                            str += '</td>';
                        }
                        str += '</tr></table>';
                    }

                    str += '</div></div>';

                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + data.start_zone__subarea__name + ' <span class="weight300">to</span> '+ data.end_zone__subarea__name + '</div>';
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span style="color:'+data.bucket__color+'" style="text-transform:none;">'+data.phone+'</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Lead Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
                    str += data.id;
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Bucket</span></td></tr></table></div><div class="border-box inner"><table class="stdtable" style="color:'+data.bucket__color+'"><tr><td valign="center">';
                    str += data.bucket__name;
                    if(data.nr__count != "None"){
                        str +=  " "+data.nr__count;
                    }
                    str += ' <span style="text-transform:none;">('+data.bucket__description+')</span>';
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Source</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.source;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Source ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.source_id;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.start_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.end_time_f;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.first_name + ' ' + data.last_name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Gender</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.gender;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Email</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.email;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.start_zone__name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.end_zone__name;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Seats</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.comments__seats;

                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.comments__start_address;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.comments__end_address;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Remarks 1</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.comments__remarks1;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Remarks 2</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.comments__remarks2;

                    str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += data.first_name + ' ' + data.last_name;
                    str += '</td></tr></table></div></div></div></div></div>';
                    $("#dashboardmainright").html('').html(str);
}




function rightaddderbiisame(data){
    console.log(data);
    var str = '';

    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on </span>'+data.postedtime+'</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500">';
                    if (data.status != 'Inactive'){
                        str += '<table class="stdtable"><tr><td valign="center"><button class="btn btn_small btncolorprim btncard move btneditderbii" data-type="edit" data-title="'+data.title+'"data-direction="'+data.direction+'" data-id="'+data.id+'"'+' data-reverse-code="'+data.reverse_code+'"'+'>Edit</button></td><td valign="center"><button class="btn btn_small btnwhite btncard move btndeactivate" data-type="deactivate" data-id="'+data.id+'" style="color:#FC6B58;">Deactivate</button></td>';
                        if (data.status != 'Processing'){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnprocess" data-type="process" data-id="'+data.id+'">Set processing</button></td>';
                        }
                        if (data.status != 'Active'){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnactivate" data-type="activate" data-id="'+data.id+'">Activate</button></td>';
                        }
                        str += '</tr></table>';
//                        '+data.attr('data-id')+'
                    }
                    str += '</div><div class="border-box blackspan9 weight500 rightalign">';
                    if (data.status != 'Inactive'){
                        str += '<table class="stdtable"><tr>';
                        if (data.attachment){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnattach" data-type="attach" data-id="'+data.id+'">Attach</button></td><td valign="center"><button class="btn btn_small btnwhite btncard move btndetach" data-type="detach" data-id="'+data.id+'">Detach</button></td>';
                        }else{
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnattach" data-type="attach" data-id="'+data.id+'">Attach</button></td>';
                        }
                        if (data.detail){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btndetail" data-type="detail" data-id="'+data.id+'">Detail</button></td><td valign="center"><button class="btn btn_small btnwhite btncard move btnundetail" data-type="undetail" data-id="'+data.id+'">Undetail</button></td>';
                        }else{
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btndetail" data-type="detail" data-id="'+data.id+'">Detail</button></td>';
                        }
                        str += '</tr></table>';
                    }
                    str += '</div><div class="border-box blackspan9 weight500 rightalign">';
                    if (data.status != 'Inactive'){
                        str += '<table class="stdtable"><tr>';
                        if (data.assignment){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnassign" data-type="assign" data-id="'+data.id+'">Assign</button></td><td valign="center"><button class="btn btn_small btnwhite btncard move btnunassign" data-type="unassign" data-id="'+data.id+'">Unassign</button></td>';
                        }else{
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnassign" data-type="assign" data-id="'+data.id+'">Assign</button></td>';
                        }
                        str += '</tr></table>';
                    }
                    if (data.reverse == 'NA'){
                        str += '<table class="stdtable"><tr>';
                        str += '<td valign="center"><button class="btn btn_small btncolorprim btncard move btncreatereverse" data-type="createreverse" data-id="'+data.id+'" data-code="'+data.code+'" data-title="'+data.title+'">Create reverse</button></td>';
                        str += '</tr></table>';
                    }
                    str += '</div></div>';


                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">';
                    str += data.start_zone + ' <span class="weight300">to</span> ' + data.end_zone + '</div>';

                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="colorprimlight500span" style="text-transform:none;">'+data.reverse_type+'</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Derbii Details</div><div class="border-box clearfix"><div class="">';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Title</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">'+data.title+'</span></td><td valign="center"><button class="btn btn_small btncolorprim btncard move btneditderbiititle" data-type="edittitle" data-title="'+data.title+'" data-id="'+data.id+'" data-code="'+data.code+'"">Edit</button></td></tr></table></div></div>';
                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Derbii ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">'+data.code+'</span></td></tr></table></div></div>';
                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Commutes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">'+data.commutes.length+'</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Nodes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">'+data.nodes.length+'</td></tr></table></div></div>';
                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';

                    if (data.status == 'Active'){
                        str += '<span class="colorprimlight500span">';
                    }
                    if (data.status == 'Inactive'){
                        str += '<span class="colortert500span">';
                    }
                    str += data.status;
                    if (data.status == 'Active' || data.status == 'Inactive'){
                        str += '</span>';
                    }
                    str += '</td></tr></table></div></div>';
                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Days</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">'+data.days+'</span></td></tr></table></div></div>';
                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Direction</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">'+data.direction+'</td></tr></table></div></div>';
                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Reverse</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">'+data.reverse+'</td></tr></table></div></div>';
                    
                    for (var i = 0; i < data.nodes.length; i++) {
                        var comm;
                        for (var j = 0; j < data.commutes.length; j++) {
                            var commute = data.commutes[j];
                            if(data.nodes[i].address__id == commute.route__start__id){
                                data.nodes[i]['name'] = commute.profile__user__first_name + ' ' + commute.profile__user__last_name;
                                data.nodes[i]['commute_code'] = commute.code;
                                data.nodes[i]['type'] = 'pickup';
                                data.nodes[i]['start_time'] = commute.start_time_f;
                                data.nodes[i]['end_time'] = commute.end_time_f;
                                data.nodes[i]['commute_id'] = commute.id;
                                data.nodes[i]['commute_direction'] = commute.route__type;
                            }
                            if(data.nodes[i].address__id == commute.route__end__id){
                                data.nodes[i]['name'] = commute.profile__user__first_name + ' ' + commute.profile__user__last_name;
                                data.nodes[i]['commute_code'] = commute.code;
                                data.nodes[i]['type'] = 'drop';
                                data.nodes[i]['start_time'] = commute.start_time_f;
                                data.nodes[i]['end_time'] = commute.end_time_f;
                                data.nodes[i]['commute_id'] = commute.id;
                                data.nodes[i]['commute_direction'] = commute.route__type;
                            }
                        }
                    }

                    for (var i = 0; i < data.nodes.length; i++) {
                        var node = data.nodes[i];
                        str += '<div class="border-box clearfix card bgwhite addboxes commutes leftalign"';
                        str += ' data-type="'+node.type+'"';
                        str += ' data-name="'+node.name+'"';
                        str += ' data-commute-code="'+node.commute_code+'"';
                        str += ' data-commute-id="'+node.commute_id+'"';
                        str += ' data-commute-direction="'+node.commute_direction+'"';
                        str += ' data-position="'+node.position+'"';
                        str += ' data-address="'+node.address__address+'"';
                        str += ' data-arrival-time="'+node.arrival_time_f+'"';
                        str += ' data-departure-time="'+node.departure_time_f+'"';
                        str += ' data-start-time="'+node.start_time+'"';
                        str += ' data-end-time="'+node.end_time+'">';
                        str += '<div class="border-box clearfix shadow-box ';
                        if (node.type == 'pickup'){
                            str += 'bggreen';
                        }else{
                            str += 'bgred';
                        }
                        str += ' leftalign title weight500 uppercased shadow-text whitespan">';

                        str += '<div class="border-box clearfix left"><div class="border-box clearfix leftalign weight600">';
                        str += node.name;
                        str += '</div><div class="border-box clearfix leftalign weight400 code">';
                        str += node.commute_code;
                        str += '</div></div>';

//                        str += '<div class="border-box clearfix left leftalign weight600">'+node.name+'</div>';
                        str += '<div class="border-box clearfix rightalign right weight900"><span class="position">'+node.position+'</span></div>';
                        str += '</div>';
                        str += '<div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign" style="width:100%;"><div><span class="weight600">Address: </span>';
                        str += node.address__address;
                        str += '</div><div><span class="weight600">Time: </span>';
                        str += node.arrival_time_f + ' to ' + node.departure_time_f;
                        str += '</div></div></div></div>';
                    }
                

                    str += '</div></div></div>';
/*                    
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Derbii Details</div><div class="border-box clearfix"><div class=""><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Derbii ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                    str += that.attr('data-code');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Commutes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-commutes-count');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Nodes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    console.log(that.attr('data-nodes'));
                    var nodes = JSON.parse(that.attr('data-nodes'));

                    str += nodes.length;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">People</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-commutes');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Direction</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += that.attr('data-direction');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    if (that.attr('data-status') == 'Active'){
                        str += '<span class="colorprim500span">';
                    }
                    if (that.attr('data-status') == 'Inactive'){
                        str += '<span class="colortert500span">';
                    }
                    str += that.attr('data-status');
                    if (that.attr('data-status') == 'Active' || that.attr('data-status') == 'Inactive'){
                        str += '</span>';
                    }
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Days</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">';
                    str += that.attr('data-days') + '</span>';
                    str += '</td></tr></table></div></div>';

                    for (var i = 0; i < nodes.length; i++){
                        str += '<div class="border-box clearfix card bgwhite addboxes commutes leftalign"><div class="border-box clearfix shadow-box ';
                        str += 'bgcolorsec500';
                        str += ' leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left leftalign weight600">';

                        str += '</div><div class="border-box clearfix rightalign right weight900"><span class="position">';
                        str += nodes[i].position;
                        str += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign" style="width:100%;"><div><span class="weight600">Address: </span> ';
                        str += nodes[i].address;
                        str += '</div><div><span class="weight600">Time: &nbsp;&nbsp;</span> ';
                        str += nodes[i].arrival_time + ' to ' + nodes[i].departure_time;
                        str += '</div></div></div></div>';
                    }

                    str += '</div></div></div>';*/


                    if (data.assignment){
                        str += '<div class="border-box clearfix detailstrip blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Vendor assignment details</div><div style="overflow:hidden;clear:both;width:100%;"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Assigned on</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                        str += data.assignment_postedtime;
                        str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Vendor</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                        str += data.providername;
                        str += '</span></td></tr></table></div></div></div></div></div>';
                    }
                    if (data.attachment){
                        str += '<div class="border-box clearfix detailstrip blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Cab & driver attachment details</div><div style="overflow:hidden;clear:both;width:100%;"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Attached on</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                        str += data.attachment_postedtime;
                        str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Vehicle</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                        str += data.vehiclemodel, data.vehiclenumber;
                        str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Driver name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.drivername;
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Driver phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.driverphone;
                        str += '</span></td></tr></table></div></div></div></div></div>';
                    }
                    if (data.detail){
                        str += '<div class="border-box clearfix detailstrip blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Cab & driver tempdetail details</div><div style="overflow:hidden;clear:both;width:100%;"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Detailed on</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                        str += data.detail_postedtime;
                        str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Vehicle</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                        str += data.temp_vehiclemodel, data.temp_vehiclenumber;
                        str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Driver name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.temp_drivername;
                        str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Driver phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                        str += data.temp_driverphone;
                        str += '</span></td></tr></table></div></div></div></div></div>';
                    }

                    $("#dashboardmainright").html('').html(str);
}






















function render_clusters_main(data){
    $('#dashboardprime > div.main').html('');
}






function render_wallets_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.wallets_list.length > 0){
                                for (var i = 0; i < data.wallets_list.length; i++){
                                    var htmlstr = '';
                                    var wallet = data.wallets_list[i];
                                    htmlstr += '<div class="boxes wallet border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ wallet.id +'"';
                                    htmlstr += ' data-name="'+ wallet.profile__user__first_name +' '+ wallet.profile__user__last_name +'"';
                                    htmlstr += ' data-balance="'+ wallet.balance +'"';
                                    htmlstr += ' data-type="'+ wallet.type +'"';
                                    htmlstr += ' data-profile-id="'+ wallet.profile__id +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes2"><table class="stdtable colorprim500span"><tr><td valign="center">&#9679;</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes18"><table class="stdtable colorprim500span" style="text-transform:uppercase;"><tr><td valign="center">'+ wallet.id +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes3"><table class="stdtable colorprim500span"><tr><td valign="center">'+ wallet.profile__user__first_name +'<br>'+ wallet.profile__user__last_name +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes3"><table class="stdtable"><tr><td valign="center">'+ wallet.balance +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes10"><table class="stdtable"><tr><td valign="center">'+ wallet.type +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No updates yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}

function render_walletupdates_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.walletupdates_list.length > 0){
                                for (var i = 0; i < data.walletupdates_list.length; i++){
                                    var htmlstr = '';
                                    var wallet = data.walletupdates_list[i];
                                    htmlstr += '<div class="boxes walletupdate border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ wallet.id +'"';
                                    htmlstr += ' data-name="'+ wallet.wallet__profile__user__first_name +' '+ wallet.wallet__profile__user__last_name +'"';
                                    htmlstr += ' data-amount="'+ wallet.amount +'"';
                                    htmlstr += ' data-posteddate="'+ wallet.posteddate_f +'"';
                                    htmlstr += ' data-postedtime="'+ wallet.postedtime_f +'"';
                                    htmlstr += ' data-type="'+ wallet.type +'"';
                                    htmlstr += ' data-wallet-balance="'+ wallet.wallet__balance +'"';
                                    htmlstr += ' data-profile-id="'+ wallet.wallet__profile__id +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes2"><table class="stdtable colorprim500span"><tr><td valign="center">&#9679;</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes17"><table class="stdtable colorprim500span" style="text-transform:uppercase;"><tr><td valign="center">'+ wallet.id +'<br><span style="font-size:.7rem;">'+ billing_class_names[wallet.class_name] +'</span></td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes18"><table class="stdtable colorprim500span"><tr><td valign="center">'+ wallet.wallet__profile__user__first_name +'<br>'+ wallet.wallet__profile__user__last_name +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ wallet.amount +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ wallet.type +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ wallet.posteddate_f +'<br>'+ wallet.postedtime_f +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ wallet.wallet__balance +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No updates yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}


function render_billing_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.billing_list.length > 0){
                                for (var i = 0; i < data.billing_list.length; i++){
                                    var htmlstr = '';
                                    var billing = data.billing_list[i];
                                    htmlstr += '<div class="boxes billing border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ billing.id +'"';
                                    htmlstr += ' data-name="'+ billing.profile__user__first_name +' '+ billing.profile__user__last_name +'"';
                                    htmlstr += ' data-amount="'+ billing.amount +'"';
                                    htmlstr += ' data-billing-type="'+ billing.billing_type +'"';
                                    htmlstr += ' data-status="'+ billing.status +'"';
                                    htmlstr += ' data-month="'+ billing.month +'"';
                                    htmlstr += ' data-year="'+ billing.year +'"';
                                    htmlstr += ' data-start-time="'+ billing.start_time_f +'"';
                                    htmlstr += ' data-end-time="'+ billing.end_time_f +'"';
                                    htmlstr += ' data-start-date="'+ billing.start_date_f +'"';
                                    htmlstr += ' data-end-date="'+ billing.end_date_f +'"';
                                    htmlstr += ' data-profile-id="'+ billing.profile__id +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes2"><table class="stdtable colorprim500span"><tr><td valign="center">&#9679;</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes17"><table class="stdtable colorprim500span" style="text-transform:uppercase;"><tr><td valign="center">'+ billing.id +'</span></td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes18"><table class="stdtable colorprim500span"><tr><td valign="center">'+ billing.profile__user__first_name +'<br>'+ billing.profile__user__last_name +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ billing.amount +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ months[billing.month] +'<br>'+ billing.year +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ billing.start_date_f +' to<br>'+ billing.end_date_f +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ billing.status +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No billing yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}





function render_leads_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.leads_list.length > 0){
                                for (var i = 0; i < data.leads_list.length; i++){
                                    var htmlstr = '';
                                    var lead = data.leads_list[i];
                                    htmlstr += '<div class="boxes leads border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ lead.id +'"';
                                    htmlstr += ' data-source="'+ lead.source +'"';
                                    htmlstr += ' data-name="'+ lead.first_name +' '+ lead.last_name +'"';
                                    htmlstr += ' data-start-subarea="'+ lead.start_zone__subarea__name +'"';
                                    htmlstr += ' data-end-subarea="'+ lead.end_zone__subarea__name +'"';
                                    htmlstr += ' data-start-time="'+ lead.start_time_f +'"';
                                    htmlstr += ' data-end-time="'+ lead.end_time_f +'"';
                                    htmlstr += ' data-start-address="'+ lead.comments__start_address +'"';
                                    htmlstr += ' data-end-address="'+ lead.comments__end_address +'"';
                                    htmlstr += ' data-bucket-color="'+ lead.bucket__color +'"';
                                    htmlstr += ' data-bucket="'+ lead.bucket__name +'"';
                                    htmlstr += ' data-nr-count="'+ lead.nr__count +'"';
                                    htmlstr += ' data-phone="'+ lead.phone +'"';
                                    htmlstr += ' data-start-zone="'+ lead.start_zone__name +'"';
                                    htmlstr += ' data-end-zone="'+ lead.end_zone__name +'"';
                                    htmlstr += ' data-seats="'+ lead.comments__seats +'"';
                                    htmlstr += ' data-remarks1="'+ lead.comments__remarks1 +'"';
                                    htmlstr += ' data-remarks2="'+ lead.comments__remarks2 +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes2"><table class="stdtable colorprim500span" style="color:'+ lead.bucket__color +';"><tr><td valign="center">&#9679;</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes17"><table class="stdtable colorprim500span" style="text-transform:uppercase; color:'+ lead.bucket__color +';"><tr><td valign="center">'+ lead.id +'<br><span style="font-size:.7rem;">'+ lead.source +'</span></td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes18"><table class="stdtable colorprim500span" style="color:'+ lead.bucket__color +';"><tr><td valign="center">'+ lead.first_name +'<br>'+ lead.last_name +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ lead.start_zone__subarea__name +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ lead.end_zone__subarea__name +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ lead.start_time_f +' to<br>'+ lead.end_time_f +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">'+ lead.phone +'</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes9"><table class="stdtable" style="color:'+ lead.bucket__color +';"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No leads yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}





function render_derbiis_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.derbiis_list.length > 0){
                                for (var i = 0; i < data.derbiis_list.length; i++){
                                    var htmlstr = '';
                                    var derbii = data.derbiis_list[i];

                                    htmlstr += '<div class="boxes derbiis border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ derbii.id +'"';
                                    htmlstr += ' data-title="'+ derbii.title +'"';
                                    htmlstr += ' data-code="'+ derbii.code +'"';
                                    htmlstr += ' data-reverse-code="'+ derbii.reverse_code +'"';

                                    var people = '';

                                    for(var j = 0; j < derbii.commutes.length; j++){
                                        var commute = derbii.commutes[j];
                                        people += commute.profile__user__first_name + ' ' + commute.profile__user__last_name;
                                        if(j < (derbii.commutes.length - 1)){
                                            people += ', ';
                                        }
                                    }

                                    htmlstr += ' data-commutes="'+ people +'"';
                                    htmlstr += ' data-days="'+ derbii.days +'"';
                                    htmlstr += ' data-commutes-count="'+ derbii.commutes_count +'"';
//                                    htmlstr += ' data-nodes="'+ JSON.stringify(derbii.nodes) +'"';
                                    htmlstr += ' data-start-zone="'+ derbii.start_zone +'"';
                                    htmlstr += ' data-end-zone="'+ derbii.end_zone +'"';
                                    htmlstr += ' data-status="'+ derbii.status +'"';
                                    htmlstr += ' data-direction="'+ derbii.direction +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';

                                    htmlstr += '<div class="textsize12 border-box dpmboxes2"><table class="stdtable '+derbii_colors0(derbii.status)+'"><tr><td valign="center">';
                                    if(derbii.status == "Active" || derbii.status == "Processing"){
                                        htmlstr += '&#9679;';
                                    }
                                    htmlstr += '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+derbii_colors1(derbii.status)+'" style="text-transform:uppercase;"><tr><td valign="center">';
                                    if(derbii.title == ''){
                                        htmlstr += derbii.code;
                                    }else{
                                        htmlstr += derbii.title;
                                    }
                                    htmlstr += '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes26"><table class="stdtable '+derbii_colors2(derbii.status)+'"><tr><td valign="center">' + derbii.commutes_count + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes12"><table class="stdtable '+derbii_colors2(derbii.status)+'"><tr><td valign="center">' + derbii.direction + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes12"><table class="stdtable '+derbii_colors2(derbii.status)+'"><tr><td valign="center">' + people + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes12"><table class="stdtable '+derbii_colors2(derbii.status)+'"><tr><td valign="center">' + derbii.start_zone + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes12"><table class="stdtable '+derbii_colors2(derbii.status)+'"><tr><td valign="center">' + derbii.end_zone + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+derbii_colors2(derbii.status)+'"><tr><td valign="center">' + derbii.status + '</td></tr></table></div>';
                                    
                                    htmlstr += '<div class="textsize12 border-box dpmboxes9"><table class="stdtable '+derbii_colors2(derbii.status)+'"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No derbiis yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}





function render_commutes_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.commutes_list.length > 0){
                                for (var i = 0; i < data.commutes_list.length; i++){
                                    var htmlstr = '';
                                    var commute = data.commutes_list[i];

                                    htmlstr += '<div class="boxes commutes border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ commute.id +'"';
                                    htmlstr += ' data-code="'+ commute.code +'"';
                                    htmlstr += ' data-name="'+ commute.profile__user__first_name +' '+ commute.profile__user__last_name +'"';
                                    htmlstr += ' data-start-subarea="'+ commute.route__start__place__zone__subarea__name +'"';
                                    htmlstr += ' data-end-subarea="'+ commute.route__end__place__zone__subarea__name +'"';
                                    htmlstr += ' data-start-time="'+ commute.start_time_f +'"';
                                    htmlstr += ' data-end-time="'+ commute.end_time_f +'"';
                                    htmlstr += ' data-start-address="'+ commute.route__start__address +'"';
                                    htmlstr += ' data-end-address="'+ commute.route__end__address +'"';
                                    htmlstr += ' data-status="'+ commute.status +'"';
                                    htmlstr += ' data-direction="'+ commute.route__type +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';

                                    htmlstr += '<div class="textsize12 border-box dpmboxes2"><table class="stdtable '+commute_colors1[commute.status]+'"><tr><td valign="center">';
                                    if(commute.status == "Active" || commute.status == "Processing" || commute.status == "Available" || commute.status == "Potential"){
                                        htmlstr += '&#9679;';
                                    }
                                    htmlstr += '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes18"><table class="stdtable '+commute_colors1[commute.status]+'" style="text-transform:uppercase;"><tr><td valign="center">' + commute.code + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+commute_colors2[commute.status]+'"><tr><td valign="center">' + commute.profile__user__first_name + ' ' + commute.profile__user__last_name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+commute_colors2[commute.status]+'"><tr><td valign="center">' + commute.route__start__place__zone__subarea__name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+commute_colors2[commute.status]+'"><tr><td valign="center">' + commute.route__end__place__zone__subarea__name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+commute_colors2[commute.status]+'"><tr><td valign="center">' + commute.start_time_f +' to<br>'+ commute.end_time_f + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+commute_colors2[commute.status]+'"><tr><td valign="center">';
                                    if(commute.route__type == 'to_office'){
                                        htmlstr += 'To office';
                                    }else{
                                        htmlstr += 'From office';
                                    }
                                    htmlstr += '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes9"><table class="stdtable '+commute_colors2[commute.status]+'"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No commutes yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}





function render_signups_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.signups_list.length > 0){
                                for (var i = 0; i < data.signups_list.length; i++){
                                    var htmlstr = '';
                                    var signup = data.signups_list[i];

                                    htmlstr += '<div class="boxes signups border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ signup.id +'"';
                                    htmlstr += ' data-name="'+ signup.first_name +' '+ signup.last_name +'"';
                                    htmlstr += ' data-status="'+ signup.status__status +'"';
                                    htmlstr += ' data-start-subarea="'+ signup.pickup_zone__zone__subarea__name +'"';
                                    htmlstr += ' data-end-subarea="'+ signup.drop_zone__zone__subarea__name +'"';
                                    htmlstr += ' data-start-time="'+ signup.pickup_time_f +'"';
                                    htmlstr += ' data-end-time="'+ signup.return_time_f +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';

                                    htmlstr += '<div class="textsize12 border-box dpmboxes2"><table class="stdtable '+commute_colors1[signup.status__status]+'"><tr><td valign="center">';
                                    if(signup.status__status == "Active" || signup.status__status == "Processing" || signup.status__status == "Available" || signup.status__status == "Potential"){
                                        htmlstr += '&#9679;';
                                    }
                                    htmlstr += '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+commute_colors1[signup.status__status]+'" style="text-transform:uppercase;"><tr><td valign="center">' + signup.id + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes18"><table class="stdtable '+commute_colors2[signup.status__status]+'"><tr><td valign="center">' + signup.first_name + ' ' + signup.last_name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+commute_colors2[signup.status__status]+'"><tr><td valign="center">' + signup.pickup_zone__zone__subarea__name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+commute_colors2[signup.status__status]+'"><tr><td valign="center">' + signup.drop_zone__zone__subarea__name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+commute_colors2[signup.status__status]+'"><tr><td valign="center">' + signup.pickup_time_f +' to<br>'+ signup.return_time_f + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes9"><table class="stdtable '+commute_colors2[signup.status__status]+'"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No signups yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}



function render_calls_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.calls_list.length > 0){
                                for (var i = 0; i < data.calls_list.length; i++){
                                    var htmlstr = '';
                                    var call = data.calls_list[i];

                                    htmlstr += '<div class="boxes calls border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ call.id +'"';
                                    htmlstr += ' data-customer-number="'+ call.customer_number +'"';
                                    htmlstr += ' data-call-type="'+ call.call_type +'"';
                                    htmlstr += ' data-agent-number="'+ call.agent_number +'"';
                                    htmlstr += ' data-startdate="'+ call.startdatef +'"';
                                    htmlstr += ' data-starttime="'+ call.starttimef +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';

                                    htmlstr += '<div class="textsize12 border-box dpmboxes2"><table class="stdtable"><tr><td valign="center">&#9679;</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+ivr_colors1(call.agent_number)+'" style="text-transform:uppercase;"><tr><td valign="center">' + call.id + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+ivr_colors2(call.agent_number)+'"><tr><td valign="center">' + call.customer_number + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes18"><table class="stdtable '+ivr_colors2(call.agent_number)+'"><tr><td valign="center">';
                                    if(call.call_type == "0"){htmlstr += 'Incoming';}
                                    if(call.call_type == "1"){htmlstr += 'Outgoing';}
                                    htmlstr += '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+ivr_colors2(call.agent_number)+'"><tr><td valign="center">' + call.agent_number + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable '+ivr_colors2(call.agent_number)+'"><tr><td valign="center">' + call.startdatef +'<br>'+ call.starttimef + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes9"><table class="stdtable '+ivr_colors2(call.agent_number)+'"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No calls yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}



function render_fbads_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.adleads_list.length > 0){
                                for (var i = 0; i < data.adleads_list.length; i++){
                                    var htmlstr = '';
                                    var adlead= data.adleads_list[i];

                                    htmlstr += '<div class="boxes adleads border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ adlead.id +'"';
                                    htmlstr += ' data-name="'+ adlead.first_name +' '+ adlead.last_name +'"';
                                    htmlstr += ' data-status="'+ adlead.status__status +'"';
                                    htmlstr += ' data-posteddate="'+ adlead.posteddatef +'"';
                                    htmlstr += ' data-postedtime="'+ adlead.postedtimef +'"';
                                    htmlstr += ' data-email="'+ adlead.email +'"';
                                    htmlstr += ' data-phone="'+ adlead.phone +'"';
                                    htmlstr += ' data-fb-ad-id="'+ adlead.fb_ad_id +'"';
                                    htmlstr += ' data-start-subarea=""';
                                    htmlstr += ' data-end-subarea=""';
                                    htmlstr += ' data-start-time=""';
                                    htmlstr += ' data-end-time="">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';

                                    htmlstr += '<div class="textsize12 border-box dpmboxes2"><table class="stdtable"><tr><td valign="center">&#9679;</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable '+fbad_colors1[adlead.status__status]+'" style="text-transform:uppercase;"><tr><td valign="center">' + adlead.id + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes18"><table class="stdtable '+fbad_colors1[adlead.status__status]+'" style="text-transform:uppercase;"><tr><td valign="center">' + adlead.first_name + '<br>' + adlead.last_name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes12"><table class="stdtable"><tr><td valign="center">' + adlead.phone + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes4"><table class="stdtable"><tr><td valign="center">' + adlead.email + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes12"><table class="stdtable"><tr><td valign="center">' + adlead.posteddatef +'<br>'+ adlead.postedtimef + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No ad leads yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}


function render_users_main(data){
    $('#dashboardprime > div.main').html('');
    
                            if(data.profiles_list.length > 0){
                                for (var i = 0; i < data.profiles_list.length; i++){
                                    var htmlstr = '';
                                    var profile = data.profiles_list[i];

                                    htmlstr += '<div class="boxes users border-box clearfix leftalign blackspan9"';
                                    htmlstr += ' data-id="'+ profile.id +'"';
                                    htmlstr += ' data-name="'+ profile.user__first_name +' '+ profile.user__last_name +'"';
                                    htmlstr += ' data-phone="'+ profile.simplev__phone__number +'"';
                                    htmlstr += ' data-gender="'+ profile.gender +'"';
                                    htmlstr += ' data-email="'+ profile.user__email +'">';

                                    htmlstr += '<div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';

                                    htmlstr += '<div class="textsize12 border-box dpmboxes2"><table class="stdtable"><tr><td valign="center">&#9679;</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes17"><table class="stdtable colorprim500span" style="text-transform:uppercase;"><tr><td valign="center">' + profile.id + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes18"><table class="stdtable"><tr><td valign="center">' + profile.user__first_name +' '+ profile.user__last_name + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable"><tr><td valign="center">' + profile.simplev__phone__number + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable"><tr><td valign="center">' + profile.gender + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes10"><table class="stdtable"><tr><td valign="center">' + profile.user__email + '</td></tr></table></div>';
                                    htmlstr += '<div class="textsize12 border-box dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
                                    htmlstr += '</div>';
                                    $('#dashboardprime > div.main').append(htmlstr);
                                }
                            }else{
                                $('#dashboardprime > div.main').append('<div class="empty centeralign weight400 blackspan56">No users yet.</div>');
                            }
                            $('#dashboardprime > div.main').append('<div id="paginatedataholder" data-paginatestart="'+ data.paginatestart +'" data-paginateend="'+ data.paginateend +'" data-toggle-type="'+ data.toggle_type +'" data-paginate-type="'+ data.paginate_type +'"></div>');
                            
                        

//                        $('#dashboardprime > div.main').html('').html(htmlstr);

                        if(!data.paginatef){
                            $(".btnforward").hide();   
                        }else{
                            $(".btnforward").show();   
                        }
                        if(!data.paginateb){
                            $(".btnback").hide();   
                        }else{
                            $(".btnback").show();   
                        }
}







function filterwalletsearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();

/*
        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });*/
        


        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/search/wallets", { 
//                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_wallets_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}



function filterwalletupdatesearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();


        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        


        var id = $("#fieldsearchbyid");
        var txnid = $("#fieldsearchbytxnid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/search/walletupdates", { 
                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        txnid: txnid.val(),
                        name: name.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_walletupdates_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}



function filterbillingsearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();


        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        


        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/search/billing", { 
                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_billing_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}





function filterleadsearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();


        var cities_start = [];
        $('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
             cities_start.push($(this).attr('name'));
        });
        

        var cities_end = [];
        $('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
             cities_end.push($(this).attr('name'));
        });
        

        var subareas_start = [];
        $('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
             subareas_start.push($(this).attr('name'));
        });
        

        var subareas_end = [];
        $('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
             subareas_end.push($(this).attr('name'));
        });
        

        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });
        

        var buckets = [];
        $('.choiceboxmultiinnerselected.bucketchoice').each(function(i, obj) {
             buckets.push($(this).attr('name'));
        });
        

        var sources = [];
        $('.choiceboxmultiinnerselected.sourcechoice').each(function(i, obj) {
             sources.push($(this).attr('name'));
        });
        

        var directions = [];
        $('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
             directions.push($(this).attr('name'));
        });
        


        var admin = $("#fieldsearchbyadmin");
        
        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        var nrcount = $("#fieldsearchbynrcount");
        
        var starttimefrom = $("#fieldstarttimefrom");
        var starttimeto = $("#fieldstarttimeto");
        var endtimefrom = $("#fieldendtimefrom");
        var endtimeto = $("#fieldendtimeto");
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/search/leads", { 
                        cities_start: JSON.stringify(cities_start),
                        cities_end: JSON.stringify(cities_end),
                        subareas_start: JSON.stringify(subareas_start),
                        subareas_end: JSON.stringify(subareas_end),
                        genders: JSON.stringify(genders),
                        buckets: JSON.stringify(buckets),
                        sources: JSON.stringify(sources),
                        directions: JSON.stringify(directions),
                        admin: admin.val(),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                        nrcount: nrcount.val(),
                        starttimefrom: $('option:selected', starttimefrom).val(),
                        starttimeto: $('option:selected', starttimeto).val(),
                        endtimefrom: $('option:selected', endtimefrom).val(),
                        endtimeto: $('option:selected', endtimeto).val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_leads_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}



function filtercommutesearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();

        var days = '';
        
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
            days = days + 'MTuWThF';
        }
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
            days = days + 'MTuWThFSa';
        }
        
        

        var cities_start = [];
        $('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
             cities_start.push($(this).attr('name'));
        });
        

        var cities_end = [];
        $('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
             cities_end.push($(this).attr('name'));
        });
        

        var subareas_start = [];
        $('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
             subareas_start.push($(this).attr('name'));
        });
        

        var subareas_end = [];
        $('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
             subareas_end.push($(this).attr('name'));
        });
        

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });
        

        var directions = [];
        $('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
             directions.push($(this).attr('name'));
        });
        

        var admin = $("#fieldsearchbyadmin");
        
        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        var starttimefrom = $("#fieldstarttimefrom");
        var starttimeto = $("#fieldstarttimeto");
        var endtimefrom = $("#fieldendtimefrom");
        var endtimeto = $("#fieldendtimeto");
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/search/commutes", { 
                        days: days,
                        cities_start: JSON.stringify(cities_start),
                        cities_end: JSON.stringify(cities_end),
                        subareas_start: JSON.stringify(subareas_start),
                        subareas_end: JSON.stringify(subareas_end),
                        statuses: JSON.stringify(statuses),
                        genders: JSON.stringify(genders),
                        directions: JSON.stringify(directions),
                        ref: id.val(),
                        admin: admin.val(),
                        name: name.val(),
                        phone: phone.val(),
                        starttimefrom: $('option:selected', starttimefrom).val(),
                        starttimeto: $('option:selected', starttimeto).val(),
                        endtimefrom: $('option:selected', endtimefrom).val(),
                        endtimeto: $('option:selected', endtimeto).val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_commutes_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}

function filtersignupsearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();


        var cities_start = [];
        $('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
             cities_start.push($(this).attr('name'));
        });
        

        var cities_end = [];
        $('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
             cities_end.push($(this).attr('name'));
        });
        

        var subareas_start = [];
        $('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
             subareas_start.push($(this).attr('name'));
        });
        

        var subareas_end = [];
        $('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
             subareas_end.push($(this).attr('name'));
        });
        

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });
        


        var admin = $("#fieldsearchbyadmin");
        
        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        var starttimefrom = $("#fieldstarttimefrom");
        var starttimeto = $("#fieldstarttimeto");
        var endtimefrom = $("#fieldendtimefrom");
        var endtimeto = $("#fieldendtimeto");
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/search/signups", { 
                        cities_start: JSON.stringify(cities_start),
                        cities_end: JSON.stringify(cities_end),
                        subareas_start: JSON.stringify(subareas_start),
                        subareas_end: JSON.stringify(subareas_end),
                        statuses: JSON.stringify(statuses),
                        genders: JSON.stringify(genders),
                        ref: id.val(),
                        admin: admin.val(),
                        name: name.val(),
                        phone: phone.val(),
                        starttimefrom: $('option:selected', starttimefrom).val(),
                        starttimeto: $('option:selected', starttimeto).val(),
                        endtimefrom: $('option:selected', endtimefrom).val(),
                        endtimeto: $('option:selected', endtimeto).val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_signups_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}






function filterfbadsearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();

        
        var fbid = $("#fieldsearchbyfbid");
        
        var fbadid = $("#fieldsearchbyfbadid");
        
        var email = $("#fieldsearchbyemail");
        
        var phone = $("#fieldsearchbyphone");
        

        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");
        


        request=$.post("https://derbii.com/internal/dashboard/search/fbads", { 
                        fbid: fbid.val(),
                        fbadid: fbadid.val(),
                        email: email.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_fbads_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}

function filterivrsearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();


        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

        
        var id = $("#fieldsearchbyid");
        
        var agent = $("#fieldsearchbyagent");
        
        var phone = $("#fieldsearchbyphone");
        

        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");
        


        request=$.post("https://derbii.com/internal/dashboard/search/calls", { 
                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        agent: agent.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_calls_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}

function filterusersearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();

/*      var devices = [];
        $('.choiceboxmultiinnerselected.devicechoice').each(function(i, obj) {
             devices.push($(this).attr('name'));
        });
        */

        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });
        

/*      var connects = [];
        $('.choiceboxmultiinnerselected.connectchoice').each(function(i, obj) {
             connects.push($(this).attr('name'));
        });
        */

        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        var email = $("#fieldsearchbyemail");
        


        request=$.post("https://derbii.com/internal/dashboard/search/users", { 
//                      devices: JSON.stringify(devices),
                        genders: JSON.stringify(genders),
//                      connects: JSON.stringify(connects),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                        email: email.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_users_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}

function filterderbiisearch(that_elem){
    if(request){request.abort();}
        primemainaddsonic();

        var days = '';
        
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
            days = days + 'MTuWThF';
        }
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
            days = days + 'MTuWThFSa';
        }
        
        

        var cities_start = [];
        $('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
             cities_start.push($(this).attr('name'));
        });
        

        var cities_end = [];
        $('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
             cities_end.push($(this).attr('name'));
        });
        

        var subareas_start = [];
        $('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
             subareas_start.push($(this).attr('name'));
        });
        

        var subareas_end = [];
        $('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
             subareas_end.push($(this).attr('name'));
        });
        

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

/*        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });*/

        var derbii_types = [];
        $('.choiceboxmultiinnerselected.typechoice').each(function(i, obj) {
             derbii_types.push($(this).attr('name'));
        });
        

        var directions = [];
        $('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
             directions.push($(this).attr('name'));
        });

        console.log(directions);
        

//        var admin = $("#fieldsearchbyadmin");
        
        var id = $("#fieldsearchbyid");
        var title = $("#fieldsearchbytitle");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
//        var starttimefrom = $("#fieldstarttimefrom");
//        var starttimeto = $("#fieldstarttimeto");
//        var endtimefrom = $("#fieldendtimefrom");
//        var endtimeto = $("#fieldendtimeto");
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/search/derbiis", { 
                        days: days,
                        cities_start: JSON.stringify(cities_start),
                        cities_end: JSON.stringify(cities_end),
                        subareas_start: JSON.stringify(subareas_start),
                        subareas_end: JSON.stringify(subareas_end),
                        statuses: JSON.stringify(statuses),
//                        genders: JSON.stringify(genders),
                        derbii_types: JSON.stringify(derbii_types),
                        directions: JSON.stringify(directions),
                        ref: id.val(),
                        title: title.val(),
//                        admin: admin.val(),
                        name: name.val(),
                        phone: phone.val(),
//                        starttimefrom: $('option:selected', starttimefrom).val(),
//                        starttimeto: $('option:selected', starttimeto).val(),
//                        endtimefrom: $('option:selected', endtimefrom).val(),
//                        endtimeto: $('option:selected', endtimeto).val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_derbiis_main(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
}








$(document).ready(function(){



var config = {
        apiKey: "AIzaSyBR1cPBciRn-60kY9QcFpt_6F6vkCgMJ1g",
        authDomain: "derbii-2506.firebaseapp.com",
        databaseURL: "https://derbii-2506.firebaseio.com",
        storageBucket: "derbii-2506.appspot.com",
        messagingSenderId: "845481972682"
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
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });




const messaging = firebase.messaging();


function deleteToken() {
    // Delete Instance ID token.
    // [START delete_token]
    messaging.getToken()
    .then(function(currentToken) {
      messaging.deleteToken(currentToken)
      .then(function() {
        console.log('Token deleted.');
//        setTokenSentToServer(false);
        // [START_EXCLUDE]
        // Once token is deleted update UI.

//        resetUI();
        // [END_EXCLUDE]
      })
      .catch(function(err) {
        console.log('Unable to delete token. ', err);
      });
      // [END delete_token]
    })
    .catch(function(err) {
      console.log('Error retrieving Instance ID token. ', err);
//      showToken('Error retrieving Instance ID token. ', err);
    });
  }



function getToken(){
    messaging.getToken()
  .then(function(currentToken) {
    if (currentToken) {
        console.log(currentToken);
        firebase.database().ref('fcmwebtokens/'+$("#dashboardmainleft").attr('data-user-id')).set({name:$("#dashboardmainleft").attr('data-user-name'), token: currentToken});
//      sendTokenToServer(currentToken);
//      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
//      updateUIForPushPermissionRequired();
//      setTokenSentToServer(false);
    }
  })
  .catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
//    showToken('Error retrieving Instance ID token. ', err);
//    setTokenSentToServer(false);
  });
}


messaging.requestPermission()
    .then(function() {
      console.log('Notification permission granted.');

      getToken();
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // [START_EXCLUDE]
      // In many cases once an app has been granted notification permission, it
      // should update its UI reflecting this.
//      resetUI();
      // [END_EXCLUDE]
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });



  // Get a reference to the database service
    var database = firebase.database();

    var peopleRef = firebase.database().ref('derbii_people');
    var chatRef = firebase.database().ref('derbiichat');
    var queueRef = firebase.database().ref('queue/tasks').push();

/*    chatRef.once('value').then(function(snapshot) {
        
      // ...
    });*/




messaging.onTokenRefresh(function() {
    getToken();
  });



messaging.onMessage(function(payload) {
  console.log("Message received. ", payload);
  // ...
});




zone_options = JSON.parse($("#dashboardmainmiddle").attr('data-zones'));
city_options = JSON.parse($("#dashboardmainmiddle").attr('data-cities'));
area_options = JSON.parse($("#dashboardmainmiddle").attr('data-areas'));

var clusters = [];

sonic_blue_black.play();

var selectedtab, selectedtab1 = $(".tabs.selected"), request_right;

var dashboardmainrightwidth = $("#dashboardmainright").width();




function initialize_filters(){
    if(selectedtab1.attr('data-type') == 'clusters' || selectedtab1.attr('data-type') == 'commutes' || selectedtab1.attr('data-type') == 'leads' || selectedtab1.attr('data-type') == 'signups' || selectedtab1.attr('data-type') == 'derbiis'){
                            var options_str1 = "", options_str2 = "";
                            var options_str3 = "", options_str4 = "";
                            for (var i = 0; i < city_options.length ; i++){
                                var city = city_options[i];
                                options_str1 += '<div class="choiceboxmulti1inner citystartchoice" name="'+ city.id +'" data-id="'+ city.id +'">'+city.name+'</div>';
                                options_str2 += '<div class="choiceboxmulti1inner cityendchoice" name="'+ city.id +'" data-id="'+ city.id +'">'+city.name+'</div>';
                            }
                            $("#choiceboxcitystart").html(options_str1);
                            $("#choiceboxcityend").html(options_str2);

                            for (var j = 0; j < area_options.length ; j++){
                                var area = area_options[j];

                                options_str3 += '<div class="choiceboxmulti1innertitle">' + area.name + ' &nbsp;&nbsp;&nbsp; <button class="btn btn_small btnwhite btncard move toggleallsubareas" data-type="start" data-name="'+area.name+'">Toggle all</button>'+'</div>';
                                options_str4 += '<div class="choiceboxmulti1innertitle">' + area.name + ' &nbsp;&nbsp;&nbsp; <button class="btn btn_small btnwhite btncard move toggleallsubareas" data-type="end" data-name="'+area.name+'">Toggle all</button>'+'</div>';

                                for(var k = 0; k < area.subareas.length ; k++){
                                    var subarea = area.subareas[k];

                                    options_str3 += '<div class="choiceboxmulti1inner subareastartchoice" name="'+ subarea.id +'" data-id="'+ subarea.id +'" data-area-name="'+ area.name +'">';
                                    options_str3 += subarea.name + '</div>';

                                    options_str4 += '<div class="choiceboxmulti1inner subareaendchoice" name="'+ subarea.id +'" data-id="'+ subarea.id +'" data-area-name="'+ area.name +'">';
                                    options_str4 += subarea.name + '</div>';
                                }
                            }
                            $("#choiceboxsubareastart").html(options_str3);
                            $("#choiceboxsubareaend").html(options_str4);

                            if(selectedtab1.attr('data-type') == 'clusters'){
                                initializemap();
                            }
                        }


$(function(){
    var today = new Date();
    $("#fielddatefrom").datepicker({
        onSelect: function(date) {
            $("#fielddatefrom").val(date).trigger("change");
        },
//          minDate: today,
        dateFormat: "dd-mm-yy",
        inline: true,
        showOtherMonths: true,
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    });
});
$(function(){
    var today = new Date();
    $("#fielddateto").datepicker({
        onSelect: function(date) {
            $("#fielddateto").val(date).trigger("change");
        },
//          minDate: today,
        dateFormat: "dd-mm-yy",
        inline: true,
        showOtherMonths: true,
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    });
});

if(selectedtab1.attr('data-type') == 'fbadleads'){
    myDropzone = new Dropzone(document.querySelector("#fbadexcelupload"), {
          url: "https://derbii.com/internal/dashboard/upload/excel/fbads",
          thumbnailWidth: 115,
          thumbnailHeight: 115,
          parallelUploads: 20,
          maxFiles: 1,
          acceptedFiles: ".csv",
          previewTemplate: document.querySelector("#preview-template").innerHTML,
          autoQueue: true,
          autoProcessQueue : false,
          previewsContainer: "#fbadexcelupload",
          clickable: "#fbadexcelupload",
          thumbnail: function(file, dataUrl) {
                      if (file.previewElement) {
                        file.previewElement.classList.remove("dz-file-preview");
                        var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                        for (var i = 0; i < images.length; i++) {
                          var thumbnailElement = images[i];
                          thumbnailElement.alt = file.name;
                          thumbnailElement.src = dataUrl;
                        }
                        setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); }, 1);
                      }
                    }
    });
    
    
    myDropzone.on("addedfile", function(file) {
        $("#uploadsheetbtn").removeAttr('disabled');
    });

    myDropzone.on("sending", function(file, xhr, formData) {
        formData.append("company_id", $(".dropzone").attr("data-company-id"));
    });

    myDropzone.on("error", function(file, errorMessage, xhr) {
        $(file.previewElement).find(".dz-preview-top-middle-bottom").html(errorMessage);
        $("#uploadsheetbtn").removeAttr("disabled");
    });

    myDropzone.on("success", function(file, data) {
        $(file.previewElement).find(".dz-preview-top-middle-bottom").html(data["message"]);
        this.removeFile(file);
        $("#uploadsheetbtn").removeAttr("disabled");

    });

    $("#uploadsheetbtn").live("click", function() {
        if(myDropzone.getQueuedFiles().length != 0){
            myDropzone.processQueue();
            $("#uploadsheetbtn").attr("disabled", "disabled");
        }
    });


  Dropzone.prototype.filesize = function(size) {
    var units = [ "TB", "GB", "MB", "KB", "b" ],
        selectedSize, selectedUnit;

    for (var i = 0; i < units.length; i++) {
      var unit = units[i],
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

      if (size >= cutoff) {
        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
        selectedUnit = unit;
        break;
      }
    }

    selectedSize = Math.round(10 * selectedSize) / 10;

    return "<strong>" + selectedSize + "</strong> " + selectedUnit;

  }

  myDropzone.on("complete", function(file) {
    file.previewElement.classList.add("dz-complete");
  });


    myDropzone.on("dragenter", function(){
        this.element.style.borderColor = "#999999";
        this.element.style.borderStyle = "solid";
        this.element.style.backgroundColor = "#f9f9f9";
        this.element.style.color = "#bbbbbb";
    });
    myDropzone.on("dragover", function(){
        this.element.style.borderColor = "#999999";
        this.element.style.borderStyle = "solid";
        this.element.style.backgroundColor = "#f9f9f9";
        this.element.style.color = "#bbbbbb";
    });
    myDropzone.on("dragleave", function(){
        this.element.style.borderColor = "#bbbbbb";
        this.element.style.borderStyle = "dashed";
        this.element.style.backgroundColor = "#e8e8e8";
        this.element.style.color = "#999999";
    });
    myDropzone.on("drop", function(){
        this.element.style.borderColor = "#bbbbbb";
        this.element.style.borderStyle = "dashed";
        this.element.style.backgroundColor = "#e8e8e8";
        this.element.style.color = "#999999";
    });
}

}




	function loadinitial(){

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        

        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

            var htmlstr = '';

            if(selectedtab1.attr('data-type') == 'leads'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterleads"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterleadsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbynrcount" class="dashboardfields dashboardchangefields tiny" name="searchbynrcount" placeholder="Search by NR Count" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NC">No Cat</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Hot">Hot</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Warm">Warm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Lukewarm">Lukewarm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Cold">Cold</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NoResp">No Response</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="Commute">Commute</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="HelloSignUp">Signup</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="FBAdLead">FB Ad</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="IVRCall">IVR</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="UserProfile">User</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="Other">Other</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected directionchoice" name="to_office">Going to office</div><div class="choiceboxmultiinner directionchoice" name="from_office">Coming from office</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner genderchoice" name="Male">Male</div><div class="choiceboxmultiinner genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="mapleadbtn" class="btn btn_small btncolorprim btncard move">Map</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateleads" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateleads" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID/Type</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Phone</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'commutes'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filtercommutes"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filtercommutesearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><!--<div class="choicebox" style="width:200px;"><div class="choiceboxinner statuschoice" name="Processing">Processing</div><div class="choiceboxinner choiceboxinnerselected statuschoice statuschoiceselected" name="Active">Active</div><div class="choiceboxinner statuschoice" name="Processing">Inactive</div><div class="choiceboxinner statuschoice" name="Processing">Declined</div></div>--><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner statuschoice" name="Active">Active</div><div class="choiceboxmultiinner statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Potential">Potential</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Available">Available</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choicebox"><div class="choiceboxinner choiceboxinner dayschoice" name="Weekdays">Weekdays</div><div class="choiceboxinner choiceboxinnerselected dayschoice" name="Weekend">Weekend</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected directionchoice" name="to_office">Going to office</div><div class="choiceboxmultiinner directionchoice" name="from_office">Coming from office</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatleft" style="float:right;"><table class="stdtable"><tr><td valign="center"><button id="addderbiibtn" class="btn btn_small btncolorprim btncard move">Add Derbii</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatecommutes" class="btn btn_small btnwhite btnforward btncard move" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatecommutes" class="btn btn_small btnwhite btnback btncard move" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Ref.</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Dir</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'signups'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filtersignups"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filtersignupsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by ID" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><!--<div class="choicebox" style="width:200px;"><div class="choiceboxinner statuschoice" name="Processing">Processing</div><div class="choiceboxinner choiceboxinnerselected statuschoice statuschoiceselected" name="Active">Active</div><div class="choiceboxinner statuschoice" name="Processing">Inactive</div><div class="choiceboxinner statuschoice" name="Processing">Declined</div></div>--><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Active">Active</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Potential">Potential</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Available">Available</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatesignups" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatesignups" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'users'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterusers"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterusersearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyemail" class="dashboardfields dashboardchangefields tiny" name="searchbyemail" placeholder="Search by Email" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><!--<div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected connectchoice" name="facebook">Facebook</div><div class="choiceboxmultiinner choiceboxmultiinnerselected connectchoice" name="google">Google</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected devicechoice" name="iOS">iOS</div><div class="choiceboxmultiinner choiceboxmultiinnerselected devicechoice" name="Android">Android</div></div></td></tr></table></div>--><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateusers" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateusers" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Phone</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Gender</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Email</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'fbadleads'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterfbadleads"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterfbadsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyfbid" class="dashboardfields dashboardchangefields tiny" name="searchbyfbid" placeholder="Search by Fb. Id." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyfbadid" class="dashboardfields dashboardchangefields tiny" name="searchbyfbadid" placeholder="Search by Fb. Ad. Id." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyemail" class="dashboardfields dashboardchangefields tiny" name="searchbyemail" placeholder="Search by Email" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix "><div id="fbadexcelupload" class="dropzone" style="min-height:160px;"><div class="dz-message"><table class="stdtable" style="min-height:160px;"><tr><td valign="center">Click or drop CSV files here to upload</td></tr></table></div><div id="preview-template" class="dz-preview dz-file-preview" style="display:none;"><div class="dz-preview-inner"style="display: block; height:120px; padding:5px 0px; width:260px;"><div class="dz-preview-top" style="height:115px; clear: both; overflow: hidden;"> <div class="dz-preview-top-left" style="position:relative; height:115px; width:115px; margin-right:10px; display:inline-block; overflow: hidden;"><div class="dz-image" style="border-radius: 5px; overflow: hidden; height:115px; width: 115px;"><img data-dz-thumbnail/> </div><div class="dz-details" style="height:75px; width: 95px; padding:20px 10px; position:absolute; top:0px; left:0px; overflow:hidden;"><div class="dz-filename"><span data-dz-name></span></div><div class="dz-size" data-dz-size></div></div></div><div class="dz-preview-top-middle" style="height:115px; width:135px; display:inline-block; overflow: hidden;"><div class="dz-preview-top-middle-top" style="height:65px; width:135px; overflow: hidden;"><input type="button" class="btnsmallborder subbtnbelizeholeborder dz-remove" value="Remove" data-dz-remove></div><div class="dz-preview-top-middle-bottom" style="height:50px; width:135px; overflow: hidden;"></div></div></div><div class="dz-preview-bottom" style="width:260px; height:5px; background:#ffffff;"> <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div></div><div class="dz-success-mark"><span>✔</span> </div><div class="dz-error-mark"><span>✘</span> </div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="uploadsheetbtn" class="btn btn_small btnwhite btncard move" data-type="" name="startupload" disabled>Start upload</button></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatefbads" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatefbads" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Phone</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes4"><table class="stdtable"><tr><td valign="center">Email</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'ivr'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterivr"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterivrsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyagent" class="dashboardfields dashboardchangefields tiny" name="searchbyagent" placeholder="Search by Agent" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="0">Incoming</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="1">Outgoing</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="excelivrbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateivr" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateivr" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Number</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Type</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Status/Agent</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'derbiis'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterderbiis"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterderbiisearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbytitle" class="dashboardfields dashboardchangefields tiny" name="searchbytitle" placeholder="Search by Title" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><!--<div class="choicebox" style="width:200px;"><div class="choiceboxinner statuschoice" name="Processing">Processing</div><div class="choiceboxinner choiceboxinnerselected statuschoice statuschoiceselected" name="Active">Active</div><div class="choiceboxinner statuschoice" name="Processing">Inactive</div><div class="choiceboxinner statuschoice" name="Processing">Declined</div></div>--><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Active">Active</div><div class="choiceboxmultiinner statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected typechoice" name="Bothways">Both ways</div><div class="choiceboxmultiinner choiceboxmultiinnerselected typechoice" name="Oneway">One way</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choicebox"><div class="choiceboxinner choiceboxinner dayschoice" name="Weekdays">Weekdays</div><div class="choiceboxinner choiceboxinnerselected dayschoice" name="Weekend">Weekend</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected directionchoice" name="to">Going to office</div><div class="choiceboxmultiinner choiceboxmultiinnerselected  directionchoice" name="back">Coming from office</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="addderbiibtn" class="btn btn_small btncolorprim btncard move">Add Derbii</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatederbiis" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatederbiis" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Reference No.</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes26"><table class="stdtable"><tr><td valign="center">C No.</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Type</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">People</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Status</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'clusters'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterclusters"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterleadsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterleadclusterbtn" class="btn btn_small btncolorprim btncard move">Cluster</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldclustersize" class="dashboardfields dashboardchangefields tiny" name="clustersize" placeholder="Min Cluster Size" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldclustersamples" class="dashboardfields dashboardchangefields tiny" name="clustersamples" placeholder="Min Cluster Samples" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner statuschoice" name="Active">Active</div><div class="choiceboxmultiinner statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Potential">Potential</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Available">Available</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="Commute">Commutes</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="HelloSignUp">Signups</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NC">No Cat</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Hot">Hot</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Warm">Warm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Lukewarm">Lukewarm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Cold">Cold</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NoResp">No Response</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter/Cluster</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="excelclustersbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button></td></tr></table></div></div><!--<div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateleads" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateleads" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div>--></div><div class="map border-box leftalign"></div><div class="middle border-box clearfix leftalign" style="top:440px;"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes27"><table class="stdtable"><tr><td valign="center">People</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Count</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign" style="top: 470px;"></div>';
            }else if(selectedtab1.attr('data-type') == 'billing'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterbilling"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbillingsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <div class="choiceboxmulti"> <div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Billed">Billed</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Paid">Paid</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Cleared">Cleared</div></div></td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"> </td></tr></table> </div></div></div><div class="top border-box clearfix leftalign"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addbillingbtn" class="btn btn_small btncolorprim btncard move">Add billing</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addpaymentbtn" class="btn btn_small btncolorprim btncard move">Add payment</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="excelbillingbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button> </td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="forwardbtnpaginatebilling" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="backbtnpaginatebilling" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button> </td></tr></table> </div></div></div><div class="middle border-box clearfix leftalign"> <div class="border-box blackspan65 weight700 dpmboxes1"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes2"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes17"> <table class="stdtable"> <tr> <td valign="center">ID/Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes18"> <table class="stdtable"> <tr> <td valign="center">Name</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Amount</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Month</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Date</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Status</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes9"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'walletupdates'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterwalletupdates"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterwalletupdatessearchbtn" class="btn btn_small btncolorprim btncard move">Search</button> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbytxnid" class="dashboardfields dashboardchangefields tiny" name="searchbytxnid" placeholder="Search by TXN Id" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <div class="choiceboxmulti"> <div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Billed">Billed</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Paid">Paid</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Cleared">Cleared</div></div></td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"> </td></tr></table> </div></div></div><div class="top border-box clearfix leftalign"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addpaymentbtn" class="btn btn_small btncolorprim btncard move">Add payment</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="excelwalletupdatesbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button> </td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="forwardbtnpaginatewalletupdates" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="backbtnpaginatewalletupdates" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button> </td></tr></table> </div></div></div><div class="middle border-box clearfix leftalign"> <div class="border-box blackspan65 weight700 dpmboxes1"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes2"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes17"> <table class="stdtable"> <tr> <td valign="center">ID/Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes18"> <table class="stdtable"> <tr> <td valign="center">Name</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Amount</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Date</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Balance</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes9"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'wallets'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterwallets"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterwalletssearchbtn" class="btn btn_small btncolorprim btncard move">Search</button> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"> </td></tr></table> </div></div></div><div class="top border-box clearfix leftalign"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addpaymentbtn" class="btn btn_small btncolorprim btncard move">Add payment</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="excelwalletsbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button> </td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="forwardbtnpaginatewallets" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="backbtnpaginatewallets" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button> </td></tr></table> </div></div></div><div class="middle border-box clearfix leftalign"> <div class="border-box blackspan65 weight700 dpmboxes1"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes2"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes18"> <table class="stdtable"> <tr> <td valign="center">ID</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes3"> <table class="stdtable"> <tr> <td valign="center">Name</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes3"> <table class="stdtable"> <tr> <td valign="center">Amount</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes10"> <table class="stdtable"> <tr> <td valign="center">Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes9"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div></div><div class="main border-box leftalign"></div>';
            }


            $("#dashboardprime").html(htmlstr);
            primemainaddsonic();

            request=$.post("https://derbii.com/internal/dashboard/selectpage", { 
                        type: selectedtab1.attr('data-type'),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        if(selectedtab1.attr('data-type') == 'leads'){
                            render_leads_main(data);
                        }else if(selectedtab1.attr('data-type') == 'commutes'){
                            render_commutes_main(data);
                        }else if(selectedtab1.attr('data-type') == 'signups'){
                            render_signups_main(data);
                        }else if(selectedtab1.attr('data-type') == 'users'){
                            render_users_main(data);
                        }else if(selectedtab1.attr('data-type') == 'ivr'){
                            render_calls_main(data);
                        }else if(selectedtab1.attr('data-type') == 'fbadleads'){
                            render_fbads_main(data);
                        }else if(selectedtab1.attr('data-type') == 'derbiis'){
                            render_derbiis_main(data);
                        }else if(selectedtab1.attr('data-type') == 'clusters'){
                            render_clusters_main(data);
                        }else if(selectedtab1.attr('data-type') == 'billing'){
                            render_billing_main(data);
                        }else if(selectedtab1.attr('data-type') == 'walletupdates'){
                            render_walletupdates_main(data);
                        }else if(selectedtab1.attr('data-type') == 'wallets'){
                            render_wallets_main(data);
                        }
                        initialize_filters();
                    });			
	}

	loadinitial();


	$(".toggleallsubareas").live('click', function(e) {

		if($(this).attr('data-type') == "start"){
			$(".subareastartchoice[data-area-name='" + $(this).attr('data-name') +"']").each(function(index,item){
				if($(item).hasClass('choiceboxmulti1innerselected')){
					$(item).removeClass('choiceboxmulti1innerselected');
				}else{
					$(item).addClass('choiceboxmulti1innerselected');
				}
				if($(".formerrors").offset()){$(".formerrors").remove();}
			});
		}
		if($(this).attr('data-type') == "end"){
			$(".subareaendchoice[data-area-name='" + $(this).attr('data-name') +"']").each(function(index,item){
				if($(item).hasClass('choiceboxmulti1innerselected')){
					$(item).removeClass('choiceboxmulti1innerselected');
				}else{
					$(item).addClass('choiceboxmulti1innerselected');
				}
				if($(".formerrors").offset()){$(".formerrors").remove();}
			});			
		}
	  e.stopPropagation();
	});

	
	$(document).keyup(function(e) {
    	if (e.keyCode == 27) { // escape key maps to keycode `27`
        	if(request_right){request_right.abort();}
		
        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
		$("#dashboardmainright").detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
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



    $(document).keypress(function(e) {
        if(e.which == 13) {
            if($('.filterbox').hasClass('active')){
                if($('.filterbox').hasClass('filterleads')){
                    filterleadsearch(null);
                }else if($('.filterbox').hasClass('filtercommutes')){
                    filtercommutesearch(null);
                }else if($('.filterbox').hasClass('filtersignups')){
                    filtersignupsearch(null);
                }else if($('.filterbox').hasClass('filterivr')){
                    filterivrsearch(null);
                }else if($('.filterbox').hasClass('filterfbadleads')){
                    filterfbadsearch(null);
                }else if($('.filterbox').hasClass('filterusers')){
                    filterusersearch(null);
                }else if($('.filterbox').hasClass('filterderbiis')){
                    filterderbiisearch(null);
                }else if($('.filterbox').hasClass('filterbilling')){
                    filterbillingsearch(null);
                }else if($('.filterbox').hasClass('filterwalletupdates')){
                    filterwalletupdatesearch(null);
                }else if($('.filterbox').hasClass('filterwallets')){
                    filterwalletsearch(null);
                }
            }
        }
    });



    $("#filterbtn").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").addClass('active').stop().animate({
            top: '0px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
        
        
    });

    $("#filterclosebtn").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
        
        
    });








    $("#filterleadsearchbtn").live('click', function(){
        filterleadsearch($(this))
    });

    $("#filterbillingsearchbtn").live('click', function(){
        filterleadsearch($(this))
    });

    $("#filterwalletupdatessearchbtn").live('click', function(){
        filterwalletupdatesearch($(this))
    });

    $("#filterwalletssearchbtn").live('click', function(){
        filterwalletsearch($(this))
    });



    $("#filterderbiisearchbtn").live('click', function(){
        filterderbiisearch($(this));
    });



    $("#filtercommutesearchbtn").live('click', function(){
        filtercommutesearch($(this));
    });




    $("#filtersignupsearchbtn").live('click', function(){
        filtersignupsearch($(this));
    });


    
    $("#filterusersearchbtn").live('click', function(){
        filterusersearch($(this));
    });



    $("#filterivrsearchbtn").live('click', function(){
        filterivrsearch($(this));
    });

    

    $("#filterfbadsearchbtn").live('click', function(){
        filterfbadsearch($(this));
    });


    



    








    $("#excelderbiisbtn").live('click', function(){
        if(request){request.abort();}

        var days = '';
        
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
            days = days + 'MTuWThF';
        }
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
            days = days + 'MTuWThFSa';
        }
        
        

        var cities_start = [];
        $('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
             cities_start.push($(this).attr('name'));
        });
        

        var cities_end = [];
        $('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
             cities_end.push($(this).attr('name'));
        });
        

        var subareas_start = [];
        $('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
             subareas_start.push($(this).attr('name'));
        });
        

        var subareas_end = [];
        $('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
             subareas_end.push($(this).attr('name'));
        });
        

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

/*        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });*/

        var derbii_types = [];
        $('.choiceboxmultiinnerselected.typechoice').each(function(i, obj) {
             derbii_types.push($(this).attr('name'));
        });
        

        var directions = [];
        $('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
             directions.push($(this).attr('name'));
        });

        console.log(directions);
        

//        var admin = $("#fieldsearchbyadmin");
        
        var id = $("#fieldsearchbyid");
        
//        var name = $("#fieldsearchbyname");
        
//        var phone = $("#fieldsearchbyphone");
        
//        var starttimefrom = $("#fieldstarttimefrom");
//        var starttimeto = $("#fieldstarttimeto");
//        var endtimefrom = $("#fieldendtimefrom");
//        var endtimeto = $("#fieldendtimeto");
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");



        request=$.post("https://derbii.com/internal/dashboard/download/excel/derbiis", { 
                        days: days,
                        cities_start: JSON.stringify(cities_start),
                        cities_end: JSON.stringify(cities_end),
                        subareas_start: JSON.stringify(subareas_start),
                        subareas_end: JSON.stringify(subareas_end),
                        statuses: JSON.stringify(statuses),
//                        genders: JSON.stringify(genders),
                        derbii_types: JSON.stringify(derbii_types),
                        directions: JSON.stringify(directions),
                        ref: id.val(),
//                        admin: admin.val(),
//                        name: name.val(),
//                        phone: phone.val(),
//                        starttimefrom: $('option:selected', starttimefrom).val(),
//                        starttimeto: $('option:selected', starttimeto).val(),
//                        endtimefrom: $('option:selected', endtimefrom).val(),
//                        endtimeto: $('option:selected', endtimeto).val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
//                      if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//                      $('#dashboardprime > div.main').html('').html(data);
                        
                        var htmlstr = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
                        htmlstr += '<th>Title</th><th>Code</th><th>Name</th><th>Start zone</th><th>End zone</th><th>Start time</th><th>End time</th><th>Phone</th><th>Email</th></tr>';
                        
                        var cluster = data.data;

                        for(var j = 0; j < cluster.length ; j++){
                            var commutes = cluster[j].commutes;
                            for(var k = 0; k < commutes.length ; k++){

                                htmlstr += '<tr>';
                                htmlstr += '<td>';
                                if(k == 0){
                                    htmlstr += cluster[j].title;
                                }
                                htmlstr += '</td>';
                                htmlstr += '<td>';
                                if(k == 0){
                                    htmlstr += cluster[j].code;
                                }
                                htmlstr += '</td>';
                                htmlstr += '<td>'+commutes[k].profile__user__first_name+" "+commutes[k].profile__user__last_name+'</td>';
                                htmlstr += '<td>'+commutes[k].route__start__place__zone__name+'</td>';
                                htmlstr += '<td>'+commutes[k].route__end__place__zone__name+'</td>';
                                htmlstr += '<td>'+commutes[k].start_time_f+'</td>';
                                htmlstr += '<td>'+commutes[k].end_time_f+'</td>';
                                htmlstr += '<td>'+commutes[k].profile__simplev__phone__number+'</td>';
                                htmlstr += '<td>'+commutes[k].profile__user__email+'</td>';
                                htmlstr += '</tr>';
                            }
                        }
                        htmlstr += '</table></body></html>';

                        
            //          $("#dashboardmainright").html('').html(data);

                        openNewWindow(htmlstr);
                        
                    });
    });



	$("#excelcommutesbtn").live('click', function(){
		if(request){request.abort();}

		var days = '';
		
		if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
			days = days + 'MTuWThF';
		}
		if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
			days = days + 'MTuWThFSa';
		}
		
		

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var directions = [];
		$('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
   			 directions.push($(this).attr('name'));
		});
		


        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");



		request=$.post("https://derbii.com/internal/dashboard/download/excel/commutes", { 
						days: days,
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						statuses: JSON.stringify(statuses),
						genders: JSON.stringify(genders),
						directions: JSON.stringify(directions),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
//						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//						$('#dashboardprime > div.main').html('').html(data);
						
						var htmlstr = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
						htmlstr += '<th>Name</th><th>Phone</th><th>Start address</th><th>End address</th><th>Start zone</th><th>End zone</th><th>Start subarea</th><th>End subarea</th><th>Start city</th><th>End city</th><th>Start time</th><th>End time</th><th>Direction</th><th>Seats</th><th>Status</th><th>Code</th><th>Id</th><th>Admin</th></tr>';
						
							var cluster = data.data;

							for(var j = 0; j < cluster.length ; j++){

								htmlstr += '<tr>';
								htmlstr += '<td>'+cluster[j].profile__user__first_name+" "+cluster[j].profile__user__last_name+'</td>';
								htmlstr += '<td>'+cluster[j].profile__simplev__phone__number+'</td>';
								htmlstr += '<td>'+cluster[j].route__start__address+'</td>';
								htmlstr += '<td>'+cluster[j].route__end__address+'</td>';
								htmlstr += '<td>'+cluster[j].route__start__place__zone__name+'</td>';
								htmlstr += '<td>'+cluster[j].route__end__place__zone__name+'</td>';
								htmlstr += '<td>'+cluster[j].route__start__place__zone__subarea__name+'</td>';
								htmlstr += '<td>'+cluster[j].route__end__place__zone__subarea__name+'</td>';
								htmlstr += '<td>'+cluster[j].route__start__place__zone__city__name+'</td>';
								htmlstr += '<td>'+cluster[j].route__end__place__zone__city__name+'</td>';
								htmlstr += '<td>'+cluster[j].start_time_f+'</td>';
								htmlstr += '<td>'+cluster[j].end_time_f+'</td>';
                                htmlstr += '<td>'+cluster[j].route__type+'</td>';
								htmlstr += '<td>'+cluster[j].seats__seats+'</td>';
                                htmlstr += '<td>'+cluster[j].status+'</td>';
								htmlstr += '<td>'+cluster[j].code+'</td>';
								htmlstr += '<td>'+cluster[j].id+'</td>';
                                htmlstr += '<td>'+cluster[j].route__start__place__zone__subarea__admin__admin_start+'</td>';
								htmlstr += '</tr>';
							}
						htmlstr += '</table></body></html>';

						
			//			$("#dashboardmainright").html('').html(data);

						openNewWindow(htmlstr);
						
					});
	});




	$("#excelsignupsbtn").live('click', function(){
		if(request){request.abort();}

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		


        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");



		request=$.post("https://derbii.com/internal/dashboard/download/excel/signups", { 
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						statuses: JSON.stringify(statuses),
						genders: JSON.stringify(genders),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
//						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//						$('#dashboardprime > div.main').html('').html(data);
						
						var htmlstr = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
						htmlstr += '<th>Name</th><th>Phone</th><th>Start address</th><th>End address</th><th>Start zone</th><th>End zone</th><th>Start subarea</th><th>End subarea</th><th>Start city</th><th>End city</th><th>Start time</th><th>End time</th><th>Seats</th><th>Status</th><th>Code</th><th>Id</th><th>Admin</th></tr>';
						
							var cluster = data.data;

							for(var j = 0; j < cluster.length ; j++){

								htmlstr += '<tr>';
								htmlstr += '<td>'+cluster[j].first_name+" "+cluster[j].last_name+'</td>';
								htmlstr += '<td>'+cluster[j].phone+'</td>';
								htmlstr += '<td>'+cluster[j].address__pickup_address+'</td>';
								htmlstr += '<td>'+cluster[j].address__drop_address+'</td>';
								htmlstr += '<td>'+cluster[j].pickup_zone__zone__name+'</td>';
								htmlstr += '<td>'+cluster[j].drop_zone__zone__name+'</td>';
								htmlstr += '<td>'+cluster[j].pickup_zone__zone__subarea__name+'</td>';
								htmlstr += '<td>'+cluster[j].drop_zone__zone__subarea__name+'</td>';
								htmlstr += '<td>'+cluster[j].pickup_zone__zone__city__name+'</td>';
								htmlstr += '<td>'+cluster[j].drop_zone__zone__city__name+'</td>';
								htmlstr += '<td>'+cluster[j].pickup_time_f+'</td>';
								htmlstr += '<td>'+cluster[j].return_time_f+'</td>';
								htmlstr += '<td>'+cluster[j].seats__seats+'</td>';
                                htmlstr += '<td>'+cluster[j].status__status+'</td>';
								htmlstr += '<td></td>';
								htmlstr += '<td>'+cluster[j].id+'</td>';
                                htmlstr += '<td>'+cluster[j].pickup_zone__zone__subarea__admin__admin_start+'</td>';
								htmlstr += '</tr>';
							}
						htmlstr += '</table></body></html>';

						
			//			$("#dashboardmainright").html('').html(data);

						openNewWindow(htmlstr);
						
					});
	});




	$("#excelusersbtn").live('click', function(){
		if(request){request.abort();}

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

/*		var connects = [];
		$('.choiceboxmultiinnerselected.connectchoice').each(function(i, obj) {
   			 connects.push($(this).attr('name'));
		});
		*/

		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var email = $("#fieldsearchbyemail");
		


		request=$.post("https://derbii.com/internal/dashboard/download/excel/users", { 
//						devices: JSON.stringify(devices),
						genders: JSON.stringify(genders),
//						connects: JSON.stringify(connects),
						ref: id.val(),
						name: name.val(),
						phone: phone.val(),
						email: email.val(),
					},
					function(data) {
//						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//						$('#dashboardprime > div.main').html('').html(data);
						
						var htmlstr = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
						htmlstr += '<th>First name</th><th>Last name</th><th>Email</th><th>Phone</th><th>Gender</th><th>User Id</th><th>Profile Id</th></tr>';
						
							var cluster = data.data;

							for(var j = 0; j < cluster.length ; j++){

								htmlstr += '<tr>';
								htmlstr += '<td>'+cluster[j].user__first_name+'</td>';
								htmlstr += '<td>'+cluster[j].user__last_name+'</td>';
								htmlstr += '<td>'+cluster[j].user__email+'</td>';
								htmlstr += '<td>'+cluster[j].simplev__phone__number+'</td>';
								htmlstr += '<td>'+cluster[j].gender+'</td>';
								htmlstr += '<td>'+cluster[j].user__id+'</td>';
								htmlstr += '<td>'+cluster[j].id+'</td>';
								htmlstr += '</tr>';
							}
						htmlstr += '</table></body></html>';

						
			//			$("#dashboardmainright").html('').html(data);

						openNewWindow(htmlstr);
						
					});
	});




	$("#excelleadsbtn").live('click', function(){
		if(request){request.abort();}

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var buckets = [];
		$('.choiceboxmultiinnerselected.bucketchoice').each(function(i, obj) {
   			 buckets.push($(this).attr('name'));
		});
		

		var sources = [];
		$('.choiceboxmultiinnerselected.sourcechoice').each(function(i, obj) {
   			 sources.push($(this).attr('name'));
		});
		

		var directions = [];
		$('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
   			 directions.push($(this).attr('name'));
		});
		


        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var nrcount = $("#fieldsearchbynrcount");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");



		request=$.post("https://derbii.com/internal/dashboard/download/excel/leads", { 
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						genders: JSON.stringify(genders),
						buckets: JSON.stringify(buckets),
						sources: JSON.stringify(sources),
						directions: JSON.stringify(directions),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						nrcount: nrcount.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
//						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//						$('#dashboardprime > div.main').html('').html(data);
						
						var htmlstr = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
						htmlstr += '<th>Name</th><th>Start address</th><th>End address</th><th>Start zone</th><th>End zone</th><th>Start subarea</th><th>End subarea</th><th>Start city</th><th>End city</th><th>Start time</th><th>End time</th><th>Seats</th><th>Bucket</th><th>Source</th><th>Source Id</th><th>Id</th><th>Admin</th></tr>';
						
							var cluster = data.data;

							for(var j = 0; j < cluster.length ; j++){

								htmlstr += '<tr>';
								htmlstr += '<td>'+cluster[j].first_name+" "+cluster[j].last_name+'</td>';
								htmlstr += '<td>'+cluster[j].comments__start_address+'</td>';
								htmlstr += '<td>'+cluster[j].comments__end_address+'</td>';
								htmlstr += '<td>'+cluster[j].start_zone__name+'</td>';
								htmlstr += '<td>'+cluster[j].end_zone__name+'</td>';
								htmlstr += '<td>'+cluster[j].start_zone__subarea__name+'</td>';
								htmlstr += '<td>'+cluster[j].end_zone__subarea__name+'</td>';
								htmlstr += '<td>'+cluster[j].start_zone__city__name+'</td>';
								htmlstr += '<td>'+cluster[j].end_zone__city__name+'</td>';
								htmlstr += '<td>'+cluster[j].start_time_f+'</td>';
								htmlstr += '<td>'+cluster[j].end_time_f+'</td>';
								htmlstr += '<td></td>';
								htmlstr += '<td>'+cluster[j].bucket__name+'</td>';
								htmlstr += '<td>'+cluster[j].source+'</td>';
								htmlstr += '<td>'+cluster[j].source_id+'</td>';
								htmlstr += '<td>'+cluster[j].id+'</td>';
                                htmlstr += '<td>'+cluster[j].start_zone__subarea__admin__admin_start+'</td>';
								htmlstr += '</tr>';
							}
						htmlstr += '</table></body></html>';

						
			//			$("#dashboardmainright").html('').html(data);

						openNewWindow(htmlstr);
						
					});
	});






	$("#excelivrbtn").live('click', function(){
		if(request){request.abort();}

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		
		var id = $("#fieldsearchbyid");
		
		var agent = $("#fieldsearchbyagent");
		
		var phone = $("#fieldsearchbyphone");
		

		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");



		request=$.post("https://derbii.com/internal/dashboard/download/excel/calls", { 
						statuses: JSON.stringify(statuses),
						ref: id.val(),
						agent: agent.val(),
						phone: phone.val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
//						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//						$('#dashboardprime > div.main').html('').html(data);
						
						var htmlstr = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
						htmlstr += '<th>Id</th><th>Number</th><th>Type</th><th>Status/Agent</th><th>Time</th><th>Recording</th></tr>';
						
							var cluster = data.data;

							for(var j = 0; j < cluster.length ; j++){

								htmlstr += '<tr>';
								htmlstr += '<td>'+cluster[j].id+'</td>';
								htmlstr += '<td>'+cluster[j].customer_number+'</td>';
								if (cluster[j].call_type == "0"){
									htmlstr += '<td>Incoming</td>';	
								}
								if (cluster[j].call_type == "1"){
									htmlstr += '<td>Outgoing</td>';	
								}
								htmlstr += '<td>'+cluster[j].agent_number+'</td>';
								htmlstr += '<td>'+cluster[j].startdatef+" "+cluster[j].starttimef+'</td>';
								htmlstr += '<td>'+cluster[j].call_recording+'</td>';
								htmlstr += '</tr>';
							}
						htmlstr += '</table></body></html>';

						
			//			$("#dashboardmainright").html('').html(data);

						openNewWindow(htmlstr);
						
					});
	});



	$("#excelfbadsbtn").live('click', function(){
		if(request){request.abort();}

		var fbid = $("#fieldsearchbyfbid");
		
		var fbadid = $("#fieldsearchbyfbadid");
		
		var email = $("#fieldsearchbyemail");
		
		var phone = $("#fieldsearchbyphone");
		

		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");



		request=$.post("https://derbii.com/internal/dashboard/download/excel/fbads", { 
						fbid: fbid.val(),
						fbadid: fbadid.val(),
						email: email.val(),
						phone: phone.val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
//						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//						$('#dashboardprime > div.main').html('').html(data);
						
						var htmlstr = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
						htmlstr += '<th>Id</th><th>FB Id</th><th>FB Ad Id</th><th>Phone</th><th>Email</th><th>Time</th></tr>';
						
							var cluster = data.data;

							for(var j = 0; j < cluster.length ; j++){

								htmlstr += '<tr>';
								htmlstr += '<td>'+cluster[j].id+'</td>';
								htmlstr += '<td>'+cluster[j].fb_id+'</td>';
								htmlstr += '<td>'+cluster[j].fb_ad_id+'</td>';
								htmlstr += '<td>'+cluster[j].phone+'</td>';
								htmlstr += '<td>'+cluster[j].email+'</td>';
								htmlstr += '<td>'+cluster[j].posteddatef+" "+cluster[j].postedtimef+'</td>';
								htmlstr += '</tr>';
							}
						htmlstr += '</table></body></html>';

						
			//			$("#dashboardmainright").html('').html(data);

						openNewWindow(htmlstr);
						
					});
	});



    $(".expanduploadedinvoicebtn").live('click', function(){
        $("#imageoverlaybox").show();
        $("#imageoverlaybox").attr('data-type', 'uploadedinvoice');
        var that = $(this);
        $(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
        $("#sonicbox").html(sonic_blue_black.canvas);

        

//        $(".imageoverlaycounttext").text(that.attr('data-image-pos')+"  of  "+that.attr('data-images-count'));
        $(".imageoverlaycounttext").text('1');
        $(".imageoverlayboxtopbar > div > div.left").text($(this).attr('data-image-filename'));
        $(".imageoverlaydownloadlink").attr('href', $(this).attr('data-image-url'));
//        $(".imageoverlayprintlink").attr('href', '/vendor/dashboard/driver/print/docs/'+that.attr('data-image-id')+'/');

        
        var str = '<div class="border-box clearfix centeralign"><div class="top border-box clearfix"></div><div class="middle border-box clearfix centeralign">';
        str += '<img id="imageoverlayboxmainimage" data-pos="1" src="';
        str += $(this).attr('data-image-url');
        str += '" data-image-name="';
        str += $(this).attr('data-image-filename');
        str += '" data-image-url="';
        str += $(this).attr('data-image-url');
        str += '" data-image-id="';
        str += $(this).attr('data-image-id');
        str += '"></div><div class="bottom border-box clearfix"></div></div>';

        $(".imageoverlayboxmain").html(str);

/*        $("img#imageoverlayboxmainimage").attr('src', $(this).attr('data-image-url'));
        $("img#imageoverlayboxmainimage").attr('data-pos', '1');
        $("img#imageoverlayboxmainimage").attr('data-image-name', $(this).attr('data-image-filename'));
        $("img#imageoverlayboxmainimage").attr('data-image-url', $(this).attr('data-image-url'));
        $("img#imageoverlayboxmainimage").attr('data-image-id', $(this).attr('data-image-id'));*/

    });




	function openNewWindow(htmlstr){
		var newWindow = window.open();
		newWindow.document.write(htmlstr);
	}


	$("#excelclustersbtn").live('click', function(){
		if($("#dashboardprime > div.main").attr('source') == 'Commute'){
			var data = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
			data += '<th>Name</th><th>Start</th><th>End</th><th>Time</th><th>Phone</th><th>Cluster</th></tr>';
			for(var i = 0; i < clusters.length ; i++){
				var cluster = clusters[i];
				for(var j = 0; j < cluster.length ; j++){
					data += '<tr>';
					data += '<td>'+cluster[j].profile__user__first_name+" "+cluster[j].profile__user__last_name+'</td>';
					data += '<td>'+cluster[j].route__start__place__zone__subarea__name+'</td>';
					data += '<td>'+cluster[j].route__end__place__zone__subarea__name+'</td>';
					data += '<td>'+cluster[j].start_time_f+" to "+cluster[j].end_time_f+'</td>';
					data += '<td>'+cluster[j].profile__simplev__phone__number+'</td>';
					data += '<td>'+cluster[j].label_start+" - "+cluster[j].label_end+'</td>';
					data += '</tr>';
				}
				data += '<tr>';
				data += '<td></td><td></td><td></td><td></td><td></td><td></td>';
				data += '</tr>';
			}
			data += '</table></body></html>';
//			$("#dashboardmainright").html('').html(data);
			openNewWindow(data);
		}else if($("#dashboardprime > div.main").attr('source') == 'HelloSignUp'){
			var data = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
			data += '<th>Name</th><th>Start</th><th>End</th><th>Time</th><th>Phone</th><th>Cluster</th></tr>';
			for(var i = 0; i < clusters.length ; i++){
				var cluster = clusters[i];
				for(var j = 0; j < cluster.length ; j++){
					data += '<tr>';
					data += '<td>'+cluster[j].first_name+" "+cluster[j].last_name+'</td>';
					data += '<td>'+cluster[j].pickup_zone__zone__subarea__name+'</td>';
					data += '<td>'+cluster[j].drop_zone__zone__subarea__name+'</td>';
					data += '<td>'+cluster[j].pickup_time_f+" to "+cluster[j].return_time_f+'</td>';
					data += '<td>'+cluster[j].phone+'</td>';
					data += '<td>'+cluster[j].label_start+" - "+cluster[j].label_end+'</td>';
					data += '</tr>';
				}
				data += '<tr>';
				data += '<td></td><td></td><td></td><td></td><td></td><td></td>';
				data += '</tr>';
			}
			data += '</table></body></html>';
//			$("#dashboardmainright").html('').html(data);
			openNewWindow(data);
		}else if($("#dashboardprime > div.main").attr('source') == 'Lead'){
            var data = '<html><head></head><body style="font-family:Arial, sans-serif;"><table border="1" cellspacing="0" bordercolor="#222" id="clusterstable"><tbody><tr class="excelheader">';
            data += '<th>Name</th><th>Start</th><th>End</th><th>Time</th><th>Phone</th><th>Cluster</th><th>Lead type</th></tr>';
            for(var i = 0; i < clusters.length ; i++){
                var cluster = clusters[i];
                for(var j = 0; j < cluster.length ; j++){
                    if(cluster[j].lead_type == 'Commute'){
                        data += '<tr>';
                        data += '<td>'+cluster[j].profile__user__first_name+" "+cluster[j].profile__user__last_name+'</td>';
                        data += '<td>'+cluster[j].route__start__place__zone__subarea__name+'</td>';
                        data += '<td>'+cluster[j].route__end__place__zone__subarea__name+'</td>';
                        data += '<td>'+cluster[j].start_time_f+" to "+cluster[j].end_time_f+'</td>';
                        data += '<td>'+cluster[j].profile__simplev__phone__number+'</td>';
                        data += '<td>'+cluster[j].label_start+" - "+cluster[j].label_end+'</td>';
                        data += '<td>'+cluster[j].lead_type+'</td>';
                        data += '</tr>';
                    }
                    if(cluster[j].lead_type == 'HelloSignUp'){
                        data += '<tr>';
                        data += '<td>'+cluster[j].first_name+" "+cluster[j].last_name+'</td>';
                        data += '<td>'+cluster[j].pickup_zone__zone__subarea__name+'</td>';
                        data += '<td>'+cluster[j].drop_zone__zone__subarea__name+'</td>';
                        data += '<td>'+cluster[j].pickup_time_f+" to "+cluster[j].return_time_f+'</td>';
                        data += '<td>'+cluster[j].phone+'</td>';
                        data += '<td>'+cluster[j].label_start+" - "+cluster[j].label_end+'</td>';
                        data += '<td>'+cluster[j].lead_type+'</td>';
                        data += '</tr>';
                    }
                }
                data += '<tr>';
                data += '<td></td><td></td><td></td><td></td><td></td><td></td>';
                data += '</tr>';
            }
            data += '</table></body></html>';
//          $("#dashboardmainright").html('').html(data);
            openNewWindow(data);
        }
	});


	$("#filterleadclusterbtn").live('click', function(){
		
		if(request){request.abort();}

		resetMapView();
//		primemainaddsonic();


		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		var buckets = [];
		$('.choiceboxmultiinnerselected.bucketchoice').each(function(i, obj) {
   			 buckets.push($(this).attr('name'));
		});
		

		var sources = [];
		$('.choiceboxmultiinnerselected.sourcechoice').each(function(i, obj) {
   			 sources.push($(this).attr('name'));
		});
		

		var clustersize = $("#fieldclustersize");
		var clustersamples = $("#fieldclustersamples");

		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");



		request=$.post("https://derbii.com/internal/dashboard/cluster/leads", { 
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						genders: JSON.stringify(genders),
						sources: JSON.stringify(sources),
						statuses: JSON.stringify(statuses),
						buckets: JSON.stringify(buckets),
						clustersize: clustersize.val(),
						clustersamples: clustersamples.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						console.log(data);
//						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
//						$('#dashboardprime > div.main').html('').html(data);
						
//						var leads = JSON.parse(data.leads);

						$("#dashboardprime > div.main").html('');
						$("#dashboardprime > div.main").attr('source', data.source);

						if(data.source == "Commute"){


							clusters = [];

							for(var u = 0; u <= data.max_start ; u++){
								for(var v = 0; v <= data.max_end ; v++){
									var cluster = [];
									var ids = [];
									var names = [];
									for(var w = 0; w < data.leads.length ; w++){
										if(data.leads[w].label_start == u && data.leads[w].label_end == v){
											cluster.push(data.leads[w]);
											ids.push(data.leads[w].id);
											names.push(data.leads[w].profile__user__first_name+" "+data.leads[w].profile__user__last_name);
										}
									}
									if(cluster.length != 0){
										clusters.push(cluster);
										var htmlstr = '';
										htmlstr += '<div class="boxes leads border-box clearfix leftalign blackspan9" data-id="';
										htmlstr += ids.join(", ");
										htmlstr += '"><div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes2"><table class="stdtable" style="color:#222222;"><tr><td valign="center">&#9679;</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes17"><table class="stdtable colorprim500span" style="text-transform:uppercase; color:#222222;"><tr><td valign="center">';
										htmlstr += u+'-'+v;
										htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes27"><table class="stdtable" style="color:#222222;"><tr><td valign="center">';
										htmlstr += names.join(", ");
										htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">';
										htmlstr += cluster.length;
										htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes9"><table class="stdtable" style="color:#222222;"><tr><td valign="center"></td></tr></table></div></div>';
										$("#dashboardprime > div.main").append(htmlstr);
									}
								}
							}

							var cluster = [];
							for(var x = 0; x < data.leads.length ; x++){
								if(data.leads[x].label_start == -1 || data.leads[x].label_end == -1){
									cluster.push(data.leads[x]);
								}
							}
							if(cluster.length != 0){
								clusters.push(cluster);	
							}

							console.log(clusters);


							for(var i = 0; i < data.leads.length ; i++){
								
								var strokeColor1, strokeColor2;
								if(data.leads[i].label_start == -1){
									strokeColor1 = "#000000";
								}else{
									strokeColor1 = markerColors[(data.leads[i].label_start+1)%64]
								}
								if(data.leads[i].label_end == -1){
									strokeColor2 = "#000000";
								}else{
									strokeColor2 = markerColors[(data.leads[i].label_end+1)%64]
								}

								var latlng1 = new google.maps.LatLng(data.leads[i].route__start__place__lat,data.leads[i].route__start__place__lng);
                                var marker1 = new google.maps.Marker({
                                    position: latlng1,
                                    map: map,
//                                    title: 'Hello World!',
//                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
									icon: {
								        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
								        strokeColor: strokeColor1,
								        scale: 3
								    },
                                    data_index: data.leads[i].id,
                                    data_name: data.leads[i].profile__user__first_name + " " +data.leads[i].profile__user__last_name,
                                });
                                markers.push(marker1);
                                marker_attrs.push(data.leads[i].id);
                                bounds1.extend(latlng1);

                                var latlng2 = new google.maps.LatLng(data.leads[i].route__end__place__lat,data.leads[i].route__end__place__lng);
                                var marker2 = new google.maps.Marker({
                                    position: latlng2,
                                    map: map,
//                                    title: 'Hello World!',
//                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
									icon: {
								        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
								        strokeColor: strokeColor2,
								        scale: 3
								    },
                                    data_index: data.leads[i].id,
                                    data_name: data.leads[i].profile__user__first_name + " " +data.leads[i].profile__user__last_name,
                                });
                                markers.push(marker2);
                                marker_attrs.push(data.leads[i].id);
                                bounds1.extend(latlng2);
							}
						}else if(data.source == "HelloSignUp"){
							clusters = [];

							for(var u = 0; u <= data.max_start ; u++){
								for(var v = 0; v <= data.max_end ; v++){
									var cluster = [];
									var ids = [];
									var names = [];
									for(var w = 0; w < data.leads.length ; w++){
										if(data.leads[w].label_start == u && data.leads[w].label_end == v){
											cluster.push(data.leads[w]);
											ids.push(data.leads[w].id);
											names.push(data.leads[w].first_name+" "+data.leads[w].last_name);
										}
									}
									if(cluster.length != 0){
										clusters.push(cluster);
										var htmlstr = '';
										htmlstr += '<div class="boxes leads border-box clearfix leftalign blackspan9" data-id="';
										htmlstr += ids.join(", ");
										htmlstr += '"><div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes2"><table class="stdtable" style="color:#222222;"><tr><td valign="center">&#9679;</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes17"><table class="stdtable colorprim500span" style="text-transform:uppercase; color:#222222;"><tr><td valign="center">';
										htmlstr += u+'-'+v;
										htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes27"><table class="stdtable" style="color:#222222;"><tr><td valign="center">';
										htmlstr += names.join(", ");
										htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">';
										htmlstr += cluster.length;
										htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes9"><table class="stdtable" style="color:#222222;"><tr><td valign="center"></td></tr></table></div></div>';
										$("#dashboardprime > div.main").append(htmlstr);
									}
								}
							}

							var cluster = [];
							for(var x = 0; x < data.leads.length ; x++){
								if(data.leads[x].label_start == -1 || data.leads[x].label_end == -1){
									cluster.push(data.leads[x]);
								}
							}
							if(cluster.length != 0){
								clusters.push(cluster);	
							}

							console.log(clusters);


							for(var i = 0; i < data.leads.length ; i++){
								
								var strokeColor1, strokeColor2;
								if(data.leads[i].label_start == -1){
									strokeColor1 = "#000000";
								}else{
									strokeColor1 = markerColors[(data.leads[i].label_start+1)%64]
								}
								if(data.leads[i].label_end == -1){
									strokeColor2 = "#000000";
								}else{
									strokeColor2 = markerColors[(data.leads[i].label_end+1)%64]
								}

								var latlng1 = new google.maps.LatLng(data.leads[i].latlng__pickup_lat,data.leads[i].latlng__pickup_lng);
                                var marker1 = new google.maps.Marker({
                                    position: latlng1,
                                    map: map,
//                                    title: 'Hello World!',
//                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
									icon: {
								        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
								        strokeColor: strokeColor1,
								        scale: 3
								    },
                                    data_index: data.leads[i].id,
                                    data_name: data.leads[i].first_name + " " +data.leads[i].last_name,
                                });
                                markers.push(marker1);
                                marker_attrs.push(data.leads[i].id);
                                bounds1.extend(latlng1);

                                var latlng2 = new google.maps.LatLng(data.leads[i].latlng__drop_lat,data.leads[i].latlng__drop_lng);
                                var marker2 = new google.maps.Marker({
                                    position: latlng2,
                                    map: map,
//                                    title: 'Hello World!',
//                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
									icon: {
								        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
								        strokeColor: strokeColor2,
								        scale: 3
								    },
                                    data_index: data.leads[i].id,
                                    data_name: data.leads[i].first_name + " " +data.leads[i].last_name,
                                });
                                markers.push(marker2);
                                marker_attrs.push(data.leads[i].id);
                                bounds1.extend(latlng2);
							}
						}else if(data.source == "Lead"){

							clusters = [];

                            for(var u = 0; u <= data.max_start ; u++){
                                for(var v = 0; v <= data.max_end ; v++){
                                    var cluster = [];
                                    var ids = [];
                                    var names = [];
                                    for(var w = 0; w < data.leads.length ; w++){
                                        if(data.leads[w].label_start == u && data.leads[w].label_end == v){
                                            cluster.push(data.leads[w]);
                                            ids.push(data.leads[w].id);
                                            if(data.leads[w].lead_type == 'Commute'){
                                                names.push(data.leads[w].profile__user__first_name+" "+data.leads[w].profile__user__last_name);
                                            }else if(data.leads[w].lead_type == 'HelloSignUp'){
                                                names.push(data.leads[w].first_name+" "+data.leads[w].last_name);
                                            }
                                        }
                                    }
                                    if(cluster.length != 0){
                                        clusters.push(cluster);
                                        var htmlstr = '';
                                        htmlstr += '<div class="boxes leads border-box clearfix leftalign blackspan9" data-id="';
                                        htmlstr += ids.join(", ");
                                        htmlstr += '"><div class="textsize12 border-box weight500 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes2"><table class="stdtable" style="color:#222222;"><tr><td valign="center">&#9679;</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes17"><table class="stdtable colorprim500span" style="text-transform:uppercase; color:#222222;"><tr><td valign="center">';
                                        htmlstr += u+'-'+v;
                                        htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes27"><table class="stdtable" style="color:#222222;"><tr><td valign="center">';
                                        htmlstr += names.join(", ");
                                        htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes12"><table class="stdtable"><tr><td valign="center">';
                                        htmlstr += cluster.length;
                                        htmlstr += '</td></tr></table></div><div class="textsize12 border-box weight500 dpmboxes9"><table class="stdtable" style="color:#222222;"><tr><td valign="center"></td></tr></table></div></div>';
                                        $("#dashboardprime > div.main").append(htmlstr);
                                    }
                                }
                            }

                            var cluster = [];
                            for(var x = 0; x < data.leads.length ; x++){
                                if(data.leads[x].label_start == -1 || data.leads[x].label_end == -1){
                                    cluster.push(data.leads[x]);
                                }
                            }
                            if(cluster.length != 0){
                                clusters.push(cluster); 
                            }

                            console.log(clusters);


                            for(var i = 0; i < data.leads.length ; i++){
                                
                                var strokeColor1, strokeColor2;
                                if(data.leads[i].label_start == -1){
                                    strokeColor1 = "#000000";
                                }else{
                                    strokeColor1 = markerColors[(data.leads[i].label_start+1)%64]
                                }
                                if(data.leads[i].label_end == -1){
                                    strokeColor2 = "#000000";
                                }else{
                                    strokeColor2 = markerColors[(data.leads[i].label_end+1)%64]
                                }



                                if(data.leads[i].lead_type == 'Commute'){
                                    var latlng1 = new google.maps.LatLng(data.leads[i].route__start__place__lat,data.leads[i].route__start__place__lng);
                                    var marker1 = new google.maps.Marker({
                                        position: latlng1,
                                        map: map,
    //                                    title: 'Hello World!',
    //                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                        icon: {
                                            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                            strokeColor: strokeColor1,
                                            scale: 3
                                        },
                                        data_index: data.leads[i].id,
                                        data_name: data.leads[i].profile__user__first_name + " " +data.leads[i].profile__user__last_name,
                                    });
                                    markers.push(marker1);
                                    marker_attrs.push(data.leads[i].id);
                                    bounds1.extend(latlng1);

                                    var latlng2 = new google.maps.LatLng(data.leads[i].route__end__place__lat,data.leads[i].route__end__place__lng);
                                    var marker2 = new google.maps.Marker({
                                        position: latlng2,
                                        map: map,
    //                                    title: 'Hello World!',
    //                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                        icon: {
                                            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                            strokeColor: strokeColor2,
                                            scale: 3
                                        },
                                        data_index: data.leads[i].id,
                                        data_name: data.leads[i].profile__user__first_name + " " +data.leads[i].profile__user__last_name,
                                    });
                                    markers.push(marker2);
                                    marker_attrs.push(data.leads[i].id);
                                    bounds1.extend(latlng2);    
                                }else if(data.leads[i].lead_type == 'HelloSignUp'){
                                    var latlng1 = new google.maps.LatLng(data.leads[i].latlng__pickup_lat,data.leads[i].latlng__pickup_lng);
                                    var marker1 = new google.maps.Marker({
                                        position: latlng1,
                                        map: map,
    //                                    title: 'Hello World!',
    //                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                        icon: {
                                            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                            strokeColor: strokeColor1,
                                            scale: 3
                                        },
                                        data_index: data.leads[i].id,
                                        data_name: data.leads[i].first_name + " " +data.leads[i].last_name,
                                    });
                                    markers.push(marker1);
                                    marker_attrs.push(data.leads[i].id);
                                    bounds1.extend(latlng1);

                                    var latlng2 = new google.maps.LatLng(data.leads[i].latlng__drop_lat,data.leads[i].latlng__drop_lng);
                                    var marker2 = new google.maps.Marker({
                                        position: latlng2,
                                        map: map,
    //                                    title: 'Hello World!',
    //                                    icon: "https://wwccdn.s3.amazonaws.com/images/icons/car-marker-white-45.png",
                                        icon: {
                                            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                            strokeColor: strokeColor2,
                                            scale: 3
                                        },
                                        data_index: data.leads[i].id,
                                        data_name: data.leads[i].first_name + " " +data.leads[i].last_name,
                                    });
                                    markers.push(marker2);
                                    marker_attrs.push(data.leads[i].id);
                                    bounds1.extend(latlng2);
                                }


                                
                            }
						}

						

						map.fitBounds(bounds1);
					});



		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		
		$(".filterbox").removeClass('active').stop().animate({
			top: '-620px'
		}, 300, "easeOutQuart", function(){
				
//			$('html, body').stop().scrollTop(0);
		});
	});




    $("#dashboardprime > div.main > div.boxes.walletupdate").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        if(!derbii_adding){
        var same = false;

        var selectedtab_old = selectedtab;

        if(selectedtab && selectedtab.hasClass('selected')){
            selectedtab.removeClass('selected');
        }
        selectedtab = $(this);
        $(this).addClass('selected');

        if(selectedtab_old && selectedtab_old.hasClass('walletupdate') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
            same = true;
        }

        rightaddsonic();
        
                
                

                if(same){
                    request=$.post("https://derbii.com/internal/dashboard/walletupdates/selectwalletupdate", { 
                        id: $(this).attr('data-id'),
                    },
                    function(data) {
/*                      if (data.status == "success"){
                            
                        }else{
                            
                        }*/
//                      $("#dashboardmainright").html('').html(data);
                        rightaddwalletupdatesame(data);
                    });
                }else{
                    rightaddwalletupdate($(this));
                }
        }       
    });


    $("#dashboardprime > div.main > div.boxes.wallet").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        if(!derbii_adding){
        var same = false;

        var selectedtab_old = selectedtab;

        if(selectedtab && selectedtab.hasClass('selected')){
            selectedtab.removeClass('selected');
        }
        selectedtab = $(this);
        $(this).addClass('selected');

        if(selectedtab_old && selectedtab_old.hasClass('wallet') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
            same = true;
        }

        rightaddsonic();
        
                
                

                if(same){
                    request=$.post("https://derbii.com/internal/dashboard/wallets/selectwallet", { 
                        id: $(this).attr('data-id'),
                    },
                    function(data) {
/*                      if (data.status == "success"){
                            
                        }else{
                            
                        }*/
//                      $("#dashboardmainright").html('').html(data);
                        rightaddwalletsame(data);
                    });
                }else{
                    rightaddwallet($(this));
                }
        }       
    });


    $("#dashboardprime > div.main > div.boxes.billing").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        if(!derbii_adding){
        var same = false;

        var selectedtab_old = selectedtab;

        if(selectedtab && selectedtab.hasClass('selected')){
            selectedtab.removeClass('selected');
        }
        selectedtab = $(this);
        $(this).addClass('selected');

        if(selectedtab_old && selectedtab_old.hasClass('billing') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
            same = true;
        }

        rightaddsonic();
        
                
                

                if(same){
                    request=$.post("https://derbii.com/internal/dashboard/billings/selectbilling", { 
                        id: $(this).attr('data-id'),
                    },
                    function(data) {
/*                      if (data.status == "success"){
                            
                        }else{
                            
                        }*/
//                      $("#dashboardmainright").html('').html(data);
                        rightaddbillingsame(data);
                    });
                }else{
                    rightaddbilling($(this));
                }
        }       
    });

	$("#dashboardprime > div.main > div.boxes.calls").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(!derbii_adding){
        var same = false;

        var selectedtab_old = selectedtab;

        if(selectedtab && selectedtab.hasClass('selected')){
            selectedtab.removeClass('selected');
        }
        selectedtab = $(this);
        $(this).addClass('selected');

        

        if(selectedtab_old && selectedtab_old.hasClass('calls') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
            same = true;
        }

		rightaddsonic();
		
				
				if(same){
					request=$.post("https://derbii.com/internal/dashboard/calls/selectcall", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
//						$("#dashboardmainright").html('').html(data);
                        rightaddcallsame(data);
					});
                }else{
                    rightaddcall($(this));
                }
		}		
	});


    $("#dashboardprime > div.main > div.boxes.adleads").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        if(!derbii_adding){
        var same = false;

        var selectedtab_old = selectedtab;

        if(selectedtab && selectedtab.hasClass('selected')){
            selectedtab.removeClass('selected');
        }
        selectedtab = $(this);
        $(this).addClass('selected');

        

        if(selectedtab_old && selectedtab_old.hasClass('adleads') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
            same = true;
        }

        rightaddsonic();
        
                
                if(same){
                    request=$.post("https://derbii.com/internal/dashboard/fbads/selectfbad", { 
                        id: $(this).attr('data-id'),
                    },
                    function(data) {
/*                      if (data.status == "success"){
                            
                        }else{
                            
                        }*/
//                        $("#dashboardmainright").html('').html(data);
                        rightaddfbadsame(data);
                    });
                }else{
                    rightaddfbad($(this));
                }
        }        
    });


	$("#dashboardprime > div.main > div.boxes.signups").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        if(!derbii_adding){
		var same = false;

		var selectedtab_old = selectedtab;

		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');

		

		if(selectedtab_old && selectedtab_old.hasClass('signups') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
			same = true;
		}

		rightaddsonic();
		
				
				

				if(same){
					request=$.post("https://derbii.com/internal/dashboard/signups/selectsignup", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
//						$("#dashboardmainright").html('').html(data);
                        rightaddsignupsame(data);
					});
				}else{
					rightaddsignup($(this));
				}
		}		
	});
	$("#dashboardprime > div.main > div.boxes.users").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        if(!derbii_adding){
		var same = false;

		var selectedtab_old = selectedtab;

		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');

		if(selectedtab_old && selectedtab_old.hasClass('users') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
			same = true;
		}

		rightaddsonic();
		
				
				

				if(same){
					request=$.post("https://derbii.com/internal/dashboard/users/selectuser", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
//						$("#dashboardmainright").html('').html(data);
                        rightaddusersame(data);
					});
				}else{
					rightadduser($(this));
				}
		}		
	});
	$("#dashboardprime > div.main > div.boxes.leads").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(!derbii_adding){

		var same = false;

		var selectedtab_old = selectedtab;

		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');

		

		if(selectedtab_old && selectedtab_old.hasClass('leads') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
			same = true;
		}


		rightaddsonic();
		
				
				
				if(same){
					request=$.post("https://derbii.com/internal/dashboard/leads/selectlead", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
//						$("#dashboardmainright").html('').html(data);
                        rightaddleadsame(data);
					});
				}else{
					rightaddlead($(this));
				}
		}	
	});
	$("#dashboardprime > div.main > div.boxes.commutes").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        if(derbii_adding){
            selectedtab = $(this);
            if(!selectedtab.hasClass('selected')){
                $(this).addClass('selected');
            }

            if ($("#dashboardmainright div.newmain").find(".addboxes").length > 0){ 
                
            }else{
                $("#dashboardmainright div.newmain").html('');
            }

            if($("#dashboardmainright div.newmain").find('.addboxes[data-id="'+$(this).attr('data-id')+'"]').length > 0){

            }else{

            var htmlstr = '';
            htmlstr += '<div class="border-box clearfix card bgwhite addboxes commutes leftalign" data-type="pickup" data-id="';
            htmlstr += $(this).attr('data-id');
            htmlstr += '" data-direction="';
            htmlstr += $(this).attr('data-direction');
            htmlstr += '"><div class="border-box clearfix shadow-box bggreen leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left"><div class="border-box clearfix leftalign weight600">';
            htmlstr += $(this).attr('data-name');
            htmlstr += '</div><div class="border-box clearfix leftalign weight400 code">';
            htmlstr += $(this).attr('data-code');
            htmlstr += '</div></div><div class="border-box clearfix rightalign right weight900"><span class="position">';
            htmlstr += '2';
            htmlstr += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign"><div><span class="weight600">Start: </span>';
            htmlstr += $(this).attr('data-start-address');
            htmlstr += '</div><div><span class="weight600">Timings: </span>';
            htmlstr += $(this).attr('data-start-time') + ' to ' + $(this).attr('data-end-time');
            htmlstr += '</div></div><div class="border-box clearfix right rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center">';
            htmlstr += '<input type="text" class="nodetime tiny" name="nodetime" placeholder="Time" style="width:50px;">'
            htmlstr += '</td><td valign="center"><input type="button" class="btn btn_tiny btnwhite btncard move btnaddderbiicommuteremove" value="Remove" data-type="remove" data-id="';
            htmlstr += $(this).attr('data-id');
            htmlstr += '"></td></tr></table></div></div>';
            htmlstr += '</div>';

            htmlstr += '<div class="border-box clearfix card bgwhite addboxes commutes leftalign" data-type="drop" data-id="';
            htmlstr += $(this).attr('data-id');
            htmlstr += '" data-direction="';
            htmlstr += $(this).attr('data-direction');
            htmlstr += '"><div class="border-box clearfix shadow-box bgred leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left"><div class="border-box clearfix leftalign weight600">';
            htmlstr += $(this).attr('data-name');
            htmlstr += '</div><div class="border-box clearfix leftalign weight400 code">';
            htmlstr += $(this).attr('data-code');
            htmlstr += '</div></div><div class="border-box clearfix rightalign right weight900"><span class="position">';
            htmlstr += '2';
            htmlstr += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign"><div><span class="weight600">End: </span>';
            htmlstr += $(this).attr('data-end-address');
            htmlstr += '</div><div><span class="weight600">Timings: </span>';
            htmlstr += $(this).attr('data-start-time') + ' to ' + $(this).attr('data-end-time');
            htmlstr += '</div></div><div class="border-box clearfix right rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center">';
            htmlstr += '<input type="text" class="nodetime tiny" name="nodetime" placeholder="Time" style="width:50px;" value="'+$(this).attr('data-start-time')+'">'
            htmlstr += '</td><td valign="center"><input type="button" class="btn btn_tiny btnwhite btncard move btnaddderbiicommuteremove" value="Remove" data-type="remove" data-id="';
            htmlstr += $(this).attr('data-id');
            htmlstr += '"></td></tr></table></div></div>';
            htmlstr += '</div>';

            $("#dashboardmainright div.newmain").append(htmlstr);
            $('div.addboxes').each(function(index, element){
                $(element).find("span.position").html(index+1);
            });
            }
        }else{



		var same = false;

		var selectedtab_old = selectedtab;

		if(selectedtab && selectedtab.hasClass('selected')){
			selectedtab.removeClass('selected');
		}
		selectedtab = $(this);
		$(this).addClass('selected');

		

		if(selectedtab_old && selectedtab_old.hasClass('commutes') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
			same = true;
		}

		rightaddsonic();
		
				
				
				if(same){
					request=$.post("https://derbii.com/internal/dashboard/commutes/selectcommute", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
//						$("#dashboardmainright").html('').html(data);
                        rightaddcommutesame(data);
					});
				}else{
                    rightaddcommute($(this));
				}
		}
	});
	$("#dashboardprime > div.main > div.boxes.derbiis").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        if(!derbii_adding){

        var same = false;

        var selectedtab_old = selectedtab;

        if(selectedtab && selectedtab.hasClass('selected')){
            selectedtab.removeClass('selected');
        }
        selectedtab = $(this);
        $(this).addClass('selected');

        

        if(selectedtab_old && selectedtab_old.hasClass('derbiis') && selectedtab.attr('data-id') == selectedtab_old.attr('data-id')){
            same = true;
        }


        rightaddsonic();

				if(true){
					request=$.post("https://derbii.com/internal/dashboard/derbiis/selectderbii", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
                        rightaddderbiisame(data);
					});
                }else{
                    rightaddderbii($(this));
                }
		}
	});

	
	$(".tabs").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if(selectedtab1 && selectedtab1.hasClass('selected')){
			selectedtab1.removeClass('selected');
		}
		selectedtab1 = $(this);
		$(this).addClass('selected');

        if(selectedtab1.attr('data-type') == "maps"){
//            window.location.replace("https://derbii.com/internal/dashboard/maps");
            window.open("https://derbii.com/internal/dashboard/maps", "_blank");
        }else if(selectedtab1.attr('data-type') == "chat"){
//        	window.location.replace("https://derbii.com/internal/dashboard/chat");
            window.open("https://derbii.com/internal/dashboard/chat", "_blank");
        }else if(selectedtab1.attr('data-type') == "supportchat"){
//          window.location.replace("https://derbii.com/internal/dashboard/chat");
            window.open("https://derbii.com/internal/dashboard/support/chat", "_blank");
        }else{
//            primeaddsonic();
            if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

            var htmlstr = '';

            if($(this).attr('data-type') == 'leads'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterleads"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterleadsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbynrcount" class="dashboardfields dashboardchangefields tiny" name="searchbynrcount" placeholder="Search by NR Count" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NC">No Cat</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Hot">Hot</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Warm">Warm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Lukewarm">Lukewarm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Cold">Cold</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NoResp">No Response</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="Commute">Commute</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="HelloSignUp">Signup</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="FBAdLead">FB Ad</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="IVRCall">IVR</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="UserProfile">User</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="Other">Other</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected directionchoice" name="to_office">Going to office</div><div class="choiceboxmultiinner directionchoice" name="from_office">Coming from office</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner genderchoice" name="Male">Male</div><div class="choiceboxmultiinner genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="mapleadbtn" class="btn btn_small btncolorprim btncard move">Map</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateleads" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateleads" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID/Type</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Phone</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if($(this).attr('data-type') == 'commutes'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filtercommutes"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filtercommutesearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><!--<div class="choicebox" style="width:200px;"><div class="choiceboxinner statuschoice" name="Processing">Processing</div><div class="choiceboxinner choiceboxinnerselected statuschoice statuschoiceselected" name="Active">Active</div><div class="choiceboxinner statuschoice" name="Processing">Inactive</div><div class="choiceboxinner statuschoice" name="Processing">Declined</div></div>--><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner statuschoice" name="Active">Active</div><div class="choiceboxmultiinner statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Potential">Potential</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Available">Available</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choicebox"><div class="choiceboxinner choiceboxinner dayschoice" name="Weekdays">Weekdays</div><div class="choiceboxinner choiceboxinnerselected dayschoice" name="Weekend">Weekend</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected directionchoice" name="to_office">Going to office</div><div class="choiceboxmultiinner directionchoice" name="from_office">Coming from office</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatleft" style="float:right;"><table class="stdtable"><tr><td valign="center"><button id="addderbiibtn" class="btn btn_small btncolorprim btncard move">Add Derbii</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatecommutes" class="btn btn_small btnwhite btnforward btncard move" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatecommutes" class="btn btn_small btnwhite btnback btncard move" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Ref.</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Dir</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'signups'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filtersignups"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filtersignupsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by ID" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><!--<div class="choicebox" style="width:200px;"><div class="choiceboxinner statuschoice" name="Processing">Processing</div><div class="choiceboxinner choiceboxinnerselected statuschoice statuschoiceselected" name="Active">Active</div><div class="choiceboxinner statuschoice" name="Processing">Inactive</div><div class="choiceboxinner statuschoice" name="Processing">Declined</div></div>--><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Active">Active</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Potential">Potential</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Available">Available</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatesignups" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatesignups" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'users'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterusers"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterusersearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyemail" class="dashboardfields dashboardchangefields tiny" name="searchbyemail" placeholder="Search by Email" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><!--<div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected connectchoice" name="facebook">Facebook</div><div class="choiceboxmultiinner choiceboxmultiinnerselected connectchoice" name="google">Google</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected devicechoice" name="iOS">iOS</div><div class="choiceboxmultiinner choiceboxmultiinnerselected devicechoice" name="Android">Android</div></div></td></tr></table></div>--><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateusers" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateusers" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Phone</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Gender</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Email</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'fbadleads'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterfbadleads"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterfbadsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyfbid" class="dashboardfields dashboardchangefields tiny" name="searchbyfbid" placeholder="Search by Fb. Id." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyfbadid" class="dashboardfields dashboardchangefields tiny" name="searchbyfbadid" placeholder="Search by Fb. Ad. Id." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyemail" class="dashboardfields dashboardchangefields tiny" name="searchbyemail" placeholder="Search by Email" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix "><div id="fbadexcelupload" class="dropzone" style="min-height:160px;"><div class="dz-message"><table class="stdtable" style="min-height:160px;"><tr><td valign="center">Click or drop CSV files here to upload</td></tr></table></div><div id="preview-template" class="dz-preview dz-file-preview" style="display:none;"><div class="dz-preview-inner"style="display: block; height:120px; padding:5px 0px; width:260px;"><div class="dz-preview-top" style="height:115px; clear: both; overflow: hidden;"> <div class="dz-preview-top-left" style="position:relative; height:115px; width:115px; margin-right:10px; display:inline-block; overflow: hidden;"><div class="dz-image" style="border-radius: 5px; overflow: hidden; height:115px; width: 115px;"><img data-dz-thumbnail/> </div><div class="dz-details" style="height:75px; width: 95px; padding:20px 10px; position:absolute; top:0px; left:0px; overflow:hidden;"><div class="dz-filename"><span data-dz-name></span></div><div class="dz-size" data-dz-size></div></div></div><div class="dz-preview-top-middle" style="height:115px; width:135px; display:inline-block; overflow: hidden;"><div class="dz-preview-top-middle-top" style="height:65px; width:135px; overflow: hidden;"><input type="button" class="btnsmallborder subbtnbelizeholeborder dz-remove" value="Remove" data-dz-remove></div><div class="dz-preview-top-middle-bottom" style="height:50px; width:135px; overflow: hidden;"></div></div></div><div class="dz-preview-bottom" style="width:260px; height:5px; background:#ffffff;"> <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div></div><div class="dz-success-mark"><span>✔</span> </div><div class="dz-error-mark"><span>✘</span> </div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="uploadsheetbtn" class="btn btn_small btnwhite btncard move" data-type="" name="startupload" disabled>Start upload</button></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatefbads" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatefbads" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Name</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Phone</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes4"><table class="stdtable"><tr><td valign="center">Email</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'ivr'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterivr"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterivrsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyagent" class="dashboardfields dashboardchangefields tiny" name="searchbyagent" placeholder="Search by Agent" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="0">Incoming</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="1">Outgoing</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="excelivrbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateivr" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateivr" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Number</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes18"><table class="stdtable"><tr><td valign="center">Type</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Status/Agent</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes10"><table class="stdtable"><tr><td valign="center">Time</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'derbiis'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterderbiis"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterderbiisearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbytitle" class="dashboardfields dashboardchangefields tiny" name="searchbytitle" placeholder="Search by Title" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><!--<div class="choicebox" style="width:200px;"><div class="choiceboxinner statuschoice" name="Processing">Processing</div><div class="choiceboxinner choiceboxinnerselected statuschoice statuschoiceselected" name="Active">Active</div><div class="choiceboxinner statuschoice" name="Processing">Inactive</div><div class="choiceboxinner statuschoice" name="Processing">Declined</div></div>--><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Active">Active</div><div class="choiceboxmultiinner statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected typechoice" name="Bothways">Both ways</div><div class="choiceboxmultiinner choiceboxmultiinnerselected typechoice" name="Oneway">One way</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choicebox"><div class="choiceboxinner choiceboxinner dayschoice" name="Weekdays">Weekdays</div><div class="choiceboxinner choiceboxinnerselected dayschoice" name="Weekend">Weekend</div></div></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected directionchoice" name="to">Going to office</div><div class="choiceboxmultiinner choiceboxmultiinnerselected  directionchoice" name="back">Coming from office</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="addderbiibtn" class="btn btn_small btncolorprim btncard move">Add Derbii</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginatederbiis" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginatederbiis" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div></div><div class="middle border-box clearfix leftalign"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Reference No.</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes26"><table class="stdtable"><tr><td valign="center">C No.</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Type</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">People</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Pickup</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Drop</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">Status</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'clusters'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterclusters"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterleadsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="filterleadclusterbtn" class="btn btn_small btncolorprim btncard move">Cluster</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldsearchbyadmin" class="dashboardfields dashboardchangefields tiny" name="searchbyadmin" placeholder="Search by Admin" style="width:150px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldclustersize" class="dashboardfields dashboardchangefields tiny" name="clustersize" placeholder="Min Cluster Size" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><input type="text" id="fieldclustersamples" class="dashboardfields dashboardchangefields tiny" name="clustersamples" placeholder="Min Cluster Samples" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatleft"></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Processing">Processing</div><div class="choiceboxmultiinner statuschoice" name="Active">Active</div><div class="choiceboxmultiinner statuschoice" name="Inactive">Inactive</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Declined">Declined</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Potential">Potential</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Available">Available</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="Commute">Commutes</div><div class="choiceboxmultiinner choiceboxmultiinnerselected sourcechoice" name="HelloSignUp">Signups</div></div></td></tr></table></div></div><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NC">No Cat</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Hot">Hot</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Warm">Warm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Lukewarm">Lukewarm</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Cold">Cold</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="NoResp">No Response</div></div></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><div class="choiceboxmulti"><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Male">Male</div><div class="choiceboxmultiinner choiceboxmultiinnerselected genderchoice" name="Female">Female</div></div></td></tr></table></div></div><div class="border-box clearfix "><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimefrom" name="starttimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldstarttimeto" name="starttimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimefrom" name="endtimefrom" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><select class="dashboardfields dashboardchangefields select tiny" id="fieldendtimeto" name="endtimeto" style="width:80px;">' + timeoptions + '</select></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start City</div><div class="choiceboxmulti1" id="choiceboxcitystart"><!--{% for city in city_list %}<div class="choiceboxmulti1inner citystartchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End City</div><div class="choiceboxmulti1" id="choiceboxcityend"><!--{% for city in city_list %}<div class="choiceboxmulti1inner cityendchoice" name="{{city.id}}" data-id="{{city.id}}">{{city.name}}</div>{% endfor %}--></div></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box blackspan65 weight700 floatleft" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">Start SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareastart"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareastartchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div><div class="border-box blackspan65 weight700 floatright" style="width:48%; height:auto;"><table class="stdtable"><tr><td valign="center"><div class="fieldtitle">End SubArea</div><div class="choiceboxmulti1" id="choiceboxsubareaend"><!--{% for area in area_list %}<div class="choiceboxmulti1innertitle">{{area.name}}</div>{% for subarea in area.subarea_set.all %}<div class="choiceboxmulti1inner subareaendchoice" name="{{subarea.id}}" data-id="{{subarea.id}}">{{subarea.name}}</div>{% endfor %}{% endfor %}--></div></td></tr></table></div></div></div><div class="top border-box clearfix leftalign"><div class="border-box clearfix"><div class="blackspan65 weight700 floatleft"><table class="stdtable"><tr><td valign="center"><button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter/Cluster</button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="excelclustersbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button></td></tr></table></div></div><!--<div class="border-box clearfix "><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="forwardbtnpaginateleads" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button></td></tr></table></div><div class="blackspan65 weight700 floatright"><table class="stdtable"><tr><td valign="center"><button id="backbtnpaginateleads" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button></td></tr></table></div></div>--></div><div class="map border-box leftalign"></div><div class="middle border-box clearfix leftalign" style="top:440px;"><div class="border-box blackspan65 weight700 dpmboxes1"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes2"><table class="stdtable"><tr><td valign="center"></td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes17"><table class="stdtable"><tr><td valign="center">ID</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes27"><table class="stdtable"><tr><td valign="center">People</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes12"><table class="stdtable"><tr><td valign="center">Count</td></tr></table></div><div class="border-box blackspan65 weight700 dpmboxes9"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="main border-box leftalign" style="top: 470px;"></div>';
            }else if(selectedtab1.attr('data-type') == 'billing'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterbilling"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbillingsearchbtn" class="btn btn_small btncolorprim btncard move">Search</button> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <div class="choiceboxmulti"> <div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Billed">Billed</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Paid">Paid</div><div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Cleared">Cleared</div></div></td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"> </td></tr></table> </div></div></div><div class="top border-box clearfix leftalign"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addbillingbtn" class="btn btn_small btncolorprim btncard move">Add billing</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addpaymentbtn" class="btn btn_small btncolorprim btncard move">Add payment</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="excelbillingbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button> </td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="forwardbtnpaginatebilling" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="backbtnpaginatebilling" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button> </td></tr></table> </div></div></div><div class="middle border-box clearfix leftalign"> <div class="border-box blackspan65 weight700 dpmboxes1"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes2"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes17"> <table class="stdtable"> <tr> <td valign="center">ID/Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes18"> <table class="stdtable"> <tr> <td valign="center">Name</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Amount</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Month</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Date</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Status</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes9"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'walletupdates'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterwalletupdates"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterwalletupdatessearchbtn" class="btn btn_small btncolorprim btncard move">Search</button> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbytxnid" class="dashboardfields dashboardchangefields tiny" name="searchbytxnid" placeholder="Search by TXN Id" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <div class="choiceboxmulti"> <div class="choiceboxmultiinner choiceboxmultiinnerselected statuschoice" name="Billed">Billed</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Paid">Paid</div><div class="choiceboxmultiinner choiceboxmultiinnerselected bucketchoice" name="Cleared">Cleared</div></div></td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddateto" class="dashboardfields dashboardchangefields tiny" name="dateto" placeholder="End date" readonly="readonly" style="width:100px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fielddatefrom" class="dashboardfields dashboardchangefields tiny" name="datefrom" placeholder="Start date" readonly="readonly" style="width:100px;"> </td></tr></table> </div></div></div><div class="top border-box clearfix leftalign"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addpaymentbtn" class="btn btn_small btncolorprim btncard move">Add payment</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="excelwalletupdatesbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button> </td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="forwardbtnpaginatewalletupdates" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="backbtnpaginatewalletupdates" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button> </td></tr></table> </div></div></div><div class="middle border-box clearfix leftalign"> <div class="border-box blackspan65 weight700 dpmboxes1"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes2"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes17"> <table class="stdtable"> <tr> <td valign="center">ID/Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes18"> <table class="stdtable"> <tr> <td valign="center">Name</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Amount</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Date</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes12"> <table class="stdtable"> <tr> <td valign="center">Balance</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes9"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div></div><div class="main border-box leftalign"></div>';
            }else if(selectedtab1.attr('data-type') == 'wallets'){
                htmlstr += '<div class="filterbox border-box clearfix leftalign card bgwhite filterwallets"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterclosebtn" class="btn btn_small btncolorprim btncard move">Close</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterwalletssearchbtn" class="btn btn_small btncolorprim btncard move">Search</button> </td></tr></table> </div></div><div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyid" class="dashboardfields dashboardchangefields tiny" name="searchbyid" placeholder="Search by Ref. No." style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyname" class="dashboardfields dashboardchangefields tiny" name="searchbyname" placeholder="Search by Name" style="width:150px;"> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <input type="text" id="fieldsearchbyphone" class="dashboardfields dashboardchangefields tiny" name="searchbyphone" placeholder="Search by Phone" style="width:150px;"> </td></tr></table> </div></div></div><div class="top border-box clearfix leftalign"> <div class="border-box clearfix"> <div class="blackspan65 weight700 floatleft"> <table class="stdtable"> <tr> <td valign="center"> <button id="filterbtn" class="btn btn_small btncolorprim btncard move">Filter</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="addpaymentbtn" class="btn btn_small btncolorprim btncard move">Add payment</button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="excelwalletsbtn" class="btn btn_small btnwhite btncard move" data-type="">Get as Excel file</button> </td></tr></table> </div></div><div class="border-box clearfix "> <div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="forwardbtnpaginatewallets" class="btn btn_small btnwhite btncard move btnforward" data-type="normal"><i class="fa fa-chevron-right"></i></button> </td></tr></table> </div><div class="blackspan65 weight700 floatright"> <table class="stdtable"> <tr> <td valign="center"> <button id="backbtnpaginatewallets" class="btn btn_small btnwhite btncard move btnback" data-type="normal"><i class="fa fa-chevron-left"></i></button> </td></tr></table> </div></div></div><div class="middle border-box clearfix leftalign"> <div class="border-box blackspan65 weight700 dpmboxes1"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes2"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes18"> <table class="stdtable"> <tr> <td valign="center">ID</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes3"> <table class="stdtable"> <tr> <td valign="center">Name</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes3"> <table class="stdtable"> <tr> <td valign="center">Amount</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes10"> <table class="stdtable"> <tr> <td valign="center">Type</td></tr></table> </div><div class="border-box blackspan65 weight700 dpmboxes9"> <table class="stdtable"> <tr> <td valign="center"></td></tr></table> </div></div><div class="main border-box leftalign"></div>';
            }

            
            $("#dashboardprime").html(htmlstr);
            primemainaddsonic();

            request=$.post("https://derbii.com/internal/dashboard/selectpage", { 
                        type: $(this).attr('data-type'),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        if(selectedtab1.attr('data-type') == 'leads'){
                            render_leads_main(data);
                        }else if(selectedtab1.attr('data-type') == 'commutes'){
                            render_commutes_main(data);
                        }else if(selectedtab1.attr('data-type') == 'signups'){
                            render_signups_main(data);
                        }else if(selectedtab1.attr('data-type') == 'users'){
                            render_users_main(data);
                        }else if(selectedtab1.attr('data-type') == 'ivr'){
                            render_calls_main(data);
                        }else if(selectedtab1.attr('data-type') == 'fbadleads'){
                            render_fbads_main(data);
                        }else if(selectedtab1.attr('data-type') == 'derbiis'){
                            render_derbiis_main(data);
                        }else if(selectedtab1.attr('data-type') == 'clusters'){
                            render_clusters_main(data);
                        }else if(selectedtab1.attr('data-type') == 'billing'){
                            render_billing_main(data);
                        }else if(selectedtab1.attr('data-type') == 'walletupdates'){
                            render_walletupdates_main(data);
                        }else if(selectedtab1.attr('data-type') == 'wallets'){
                            render_wallets_main(data);
                        }
                        initialize_filters();
                    });
        }
				
				
				
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
		
        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
		$("#dashboardmainright").detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
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




    $(".btnnewrightclose").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        

        $("#dashboardprime > div.main > div.boxes.commutes.selected").removeClass('selected');
        selectedtab = null;
        
        console.log(derbii_adding);rightaddselect();

        derbii_adding = false;
//        $("#sonicbox").html(sonic_blue_black.canvas);
    });

    $("#addderbiibtn").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        var htmlstr = '';
        htmlstr += '<div class="border-box clearfix newheader shadow-box bgwhite1 uppercased shadow-text weight900"><div class="border-box clearfix leftalign left">Adding new Derbii</div><div class="border-box clearfix rightalign right"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnnewrightclose" value="Close"></td></tr></table></div></div><div class="border-box clearfix newmain">Click to add commutes here.</div><div class="border-box clearfix newbuttons"><div class="border-box rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="text" id="fieldderbiititle" class="small" name="title" placeholder="Title" style="width:150px;"></td><td valign="center"><input type="text" id="fieldreverse" class="small" name="reverse" placeholder="Reverse" style="width:150px;"></td><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnderbiisave" value="Save" data-type="save"></td></tr></table></div></div>';

        $("#dashboardprime > div.main > div.boxes.commutes.selected").removeClass('selected');
        selectedtab = null;
        $("#dashboardmainright").html(htmlstr);
        derbii_adding = true;
        $("#dashboardmainright div.newmain").sortable({
            cursor: "move",
            axis: "y",
            update: function( event, ui ) {
                var revert = false;
                $('div.addboxes[data-type="pickup"]').each(function(index, element){
                    var c_id = $(element).attr('data-id');
                    var drop_element = $('.addboxes[data-type="drop"][data-id="'+c_id+'"]');
                    if ($(element).index() >= drop_element.index()){
                        revert = true;
                    }
                });

                if(revert){
                    $("#dashboardmainright div.newmain").sortable('cancel');
                }else{
                    $('div.addboxes').each(function(index, element){
                        $(element).find("span.position").html(index+1);
                    });
                }
            },
        });
//        $("#sonicbox").html(sonic_blue_black.canvas);
    });


    $(".btneditderbii").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        var count = 0;

            var htmlstradd = '';

            /*str += ' data-type="'+node.type+'"';
                        str += ' data-name="'+node.name+'"';
                        str += ' data-commute-code="'+node.commute_code+'"';
                        str += ' data-commute-id="'+node.commute_id+'"';
                        str += ' data-commute-direction="'+node.commute_direction+'"';
                        str += ' data-position="'+node.position+'"';
                        str += ' data-address="'+node.address__address+'"';
                        str += ' data-arrival-time="'+node.arrival_time_f+'"';
                        str += ' data-departure-time="'+node.departure_time_f+'"';
                        str += ' data-start-time="'+node.start_time+'"';
                        str += ' data-end-time="'+node.end_time+'">';*/

            $('#dashboardmainright:not(.active) > div.details div.addboxes').each(function(index, element){
                count += 1;
                htmlstradd += '<div class="border-box clearfix card bgwhite addboxes commutes leftalign" data-type="'+$(element).attr('data-type')+'" data-id="';
                htmlstradd += $(element).attr('data-commute-id');
                htmlstradd += '" data-direction="';
                htmlstradd += $(element).attr('data-commute-direction');
                if($(element).attr('data-type') == 'pickup'){
                    htmlstradd += '"><div class="border-box clearfix shadow-box bggreen leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left"><div class="border-box clearfix leftalign weight600">';
                }else{
                    htmlstradd += '"><div class="border-box clearfix shadow-box bgred leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left"><div class="border-box clearfix leftalign weight600">';
                }
                htmlstradd += $(element).attr('data-name');
                htmlstradd += '</div><div class="border-box clearfix leftalign weight400 code">';
                htmlstradd += $(element).attr('data-commute-code');
                htmlstradd += '</div></div><div class="border-box clearfix rightalign right weight900"><span class="position">';
                htmlstradd += $(element).attr('data-position');
                if($(element).attr('data-type') == 'pickup'){
                    htmlstradd += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign"><div><span class="weight600">Start: </span>';
                }else{
                    htmlstradd += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign"><div><span class="weight600">End: </span>';
                }
                htmlstradd += $(element).attr('data-address');
                htmlstradd += '</div><div><span class="weight600">Timings: </span>';
                htmlstradd += $(element).attr('data-start-time') + ' to ' + $(element).attr('data-end-time');
                htmlstradd += '</div></div><div class="border-box clearfix right rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center">';
                htmlstradd += '<input type="text" class="nodetime tiny" name="nodetime" placeholder="Time" style="width:50px;" value="'+$(element).attr('data-arrival-time')+'">';
                htmlstradd += '</td><td valign="center"><input type="button" class="btn btn_tiny btnwhite btncard move btnaddderbiicommuteremove" value="Remove" data-type="remove" data-id="';
                htmlstradd += $(element).attr('data-commute-id');
                htmlstradd += '"></td></tr></table></div></div>';
                htmlstradd += '</div>';
            });




        
        var htmlstr = '';
        htmlstr += '<div class="border-box clearfix newheader shadow-box bgwhite1 uppercased shadow-text weight900" data-derbii-id="';
        htmlstr += $(this).attr('data-id');
        htmlstr += '"><div class="border-box clearfix leftalign left">Editing Derbii</div><div class="border-box clearfix rightalign right"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnnewrightclose" value="Close"></td></tr></table></div></div><div class="border-box clearfix newmain">';
        if (count > 0){
            htmlstr += htmlstradd;
        }else{
            htmlstr += 'Click to add commutes here.';
        }
        htmlstr += '</div><div class="border-box clearfix newbuttons"><div class="border-box rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input value="'+$(this).attr('data-title')+'" type="text" id="fieldderbiititle" class="small" name="title" placeholder="Title" style="width:150px;"></td><td valign="center"><input value="';
        if($(this).attr('data-direction') == 'back'){
            htmlstr += $(this).attr('data-reverse-code')
        }
        htmlstr += '" type="text" id="fieldreverse" class="small" name="reverse" placeholder="Reverse" style="width:150px;"></td><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btneditderbiisave" value="Save" data-type="save" data-id="'+$(this).attr('data-id')+'"></td></tr></table></div></div>';

        $("#dashboardprime > div.main > div.boxes.derbiis.selected").removeClass('selected');
        $("#dashboardprime > div.main > div.boxes.commutes.selected").removeClass('selected');
        selectedtab = null;
        $("#dashboardmainright").html(htmlstr);
        derbii_adding = true;
        $("#dashboardmainright div.newmain").sortable({
            cursor: "move",
            axis: "y",
            update: function( event, ui ) {
                var revert = false;
                $('div.addboxes[data-type="pickup"]').each(function(index, element){
                    var c_id = $(element).attr('data-id');
                    var drop_element = $('.addboxes[data-type="drop"][data-id="'+c_id+'"]');
                    if ($(element).index() >= drop_element.index()){
                        revert = true;
                    }
                });

                if(revert){
                    $("#dashboardmainright div.newmain").sortable('cancel');
                }else{
                    $('div.addboxes').each(function(index, element){
                        $(element).find("span.position").html(index+1);
                    });
                }
            },
        });
//        $("#sonicbox").html(sonic_blue_black.canvas);
    });



    $(".btncreatereverse").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        var count = 0;

            var htmlstradd = '';

            /*str += ' data-type="'+node.type+'"';
                        str += ' data-name="'+node.name+'"';
                        str += ' data-commute-code="'+node.commute_code+'"';
                        str += ' data-commute-id="'+node.commute_id+'"';
                        str += ' data-commute-direction="'+node.commute_direction+'"';
                        str += ' data-position="'+node.position+'"';
                        str += ' data-address="'+node.address__address+'"';
                        str += ' data-arrival-time="'+node.arrival_time_f+'"';
                        str += ' data-departure-time="'+node.departure_time_f+'"';
                        str += ' data-start-time="'+node.start_time+'"';
                        str += ' data-end-time="'+node.end_time+'">';*/

            $($('#dashboardmainright:not(.active) > div.details div.addboxes').get().reverse()).each(function(index, element){
                var position = $('#dashboardmainright:not(.active) > div.details div.addboxes').size() - $(element).attr('data-position') + 1;
                var node_type = ($(element).attr('data-type') == 'pickup') ? 'drop' : 'pickup';
                var direction = ($(element).attr('data-commute-direction') == 'to_office') ? 'from_office' : 'to_office';

                count += 1;
                htmlstradd += '<div class="border-box clearfix card bgwhite addboxes commutes leftalign" data-type="'+node_type+'" data-id="';
                htmlstradd += $(element).attr('data-commute-id');
                htmlstradd += '" data-direction="';
                htmlstradd += direction;
                if(node_type == 'pickup'){
                    htmlstradd += '"><div class="border-box clearfix shadow-box bggreen leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left"><div class="border-box clearfix leftalign weight600">';
                }else{
                    htmlstradd += '"><div class="border-box clearfix shadow-box bgred leftalign title weight500 uppercased shadow-text whitespan"><div class="border-box clearfix left"><div class="border-box clearfix leftalign weight600">';
                }
                htmlstradd += $(element).attr('data-name');
                htmlstradd += '</div><div class="border-box clearfix leftalign weight400 code">';
                htmlstradd += $(element).attr('data-commute-code');
                htmlstradd += '</div></div><div class="border-box clearfix rightalign right weight900"><span class="position">';
                htmlstradd += position;
                if($(element).attr('data-type') == 'pickup'){
                    htmlstradd += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign"><div><span class="weight600">Start: </span>';
                }else{
                    htmlstradd += '</span></div></div><div class="border-box clearfix leftalign details blackspan9"><div class="border-box clearfix left leftalign"><div><span class="weight600">End: </span>';
                }
                htmlstradd += $(element).attr('data-address');
                htmlstradd += '</div><div><span class="weight600">Timings: </span>';
                htmlstradd += $(element).attr('data-end-time') + ' to ' + $(element).attr('data-start-time');
                htmlstradd += '</div></div><div class="border-box clearfix right rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center">';
                htmlstradd += '<input type="text" class="nodetime tiny" name="nodetime" placeholder="Time" style="width:50px;"';
                if (node_type == 'pickup'){
                    htmlstradd += ' value="'+$(element).attr('data-end-time')+'"';
                }
                htmlstradd += '>';
                htmlstradd += '</td><td valign="center"><input type="button" class="btn btn_tiny btnwhite btncard move btnaddderbiicommuteremove" value="Remove" data-type="remove" data-id="';
                htmlstradd += $(element).attr('data-commute-id');
                htmlstradd += '"></td></tr></table></div></div>';
                htmlstradd += '</div>';
            });




        
        var htmlstr = '';
        htmlstr += '<div class="border-box clearfix newheader shadow-box bgwhite1 uppercased shadow-text weight900" data-derbii-id="';
        htmlstr += $(this).attr('data-id');
        htmlstr += '"><div class="border-box clearfix leftalign left">Editing Derbii</div><div class="border-box clearfix rightalign right"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnnewrightclose" value="Close"></td></tr></table></div></div><div class="border-box clearfix newmain">';
        if (count > 0){
            htmlstr += htmlstradd;
        }else{
            htmlstr += 'Click to add commutes here.';
        }
        htmlstr += '</div><div class="border-box clearfix newbuttons"><div class="border-box rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input value="'+$(this).attr('data-title')+'" type="text" id="fieldderbiititle" class="small" name="title" placeholder="Title" style="width:150px;"></td><td valign="center"><input value="'+$(this).attr('data-code')+'" type="text" id="fieldreverse" class="small" name="reverse" placeholder="Reverse" style="width:150px;"></td><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnderbiisave" value="Save" data-type="save"></td></tr></table></div></div>';

        $("#dashboardprime > div.main > div.boxes.derbiis.selected").removeClass('selected');
        $("#dashboardprime > div.main > div.boxes.commutes.selected").removeClass('selected');
        selectedtab = null;
        $("#dashboardmainright").html(htmlstr);
        derbii_adding = true;
        $("#dashboardmainright div.newmain").sortable({
            cursor: "move",
            axis: "y",
            update: function( event, ui ) {
                var revert = false;
                $('div.addboxes[data-type="pickup"]').each(function(index, element){
                    var c_id = $(element).attr('data-id');
                    var drop_element = $('.addboxes[data-type="drop"][data-id="'+c_id+'"]');
                    if ($(element).index() >= drop_element.index()){
                        revert = true;
                    }
                });

                if(revert){
                    $("#dashboardmainright div.newmain").sortable('cancel');
                }else{
                    $('div.addboxes').each(function(index, element){
                        $(element).find("span.position").html(index+1);
                    });
                }
            },
        });
//        $("#sonicbox").html(sonic_blue_black.canvas);
    });


    $(".btnaddderbiicommuteremove").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        var tab = $('#dashboardprime > div.main > div.boxes.commutes.selected[data-id="'+$(this).attr('data-id')+'"]');

        if(selectedtab == tab){
            selectedtab = null;
        }
        tab.removeClass('selected');
        $('#dashboardmainright div.addboxes.commutes[data-id="'+$(this).attr('data-id')+'"]').remove();

        
        if ($("#dashboardmainright div.newmain").find(".addboxes").length > 0){ 
            $('div.addboxes').each(function(index, element){
                $(element).find("span.position").html(index+1);
            });
        }else{
            $("#dashboardmainright div.newmain").html('Click to add commutes here.');
        }
//        $("#sonicbox").html(sonic_blue_black.canvas);
    });








	
	
	
	$("#addcommutebtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
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
		request_right=$.post("https://derbii.com/internal/dashboard/addcommute", { 
						type: 'yes',
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainrightactual").html('').append(data);
					});
	});

/*	$("#addderbiibtn").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
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
		request_right=$.post("https://derbii.com/internal/dashboard/addderbii", { 
						type: 'yes',
					},
					function(data) {
						$("#dashboardmainrightactual").html('').append(data);
					});
	});*/
/*
	$(".btneditderbii").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
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
		request_right=$.post("https://derbii.com/internal/dashboard/editderbii", { 
						type: 'yes',
						id: $(this).attr('data-id'),
					},
					function(data) {
						$("#dashboardmainrightactual").html('').append(data);
					});
	});
*/
	
	

    $(".btnupdatebalance").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        rightaddsonic();
        
/*                  request=$.post("https://derbii.com/internal/dashboard/leadchange", { 
                        type: $(this).attr('data-type'),
                        id: $(this).attr('data-id'),
                    },
                    function(data) {
//                      if (data.status == "success"){
                            
//                      }else{
                            
//                      }
                        $("#dashboardmainright").html('').html(data);
                        autocomplete_initiate();
                    });*/

            var that = $("#dashboardprime > div.main > div.boxes.leads.selected");

            var htmlstr = '';
            
            htmlstr += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Update balance</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">'+$(this).attr('data-name')+'</div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input value="" type="text" id="fieldupdatebalance" class="small" name="updatebalance" placeholder="New balance" style="width:200px;">';
            htmlstr += '</td></tr></table><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input data-profile-id="'+$(this).attr('data-id')+'" type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="buttonupdatebalance">';
            htmlstr += '</td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonback"></td></tr></table></div></div>';

            $("#dashboardmainright").html('').html(htmlstr);
//            autocomplete_initiate();
    });

    $("#buttonupdatebalance").live('click', function(){
        
        var that1=$(this);

        var balance = $('#fieldupdatebalance').val();
        
                request=$.post("https://derbii.com/internal/dashboard/walletupdatebalance_save", { 
                                id: that1.attr('data-profile-id'),
                                balance: balance,
                            },
                            function(data) {
                                if (data.status == "success"){
                                    var that = $("#dashboardprime > div.main > div.boxes.user.selected");
//                                    that.attr('data-title', title);
                                    if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                                }else{
                                    alert(data['status']);
                                }
                            });
    });



    $(".btneditderbiititle").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        rightaddsonic();
        
/*                  request=$.post("https://derbii.com/internal/dashboard/leadchange", { 
                        type: $(this).attr('data-type'),
                        id: $(this).attr('data-id'),
                    },
                    function(data) {
//                      if (data.status == "success"){
                            
//                      }else{
                            
//                      }
                        $("#dashboardmainright").html('').html(data);
                        autocomplete_initiate();
                    });*/

            var that = $("#dashboardprime > div.main > div.boxes.leads.selected");

            var htmlstr = '';
            
            htmlstr += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Edit title</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">'+$(this).attr('data-code')+'</div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input value="'+$(this).attr('data-title')+'" type="text" id="fieldderbiititle" class="small" name="title" placeholder="Title" style="width:150px;">';
            htmlstr += '</td></tr></table><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input data-derbii-id="'+$(this).attr('data-id')+'" type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="buttoneditderbiititle">';
            htmlstr += '</td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonback"></td></tr></table></div></div>';

            $("#dashboardmainright").html('').html(htmlstr);
//            autocomplete_initiate();
    });

    $("#buttoneditderbiititle").live('click', function(){
        
        var that1=$(this);

        var title = $('#fieldderbiititle').val();
        
                request=$.post("https://derbii.com/internal/dashboard/derbiititle_save", { 
                                id: that1.attr('data-derbii-id'),
                                title: title,
                            },
                            function(data) {
                                if (data.status == "success"){
                                    var that = $("#dashboardprime > div.main > div.boxes.derbii.selected");
                                    that.attr('data-title', title);
                                    if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                                }else{
                                    alert(data['status']);
                                }
                            });
    });



	$(".btnleadcomments").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
/*					request=$.post("https://derbii.com/internal/dashboard/leadchange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
//						if (data.status == "success"){
							
//						}else{
							
//						}
						$("#dashboardmainright").html('').html(data);
						autocomplete_initiate();
					});*/

            var that = $("#dashboardprime > div.main > div.boxes.leads.selected");

            var htmlstr = '';
            htmlstr += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Comments</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div><div class="border-box clearfix prime blackspan4 leftalign weight700"></div>';
			htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500">';
            htmlstr += '<table class="stdtable" style="text-align:left;"><tr><td valign="center"><p class="8rem">Seats</p><input class="small" type="text" id="fieldcommentsseats" name="commentsseats" placeholder="Seats" value="';
            htmlstr += that.attr('data-seats');
            htmlstr += '"></td><td valign="center"></td></tr><tr><td valign="center"><p class="8rem">Start zone</p><input class="small" type="text" id="fieldcommentsstartzone" name="commentsstartzone" placeholder="Start zone" value="';
            if (that.attr('data-start-zone') != 'None'){
                htmlstr += that.attr('data-start-zone');
            }
            htmlstr += '"/></td><td valign="center"><p class="8rem">End zone</p><input class="small" type="text" id="fieldcommentsendzone" name="commentsendzone" placeholder="End zone" value="';
            if (that.attr('data-end-zone') != 'None'){
                htmlstr += that.attr('data-end-zone');
            }
            htmlstr += '" /></td></tr><tr><td valign="center"><p class="8rem">Start address</p><textarea class="small" id="fieldcommentsstartaddress" name="commentsstartaddress" placeholder="Start address">';
            if (that.attr('data-start-address') != 'None'){
                htmlstr += that.attr('data-start-address');
            }
            htmlstr += '</textarea></td><td valign="center"><p class="8rem">End address</p><textarea class="small" id="fieldcommentsendaddress" name="commentsendaddress" placeholder="End address">';
            if (that.attr('data-end-address') != 'None'){
                htmlstr += that.attr('data-end-address');
            }
            htmlstr += '</textarea></td></tr><tr><td valign="center"><p class="8rem">Remarks 1</p><textarea class="small" id="fieldcommentsremarks1" name="commentsremarks1" placeholder="Remarks 1">';
            if (that.attr('data-remarks1') != 'None'){
                htmlstr += that.attr('data-remarks1');
            }
            htmlstr += '</textarea></td><td valign="center"><p class="8rem">Remarks 2</p><textarea class="small" id="fieldcommentsremarks2" name="commentsremarks2" placeholder="Remarks 2">';
            if (that.attr('data-remarks2') != 'None'){
                htmlstr += that.attr('data-remarks2');
            }
            htmlstr += '</textarea></td></tr></table></div><div class="border-box blackspan9 weight500"><table class="stdtable" style="text-align:left;"><tr><td valign="center"><button id="buttonleadcommentssave" class="btn btn_small btnwhite btncard move" data-type="na" data-lead-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '">Save</button></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
            autocomplete_initiate();
	});

	$("#buttonleadcommentssave").live('click', function(){
		
		var that1=$(this);

        var start_zone = $('#fieldcommentsstartzone').val();
        var end_zone = $('#fieldcommentsendzone').val();
        var start_address = $('#fieldcommentsstartaddress').val();
        var end_address = $('#fieldcommentsendaddress').val();
        var seats = $('#fieldcommentsseats').val();
        var remarks1 = $('#fieldcommentsremarks1').val();
        var remarks2 = $('#fieldcommentsremarks2').val();
		
				request=$.post("https://derbii.com/internal/dashboard/leadcomments_save", { 
								id: that1.attr('data-lead-id'),
								seats: $('#fieldcommentsseats').val(),
								start_zone: $('#fieldcommentsstartzone').val(),
								end_zone: $('#fieldcommentsendzone').val(),
								start_address: $('#fieldcommentsstartaddress').val(),
								end_address: $('#fieldcommentsendaddress').val(),
								remarks1: $('#fieldcommentsremarks1').val(),
								remarks2: $('#fieldcommentsremarks2').val(),
							},
							function(data) {
								if (data.status == "success"){
									var that = $("#dashboardprime > div.main > div.boxes.leads.selected");
                                    that.attr('data-start-zone', start_zone);
                                    that.attr('data-end-zone', end_zone);
                                    that.attr('data-seats', seats);
                                    that.attr('data-remarks1', remarks1);
                                    that.attr('data-remarks2', remarks2);
                                    that.attr('data-start-address', start_address);
                                    that.attr('data-end-address', end_address);
                                    if(!derbii_adding){console.log(derbii_adding);rightaddlead(that);}
								}else{
									alert(data['status']);
								}
							});
	});



	



	$(".btnbucket").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();

        var that1 = $(this);
		
					request=$.post("https://derbii.com/internal/dashboard/leadbucket", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
//						$("#dashboardmainright").html('').html(data);

                        var that = $("#dashboardprime > div.main > div.boxes.leads.selected");

                        

                        if(that1.attr('data-type') == 'Hot'){
                            that.find('table.colorprim500span').css({'color': '#19d623'});
                            that.attr('data-bucket', 'Hot');
                            that.attr('data-bucket-color', '#19d623');
                            
                        }else if(that1.attr('data-type') == 'Warm'){
                            that.find('table.colorprim500span').css({'color': '#ffee00'});
                            that.attr('data-bucket', 'Warm');
                            that.attr('data-bucket-color', '#ffee00');
                            
                        }else if(that1.attr('data-type') == 'Lukewarm'){
                            that.find('table.colorprim500span').css({'color': '#ff9400'});
                            that.attr('data-bucket', 'Lukewarm');
                            that.attr('data-bucket-color', '#ff9400');
                            
                        }else if(that1.attr('data-type') == 'Cold'){
                            that.find('table.colorprim500span').css({'color': '#ff0000'});
                            that.attr('data-bucket', 'Cold');
                            that.attr('data-bucket-color', '#ff0000');
                            
                        }else if(that1.attr('data-type') == 'NoResp'){
                            that.find('table.colorprim500span').css({'color': '#00faff'});
                            that.attr('data-bucket', 'NoResp');
                            that.attr('data-bucket-color', '#00faff');
                            
                        }else if(that1.attr('data-type') == 'NC'){
                            that.find('table.colorprim500span').css({'color': '#ff00ff'});
                            that.attr('data-bucket', 'NC');
                            that.attr('data-bucket-color', '#ff00ff');
                            
                        }

                        if(!derbii_adding){console.log(derbii_adding);rightaddlead(that);}
					});
				
	});
	
	
	
	
	$(".btndetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});

	$(".btnundetail").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
						$("#dashboardmainright").html('').html(data);
					});
*/
            var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Undetail</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-zone') + ' <span class="weight300">to</span> ' + that.attr('data-end-zone') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to undetail cab and driver?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonundetail" data-derbii-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonderbiiback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);				
	});




	$(".btneditprice").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
					request=$.post("https://derbii.com/internal/dashboard/commutechange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});


    $("#buttoncommuteback").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
        $("#sonicbox").html(sonic_blue_black.canvas);
        
                    var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");
                    if(!derbii_adding){console.log(derbii_adding);rightaddcommute(that);}
    });

    $("#buttonderbiiback").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
        $("#sonicbox").html(sonic_blue_black.canvas);
        
                    request=$.post("https://derbii.com/internal/dashboard/derbiis/selectderbii", { 
                        id: $('#dashboardprime > div.main > div.boxes.derbiis.selected').attr('data-id'),
                    },
                    function(data) {
                        rightaddderbiisame(data);
                    });
    });

    $("#buttonsignupback").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
        $("#sonicbox").html(sonic_blue_black.canvas);
        
                    var that = $("#dashboardprime > div.main > div.boxes.signups.selected");
                    if(!derbii_adding){console.log(derbii_adding);rightaddsignup(that);}
    });


	$(".btndecline").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();

/*		
					request=$.post("https://derbii.com/internal/dashboard/commutechange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
//						if (data.status == "success"){
							
//						}else{
							
//						}
						$("#dashboardmainright").html('').html(data);
					});*/

            var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Decline</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-subarea') + ' <span class="weight300">to</span> ' + that.attr('data-end-subarea') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to set the Commute as Declined?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
			htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttondecline" data-commute-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttoncommuteback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
	});

	$(".btnavailable").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/commutechange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
//						if (data.status == "success"){
							
//						}else{
							
//						}
						$("#dashboardmainright").html('').html(data);
					});*/

            var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Available</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-subarea') + ' <span class="weight300">to</span> ' + that.attr('data-end-subarea') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to set the Commute as Available?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonavailable" data-commute-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttoncommuteback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
	});

	$(".btnpotential").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/commutechange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
//						if (data.status == "success"){
							
//						}else{
							
//						}
						$("#dashboardmainright").html('').html(data);
					});*/

            var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Potential</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-subarea') + ' <span class="weight300">to</span> ' + that.attr('data-end-subarea') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to set the Commute as Potential?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonpotential" data-commute-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttoncommuteback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
				
	});







	$(".btnsignupdecline").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/signupchange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
//						if (data.status == "success"){
							
//						}else{
							
//						}
						$("#dashboardmainright").html('').html(data);
					});*/

            var that = $("#dashboardprime > div.main > div.boxes.signups.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Decline</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-subarea') + ' <span class="weight300">to</span> ' + that.attr('data-end-subarea') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to set the SignUp as Declined?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonsignupdecline" data-signup-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonsignupback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
				
	});

	$(".btnsignupavailable").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/signupchange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
//						if (data.status == "success"){
							
//						}else{
							
//						}
						$("#dashboardmainright").html('').html(data);
					});*/

            var that = $("#dashboardprime > div.main > div.boxes.signups.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Available</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-subarea') + ' <span class="weight300">to</span> ' + that.attr('data-end-subarea') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to set the SignUp as Available?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonsignupavailable" data-signup-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonsignupback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
				
	});

	$(".btnsignuppotential").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/signupchange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
//						if (data.status == "success"){
							
//						}else{
							
//						}
						$("#dashboardmainright").html('').html(data);
					});*/

            var that = $("#dashboardprime > div.main > div.boxes.signups.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Potential</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-subarea') + ' <span class="weight300">to</span> ' + that.attr('data-end-subarea') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to set the SignUp as Potential?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonsignuppotential" data-signup-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonsignupback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
				
	});






	$(".btnsendnrnotif").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
					request=$.post("https://derbii.com/internal/dashboard/leadsendnrnotif", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
						if (data.status == "success"){
                            var that = $("#dashboardprime > div.main > div.boxes.leads.selected");
                            if(!derbii_adding){console.log(derbii_adding);rightaddlead(that);}							
						}else{
							
						}
//						$("#dashboardmainright").html('').html(data);
					});
				
	});

	$(".btnsendnanotif").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
					request=$.post("https://derbii.com/internal/dashboard/leadsendnanotif", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
						if (data.status == "success"){
						    var that = $("#dashboardprime > div.main > div.boxes.leads.selected");
                            if(!derbii_adding){console.log(derbii_adding);rightaddlead(that);}
						}else{
							
						}
						//$("#dashboardmainright").html('').html(data);
					});
				
	});




	$(".btnprocess").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
						$("#dashboardmainright").html('').html(data);
					});
*/
            var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Set processing</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-zone') + ' <span class="weight300">to</span> ' + that.attr('data-end-zone') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to set the Derbii as Processing?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonprocess" data-derbii-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonderbiiback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);				
	});


	$(".btnactivate").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
/*					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
						$("#dashboardmainright").html('').html(data);
					});
*/

            var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Activation</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-zone') + ' <span class="weight300">to</span> ' + that.attr('data-end-zone') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to activate the Derbii?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonactivate" data-derbii-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonderbiiback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);				
	});

	$(".btndeactivate").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {

						$("#dashboardmainright").html('').html(data);
					});
*/
            var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Deactivation</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-zone') + ' <span class="weight300">to</span> ' + that.attr('data-end-zone') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to deactivate the Derbii?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttondeactivate" data-derbii-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonderbiiback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
								}else{
									alert(data['status']);
								}
							});
	});




	$(".btnattach").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});

	$(".btndetach").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
						$("#dashboardmainright").html('').html(data);
					});
*/				
            var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Detachment</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-zone') + ' <span class="weight300">to</span> ' + that.attr('data-end-zone') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to detach cab and driver?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttondetach" data-derbii-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonderbiiback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);
	});

	$(".btnassign").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				
	});

	$(".btnunassign").live('click', function(){
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		rightaddsonic();
/*		
					request=$.post("https://derbii.com/internal/dashboard/derbiichange", { 
						type: $(this).attr('data-type'),
						id: $(this).attr('data-id'),
					},
					function(data) {
						$("#dashboardmainright").html('').html(data);
					});
*/
            var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

            var htmlstr = '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center">Unassignment</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
            htmlstr += '<div class="border-box clearfix prime1 blackspan4 leftalign weight700">';
            htmlstr += that.attr('data-start-zone') + ' <span class="weight300">to</span> ' + that.attr('data-end-zone') + '</div>';
            htmlstr += '<div class="border-box clearfix name1 blackspan65 leftalign weight500"><span class="colorprimlight500span">Are you sure you want to unassign vendor?</span></div>';
            htmlstr += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable" style="width:auto; text-align:left;"><tr><td valign="center">';
            htmlstr += '<input type="button" class="btn btn_small btnwhite btncard move" value="Yes" id="';
            htmlstr += 'buttonunassign" data-derbii-id="';
            htmlstr += that.attr('data-id');
            htmlstr += '"></td><td valign="center"><input type="button" class="btn btn_small btnwhite btncard move" value="No" id="buttonderbiiback"></td></tr></table></div></div>';
            $("#dashboardmainright").html('').html(htmlstr);				
	});

	
	

	

	

	


	$("#buttonresetprice").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/commuteresetprice", { 
								id: that.attr('data-commute-id'),
							},
							function(data) {
								if (data.status == "success"){
									var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");
                                    if(!derbii_adding){console.log(derbii_adding);rightaddcommute(that);}
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttoneditprice").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/commuteeditprice", { 
								id: that.attr('data-commute-id'),
								price: $('#price').val(),
							},
							function(data) {
								if (data.status == "success"){
                                    var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");
									if(!derbii_adding){console.log(derbii_adding);rightaddcommute(that);}
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttondecline").live('click', function(){
		
		var that1=$(this);
		
				request=$.post("https://derbii.com/internal/dashboard/commutedecline", { 
								id: that1.attr('data-commute-id'),
							},
							function(data) {
								if (data.status == "success"){
									

                                    var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");

            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }
            that.attr('data-status', 'Declined');
                                    if(!derbii_adding){console.log(derbii_adding);rightaddcommute(that);}
								}else{
									alert(data['status']);
								}
							});

            
	});

	$("#buttonpotential").live('click', function(){
		
		var that1=$(this);
		
				request=$.post("https://derbii.com/internal/dashboard/commutepotential", { 
								id: that1.attr('data-commute-id'),
							},
							function(data) {
								if (data.status == "success"){
									

                                    var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");


            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Declined'){
                that.find('table.colorcommutedeclinedspan').removeClass('colorcommutedeclinedspan').addClass('colorcommutepotentialspan');
            }
            that.attr('data-status', 'Potential');
                                    if(!derbii_adding){console.log(derbii_adding);rightaddcommute(that);}
								}else{
									alert(data['status']);
								}
							});


            
	});

	$("#buttonavailable").live('click', function(){
		
		var that1=$(this);
		
				request=$.post("https://derbii.com/internal/dashboard/commuteavailable", { 
								id: that1.attr('data-commute-id'),
							},
							function(data) {
								if (data.status == "success"){
									

                                    var that = $("#dashboardprime > div.main > div.boxes.commutes.selected");

            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Declined'){
                that.find('table.colorcommutedeclinedspan').removeClass('colorcommutedeclinedspan').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommuteavailablespan');
            }
            that.attr('data-status', 'Available');
                                    if(!derbii_adding){console.log(derbii_adding);rightaddcommute(that);}
								}else{
									alert(data['status']);
								}
							});

            


	});







	$("#buttonsignupdecline").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/signupdecline", { 
								id: that.attr('data-signup-id'),
							},
							function(data) {
								if (data.status == "success"){

                                    var that = $("#dashboardprime > div.main > div.boxes.signups.selected");

            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }
            that.attr('data-status', 'Declined');           
                                    if(!derbii_adding){console.log(derbii_adding);rightaddsignup(that);}
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonsignuppotential").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/signuppotential", { 
								id: that.attr('data-signup-id'),
							},
							function(data) {
								if (data.status == "success"){
									

                                    var that = $("#dashboardprime > div.main > div.boxes.signups.selected");

            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutepotentialspan');
            }else if(that.attr('data-status') == 'Declined'){
                that.find('table.colorcommutedeclinedspan').removeClass('colorcommutedeclinedspan').addClass('colorcommutepotentialspan');
            }
            that.attr('data-status', 'Potential');
                                    if(!derbii_adding){console.log(derbii_adding);rightaddsignup(that);}
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonsignupavailable").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/signupavailable", { 
								id: that.attr('data-signup-id'),
							},
							function(data) {
								if (data.status == "success"){
									

                                    var that = $("#dashboardprime > div.main > div.boxes.signups.selected");

            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Declined'){
                that.find('table.colorcommutedeclinedspan').removeClass('colorcommutedeclinedspan').addClass('colorcommuteavailablespan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommuteavailablespan');
            }
            that.attr('data-status', 'Available');
								    if(!derbii_adding){console.log(derbii_adding);rightaddsignup(that);}
                                }else{
									alert(data['status']);
								}
							});
	});









	$("#buttonprocess").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiiprocess", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

                                    var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

/*            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }*/
            that.attr('data-status', 'Processing');
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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

                                    var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

/*            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }*/
            that.attr('data-status', 'Active');
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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

                                    var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

/*            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }*/
            that.attr('data-status', 'Inactive');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonassign").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiiassign", { 
								id: that.attr('data-derbii-id'),
								operator_id: $('option:selected', $('#operator')).val(),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonunassign").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiiunassign", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

                                    var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

/*            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }*/
//            that.attr('data-status', 'Active');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonattach").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiiattach", { 
								id: that.attr('data-derbii-id'),
								operator_id: $('option:selected', $('#operator')).val(),
								vehiclemodel_id: $('option:selected', $('#vehiclemodel')).val(),
								drivername: $('#drivername').val(),
								driverphone: $('#driverphone').val(),
								vehiclenumber: $('#vehiclenumber').val(),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttondetach").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiidetach", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

                                    var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

/*            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }*/
//            that.attr('data-status', 'Active');
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttondetail").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiidetail", { 
								id: that.attr('data-derbii-id'),
								operator_id: $('option:selected', $('#operator')).val(),
								vehiclemodel_id: $('option:selected', $('#vehiclemodel')).val(),
								drivername: $('#drivername').val(),
								driverphone: $('#driverphone').val(),
								vehiclenumber: $('#vehiclenumber').val(),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
								}else{
									alert(data['status']);
								}
							});
	});

	$("#buttonundetail").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/derbiiundetail", { 
								id: that.attr('data-derbii-id'),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

                                    var that = $("#dashboardprime > div.main > div.boxes.derbiis.selected");

/*            if(that.attr('data-status') == 'Processing'){
                that.find('table.colorsec500span').removeClass('colorsec500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Active'){
                that.find('table.colorprim500span').removeClass('colorprim500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Inactive'){
                that.find('table.colortert500span').removeClass('colortert500span').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Available'){
                that.find('table.colorcommuteavailablespan').removeClass('colorcommuteavailablespan').addClass('colorcommutedeclinedspan');
            }else if(that.attr('data-status') == 'Potential'){
                that.find('table.colorcommutepotentialspan').removeClass('colorcommutepotentialspan').addClass('colorcommutedeclinedspan');
            }*/
//            that.attr('data-status', 'Active');
								}else{
									alert(data['status']);
								}
							});
	});


	


	$(".btnderbiisave").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);

			
				var values_list = new Array();

                var prev_pickup_time = null;

				$('.addboxes[data-type="pickup"]').each(function(index, element){
                    var c_id = $(element).attr('data-id');
                    var drop_element = $('.addboxes[data-type="drop"][data-id="'+c_id+'"]');

                    if (index == 0){
                        if ($.trim($(element).find('.nodetime').val()) == ''){
                            alert("Error");
                            return;
                        }else{
                            prev_pickup_time = $.trim($(element).find('.nodetime').val());
                        }
                    }else{
                        if ($.trim($(element).find('.nodetime').val()) == ''){
                            var hms = prev_pickup_time.split(':');
                            var hour = hms[0];
                            var minute = hms[1];
                            var date = new Date();
                            date.setHours(hour);
                            date.setMinutes(minute);
                            date.setMinutes(date.getMinutes()+10);
                            new_hour = date.getHours();
                            new_minute = date.getMinutes();
                            if (new_hour < 10){
                                new_hour = "0"+new_hour;
                            }
                            if (new_minute < 10){
                                new_minute = "0"+new_minute;
                            }
                            $(element).find('.nodetime').val(new_hour+":"+new_minute);
                        }
                        prev_pickup_time = $.trim($(element).find('.nodetime').val());
                    }

					var obj = {commute_id: $(element).find("div.code").html(), pickuppos: $(element).find("span.position").html(), 
                                    droppos: drop_element.find("span.position").html(), 
                                    pickuptime: $(element).find('.nodetime').val(), 
                                    droptime: drop_element.find('.nodetime').val(), 
                                    direction: $(element).attr('data-direction')};
                    values_list.push(obj);
				});

				var commutes = values_list;
				var reverse = $("#fieldreverse").val();
                var title = $("#fieldderbiititle").val();
//                var reverse = '';
                console.log(values_list);
//				var gender = $("input[type='radio'][name='employeegender']:checked");
				
				
				if ( commutes.length != 0){
//                if (false){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							that.attr('disabled', 'disabled');
							that.val('SAVING');
							request=$.post("https://derbii.com/internal/dashboard/addderbii_save", { 
								commutes: JSON.stringify(commutes),
								reverse: reverse,
                                title: title,
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
                                    console.log(derbii_adding);rightaddselect();
									
		                            $("#dashboardprime > div.main > div.boxes.commutes.selected").removeClass('selected');
                                    selectedtab = null;
                                    
                                    console.log(derbii_adding);rightaddselect();

                                    derbii_adding = false;
								}else{
									if(data.reason == "no_reverse_derbii"){
										alert('No reverse Derbii');				
									}
									if(data.reason == "no_commute"){
										alert('No commute');				
									}
									that.removeAttr('disabled');
									that.val('SAVE');
								}
							});
							
					}
				else{
					if (commutes.length == 0){
						alert('Please enter commutes');
					}
				}
	});


    $(".btneditderbiisave").live('click', function(){
        
        var that;
        var that1=$(this);
        if($(".formerrors").offset()){$(".formerrors").remove();}
//      $(".accountmaincenterlowererror").hide();
            that=$(this);

            
                var values_list = new Array();

                var prev_pickup_time = null;

                $('.addboxes[data-type="pickup"]').each(function(index, element){
                    var c_id = $(element).attr('data-id');
                    var drop_element = $('.addboxes[data-type="drop"][data-id="'+c_id+'"]');

                    if (index == 0){
                        if ($.trim($(element).find('.nodetime').val()) == ''){
                            alert("Error");
                            return;
                        }else{
                            prev_pickup_time = $.trim($(element).find('.nodetime').val());
                        }
                    }else{
                        if ($.trim($(element).find('.nodetime').val()) == ''){
                            var hms = prev_pickup_time.split(':');
                            var hour = hms[0];
                            var minute = hms[1];
                            var date = new Date();
                            date.setHours(hour);
                            date.setMinutes(minute);
                            date.setMinutes(date.getMinutes()+10);
                            new_hour = date.getHours();
                            new_minute = date.getMinutes();
                            if (new_hour < 10){
                                new_hour = "0"+new_hour;
                            }
                            if (new_minute < 10){
                                new_minute = "0"+new_minute;
                            }
                            $(element).find('.nodetime').val(new_hour+":"+new_minute);
                        }
                        prev_pickup_time = $.trim($(element).find('.nodetime').val());
                    }

                    var obj = {commute_id: $(element).find("div.code").html(), pickuppos: $(element).find("span.position").html(), 
                                    droppos: drop_element.find("span.position").html(), 
                                    pickuptime: $(element).find('.nodetime').val(), 
                                    droptime: drop_element.find('.nodetime').val(), 
                                    direction: $(element).attr('data-direction')};
                    values_list.push(obj);
                });

                var commutes = values_list;
                var reverse = $("#fieldreverse").val();
                var title = $("#fieldderbiititle").val();
//                var reverse = '';
                console.log(values_list);
//              var gender = $("input[type='radio'][name='employeegender']:checked");
                
                
                if ( commutes.length != 0){
//                if (false){
//                  var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//                  History.pushState('','',url)
                            that.attr('disabled', 'disabled');
                            that.val('SAVING');
                            request=$.post("https://derbii.com/internal/dashboard/editderbii_save", { 
                                commutes: JSON.stringify(commutes),
                                reverse: reverse,
                                title: title,
                                derbii_id: that.attr('data-id'),
                            },
                            function(data) {
                                if (data.status == "success"){
//                                  window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//                                  if(request_right){request_right.abort();}
                                    that.val('SAVED');
                                    console.log(derbii_adding);rightaddselect();
                                    
                                    $("#dashboardprime > div.main > div.boxes.commutes.selected").removeClass('selected');
                                    selectedtab = null;
                                    
                                    console.log(derbii_adding);rightaddselect();

                                    derbii_adding = false;
                                }else{
                                    if(data.reason == "no_reverse_derbii"){
                                        alert('No reverse Derbii');             
                                    }
                                    if(data.reason == "no_commute"){
                                        alert('No commute');                
                                    }
                                    that.removeAttr('disabled');
                                    that.val('SAVE');
                                }
                            });
                            
                    }
                else{
                    if (commutes.length == 0){
                        alert('Please enter commutes');
                    }
                }
    });


	$("#editderbiisavebtn").live('click', function(){
		
		var that;
		var that1=$(this);
		if($(".formerrors").offset()){$(".formerrors").remove();}
//		$(".accountmaincenterlowererror").hide();
			that=$(this);

			
				var values_list = new Array();

				$(".bookingcommuteboxes").each(function(index, element){
					if($(element).find("#fieldcommuteid").val() == ''){
//						return false;
					}else{
						var obj = {commute_id: $(element).find("#fieldcommuteid").val(), pickuppos: $(element).find("#fieldpickuppos").val(), 
									droppos: $(element).find("#fielddroppos").val(), pickuptime: $.trim($(element).find("#fieldpickuptime").val()), 
									droptime: $.trim($(element).find("#fielddroptime").val()), 
									direction: $.trim($('option:selected', $(element).find("#fielddirection")).val())};
						values_list.push(obj);
					}
				});

				var commutes = values_list;
				var reverse = $("#fieldreverse").val();
				var derbii_id = that.attr('data-id');
//				var gender = $("input[type='radio'][name='employeegender']:checked");
				
				
				if ( commutes.length != 0){
//					var url='/dashboard/book/corporate/outstation/?destination='+$('option:selected', $('#fieldoutstationdestination')).val()+'&pickup='+$('#fieldoutstationpickup').val()+'&date='+$('#fieldoutstationdate').val()+'&time='+$('option:selected', $('#fieldoutstationtime')).val()
//					History.pushState('','',url)
							that.attr('disabled', 'disabled');
							that.val('SAVING');
							request=$.post("https://derbii.com/internal/dashboard/editderbii_save", { 
								commutes: JSON.stringify(commutes),
								reverse: reverse,
								derbii_id: derbii_id,
							},
							function(data) {
								if (data.status == "success"){
//									window.location.replace("https://winwincab.com/dashboard/book/corporate/outstation/finish/?booking_id="+data['booking_id']);
//									if(request_right){request_right.abort();}
									that.val('SAVED');
                                    console.log(derbii_adding);rightaddselect();
									$("#dashboardmainright").detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
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
									if(data.reason == "no_derbii"){
										alert('No Derbii');				
									}
									if(data.reason == "no_commute"){
										alert('No commute');				
									}
									that.removeAttr('disabled');
									that.val('SAVE');
								}
							});
							
					}
				else{
					if (commutes.length == 0){
						alert('Please enter commutes');
					}
				}
	});


	






	$('#forwardbtnpaginateusers').live('click', function(){
		
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/users", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_users_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var email = $("#fieldsearchbyemail");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/users", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						genders: JSON.stringify(genders),
						ref: id.val(),
						name: name.val(),
						phone: phone.val(),
						email: email.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_users_main(data);
					});	
	}

		
	});

	$('#backbtnpaginateusers').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/users", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_users_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var email = $("#fieldsearchbyemail");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/users", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						genders: JSON.stringify(genders),
						ref: id.val(),
						name: name.val(),
						phone: phone.val(),
						email: email.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_users_main(data);
					});
	}

		
	});









	

	$('#forwardbtnpaginatesignups').live('click', function(){
		
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						statuses: JSON.stringify(statuses),
						genders: JSON.stringify(genders),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups_main(data);
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
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						statuses: JSON.stringify(statuses),
						genders: JSON.stringify(genders),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups_main(data);
					});
	}

		
	});



	$('#forwardbtnpaginatesignups1').live('click', function(){
		
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups1", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups1_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
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
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups1_main(data);
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
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups1", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups1_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
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
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_signups1_main(data);
					});
	}

		
	});







	$('#forwardbtnpaginatecommutes').live('click', function(){
		
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_commutes_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var days = '';
		
		if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
			days = days + 'MTuWThF';
		}
		if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
			days = days + 'MTuWThFSa';
		}
		
		

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var directions = [];
		$('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
   			 directions.push($(this).attr('name'));
		});
		

        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						days: days,
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						statuses: JSON.stringify(statuses),
						genders: JSON.stringify(genders),
						directions: JSON.stringify(directions),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_commutes_main(data);
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
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_commutes_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var days = '';
		
		if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
			days = days + 'MTuWThF';
		}
		if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
			days = days + 'MTuWThFSa';
		}
		
		

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var directions = [];
		$('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
   			 directions.push($(this).attr('name'));
		});
		

        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						days: days,
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						statuses: JSON.stringify(statuses),
						genders: JSON.stringify(genders),
						directions: JSON.stringify(directions),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_commutes_main(data);
					});
	}

		
	});






    $('#forwardbtnpaginatederbiis').live('click', function(){
        
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/derbiis", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_derbiis_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();

        var days = '';
        
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
            days = days + 'MTuWThF';
        }
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
            days = days + 'MTuWThFSa';
        }
        
        

        var cities_start = [];
        $('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
             cities_start.push($(this).attr('name'));
        });
        

        var cities_end = [];
        $('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
             cities_end.push($(this).attr('name'));
        });
        

        var subareas_start = [];
        $('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
             subareas_start.push($(this).attr('name'));
        });
        

        var subareas_end = [];
        $('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
             subareas_end.push($(this).attr('name'));
        });
        

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

/*        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });*/

        var derbii_types = [];
        $('.choiceboxmultiinnerselected.typechoice').each(function(i, obj) {
             derbii_types.push($(this).attr('name'));
        });
        

        var directions = [];
        $('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
             directions.push($(this).attr('name'));
        });

        console.log(directions);
        

//        var admin = $("#fieldsearchbyadmin");
        
        var id = $("#fieldsearchbyid");
        var title = $("#fieldsearchbytitle");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
//        var starttimefrom = $("#fieldstarttimefrom");
//        var starttimeto = $("#fieldstarttimeto");
//        var endtimefrom = $("#fieldendtimefrom");
//        var endtimeto = $("#fieldendtimeto");
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/derbiis", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
                        days: days,
                        cities_start: JSON.stringify(cities_start),
                        cities_end: JSON.stringify(cities_end),
                        subareas_start: JSON.stringify(subareas_start),
                        subareas_end: JSON.stringify(subareas_end),
                        statuses: JSON.stringify(statuses),
//                        genders: JSON.stringify(genders),
                        derbii_types: JSON.stringify(derbii_types),
                        directions: JSON.stringify(directions),
                        ref: id.val(),
                        title: title.val(),
//                        admin: admin.val(),
                        name: name.val(),
                        phone: phone.val(),
//                        starttimefrom: $('option:selected', starttimefrom).val(),
//                        starttimeto: $('option:selected', starttimeto).val(),
//                        endtimefrom: $('option:selected', endtimefrom).val(),
//                        endtimeto: $('option:selected', endtimeto).val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_derbiis_main(data);
                    }); 
    }

        
    });

    $('#backbtnpaginatederbiis').live('click', function(){
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/derbiis", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_derbiis_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();

        var days = '';
        
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekdays'){
            days = days + 'MTuWThF';
        }
        if ($('.choiceboxinnerselected.dayschoice').attr('name') == 'Weekend'){
            days = days + 'MTuWThFSa';
        }
        
        

        var cities_start = [];
        $('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
             cities_start.push($(this).attr('name'));
        });
        

        var cities_end = [];
        $('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
             cities_end.push($(this).attr('name'));
        });
        

        var subareas_start = [];
        $('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
             subareas_start.push($(this).attr('name'));
        });
        

        var subareas_end = [];
        $('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
             subareas_end.push($(this).attr('name'));
        });
        

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

/*        var genders = [];
        $('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
             genders.push($(this).attr('name'));
        });*/

        var derbii_types = [];
        $('.choiceboxmultiinnerselected.typechoice').each(function(i, obj) {
             derbii_types.push($(this).attr('name'));
        });
        

        var directions = [];
        $('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
             directions.push($(this).attr('name'));
        });

        console.log(directions);
        

//        var admin = $("#fieldsearchbyadmin");
        
        var id = $("#fieldsearchbyid");
        var title = $("#fieldsearchbytitle");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
//        var starttimefrom = $("#fieldstarttimefrom");
//        var starttimeto = $("#fieldstarttimeto");
//        var endtimefrom = $("#fieldendtimefrom");
//        var endtimeto = $("#fieldendtimeto");
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/derbiis", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
                        days: days,
                        cities_start: JSON.stringify(cities_start),
                        cities_end: JSON.stringify(cities_end),
                        subareas_start: JSON.stringify(subareas_start),
                        subareas_end: JSON.stringify(subareas_end),
                        statuses: JSON.stringify(statuses),
//                        genders: JSON.stringify(genders),
                        derbii_types: JSON.stringify(derbii_types),
                        directions: JSON.stringify(directions),
                        ref: id.val(),
                        title: title.val(),
//                        admin: admin.val(),
                        name: name.val(),
                        phone: phone.val(),
//                        starttimefrom: $('option:selected', starttimefrom).val(),
//                        starttimeto: $('option:selected', starttimeto).val(),
//                        endtimefrom: $('option:selected', endtimefrom).val(),
//                        endtimeto: $('option:selected', endtimeto).val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_derbiis_main(data);
                    });
    }

        
    });










    $('#forwardbtnpaginatewallets').live('click', function(){
        
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/wallets", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_wallets_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
/*
        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });*/
        

        

        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/wallets", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
//                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_wallets_main(data);
                    }); 
    }

        
    });

    $('#backbtnpaginatewallets').live('click', function(){
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/wallets", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_wallets_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
/*
        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });*/
        

        

        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/wallets", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
//                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_wallets_main(data);
                    });
    }

        
    });





    $('#forwardbtnpaginatewalletupdates').live('click', function(){
        
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/walletupdates", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_walletupdates_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

        

        var id = $("#fieldsearchbyid");
        var txnid = $("#fieldsearchbytxnid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/walletupdates", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        txnid: txnid.val(),
                        name: name.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_walletupdates_main(data);
                    }); 
    }

        
    });

    $('#backbtnpaginatewalletupdates').live('click', function(){
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/walletupdates", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_walletupdates_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

        

        var id = $("#fieldsearchbyid");
        var txnid = $("#fieldsearchbytxnid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/walletupdates", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        txnid: txnid.val(),
                        name: name.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_walletupdates_main(data);
                    });
    }

        
    });

    



    $('#forwardbtnpaginatebilling').live('click', function(){
        
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/billing", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_billing_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

        

        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/leads", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'forward',
                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_billing_main(data);
                    }); 
    }

        
    });

    $('#backbtnpaginatebilling').live('click', function(){
        var datatype = $("#paginatedataholder").attr('data-paginate-type');
        var start = $("#paginatedataholder").attr('data-paginatestart');
        var end = $("#paginatedataholder").attr('data-paginateend');
        that = $(this);
        if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();
        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/billing", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_billing_main(data);
                    }); 
    }else{
        if(request_paginate){request_paginate.abort();}
        primemainaddsonic();

        var statuses = [];
        $('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
             statuses.push($(this).attr('name'));
        });
        

        

        var id = $("#fieldsearchbyid");
        
        var name = $("#fieldsearchbyname");
        
        var phone = $("#fieldsearchbyphone");
        
        
        var datefrom = $("#fielddatefrom");
        var dateto = $("#fielddateto");

        request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/billing", { 
                        datatype: datatype,
                        start: start,
                        end: end,
                        direction: 'back',
                        statuses: JSON.stringify(statuses),
                        ref: id.val(),
                        name: name.val(),
                        phone: phone.val(),
                        datefrom: datefrom.val(),
                        dateto: dateto.val(),
                    },
                    function(data) {
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_billing_main(data);
                    });
    }

        
    });







	$('#forwardbtnpaginateleads').live('click', function(){
		
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/leads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        console.log(data);
                        render_leads_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var buckets = [];
		$('.choiceboxmultiinnerselected.bucketchoice').each(function(i, obj) {
   			 buckets.push($(this).attr('name'));
		});
		

		var sources = [];
		$('.choiceboxmultiinnerselected.sourcechoice').each(function(i, obj) {
   			 sources.push($(this).attr('name'));
		});
		

		var directions = [];
		$('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
   			 directions.push($(this).attr('name'));
		});
		


        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var nrcount = $("#fieldsearchbynrcount");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/leads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						genders: JSON.stringify(genders),
						buckets: JSON.stringify(buckets),
						sources: JSON.stringify(sources),
						directions: JSON.stringify(directions),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						nrcount: nrcount.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_leads_main(data);
					});	
	}

		
	});

	$('#backbtnpaginateleads').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/leads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_leads_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var cities_start = [];
		$('.choiceboxmulti1innerselected.citystartchoice').each(function(i, obj) {
   			 cities_start.push($(this).attr('name'));
		});
		

		var cities_end = [];
		$('.choiceboxmulti1innerselected.cityendchoice').each(function(i, obj) {
   			 cities_end.push($(this).attr('name'));
		});
		

		var subareas_start = [];
		$('.choiceboxmulti1innerselected.subareastartchoice').each(function(i, obj) {
   			 subareas_start.push($(this).attr('name'));
		});
		

		var subareas_end = [];
		$('.choiceboxmulti1innerselected.subareaendchoice').each(function(i, obj) {
   			 subareas_end.push($(this).attr('name'));
		});
		

		var genders = [];
		$('.choiceboxmultiinnerselected.genderchoice').each(function(i, obj) {
   			 genders.push($(this).attr('name'));
		});
		

		var buckets = [];
		$('.choiceboxmultiinnerselected.bucketchoice').each(function(i, obj) {
   			 buckets.push($(this).attr('name'));
		});
		

		var sources = [];
		$('.choiceboxmultiinnerselected.sourcechoice').each(function(i, obj) {
   			 sources.push($(this).attr('name'));
		});
		

		var directions = [];
		$('.choiceboxmultiinnerselected.directionchoice').each(function(i, obj) {
   			 directions.push($(this).attr('name'));
		});
		


        var admin = $("#fieldsearchbyadmin");
        
		var id = $("#fieldsearchbyid");
		
		var name = $("#fieldsearchbyname");
		
		var phone = $("#fieldsearchbyphone");
		
		var nrcount = $("#fieldsearchbynrcount");
		
		var starttimefrom = $("#fieldstarttimefrom");
		var starttimeto = $("#fieldstarttimeto");
		var endtimefrom = $("#fieldendtimefrom");
		var endtimeto = $("#fieldendtimeto");
		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/leads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						cities_start: JSON.stringify(cities_start),
						cities_end: JSON.stringify(cities_end),
						subareas_start: JSON.stringify(subareas_start),
						subareas_end: JSON.stringify(subareas_end),
						genders: JSON.stringify(genders),
						buckets: JSON.stringify(buckets),
						sources: JSON.stringify(sources),
						directions: JSON.stringify(directions),
						ref: id.val(),
                        admin: admin.val(),
						name: name.val(),
						phone: phone.val(),
						nrcount: nrcount.val(),
						starttimefrom: $('option:selected', starttimefrom).val(),
						starttimeto: $('option:selected', starttimeto).val(),
						endtimefrom: $('option:selected', endtimefrom).val(),
						endtimeto: $('option:selected', endtimeto).val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_leads_main(data);
					});
	}

		
	});




	$('#forwardbtnpaginateivr').live('click', function(){
		
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/calls", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_calls_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		
		var id = $("#fieldsearchbyid");
		
		var agent = $("#fieldsearchbyagent");
		
		var phone = $("#fieldsearchbyphone");
		

		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/calls", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						statuses: JSON.stringify(statuses),
						ref: id.val(),
						agent: agent.val(),
						phone: phone.val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_calls_main(data);
					});	
	}

		
	});

	$('#backbtnpaginateivr').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/calls", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_calls_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var statuses = [];
		$('.choiceboxmultiinnerselected.statuschoice').each(function(i, obj) {
   			 statuses.push($(this).attr('name'));
		});
		

		
		var id = $("#fieldsearchbyid");
		
		var agent = $("#fieldsearchbyagent");
		
		var phone = $("#fieldsearchbyphone");
		

		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/calls", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						statuses: JSON.stringify(statuses),
						ref: id.val(),
						agent: agent.val(),
						phone: phone.val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_calls_main(data);
					});
	}

		
	});







	$('#forwardbtnpaginatefbads').live('click', function(){
		
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/fbads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_fbads_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var fbid = $("#fieldsearchbyfbid");
		
		var fbadid = $("#fieldsearchbyfbadid");
		
		var email = $("#fieldsearchbyemail");
		
		var phone = $("#fieldsearchbyphone");
		

		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/fbads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'forward',
						fbid: fbid.val(),
						fbadid: fbadid.val(),
						email: email.val(),
						phone: phone.val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_fbads_main(data);
					});	
	}

		
	});

	$('#backbtnpaginatefbads').live('click', function(){
		var datatype = $("#paginatedataholder").attr('data-paginate-type');
		var start = $("#paginatedataholder").attr('data-paginatestart');
		var end = $("#paginatedataholder").attr('data-paginateend');
		that = $(this);
		if ($("#paginatedataholder").attr('data-paginate-type') == 'normal'){
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/fbads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_fbads_main(data);
					});	
	}else{
		if(request_paginate){request_paginate.abort();}
		primemainaddsonic();

		var fbid = $("#fieldsearchbyfbid");
		
		var fbadid = $("#fieldsearchbyfbadid");
		
		var email = $("#fieldsearchbyemail");
		
		var phone = $("#fieldsearchbyphone");
		

		var datefrom = $("#fielddatefrom");
		var dateto = $("#fielddateto");

		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/search/fbads", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
						fbid: fbid.val(),
						fbadid: fbadid.val(),
						email: email.val(),
						phone: phone.val(),
						datefrom: datefrom.val(),
						dateto: dateto.val(),
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						console.log(data);
                        render_fbads_main(data);
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
		$(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
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

		$(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
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

		$(".imageoverlayboxmain").html('').html('<table class="stdtable centersonic"><tr><td valign="center" id="sonicbox"></td></tr></table>');
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