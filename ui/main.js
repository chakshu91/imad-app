console.log('Loaded!');
// Change the text ot the main-text div
var element = document.getElementById('main-text'
);
    
element.innerHTML ='MY NAME IS CHAKSHU SHARAD.';

// Move the image
var img =  document.getElementById('chakshu');
function moveRight () {
marginLeft = marginLeft + 10;
img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
var interval = setInterval(moveRight, 100);
};