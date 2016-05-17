// var user_agent = window.navigator.userAgent;

// var iphone_regex = /(^Mozilla+)/gi;

// var updateOrientation = function(){

//     if(user_agent.toString(iphone_regex)){
        
//          window.addEventListener("orientationchange", function() {
//             switch(window.orientation){
//                 case 0:
//                     document.body.sytle.backgroundColor = 'yellow';
//                 break;
    
//                 case -90:
//                     document.body.sytle.backgroundColor = 'blue';
//                 break;
    
//                 case 90:
//                     document.body.sytle.backgroundColor = 'gold';
//                 break;
    
//                 case 180:
//                     document.body.sytle.backgroundColor = 'coral';
//                 break;
//             };
//         });
//     };
// };

//document.addEventListener('DOMContentLoaded',function(event){
    
    // document.body.style.backgroundColor = 'lightgreen';
    // updateOrientation();
    
    window.addEventListener("orientationchange", function() {
    alert("the orientation of the device is now " + screen.orientation.angle);
    switch(window.orientation){
                case 0:
                    document.body.sytle.backgroundColor = 'yellow';
                break;
    
                case -90:
                    document.body.sytle.backgroundColor = 'blue';
                break;
    
                case 90:
                    document.body.sytle.backgroundColor = 'gold';
                break;
    
                case 180:
                    document.body.sytle.backgroundColor = 'coral';
                break;
            };
});
    
//});
