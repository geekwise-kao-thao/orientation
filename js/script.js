document.addEventListener('DOMContentLoaded',function(event){
    
    // var orientation_change = function(){
    //     if( /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) === false){
    //         window.addEventListener("orientationchange", function() {
    //             document.body.style.backgroundColor = 'red';
    //         });
    //     };
    // };
    
    // orientation_change();
    
    var updateOrientation = function(){
        //var displayStr = "Orientation : ";
        if( /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) === false){
            window.addEventListener("orientationchange", function() {
                switch(window.orientation){
                    case 0:
                        //displayStr += "Portrait";
                        document.body.sytle.backgroundColor = 'yellow';
                    break;
        
                    case -90:
                        //displayStr += "Landscape (right, screen turned clockwise)";
                        document.body.sytle.backgroundColor = 'green';
                    break;
        
                    case 90:
                        //displayStr += "Landscape (left, screen turned counterclockwise)";
                        document.body.sytle.backgroundColor = 'gold';
                    break;
        
                    case 180:
                        //displayStr += "Portrait (upside-down portrait)";
                        document.body.sytle.backgroundColor = 'coral';
                    break;
        
                };
            });
        };
        // document.getElementById("output").innerHTML = displayStr;
        //alert(displayStr);
    };
    
    updateOrientation();
    
    
});
