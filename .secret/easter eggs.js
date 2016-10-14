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
        img.width = 100;
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

        var id = setInterval(frame, 1);
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
            var xDistance = x - trimString(img.style.left) -50;
            var yDistance = y - trimString(img.style.top) -100;
            var xRatio = (100/(xDistance+yDistance))*xDistance;
            var yRatio = (100/(yDistance+xDistance))*yDistance;

            if(xDistance > 0)
            {
                var d = new Date();
                xMove = ((((d.getTime() - prevTime)/1000) * speed) * xRatio) +  parseInt(trimString(img.style.left), 10);
                if(xMove > x)
                {
                    xMove = x;
                }
            }
            else if(xDistance < 0)
            {
                var d = new Date();

                xMove = ((((d.getTime() - prevTime)/1000) * speed) * -xRatio) + parseInt(trimString(img.style.left),10);
                if(xMove < x)
                {
                    xMove = x;
                }

            }
            else
            {
                xMove = x;
            }

            if(yDistance > 0)
            {
                var d = new Date();

                yMove = ((((d.getTime() - prevTime)/1000) * speed) * yRatio) +  parseInt(trimString(img.style.top), 10);
                if(yMove > y)
                {
                    yMove = y;
                }
            }
            else if(yDistance < 0)
            {
                var d = new Date();

                yMove = ((((d.getTime() - prevTime)/1000) * speed) * -yRatio) +  parseInt(trimString(img.style.top), 10);
                if(yMove < y)
                {
                    yMove = y;
                }

            }
            else
            {
                yMove = y;
            }

            img.style.left =  xMove + $(window).scrollLeft() +  'px';
            img.style.top =  yMove  + $(window).scrollTop() +  'px';

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