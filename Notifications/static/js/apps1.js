var request, set, width = parseInt(document.width), pos = 0, margin_left = 0, margin_left1 = 0, timer, typecount = 0, fbconvo, scrolled = false, lastscroll = 0, startzone_selected = false, endzone_selected = false;

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

$(document).ready(function(){
  $(".hello_apps_mobile").stop().hide();
  if(window.location.href == "/apps/"){
 //   window.location.replace
    
  }
  

  

  if(navigator.userAgent.toLowerCase().indexOf('android') != -1){
    $(".hello_apps_desktop").stop().hide();
    $(".hello_apps_default").stop().hide();
    $(".hello_apps_mobile").stop().show();

    setTimeout(function(){
      window.location.replace('https://play.google.com/store/apps/details?id=com.derbii.derbii');

    }, 5000);
     
    
  }else if(navigator.userAgent.toLowerCase().indexOf('iphone') != -1){
    $(".hello_apps_desktop").stop().hide();
    $(".hello_apps_default").stop().hide();
    $(".hello_apps_mobile").stop().show();
     
     setTimeout(function(){
      window.location.replace('https://itunes.apple.com/us/app/derbii-shared-commuting-cabs/id1121044466');
      }, 5000);
     
    
    
    
  }

  else{
    $(".hello_apps_default").stop().hide();
    $(".hello_apps_mobile").stop().hide();
    $(".hello_apps_desktop").stop().show();
    
     

    }

 // var ua = navigator.userAgent.toLowerCase();
//var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
/*if(isAndroid) 
+  // Do something!
  // Redirect to Android-site?
  window.location = 'http://android.davidwalsh.name';
}*/


});