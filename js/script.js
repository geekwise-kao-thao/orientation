// // Listen for orientation changes
// window.addEventListener("orientationchange", function() {
// 	// Announce the new orientation number
// 	prompt('degree is',window.orientation);
// }, false);

document.addEventListener('DOMContentLoaded',function(event){
    
// function readDeviceOrientation() {
                 		
//     if (Math.abs(window.orientation) === 90) {
//         // Landscape
//         document.body.style.backgroundColor = 'yellow';
//     } 
//     else if(Math.abs(window.orientation) === -90){
//         document.body.style.backgroundColor = 'blue';
//     }
    
//     else {
//     	// Portrait
//     	document.body.style.backgroundColor = 'green';
//     }
// }

// window.onorientationchange = readDeviceOrientation;

    window.addEventListener('orientationchange',function(){
        if(Math.abs(window.orientation) === 90){
            document.body.style.backgroundColor = 'red';
        }else if(Math.abs(window.orientation) === (-90)){
            document.body.style.backgroundColor = 'yellow';
        }else if(Math.abs(window.orientation) === (180)){
            document.body.style.backgroundColor = 'green';
        }
        else{
            document.body.style.backgroundColor = 'blue';
        }
        
    },false);
    
    
});

