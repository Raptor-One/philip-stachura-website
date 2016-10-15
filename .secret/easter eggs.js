$(document).ready(function(){

    $('img, p, h1, h2, h3, br').click(function() {
        if(cheatsOn.hashCode() == -1081239615)
        {
            gone(this);
        }
    })

});
var salty = new String();

var cheatsOn = '';

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
    else if(s.hashCode() == 1720023)
    {
        loop(s);
        alert("Congrats, you found this one... \n"
        + "I don't really know what to say... \n"
        + "So have fun!");

    }
}

function activate(s)
{
     if(s.hashCode() == -2141031506)
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
}

function loop(s) {

    if(s.hashCode() == 1720023)
    {
        var speed = 10;
        var x;
        var y;
        var img = document.createElement('img');
        img.src = 'images/undineship.png';
        img.width = 200;
        document.body.appendChild(img);
        var snowball = document.getElementById("snowballAppear");
        img.style.display = 'block';
        img.style.position = 'absolute';

        img.style.left = 25 + $(window).scrollLeft() + 'px';
        img.style.top = 25 + $(window).scrollTop() + 'px';

        document.body.onmousemove = function(e) {
            x = e.clientX;
            y = e.clientY;
        };

        var id = setInterval(frame, 5);
        var prevTime;

        function frame()
        {
            if(prevTime == null)
            {
                prevTime = new Date();
                prevTime = prevTime.getTime();
            }
            var speed = 5;
            var xMove = 0.0;
            var yMove = 0.0;
            var xNeg;
            var yNeg;
            var xDistance = (x + $(window).scrollLeft()) - parseInt(trimString(img.style.left), 10) - 100 ;
            var yDistance = (y + $(window).scrollTop()) - parseInt(trimString(img.style.top), 10) - 100 ;
            if(xDistance > 0)
            {
                xNeg = 1;
            }
            else
            {
                xNeg = -1;
            }
           if(yDistance > 0)
            {
                yNeg = 1;
            }
            else
            {
                yNeg = -1;
            }
            xDistance = Math.abs(xDistance);
            yDistance = Math.abs(yDistance);
            var xRatio = (100/(xDistance+yDistance))*xDistance;
            var yRatio = (100/(yDistance+xDistance))*yDistance;

            var angle = Math.atan2((y + $(window).scrollTop()) - (parseInt(trimString(img.style.top)) + 100), (x + $(window).scrollLeft()) - (parseInt(trimString(img.style.left)) + 100));
            angle = angle * (180/Math.PI) + 90;

            var d = new Date();
            if(!(parseInt(trimString(img.style.left), 10) + 100 == (x + $(window).scrollLeft()) && parseInt(trimString(img.style.top), 10) + 100 ==  (y + $(window).scrollTop())))
            {
                img.style.transform = "rotate(" + angle + "deg)";
            }

            console.log(xNeg + " : " + yNeg);

            img.style.left =  parseInt(trimString(img.style.left), 10) + ((((d.getTime() - prevTime)/1000) * speed) * xRatio) * xNeg  + 'px';
            img.style.top =  parseInt(trimString(img.style.top), 10) + ((((d.getTime() - prevTime)/1000) * speed) * yRatio) * yNeg + 'px';


            prevTime = new Date();
            prevTime = prevTime.getTime();

        }

        function trimString(s)
        {
            return s.substring(0, s.length - 2)
        }
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