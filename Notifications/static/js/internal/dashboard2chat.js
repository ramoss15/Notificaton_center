var width = parseInt($(document).width());
var height = parseInt($(document).height());
var request_paginate, sonic_blue_black;
var request_expand_image, zone_options;



var internalIDs = {438: 'PrS', 815: 'GS', 3213: 'PS', 3954: 'AA', 3165: 'DG'};



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

var div= {};
var divH= {};
var divK= {};
var div_lastkeys= {};
var div_lastkeys1= {};
var div_lasttimes= {};

var thread_boxes = {};
var thread_boxes_initial = {};

var thread_codes = [];

var thread_people = [];

$(document).ready(function(){


var derbiis_list = JSON.parse($("div.leftmain").attr('data-derbiis'));

console.log(derbiis_list);


//zone_options = JSON.parse($("#dashboardmainmiddle").attr('data-zones'));

sonic_blue_black.play();

var selectedtab, selectedtab1 = $(".thread.selected"), request_right;

var dashboardmainrightwidth = $("#dashboardmainright").width();


	function loadinitial(){
		
		if($(".formerrors").offset()){$(".formerrors").remove();}
		
            $("#dashboardprime").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
                $("#sonicbox").html(sonic_blue_black.canvas);
                console.log("code");
                console.log(selectedtab1.attr('data-id'));
            
            request=$.post("https://derbii.com/internal/dashboard/selectpage", { 
                        type: selectedtab1.attr('data-type'),
                    },
                    function(data) {
                        $("#dashboardmainright").html('<table class="stdtable"><tr><td valign="center">Select an item on the left to view its details.</td></tr></table>');
                        $("#dashboardprime").html('').html(data);

             });			
	}

//	loadinitial();
     $("#chatform").stop().hide();

    // $(".thread").click(function(event){
     //	$("#chatform").stop().show();

    // });



//	$("#containermain1").css({'height':height});
	
/*	function get_calendar_height() {
		return parseInt($(document).height()) - 70;
	}

	$(window).resize(function() {
		$('#calendarbox').fullCalendar('option', 'height', get_calendar_height());
	});*/
	
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
    	firebase.database().ref('fcmwebtokens/'+$("div.leftmain").attr('data-user-id')).set({name:$("div.leftmain").attr('data-user-name'), token: currentToken});
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
    var queueRef = firebase.database().ref('queue/tasks');

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




    chatRef.on('child_added', function(data) {
    			var childref= chatRef.child(data.key);


				var models= [];
				var texts = [];
				var textHs = [];
				var mKeys = [];
				
				data.forEach(function(child){
					var message= {derbiiCode:child.val().derbiiCode,
					            senderfacebookID:child.val().senderFacebookID,
					            sendergoogleID:child.val().senderGoogleID,
								sendername:child.val().senderName,
								senderProfileID:child.val().senderProfileID,
								time:child.val().time,
								notification:child.val().notification,
								type:child.val().type,
								people:child.val().people,
								drivername:child.val().drivername,
								driverphone:child.val().driverphone,
								vehiclemodel:child.val().vehiclemodel,
								vehiclenumber:child.val().vehiclenumber,
								senderInternalID : child.val().senderInternalID
					            }
                  	models.push(message);

					var textH = '';
					var textM = '';
                  	
                  	if (child.val().notification){
						if (child.val().type == "attachment") {
	                        textH = "Driver & Cab fixed".toUpperCase();
	                        textM = "Your Derbii now has a fixed driver and cab";
	                        textM += "\n";
	                        textM +=  child.val().drivername;
	                        textM +=  ", ";
	                        textM +=  child.val().driverphone;
	                        textM += "\n";
	                        textM += child.val().vehiclemodel;
	                        textM += ", ";
	                        textM += child.val().vehiclenumber;
	                    }else if (child.val().type == "detail") {
	                        textH = "Temporary Driver & Cab".toUpperCase();
	                        textM = "Your Derbii has a temporary driver and cab";
	                        textM += "\n";
	                        textM += child.val().drivername;
	                        textM += ", ";
	                        textM += child.val().driverphone;
	                        textM += "\n";
	                        textM += child.val().vehiclemodel;
	                        textM += ", ";
	                        textM += child.val().vehiclenumber;
	                    }else if (child.val().type == "detachment") {
	                        textH = "Driver & Cab to be changed".toUpperCase();
	                        textM = "We're changing the driver and the cab for your Derbii. Details will be made available soon.";
	                    }else if (child.val().type == "undetail") {
	                        textH = "Temporary Driver & Cab removed".toUpperCase();
	                        textM = "We're changing the driver and the cab for your Derbii. Details will be made available soon.";
	                    }else if (child.val().type == "created") {
	                        textH = "Derbii in trial".toUpperCase();
	                        textM = "We have a Derbii for you and we're starting your trial soon.";
	                    }else if (child.val().type == "deactivated") {
	                        textH = "Derbii discontinued".toUpperCase();
	                        textM = "Your Derbii has been stopped.";
	                    }else if (child.val().type == "activated") {
	                        textH = "Derbii fixed".toUpperCase();
	                        textM = "Your Derbii is now fixed.";
	                    }else if (child.val().type == "created") {
	                        textH = "Derbii in trial".toUpperCase();
	                        textM = "Your Derbii trial is starting.";
	                    }else if (child.val().type == "processed") {
	                        textH = "Derbii in trial".toUpperCase();
	                        textM = "Your Derbii is now in trial.";
	                    }else if (child.val().type == "edit_people_added") {
	                        textH = "Co-passengers added".toUpperCase();
	                        textM = child.val().people.toUpperCase() + "\n\n" + child.val().text;
	                    }else if (child.val().type == "edit_people_removed") {
	                        textH = "Co-passengers removed".toUpperCase();
	                        textM = child.val().people.toUpperCase();
	                    }else{
	                    	textH = child.val().type.toUpperCase();
	                        textM = child.val().text.toUpperCase();
	                    }
                	} else{
                		textH = '';
                		textM = child.val().text;
                	}


                	textHs.push(textH);
					texts.push(textM);
					mKeys.push(child.key);
					div_lastkeys[data.key] = child.key;
					div_lasttimes[data.key] = child.val().time;

				});
				div[data.key] = texts;
				divH[data.key] = textHs;
				divK[data.key] = mKeys;

				var code1 = data.key;

				thread_codes.push(code1);

				let obj = derbiis_list.find(o => o.code === code1);

				var derbii_title = data.key;

				if(obj != null && obj.title__title != null){
					derbii_title = obj.title__title;
				}

				if(obj != null){
					var indexObj = derbiis_list.indexOf(obj);
					obj['last_time'] = div_lasttimes[code1];
					derbiis_list[indexObj] = obj;
				}

				var innerHTML = '<div id="'+data.key+'" class="thread border-box clearfix shadow-text" data-derbiicode="'+data.key+'" data-gh=\''+JSON.stringify(models)+'\'>';
				innerHTML += '<table class="stdtable"><tr><td valign="center">';
				innerHTML += derbii_title;
				innerHTML += '</td></tr></table>';
				innerHTML += '</div>';

				thread_boxes_initial[code1] = innerHTML;
				
//				$(".leftmain > .second").append(innerHTML);

				

				firebase.database().ref('derbii_people/'+code1).once('value').then(function(data){
					var text = "";
					var people = [];
					data.forEach(function(child){
						people.push(child.val().name);
					});

					for (i = 0; i < people.length; i++) { 
						text += people[i];
						if(i != (people.length-1)){
							text += ", ";
						}
					}

					var innerHTML1 = '<div class="code">';
					innerHTML1 += '<table class="stdtable"><tr><td valign="center" style="width:80%;">';
					innerHTML1 += derbii_title;
					innerHTML1 += '</td><td valign="center" style="width:20%;" class="rightalign"><span class="unread weight700 colorprim500span"></span></td></tr></table>';
					innerHTML1 += '</div>';
					innerHTML1 += '<div class="people">';
					innerHTML1 += '<table class="stdtable"><tr><td valign="center">';
					innerHTML1 += text;
					innerHTML1 += '</td></tr></table>';
					innerHTML1 += '</div>';

					var new_d = document.createElement('div');

					$(new_d).attr('id', code1);
					$(new_d).addClass('thread').addClass('border-box').addClass('clearfix').addClass('shadow-text');
					$(new_d).attr('data-derbiicode', code1);
					$(new_d).attr('data-gh', JSON.stringify(models));
					$(new_d).html(innerHTML1);

					thread_boxes[code1] = $(new_d);
//					thread_boxes[code1] = '<div id="'+code1+'" class="thread border-box clearfix shadow-text" data-derbiicode="'+code1+'" data-gh=\''+JSON.stringify(models)+'\'>' + innerHTML1 + '</div>';
					thread_people.push({'code': code1, 'people': text});

					
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					if($("#searchthreads").val().trim() == '' || $("#searchthreads").val() == null){
						$(".leftmain > .second").html('');
						derbiis_list.forEach(function(derbii){
							if (derbii.code in thread_boxes){
								$(".leftmain > .second").append(thread_boxes[derbii.code]);
							}
						});
					}

//					$(".thread#"+code1).html(innerHTML1);

					firebase.database().ref('derbiichat_admin/'+code1+'/last_read/'+$("div.leftmain").attr('data-user-id')).once('value').then(function(data){
						if (data.val() != null){
							var time = data.val().time;
							var unread = 0;
							for (var i = models.length-1; i >= 0; i--){
								var message = models[i];
								if (message.time >= time && message.sendername != 'bot'){
									unread += 1;
								}else{
									break;
								}
							}

							if (unread > 0){
								console.log(unread);console.log(code1);
								$(".thread#"+code1).find('span.unread').text(unread);
								if(!$(".thread#"+code1).hasClass('colorprim500span')){
									$(".thread#"+code1).addClass('colorprim500span');
								}
							}
						}

	//					$(".thread#"+code1).html(innerHTML1);
					});
				});



				

				

				
				

				childref.orderByKey().startAt(div_lastkeys[data.key]).on('child_added', function(child){
//					if(child.key != div_lastkeys[data.key] && child.val().senderName != 'bot'){
					console.log(divK[data.key]);
					console.log(child.key);

					var exists = false;

					for (i = 0; i < divK[data.key].length; i++){
						if (child.key == divK[data.key][i]){
							exists = true;
							break;
						}
					}


					console.log(exists);

					if (!exists){

//					if(child.key != div_lastkeys[data.key] && divK[data.key].indexOf(child.key) != -1){

						var texts = div[data.key];
						var textHs = divH[data.key];
						var mKeys = divK[data.key];

						

						var datanew= JSON.parse($("#"+data.key).attr('data-gh'));
						var newobject= {
	            			sendername : child.val().senderName,
	            			senderProfileID : child.val().senderProfileID,
	            			senderfacebookID : child.val().senderFacebookID,
	            			sendergoogleID : child.val().senderGoogleID,
	            			derbiiCode : child.val().derbiiCode,
	            			time : child.val().time,
							notification:child.val().notification,
							type:child.val().type,
							people:child.val().people,
							drivername:child.val().drivername,
							driverphone:child.val().driverphone,
							vehiclemodel:child.val().vehiclemodel,
							vehiclenumber:child.val().vehiclenumber,
							senderInternalID : child.val().senderInternalID
						};
						datanew.push(newobject);


						var textH = '';
						var textM = '';
	                  	
	                  	if (child.val().notification){
							if (child.val().type == "attachment") {
		                        textH = "Driver & Cab fixed".toUpperCase();
		                        textM = "Your Derbii now has a fixed driver and cab";
		                        textM += "\n";
		                        textM +=  child.val().drivername;
		                        textM +=  ", ";
		                        textM +=  child.val().driverphone;
		                        textM += "\n";
		                        textM += child.val().vehiclemodel;
		                        textM += ", ";
		                        textM += child.val().vehiclenumber;
		                    }else if (child.val().type == "detail") {
		                        textH = "Temporary Driver & Cab".toUpperCase();
		                        textM = "Your Derbii has a temporary driver and cab";
		                        textM += "\n";
		                        textM += child.val().drivername;
		                        textM += ", ";
		                        textM += child.val().driverphone;
		                        textM += "\n";
		                        textM += child.val().vehiclemodel;
		                        textM += ", ";
		                        textM += child.val().vehiclenumber;
		                    }else if (child.val().type == "detachment") {
		                        textH = "Driver & Cab to be changed".toUpperCase();
		                        textM = "We're changing the driver and the cab for your Derbii. Details will be made available soon.";
		                    }else if (child.val().type == "undetail") {
		                        textH = "Temporary Driver & Cab removed".toUpperCase();
		                        textM = "We're changing the driver and the cab for your Derbii. Details will be made available soon.";
		                    }else if (child.val().type == "created") {
		                        textH = "Derbii in trial".toUpperCase();
		                        textM = "We have a Derbii for you and we're starting your trial soon.";
		                    }else if (child.val().type == "deactivated") {
		                        textH = "Derbii discontinued".toUpperCase();
		                        textM = "Your Derbii has been stopped.";
		                    }else if (child.val().type == "activated") {
		                        textH = "Derbii fixed".toUpperCase();
		                        textM = "Your Derbii is now fixed.";
		                    }else if (child.val().type == "created") {
		                        textH = "Derbii in trial".toUpperCase();
		                        textM = "Your Derbii trial is starting.";
		                    }else if (child.val().type == "processed") {
		                        textH = "Derbii in trial".toUpperCase();
		                        textM = "Your Derbii is now in trial.";
		                    }else if (child.val().type == "edit_people_added") {
		                        textH = "Co-passengers added".toUpperCase();
		                        textM = child.val().people.toUpperCase() + "\n\n" + child.val().text;
		                    }else if (child.val().type == "edit_people_removed") {
		                        textH = "Co-passengers removed".toUpperCase();
		                        textM = child.val().people.toUpperCase();
		                    }else{
		                    	textH = child.val().type.toUpperCase();
		                        textM = child.val().text.toUpperCase();
		                    }
	                	} else{
	                		textH = '';
	                		textM = child.val().text;
	                	}


	                	textHs.push(textH);
						texts.push(textM);
						mKeys.push(child.key);
						div[data.key] = texts;
						divH[data.key] = textHs;
						divK[data.key] = mKeys;

//						console.log(datanew);

						div_lasttimes[data.key] = child.val().time;

						let obj = derbiis_list.find(o => o.code === data.key);
						if(obj != null){
							var indexObj = derbiis_list.indexOf(obj);
							obj['last_time'] = div_lasttimes[data.key];
							derbiis_list[indexObj] = obj;
						}
						
						$("#"+data.key).attr('data-gh', JSON.stringify(datanew));

						

						if ($('.thread.selected').length && $('.thread.selected').attr('id') == data.key){
							var date = new Date(child.val().time);
			
							var dateString = get_DateString(date);
							
							if(child.val().senderName != 'bot'){
								var innerHTML = '<div class="message clearfix border-box">'
								innerHTML += '<div class="others leftalign border-box">';
								innerHTML += '<div class="sender border-box clearfix">';
								innerHTML += '<div class="senderimage border-box">';
								if (child.val().senderGoogleID != null && child.val().senderGoogleID != ""){
									innerHTML += '<img height="30px" width="30px" src="';
									innerHTML += child.val().senderGoogleID;
									innerHTML += '" />';	
								}else{
									innerHTML += '<img height="30px" width="30px" src="https://graph.facebook.com/';
									innerHTML += child.val().senderFacebookID
									innerHTML += '/picture?width=9999" />';	
								}
								innerHTML += '</div>';
								innerHTML += '<div class="sendertext border-box">';
								innerHTML += '<div class="sendername border-box blackspan leftalign">';
								innerHTML += child.val().senderName
								innerHTML += '</div>';
								innerHTML += '<div class="sendertime border-box ccspan leftalign">';
								innerHTML += dateString
								innerHTML += '</div>';
								innerHTML += '</div>';
								innerHTML += '</div>';
								innerHTML += '<div class="text border-box clearfix leftalign"><span>';
								innerHTML += child.val().text;
								innerHTML += '</span></div>';
								innerHTML += '</div></div>';	
							}else{
								var innerHTML = '<div class="message clearfix border-box">'
								innerHTML += '<div class="self rightalign border-box">';
								innerHTML += '<div class="sender border-box clearfix">';
								innerHTML += '<div class="sendertext border-box clearfix">';
								innerHTML += '<div class="sendername border-box blackspan rightalign">';
								if (child.val().senderInternalID != null){
									innerHTML += "Derbii Team (" + internalIDs[child.val().senderInternalID] + ")";
								}else{
									innerHTML += "Derbii Team";
								}
								innerHTML += '</div>';
								innerHTML += '<div class="sendertime border-box ccspan rightalign">';
								innerHTML += dateString
								innerHTML += '</div>';
								innerHTML += '</div>';
								innerHTML += '<div class="senderimage border-box">';
								innerHTML += '<img height="30px" width="30px" src="https://derbiicdn.storage.googleapis.com/images/derbii_logo_color_new2_100.png" />';
								innerHTML += '</div>';
								innerHTML += '</div>';
								if(child.val().notification){

									innerHTML += '<div class="textNotif border-box clearfix rightalign">';
									innerHTML += '<div class="textNotifHeader border-box clearfix">';
									innerHTML += textH;
									innerHTML += '</div>';
									innerHTML += '<div class="textNotifMessage border-box clearfix">';
									innerHTML += textM;
									innerHTML += '</div>';
									innerHTML += '</div>';
								}else{
									innerHTML += '<div class="text border-box clearfix rightalign">';
									innerHTML += child.val().text;
									innerHTML += '</div>';
								}
								innerHTML += '</div></div>';
							}
							
							$(".chat").append(innerHTML);

							$('.chat').scrollTop($('.chat').prop("scrollHeight"));


							if(child.val().senderName != 'bot'){
								var new_date = new Date();
								var new_time = new_date.getTime();
								firebase.database().ref('derbiichat_admin/'+code1+'/last_read/'+$("div.leftmain").attr('data-user-id')).set({time:new_time});
							}
						}else{
							if(child.val().senderName != 'bot'){
								var unread_text = $(".thread#"+code1).find('span.unread').text();
								var unread = 0;

								if (unread_text != '' && unread_text != null){
									unread = parseInt(unread_text);
								}

								unread += 1;

								if (unread > 0){
									console.log(unread);console.log(code1);
									$(".thread#"+code1).find('span.unread').text(unread);
									if(!$(".thread#"+code1).hasClass('colorprim500span')){
										$(".thread#"+code1).addClass('colorprim500span');
									}
								}
							}
						}

						derbiis_list.sort(function(a, b) {
	  						return b.last_time - a.last_time;
						});
						derbiis_list.sort(function(a, b) {
  							return b.last_time - a.last_time;
						});
						if($("#searchthreads").val().trim() == '' || $("#searchthreads").val() == null){
						$(".leftmain > .second").html('');
							derbiis_list.forEach(function(derbii){
								if (derbii.code in thread_boxes){
									$(".leftmain > .second").append(thread_boxes[derbii.code]);
								}
							});
						}
					}
					
				
				});

				


				


			});	

	
	var get_DateString = function(date){
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var hour = date.getHours();
			var minute = date.getMinutes();
			var ampm = hour < 12 ? "AM" : "PM";
			if (hour >= 12) {
				hour = hour - 12;
			}
			if (hour == 0) {
				hour = 12;
			}
			if (date <= 9){
				date="0"+date;
			}
			if (hour <= 9){
				hour="0"+hour;
			}
			if (minute <= 9){
				minute="0"+minute;
			}
			if (month <= 9){
				month="0"+month;
			}
			if (day <= 9){
				day="0"+day;
			}

			var dateString = day + " - " + month + " - " + date.getFullYear() + ", ";
			var timeString = hour + ":" + minute + " " + ampm;
			dateString += timeString;

					return dateString;
	}; 





	$(".aimessage div.text").live('click', function (e) {
//	    var state = e.originalEvent.state;
		
		if($(".chatai").is(':visible')){
	    	$(".chatai").stop().hide();
	    	$("#ai").text('+');
		}

	    if($(this).hasClass('notification')) {
	    	queueRef.push().set({
	    		_state: 'chat_notification_start',
            	code : $('.thread.selected').attr('data-derbiicode'),
            	type: $(this).attr('data-type')
			});

/*	    	request=$.post("https://derbii.com/internal/dashboard/chat/admin/notification", { 
						type: $(this).attr('data-type'),
						code: $('.thread.selected').attr('data-derbiicode'),
					},
					function(data) {
						if (data.status == "success"){
//                            var that = $("#dashboardprime > div.main > div.boxes.leads.selected");
//                            if(!derbii_adding){console.log(derbii_adding);rightaddlead(that);}							
						}else{
							alert("Error");
						}
//						$("#dashboardmainright").html('').html(data);
					});*/
		}else{
			var that;
			var that1=$('button[name=chatsend_btn]');
			if($(".formerrors").offset()){$(".formerrors").remove();}
			that=$(this);

				var message = $("#sendie");

				if (true){

					var code = $('.thread.selected').attr('data-derbiicode');

					var date = new Date();
					
					var dateString = get_DateString(date);

					var time = date.getTime();

					div_lasttimes[code] = time;

					let obj = derbiis_list.find(o => o.code === code);
					if(obj != null){
						var indexObj = derbiis_list.indexOf(obj);
						obj['last_time'] = div_lasttimes[code];
						derbiis_list[indexObj] = obj;
					}

					var chatRefPush = chatRef.child(code).push();



					var innerHTML = '<div class="message clearfix border-box">'
					innerHTML += '<div class="self rightalign border-box">';
					innerHTML += '<div class="sender border-box clearfix">';
					innerHTML += '<div class="sendertext border-box clearfix">';
					innerHTML += '<div class="sendername border-box blackspan rightalign">';
					innerHTML += "Derbii Team (" + internalIDs[$("div.leftmain").attr('data-user-id')] + ")";
					innerHTML += '</div>';
					innerHTML += '<div class="sendertime border-box ccspan rightalign">';
					innerHTML += dateString
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="senderimage border-box">';
					innerHTML += '<img height="30px" width="30px" src="https://derbiicdn.storage.googleapis.com/images/derbii_logo_color_new2_100.png" />';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="text border-box clearfix rightalign"><span>';
					innerHTML += $(this).html();
					innerHTML += '</span></div>';
					innerHTML += '</div></div>';
					$(".chat").append(innerHTML);


					var texts = div[$('.thread.selected').attr('data-derbiicode')];
					var textHs = divH[$('.thread.selected').attr('data-derbiicode')];
					var mKeys = divK[$('.thread.selected').attr('data-derbiicode')];

					texts.push($(this).html());
					textHs.push('');
					mKeys.push(chatRefPush.key);
					div[$('.thread.selected').attr('data-derbiicode')] = texts;
					divH[$('.thread.selected').attr('data-derbiicode')] = textHs;
					divK[$('.thread.selected').attr('data-derbiicode')] = mKeys;


					var datanew= JSON.parse($('.thread.selected').attr('data-gh'));
					var newobject= {
            			sendername : 'bot',
            			senderProfileID : 'bot',
            			senderfacebookID : 'bot',
            			sendergoogleID : 'bot',
            			derbiiCode : code,
            			time : time,
            			senderInternalID : $("div.leftmain").attr('data-user-id')
					};
					datanew.push(newobject);

//					console.log(datanew);
					
					$('.thread.selected').attr('data-gh', JSON.stringify(datanew));


					chatRefPush.set({
						text: $(this).html(),
            			senderName : 'bot',
            			senderProfileID : 'bot',
            			senderFacebookID : 'bot',
            			senderGoogleID : 'bot',
            			derbiiCode : code,
            			notification: false,
            			time : time,
            			senderInternalID : $("div.leftmain").attr('data-user-id')
					});

					queueRef.push().set({
						message: $(this).html(),
            			senderName : 'bot',
            			senderProfileID : 'bot',
            			code : code,
            			messageType: "text"
					});

					


	 				$('#sendie').val('');
	 
					$('.chat').animate({
						scrollTop: $('.chat').prop("scrollHeight")
					}, 500);

					$('.leftmain > .second').animate({
						scrollTop: 0
					}, 500);

					
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					if($("#searchthreads").val().trim() == '' || $("#searchthreads").val() == null){
						$(".leftmain > .second").html('');
						derbiis_list.forEach(function(derbii){
							if (derbii.code in thread_boxes){
								$(".leftmain > .second").append(thread_boxes[derbii.code]);
							}
						});
					}
				}
	
		}

/*	    if (state !== null) {
	        //load content with ajax
	    }*/
	});



	$("#ai").live('click', function (e) {
//	    var state = e.originalEvent.state;
	    if($(".chatai").is(':visible')){
	    	$(".chatai").stop().hide();
	    	$(this).text('+');
		}else{
			$(".chatai").stop().show();
			$(this).text('-');
		}

/*	    if (state !== null) {
	        //load content with ajax
	    }*/
	});


	$("#back").live('click', function (e) {
//	    var state = e.originalEvent.state;
//	    if($(".rightmain").is(':visible')){
	    	$(".rightmain").stop().hide();
			$(".leftmain").stop().show();
			$(".thread.selected").removeClass(".selected");
			console.log("here11");
//		}

/*	    if (state !== null) {
	        //load content with ajax
	    }*/
	});

	
	$(".thread").live('click', function(){

		if($(".chatai").is(':visible')){
	    	$(".chatai").stop().hide();
	    	$("#ai").text('+');
		}

		if(!$(".rightmain").is(':visible')){
			$(".leftmain").stop().hide();
			$(".rightmain").stop().show();
		}
		
		if(!$(".thread.selected").length){
			$("#chatform").stop().show();
		}else{
			$("#sendie").val('');
		}

		if(selectedtab1 && selectedtab1.hasClass('selected')){
			selectedtab1.removeClass('selected');
		}
		selectedtab1 = $(this);
		$(this).addClass('selected');

//		$("#dashboardprime").html('<table class="stdtable centersonic" style="height:600px;"><tr><td valign="center" id="sonicbox"></td></tr></table>');
//		$("#sonicbox").html(sonic_blue_black.canvas);				
				
		var chats= JSON.parse($(this).attr('data-gh'));
		var code = $(this).attr('data-derbiicode');
		var texts = div[code];
		var textHs = divH[code];
		var mKeys = divK[code];

//		History.pushState(null, code, "?thread="+code);
		
		 
		$(".chat").html('');
		
		for(i in chats){

			var date = new Date(chats[i].time);
			
			var dateString = get_DateString(date);

			if(chats[i].sendername=='bot'){
				var innerHTML = '<div class="message clearfix border-box">'
				innerHTML += '<div class="self rightalign border-box">';
				innerHTML += '<div class="sender border-box clearfix">';
				innerHTML += '<div class="sendertext border-box clearfix">';
				innerHTML += '<div class="sendername border-box blackspan rightalign">';
				if (chats[i].senderInternalID != null){
					innerHTML += "Derbii Team (" + internalIDs[chats[i].senderInternalID] + ")";
				}else{
					innerHTML += "Derbii Team";
				}
				innerHTML += '</div>';
				innerHTML += '<div class="sendertime border-box ccspan rightalign">';
				innerHTML += dateString
				innerHTML += '</div>';
				innerHTML += '</div>';
				innerHTML += '<div class="senderimage border-box">';
				innerHTML += '<img height="30px" width="30px" src="https://derbiicdn.storage.googleapis.com/images/derbii_logo_color_new2_100.png" />';
				innerHTML += '</div>';
				innerHTML += '</div>';
				if(chats[i].notification){
					var textH = textHs[i];

					innerHTML += '<div class="textNotif border-box clearfix rightalign">';
					innerHTML += '<div class="textNotifHeader border-box clearfix">';
					innerHTML += textH;
					innerHTML += '</div>';
					innerHTML += '<div class="textNotifMessage border-box clearfix">';
					innerHTML += texts[i];
					innerHTML += '</div>';
					innerHTML += '</div>';
				}else{
					innerHTML += '<div class="text border-box clearfix rightalign">';
					innerHTML += texts[i];
					innerHTML += '</div>';
				}
				innerHTML += '</div></div>';
				$(".chat").append(innerHTML);
			}
			else{
				var innerHTML = '<div class="message clearfix border-box">'
				innerHTML += '<div class="others leftalign border-box">';
				innerHTML += '<div class="sender border-box clearfix">';
				innerHTML += '<div class="senderimage border-box">';
				if (chats[i].sendergoogleID != null && chats[i].sendergoogleID != ""){
					innerHTML += '<img height="30px" width="30px" src="';
					innerHTML += chats[i].sendergoogleID;
					innerHTML += '" />';	
				}else{
					innerHTML += '<img height="30px" width="30px" src="https://graph.facebook.com/';
					innerHTML += chats[i].senderfacebookID
					innerHTML += '/picture?width=9999" />';	
				}
				innerHTML += '</div>';
				innerHTML += '<div class="sendertext border-box">';
				innerHTML += '<div class="sendername border-box blackspan leftalign">';
				innerHTML += chats[i].sendername
				innerHTML += '</div>';
				innerHTML += '<div class="sendertime border-box ccspan leftalign">';
				innerHTML += dateString
				innerHTML += '</div>';
				innerHTML += '</div>';
				innerHTML += '</div>';
				innerHTML += '<div class="text border-box clearfix leftalign">';
				innerHTML += texts[i];
				innerHTML += '</div>';
				innerHTML += '</div></div>';
				$(".chat").append(innerHTML);
			}
		}
		$('.chat').scrollTop($('.chat').prop("scrollHeight"));

		var date = new Date();
		var time = date.getTime();
		firebase.database().ref('derbiichat_admin/'+code+'/last_read/'+$("div.leftmain").attr('data-user-id')).set({time:time});
		$(".thread#"+code).find('span.unread').text('');
		if($(".thread#"+code).hasClass('colorprim500span')){
			$(".thread#"+code).removeClass('colorprim500span');
		}
	});
	


	$(".chatform").submit(function(e){
		
		e.preventDefault();
		var that;
		var that1=$('button[name=chatsend_btn]');
			that=$(this);
				var message = $("#sendie");
				
				if ($.trim(message.val()) != ''){

					var code = $('.thread.selected').attr('data-derbiicode');

					var date = new Date();
					
					var dateString = get_DateString(date);

					var time = date.getTime();

					div_lasttimes[code] = time;

					let obj = derbiis_list.find(o => o.code === code);
					if(obj != null){
						var indexObj = derbiis_list.indexOf(obj);
						obj['last_time'] = div_lasttimes[code];
						derbiis_list[indexObj] = obj;
					}

					var chatRefPush = chatRef.child(code).push();


					var innerHTML = '<div class="message clearfix border-box">'
					innerHTML += '<div class="self rightalign border-box">';
					innerHTML += '<div class="sender border-box clearfix">';
					innerHTML += '<div class="sendertext border-box clearfix">';
					innerHTML += '<div class="sendername border-box blackspan rightalign">';
					innerHTML += "Derbii Team (" + internalIDs[$("div.leftmain").attr('data-user-id')] + ")";
					innerHTML += '</div>';
					innerHTML += '<div class="sendertime border-box ccspan rightalign">';
					innerHTML += dateString
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="senderimage border-box">';
					innerHTML += '<img height="30px" width="30px" src="https://derbiicdn.storage.googleapis.com/images/derbii_logo_color_new2_100.png" />';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="text border-box clearfix rightalign"><span>';
					innerHTML += message.val();
					innerHTML += '</span></div>';
					innerHTML += '</div></div>';
					$(".chat").append(innerHTML);


					var texts = div[$('.thread.selected').attr('data-derbiicode')];
					var textHs = divH[$('.thread.selected').attr('data-derbiicode')];
					var mKeys = divK[$('.thread.selected').attr('data-derbiicode')];

					texts.push(message.val());
					textHs.push('');
					mKeys.push(chatRefPush.key);
					div[$('.thread.selected').attr('data-derbiicode')] = texts;
					divH[$('.thread.selected').attr('data-derbiicode')] = textHs;
					divK[$('.thread.selected').attr('data-derbiicode')] = mKeys;

					var datanew= JSON.parse($('.thread.selected').attr('data-gh'));
					var newobject= {
            			sendername : 'bot',
            			senderProfileID : 'bot',
            			senderfacebookID : 'bot',
            			sendergoogleID : 'bot',
            			derbiiCode : code,
            			time : time,
            			senderInternalID : $("div.leftmain").attr('data-user-id')
					};
					datanew.push(newobject);

//					console.log(datanew);
					
					$('.thread.selected').attr('data-gh', JSON.stringify(datanew));


					chatRefPush.set({
						text: message.val(),
            			senderName : 'bot',
            			senderProfileID : 'bot',
            			senderFacebookID : 'bot',
            			senderGoogleID : 'bot',
            			derbiiCode : code,
            			notification: false,
            			time : time,
            			senderInternalID : $("div.leftmain").attr('data-user-id')
					});

					queueRef.push().set({
						message: message.val(),
            			senderName : 'bot',
            			senderProfileID : 'bot',
            			code : code,
            			messageType: "text"
					});

					


	 				$('#sendie').val('');
	 
					$('.chat').animate({
						scrollTop: $('.chat').prop("scrollHeight")
					}, 500);

					$('.leftmain > .second').animate({
						scrollTop: 0
					}, 500);

					
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					if($("#searchthreads").val().trim() == '' || $("#searchthreads").val() == null){
						$(".leftmain > .second").html('');
						derbiis_list.forEach(function(derbii){
							if (derbii.code in thread_boxes){
								$(".leftmain > .second").append(thread_boxes[derbii.code]);
							}
						});
					}
				}
	});

	$(document).keypress(function(e){
	if(e.which == 13 && !e.shiftKey) {

    	if($('form').attr('data-type') == 'chat'){
		
		e.preventDefault();
		var that;
		var that1=$('button[name=chatsend_btn]');
		if($(".formerrors").offset()){$(".formerrors").remove();}
			that=$(this);

				var message = $("#sendie");

				if ($.trim(message.val()) != ''){

					var code = $('.thread.selected').attr('data-derbiicode');

					var date = new Date();
					
					var dateString = get_DateString(date);

					var time = date.getTime();

					div_lasttimes[code] = time;

					let obj = derbiis_list.find(o => o.code === code);
					if(obj != null){
						var indexObj = derbiis_list.indexOf(obj);
						obj['last_time'] = div_lasttimes[code];
						derbiis_list[indexObj] = obj;
					}

					var chatRefPush = chatRef.child(code).push();



					var innerHTML = '<div class="message clearfix border-box">'
					innerHTML += '<div class="self rightalign border-box">';
					innerHTML += '<div class="sender border-box clearfix">';
					innerHTML += '<div class="sendertext border-box clearfix">';
					innerHTML += '<div class="sendername border-box blackspan rightalign">';
					innerHTML += "Derbii Team (" + internalIDs[$("div.leftmain").attr('data-user-id')] + ")";
					innerHTML += '</div>';
					innerHTML += '<div class="sendertime border-box ccspan rightalign">';
					innerHTML += dateString
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="senderimage border-box">';
					innerHTML += '<img height="30px" width="30px" src="https://derbiicdn.storage.googleapis.com/images/derbii_logo_color_new2_100.png" />';
					innerHTML += '</div>';
					innerHTML += '</div>';
					innerHTML += '<div class="text border-box clearfix rightalign"><span>';
					innerHTML += message.val();
					innerHTML += '</span></div>';
					innerHTML += '</div></div>';
					$(".chat").append(innerHTML);


					var texts = div[$('.thread.selected').attr('data-derbiicode')];
					var textHs = divH[$('.thread.selected').attr('data-derbiicode')];
					var mKeys = divK[$('.thread.selected').attr('data-derbiicode')];

					texts.push(message.val());
					textHs.push('');
					mKeys.push(chatRefPush.key);
					div[$('.thread.selected').attr('data-derbiicode')] = texts;
					divH[$('.thread.selected').attr('data-derbiicode')] = textHs;
					divK[$('.thread.selected').attr('data-derbiicode')] = mKeys;


					var datanew= JSON.parse($('.thread.selected').attr('data-gh'));
					var newobject= {
            			sendername : 'bot',
            			senderProfileID : 'bot',
            			senderfacebookID : 'bot',
            			sendergoogleID : 'bot',
            			derbiiCode : code,
            			time : time,
            			senderInternalID : $("div.leftmain").attr('data-user-id')
					};
					datanew.push(newobject);

//					console.log(datanew);
					
					$('.thread.selected').attr('data-gh', JSON.stringify(datanew));


					chatRefPush.set({
						text: message.val(),
            			senderName : 'bot',
            			senderProfileID : 'bot',
            			senderFacebookID : 'bot',
            			senderGoogleID : 'bot',
            			derbiiCode : code,
            			notification: false,
            			time : time,
            			senderInternalID : $("div.leftmain").attr('data-user-id')
					});

					queueRef.push().set({
						message: message.val(),
            			senderName : 'bot',
            			senderProfileID : 'bot',
            			code : code,
            			messageType: "text"
					});

					


	 				$('#sendie').val('');
	 
					$('.chat').animate({
						scrollTop: $('.chat').prop("scrollHeight")
					}, 500);

					$('.leftmain > .second').animate({
						scrollTop: 0
					}, 500);

					
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					derbiis_list.sort(function(a, b) {
  						return b.last_time - a.last_time;
					});
					if($("#searchthreads").val().trim() == '' || $("#searchthreads").val() == null){
						$(".leftmain > .second").html('');
						derbiis_list.forEach(function(derbii){
							if (derbii.code in thread_boxes){
								$(".leftmain > .second").append(thread_boxes[derbii.code]);
							}
						});
					}
				}
	}

	}
	
  });






	$('#searchthreads').keyup(function(){
		console.log("searching");
		var val = $(this).val().trim();

		if (val != "") {





			let obj1 = derbiis_list.filter(o => o.code.toLowerCase().indexOf(val.toLowerCase()) != -1);
			let obj2 = derbiis_list.filter(o => (o.title__title == null ? false : (o.title__title.toLowerCase().indexOf(val.toLowerCase()) != -1) ));
			let obj3 = thread_people.filter(o => (o.people == "" ? false : (o.people.toLowerCase().indexOf(val.toLowerCase()) != -1) ));


			var codes = [];

			obj1.forEach(function(obj) { 
				codes.push(obj.code);
			});
			obj2.forEach(function(obj) {
				codes.push(obj.code);
			});
			obj3.forEach(function(obj) {
				codes.push(obj.code);
			});

			for (var key in div) {
		        var texts = div[key];
		        if (texts.find(function(str) {return str.toLowerCase().indexOf(val.toLowerCase()) != -1;})){
		        	codes.push(key);
		        }
		    }

		    for (var key in divH) {
		        var textHs = divH[key];
		        if (textHs.find(function(str) {return str.toLowerCase().indexOf(val.toLowerCase()) != -1;})){
		        	codes.push(key);
		        }
		    }

			var new_codes = codes.filter(function(item, pos, self) {
	  			return self.indexOf(item) == pos;
			});



			$(".leftmain > .second").html('');

			new_codes.forEach(function(code) {
				$(".leftmain > .second").append(thread_boxes[code]);
			});
		} else {
			$(".leftmain > .second").html('');

			derbiis_list.sort(function(a, b) {
  				return b.last_time - a.last_time;
			});
			derbiis_list.sort(function(a, b) {
  				return b.last_time - a.last_time;
			});

			derbiis_list.forEach(function(derbii){
				if (derbii.code in thread_boxes){
					$(".leftmain > .second").append(thread_boxes[derbii.code]);
				}
			});
/*			thread_codes.forEach(function(code) {
				$(".leftmain > .second").append(thread_boxes[code]);
			});*/
		}

	});




	
	
	$("#dashboardmainclosebtn").live('click', function(){
		if($(".formerrorsdashboard").offset()){$(".formerrorsdashboard").remove();}
		if($(".formerrorsbookgreen").offset()){$(".formerrorsbookgreen").remove();}
		if($(".formerrorsbook").offset()){$(".formerrorsbook").remove();}

		$('#archivetoggle').iCheck('destroy');
		if(request_right){request_right.abort();}
		
		$("#dashboardmainright").html('<table class="stdtable" style="height:100%; text-align:left; padding-left:20px;"><tr><td valign="center">
			Select an item on the left to view its details.
		</td></tr></table>').detach().css({"top":0}).appendTo($("#dashboardmaindiv")).removeClass('active').stop().animate({
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
	


});
