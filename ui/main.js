// Move the image 
var img = document.getElementById('chakshu');
var marginLeft = 0;
function moveRight () {
marginLeft = marginLeft + 10;
img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function () {
 var interval = setInterval(moveRight, 100);
 };
 
 // Counter code
var button = document.getElementById('counter');
var counter = 0;


