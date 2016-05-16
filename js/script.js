document.addEventListener('DOMContentLoaded',function(event){
    
    var orientation_change = function(){
        if( /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) === false){
            window.addEventListener("orientationchange", function() {
                document.body.style.backgroundColor = 'red';
            });
        };
    };
    
    orientation_change();
    
});
