// Move the image 
var img = document.getElementById('chakshu');
var marginLeft = 0;
function moveRight () {
marginLeft = marginLeft + 10;
img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
 var interval = setInterval(moveRight, 100);
 };
 
 // Counter code
var button = document.getElementById('counter');
var counter = 0;


BUTTON.ONCLICK = function () {

     // Make a request to the counter endpoint

     // Capture the response and store it in a variable 

     // Render the variable in the correct span 
     counter = counter + 1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
    
};