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






$(document).ready(function(){

zone_options = JSON.parse($("#dashboardmainmiddle").attr('data-zones'));
city_options = JSON.parse($("#dashboardmainmiddle").attr('data-cities'));
area_options = JSON.parse($("#dashboardmainmiddle").attr('data-areas'));

var clusters = [];

sonic_blue_black.play();

var selectedtab, selectedtab1 = $(".tabs.selected"), request_right;

var dashboardmainrightwidth = $("#dashboardmainright").width();


	function loadinitial(){
		
		if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
		if($(".formerrors").offset()){$(".formerrors").remove();}
		
            primeaddsonic();
                
                
            
            request=$.post("https://derbii.com/internal/dashboard/selectpage", { 
                        type: selectedtab1.attr('data-type'),
                    },
                    function(data) {
                        if(!derbii_adding){rightaddselect();}
                        $("#dashboardprime").html('').html(data);

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
                        $('#dashboardprime > div.main').html('').html(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
    });




    $("#filtercommutesearchbtn").live('click', function(){
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
                        $('#dashboardprime > div.main').html('').html(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
    });




    $("#filtersignupsearchbtn").live('click', function(){
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
                        $('#dashboardprime > div.main').html('').html(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
    });


    
    $("#filterusersearchbtn").live('click', function(){
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
                        $('#dashboardprime > div.main').html('').html(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}

        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
    });



    $("#filterivrsearchbtn").live('click', function(){
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
                        $('#dashboardprime > div.main').html('').html(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
        });
    });

    

    $("#filterfbadsearchbtn").live('click', function(){
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
                        $('#dashboardprime > div.main').html('').html(data);
                    });

        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $(".filterbox").removeClass('active').stop().animate({
            top: '-620px'
        }, 300, "easeOutQuart", function(){
                
//          $('html, body').stop().scrollTop(0);
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
						$("#dashboardmainright").html('').html(data);
					});
                }else{
                    var color = '';
                    if($(this).attr('data-agent-number') == 'Call Missed'){
                        color = 'colortert500span';
                    }else{
                        color = 'colorprim500span';
                    }

                    var str = '';
                    
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + $(this).attr('data-customer-number') + '</div>';
                    
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="' + color + '" style="text-transform:none;">'; 
                    if($(this).attr('data-call-type') == '0'){
                        str += "Incoming";
                    }
                    if($(this).attr('data-call-type') == '1'){
                        str += "Outgoing";
                    }
                    str += '</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Call Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Ad Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+$(this).attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status/Agent</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+$(this).attr('data-agent-number');
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+$(this).attr('data-startdate')+" "+$(this).attr('data-starttime');
                    str += '</span></td></tr></table></div></div>';
                    str += '</div></div></div>';
                    $("#dashboardmainright").html('').html(str);
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
                        $("#dashboardmainright").html('').html(data);
                    });
                }else{
                    var color = '';
                    if($(this).attr('data-status') == 'Processing'){
                        color = 'colorsec500span';
                    }
                    if($(this).attr('data-status') == 'Primed'){
                        color = 'colorprim500span';
                    }
                    if($(this).attr('data-status') == 'Detailed'){
                        color = 'blackspan4';
                    }

                    var str = '';
                    str += '<div class="border-box clearfix header"><div class="blackspan9"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Created on</span> ';
                    str += $(this).attr('data-posteddate')+ ' '+$(this).attr('data-postedtime');
                    str += '</td></tr></table></div><div class="blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div></div>';
                    
                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + $(this).attr('data-name') + '</div>';
                    
                    str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span class="' + color + '" style="text-transform:none;">' + $(this).attr('data-phone') + '</span></div>';

                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Ad Lead Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Ad Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+$(this).attr('data-id');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+$(this).attr('data-status');
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">FB Ad ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="';
                    str += color+'">'+$(this).attr('data-fb-ad-id');
                    str += '</span></td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-name');
                    str += '</td></tr></table></div></div>';

                    str += '<div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Email</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-email');
                    str += '</td></tr></table></div></div>';


                    str += '</div></div></div>';
                    $("#dashboardmainright").html('').html(str);
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
						$("#dashboardmainright").html('').html(data);
					});
				}else{
					var str = '';
					str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
					str += '<div class="border-box blackspan9 weight500 rightalign">';
						str += '<table class="stdtable"><tr><td valign="center">';
						if($(this).attr('data-status') != 'Declined'){
							str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignupdecline" value="Decline" data-type="decline" data-id="'+$(this).attr('data-id')+'">';
						}
						if($(this).attr('data-status') != 'Potential'){
							str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignuppotential" value="Potential" data-type="potential" data-id="'+$(this).attr('data-id')+'">';
						}
						if($(this).attr('data-status') != 'Available'){
							str += '<input type="button" class="btn btn_small btnwhite btncard move btnsignupavailable" value="Available" data-type="available" data-id="'+$(this).attr('data-id')+'">';
						}
						str += '</td></tr></table>';
					str += '</div></div>';
					str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + $(this).attr('data-start-subarea') + ' <span class="weight300">to</span> '+ $(this).attr('data-end-subarea') + '</div>';
					str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span style="text-transform:none;">';
					str += $(this).attr('data-status');
					str += '</span></div>;';
					str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Signup Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Signup ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-id');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-status');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start subarea</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-start-subarea');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End subarea</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-end-subarea');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-start-time');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-end-time');
					str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-name');
					str += '</td></tr></table></div></div></div></div></div>';
					$("#dashboardmainright").html('').html(str);
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
						$("#dashboardmainright").html('').html(data);
					});
				}else{
					var str = '';
					str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">';
					str += $(this).attr('data-name');
					str += '</div><div class="border-box clearfix name blackspan65 leftalign weight500"><span style="text-transform:none;">';
					str += $(this).attr('data-email');
					str += '</span></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Profile ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-id');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Phone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-phone');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Gender</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-gender');
					str += '</td></tr></table></div></div></div></div></div>';
					$("#dashboardmainright").html('').html(str);
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
					request=$.post("https://derbii.com/internal/dashboard/commutes/selectlead", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
				}else{
					var str = '';
					str += '<div class="border-box clearfix buttons">';
					str += '<div class="border-box blackspan9 weight500">';
					if(true){
						str += '<table class="stdtable"><tr><td valign="center">';
						if(true){
							str += '<button class="btn btn_small btncolorprim btncard move btnleadcomments" data-type="comments" data-id="'+$(this).attr('data-id')+'">Comments</button>';
							str += '</td><td valign="center">'
						}
						if(true){
							str += '<button class="btn btn_small btnwhite btncard move btnsendnrnotif" data-type="nr" data-id="'+$(this).attr('data-id')+'">Send NR Notif</button>';
							str += '</td><td valign="center">'
						}
						if(true){
							str += '<button class="btn btn_small btnwhite btncard move btnsendnanotif" data-type="na" data-id="'+$(this).attr('data-id')+'">Not available</button>';
						}
						str += '</td></tr></table>';
					}
					str += '</div>';

					str += '<div class="border-box blackspan9 weight500 rightalign">';
					if(true){
						str += '<table class="stdtable"><tr>';
						if($(this).attr('data-bucket') != 'Hot'){
							str += '<td valign="center">';
							str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Hot" data-id="'+$(this).attr('data-id')+'" style="color:#19d623;">Hot</button>';
							str += '</td>';
						}
						if($(this).attr('data-bucket') != 'Warm'){
							str += '<td valign="center">';
							str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Warm" data-id="'+$(this).attr('data-id')+'" style="color:#ffee00;">Warm</button>';
							str += '</td>';
						}
						if($(this).attr('data-bucket') != 'Lukewarm'){
							str += '<td valign="center">';
							str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Lukewarm" data-id="'+$(this).attr('data-id')+'" style="color:#ff9400;">Lukewarm</button>';
							str += '</td>';
						}
						if($(this).attr('data-bucket') != 'Cold'){
							str += '<td valign="center">';
							str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="Cold" data-id="'+$(this).attr('data-id')+'" style="color:#ff0000;">Cold</button>';
							str += '</td>';
						}
						if($(this).attr('data-bucket') != 'NoResp'){
							str += '<td valign="center">';
							str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="NoResp" data-id="'+$(this).attr('data-id')+'" style="color:#00faff;">No response</button>';
							str += '</td>';
						}
						if($(this).attr('data-bucket') != 'NC'){
							str += '<td valign="center">';
							str += '<button class="btn btn_small btnwhite btncard move btnbucket" data-type="NC" data-id="'+$(this).attr('data-id')+'" style="color:#ff00ff;">No Cat</button>';
							str += '</td>';
						}
						str += '</tr></table>';
					}

					str += '</div></div>';

					str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + $(this).attr('data-start-subarea') + ' <span class="weight300">to</span> '+ $(this).attr('data-end-subarea') + '</div>';
					str += '<div class="border-box clearfix name blackspan65 leftalign weight500"><span style="color:'+$(this).attr('data-bucket-color')+'" style="text-transform:none;">'+$(this).attr('data-phone')+'</span></div>';

					str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Lead Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Lead ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
					str += $(this).attr('data-id');
					str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Bucket</span></td></tr></table></div><div class="border-box inner"><table class="stdtable" style="color:'+$(this).attr('data-bucket-color')+'"><tr><td valign="center">';
					str += $(this).attr('data-bucket');
					if($(this).attr('data-nr-count') != "None"){
						str +=  " "+$(this).attr('data-nr-count');
					}
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Source</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-source');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-start-time');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-end-time');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-name');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-start-zone');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End zone</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-end-zone');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Seats</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-seats');

					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-start-address');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-end-address');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Remarks 1</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-remarks1');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Remarks 2</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-remarks2');

					str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-name');
					str += '</td></tr></table></div></div></div></div></div>';
					$("#dashboardmainright").html('').html(str);
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
						$("#dashboardmainright").html('').html(data);
					});
				}else{
					var str = '';
					str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500"><table class="stdtable"><tr><td valign="center"></td></tr></table></div>';
					str += '<div class="border-box blackspan9 weight500 rightalign">';
					if($(this).attr('data-status') != 'Active'){
						str += '<table class="stdtable"><tr><td valign="center">';
						if($(this).attr('data-status') != 'Declined'){
							str += '<input type="button" class="btn btn_small btnwhite btncard move btndecline" value="Decline" data-type="decline" data-id="'+$(this).attr('data-id')+'">';
						}
						if($(this).attr('data-status') != 'Potential'){
							str += '<input type="button" class="btn btn_small btnwhite btncard move btnpotential" value="Potential" data-type="potential" data-id="'+$(this).attr('data-id')+'">';
						}
						if($(this).attr('data-status') != 'Available'){
							str += '<input type="button" class="btn btn_small btnwhite btncard move btnavailable" value="Available" data-type="available" data-id="'+$(this).attr('data-id')+'">';
						}
						str += '</td></tr></table>';
					}
					str += '</div></div>';
					str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">' + $(this).attr('data-start-subarea') + ' <span class="weight300">to</span> '+ $(this).attr('data-end-subarea') + '</div>';
					str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Commute Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Commute ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span>';
					str += $(this).attr('data-code');
					str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-status');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-start-address');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">End address</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-end-address');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Start time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-start-time');
					str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Return time</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-end-time');
					str += '</td></tr></table></div></div></div></div></div><div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Person Details</div><div class="border-box clearfix"><div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Name</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
					str += $(this).attr('data-name');
					str += '</td></tr></table></div></div></div></div></div>';
					$("#dashboardmainright").html('').html(str);
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

				if(same){
					request=$.post("https://derbii.com/internal/dashboard/derbiis/selectderbii", { 
						id: $(this).attr('data-id'),
					},
					function(data) {
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
					});
                }else{
                    var str = '';
                    str += '<div class="border-box clearfix buttons"><div class="border-box blackspan9 weight500">';
                    if ($(this).attr('data-status') != 'Inactive'){
                        str += '<table class="stdtable"><tr><td valign="center"><button class="btn btn_small btncolorprim btncard move btneditderbii" data-type="edit" data-id="'+$(this).attr('data-id')+'">Edit</button></td><td valign="center"><button class="btn btn_small btnwhite btncard move btndeactivate" data-type="deactivate" data-id="'+$(this).attr('data-id')+'" style="color:#FC6B58;">Deactivate</button></td>';
                        if ($(this).attr('data-status') != 'Processing'){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnprocess" data-type="process" data-id="'+$(this).attr('data-id')+'">Set processing</button></td>';
                        }
                        if ($(this).attr('data-status') != 'Active'){
                            str += '<td valign="center"><button class="btn btn_small btnwhite btncard move btnactivate" data-type="activate" data-id="'+$(this).attr('data-id')+'">Activate</button></td>';
                        }
                        str += '</tr></table>';
//                        '+$(this).attr('data-id')+'
                    }
                    str += '</div><div class="border-box blackspan9 weight500 rightalign">';
                    str += '</div><div class="border-box blackspan9 weight500 rightalign">';
                    str += '</div></div>';

                    str += '<div class="border-box clearfix prime blackspan4 leftalign weight700">';
                    str += $(this).attr('data-start-zone') + ' <span class="weight300">to</span> ' + $(this).attr('data-end-zone') + '</div>';
                    
                    str += '<div class="border-box clearfix details blackspan65 leftalign weight300"><div class="border-box clearfix blackspan56 leftalign weight500">Derbii Details</div><div class="border-box clearfix"><div class=""><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Derbii ID</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span class="colorprimlight500span">';
                    str += $(this).attr('data-code');
                    str += '</span></td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Commutes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-commutes-count');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Nodes</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    console.log($(this).attr('data-nodes'));
                    var nodes = JSON.parse($(this).attr('data-nodes'));

                    str += nodes.length;
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">People</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-commutes');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Direction</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    str += $(this).attr('data-direction');
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Status</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center">';
                    if ($(this).attr('data-status') == 'Active'){
                        str += '<span class="colorprim500span">';
                    }
                    if ($(this).attr('data-status') == 'Inactive'){
                        str += '<span class="colortert500span">';
                    }
                    str += $(this).attr('data-status');
                    if ($(this).attr('data-status') == 'Active' || $(this).attr('data-status') == 'Inactive'){
                        str += '</span>';
                    }
                    str += '</td></tr></table></div></div><div class="border-box clearfix"><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">Days</span></td></tr></table></div><div class="border-box inner"><table class="stdtable"><tr><td valign="center"><span style="text-transform:none;">';
                    str += $(this).attr('data-days') + '</span>';
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
            window.location.replace("https://derbii.com/internal/dashboard/maps");
        }else if(selectedtab1.attr('data-type') == "chat"){
        	window.location.replace("https://derbii.com/internal/dashboard/chat");
        }else{
            primeaddsonic();
            if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                
                
                    request=$.post("https://derbii.com/internal/dashboard/selectpage", { 
                        type: $(this).attr('data-type'),
                    },
                    function(data) {
/*                      if (data.status == "success"){
                            
                        }else{
                            
                        }*/
                        if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
                        $("#dashboardprime").html('').html(data);

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
        htmlstr += '<div class="border-box clearfix newheader shadow-box bgwhite1 uppercased shadow-text weight900"><div class="border-box clearfix leftalign left">Adding new Derbii</div><div class="border-box clearfix rightalign right"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnnewrightclose" value="Close"></td></tr></table></div></div><div class="border-box clearfix newmain">Click to add commutes here.</div><div class="border-box clearfix newbuttons"><div class="border-box rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnderbiisave" value="Save" data-type="save"></td></tr></table></div></div>';

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
        
        var htmlstr = '';
        htmlstr += '<div class="border-box clearfix newheader shadow-box bgwhite1 uppercased shadow-text weight900" data-derbii-id="';
        htmlstr += $(this).attr('data-id');
        htmlstr += '"><div class="border-box clearfix leftalign left">Editing Derbii</div><div class="border-box clearfix rightalign right"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnnewrightclose" value="Close"></td></tr></table></div></div><div class="border-box clearfix newmain">Click to add commutes here.</div><div class="border-box clearfix newbuttons"><div class="border-box rightalign"><table class="stdtable" style="text-align:right;"><tr><td valign="center"><input type="button" class="btn btn_small btncolorprim btncard move btnderbiisave" value="Save" data-type="save"></td></tr></table></div></div>';

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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

                                    var that = $("#dashboardprime > div.main > div.boxes.leads.selected");
                                    that.attr('data-start-zone', start_zone);
                                    that.attr('data-end-zone', end_zone);
                                    that.attr('data-seats', seats);
                                    that.attr('data-remarks1', remarks1);
                                    that.attr('data-remarks2', remarks2);
                                    that.attr('data-start-address', start_address);
                                    that.attr('data-end-address', end_address);
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
						$("#dashboardmainright").html('').html(data);

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
        
                    request=$.post("https://derbii.com/internal/dashboard/commutes/selectcommute", { 
                        id: $('#dashboardprime > div.main > div.boxes.commutes.selected').attr('data-id'),
                    },
                    function(data) {
                        $("#dashboardmainright").html('').html(data);
                    });
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
                        $("#dashboardmainright").html('').html(data);
                    });
    });

    $("#buttonsignupback").live('click', function(){
        if($(".fullcalendardropdown").offset()){$(".fullcalendardropdown").remove();}
        if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
        
        $("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center" id="sonicbox"></td></tr></table>');
        $("#sonicbox").html(sonic_blue_black.canvas);
        
                    request=$.post("https://derbii.com/internal/dashboard/signups/selectsignup", { 
                        id: $('#dashboardprime > div.main > div.boxes.signups.selected').attr('data-id'),
                    },
                    function(data) {

                        $("#dashboardmainright").html('').html(data);
                    });
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
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
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
/*						if (data.status == "success"){
							
						}else{
							
						}*/
						$("#dashboardmainright").html('').html(data);
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

	$(".btnshuttledetail").live('click', function(){
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
	
	

	

	

	


	$("#buttonresetprice").live('click', function(){
		
		var that;
		var that1=$(this);
		that=$(this);
				request=$.post("https://derbii.com/internal/dashboard/commuteresetprice", { 
								id: that.attr('data-commute-id'),
							},
							function(data) {
								if (data.status == "success"){
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

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
									if(!derbii_adding){console.log(derbii_adding);rightaddselect();}

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
//				var reverse = $("#fieldreverse").val();
                var reverse = '';
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/signups1", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
		primemainaddsonic();
		request_paginate=$.post("https://derbii.com/internal/dashboard/paginate/commutes", { 
						datatype: datatype,
						start: start,
						end: end,
						direction: 'back',
					},
					function(data) {
						if(!derbii_adding){console.log(derbii_adding);rightaddselect();}
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
                        var data1 = JSON.parse(data);
                        var htmlstr = '';
                        if(data.status == 'success'){
                            htmlstr += '';
                        }
                        

						$('#dashboardprime > div.main').html('').html(htmlstr);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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
						$('#dashboardprime > div.main').html('').html(data);
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