// // Listen for orientation changes
// window.addEventListener("orientationchange", function() {
// 	// Announce the new orientation number
// 	prompt('degree is',window.orientation);
// }, false);

document.addEventListener('DOMContentLoaded',function(event){
    
function readDeviceOrientation() {
                 		
    if (Math.abs(window.orientation) === 90) {
        // Landscape
        document.body.style.backgroundColor = 'yellow';
    } 
    else if(Math.abs(window.orientation) === -90){
        document.body.style.backgroundColor = 'blue';
    }
    
    else {
    	// Portrait
    	document.body.style.backgroundColor = 'green';
    }
}

window.onorientationchange = readDeviceOrientation;
    
    
});

