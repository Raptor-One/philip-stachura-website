$(document).ready(function(){

    $('img, p, h1, h2, h3, br').click(function() {
        if(cheatsOn == 8472)
        {
            gone(this);
        }
    })

});
// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

var cheatsOn = 0;
// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length){
        document.body.style.backgroundImage = "url('http://www.lovethisgif.com/uploaded_images/91924-Description-This-Is-A-Simple-Layout-Showing-The-Matrix-Code-Moving-....gif')";

         alert("Welcome to the matrix...");
         cheatsOn = 8472;
         }
  } else
    konamiCodePosition = 0;
});

function gone(elem)
{
    elem.style.display = "none";
}

function operation(s)
{
    if(s.hashCode() == -1247761913)
    {
        alert("Bonjour");
    }
}

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};

