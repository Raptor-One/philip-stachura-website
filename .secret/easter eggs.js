$(document).ready(function(){

    $('img, p, h1, h2, h3, br').click(function() {
        if(cheatsOn.hashCode() == -1081239615)
        {
            gone(this);
        }
    })

});
var salty = new String();

var cheatsOn = 0;

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
    else if(s.hashCode() == -2141031506)
    {
        salty = s;
        alert("Salt, rains from above!");
    }
    else if(s.hashCode() == -1081239615)
    {
        document.body.style.backgroundImage = "url('http://www.lovethisgif.com/uploaded_images/91924-Description-This-Is-A-Simple-Layout-Showing-The-Matrix-Code-Moving-....gif')";
        cheatsOn = s;
        alert("Welcome to the matrix...");
    }
    else if(s.hashCode() == 1720023)
    {
        alert("still working on this one...");

    }
}

document.onclick = function() {
    if(salty.hashCode() == -2141031506)
    {
        var img = document.createElement('img');
        img.src = 'http://33.media.tumblr.com/2bd6d58e53c8428b9dd955747707c748/tumblr_inline_nam8htGWqf1rhel8u.png';
        img.width = 50;
        document.body.appendChild(img);
        var x = event.clientX;
        var y = event.clientY;
        var snowball = document.getElementById("snowballAppear");
        img.style.display = 'block';
        img.style.position = 'absolute';
        img.style.left = x - 25 + $(window).scrollLeft() + 'px';
        img.style.top = y - 25 + $(window).scrollTop() + 'px';
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