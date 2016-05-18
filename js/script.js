// // Listen for orientation changes
// window.addEventListener("orientationchange", function() {
// 	// Announce the new orientation number
// 	prompt('degree is',window.orientation);
// }, false);

document.addEventListener('DOMContentLoaded',function(event){
    
//     if (window.matchMedia("(orientation: portrait)").matches) {
//   // you're in PORTRAIT mode
//   document.body.style.backgroundColor = 'red';
   
//     }

//     if (window.matchMedia("(orientation: landscape)").matches) {
//       // you're in LANDSCAPE mode
//         document.body.style.backgroundColor = 'blue';
    
//     }


var isPortrait = function() {
    return window.innerHeight > window.innerWidth;
}

var isLandscape = function() {
    //return (window.orientation === 90 || window.orientation === -90);
    return window.innerHeight < window.innerWidth;
}
if (isPortrait()) {
    document.body.style.backgroundColor = 'red';
    
}
if (isLandscape()) {
    document.body.style.backgroundColor = 'blue';
    
}
    
    
});

