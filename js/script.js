// var user_agent = window.navigator.userAgent;

// var iphone_regex = /(^Mozilla+)/gi;

//  var updateOrientation = function(){

//      if(user_agent.indexOf(iphone_regex)){
        
//             window.addEventListener("orientationchange", function() {
//                 alert("the orientation of the device is now " + screen.orientation.angle);
//                 switch(window.orientation){
//                             case 0:
//                                 document.body.sytle.backgroundColor = 'yellow';
//                             break;
                
//                             case -90:
//                                 document.body.sytle.backgroundColor = 'blue';
//                             break;
                
//                             case 90:
//                                 document.body.sytle.backgroundColor = 'gold';
//                             break;
                
//                             case 180:
//                                 document.body.sytle.backgroundColor = 'coral';
//                             break;
//                         };
//             });
//      };
//  };

// document.addEventListener('DOMContentLoaded',function(event){
    
//     document.body.style.backgroundColor = 'lightgreen';
//     updateOrientation();
    
// });



var landscape_color = document.body.style.backgroundColor = 'yellow';
var portrait_color = document.body.style.backgroundColor = 'green';

//var bodyClass = document.body.classList;

var Orientation = {
    isPortrait: function () {
        return !this.isLandscape();
    },
    isLandscape: function () {
        return window.orientation === 90 || window.orientation === -90;
    },
    detectOrientation: function () {
        if (Orientation.isLandscape()) {
            //bodyClass.add(LANDSCAPE);
            document.body.style.backgroundColor = 'yellow';
            //bodyClass.remove(PORTRAIT);
        } else if(Orientation.isPortrait){
            //bodyClass.add(PORTRAIT);
            document.body.style.backgroundColor = 'green';
            //bodyClass.remove(LANDSCAPE);
        }
    }
};

Orientation.detectOrientation();
window.addEventListener("orientationchange", Orientation.detectOrientation);