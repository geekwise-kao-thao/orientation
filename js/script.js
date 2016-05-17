document.addEventListener('DOMContentLoaded',function(event){
    
    var updateOrientation = function(){
        
        var user_agent = navigator.userAgent;
        
        var iphone_regex = /((?:[AppleWebKit]+))/i;
        
        if(iphone_regex.test(user_agent)){
             window.addEventListener("orientationchange", function() {
                switch(window.orientation){
                    case 0:
                        document.body.sytle.backgroundColor = 'yellow';
                    break;
        
                    case -90:
                        document.body.sytle.backgroundColor = 'green';
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
    
    updateOrientation();
    
});
