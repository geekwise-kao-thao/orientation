var user_agent = navigator.userAgent;

var iphone_regex = /(^Mozilla+)/gi;

var updateOrientation = function(){

    if(user_agent == iphone_regex){
        
         window.addEventListener("orientationchange", function() {
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
    };
};

document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.style.backgroundColor = 'lightgreen';
    updateOrientation();
    
});
