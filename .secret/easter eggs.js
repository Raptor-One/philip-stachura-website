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

        var mouseDown = 0;
        document.body.onmousedown = function() {
          ++mouseDown;
        }
        document.body.onmouseup = function() {
          --mouseDown;
        }
        var x;
        var y;
        var img = document.createElement('img');
        img.src = 'images/undineship.png';
        img.width = 200;
        document.body.appendChild(img);
        img.style.display = 'block';
        img.style.position = 'absolute';
        img.style.zIndex = 100;

        img.style.left = 100 + 'px';
        img.style.top = 100 + 'px';


        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', 100 + "%");
        svg.setAttribute('height', 100 + "%");
        svg.style.position = "absolute";
        svg.id = "svg";
        svg.style.zIndex = 99;
        document.body.insertBefore(svg, document.getElementById("firstElement"));

        document.body.onmousemove = function(e) {
            x = e.clientX;
            y = e.clientY;
        }
        var id = setInterval(frame, 5);
        var prevTime;
        var line;
        var lineWidth;
        var step = 0;

        function frame()
        {


            if(line !== undefined)
            {
                line.remove();
                lineWidth = 3;
                step += 1;
                console.log(step +"");
                if(step < 500)
                {
                    lineWidth = 3;
                }
                else if(step < 1000)
                {
                    lineWidth = 4;
                }
                else if(step < 2500)
                {
                    lineWidth = 5;
                }
                else if(step < 3000)
                {
                    lineWidth = 6;
                }
                else if(step < 7000)
                {
                    lineWidth = 5;
                }
                else if(step < 7250)
                {
                    lineWidth = 4;
                }
                else if(step < 7500)
                {
                    lineWidth = 3;
                }
                else if(step < 7750)
                {
                    lineWidth = 2;
                }
                else if(step < 8000)
                {
                    lineWidth = 1;
                }
                else if(step < 8500)
                {
                    lineWidth = 0;
                    line.remove();
                }

            }

            var d = new Date();

            var speed = 3;
            var xMove;
            var yMove;
            var xNeg;
            var yNeg;
            var xDistance = (x + $(window).scrollLeft()) - parseFloat(trimString(img.style.left), 10) - 100 ;
            var yDistance = (y + $(window).scrollTop()) - parseFloat(trimString(img.style.top), 10) - 100 ;
            xNeg = (xDistance < 0 ) ? -1 : 1;
            yNeg = (yDistance < 0 ) ? -1 : 1;
            xDistance = Math.abs(xDistance);
            yDistance = Math.abs(yDistance);
            var xRatio = (100/(xDistance+yDistance))*xDistance;
            var yRatio = (100/(yDistance+xDistance))*yDistance;

            var angle = Math.atan2((y + $(window).scrollTop()) - (parseFloat(trimString(img.style.top)) + 100), (x + $(window).scrollLeft()) - (parseFloat(trimString(img.style.left)) + 100));
            angle = angle * (180/Math.PI) + 90;


            if(!(parseFloat(trimString(img.style.left), 10) + 100 == (x + $(window).scrollLeft()) && parseFloat(trimString(img.style.top), 10) + 100 ==  (y + $(window).scrollTop())))
            {
                img.style.transform = "rotate(" + angle + "deg)";
            }

            if(mouseDown && step < 8500)
            {
                var xClick = x;
                var yClick = y;
                line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', parseFloat(trimString(img.style.left), 10) + 100);
                line.setAttribute('y1', parseFloat(trimString(img.style.top), 10) + 100);
                line.setAttribute('x2', xClick + $(window).scrollLeft());
                line.setAttribute('y2', yClick + $(window).scrollTop());
                line.setAttribute('stroke', "rgb(255,210,30)");
                line.setAttribute('stroke-width', lineWidth);
                document.getElementById("svg").appendChild(line);

            }
            else if (mouseDown == 0)
            {
                step = 0;

                xMove = parseFloat(trimString(img.style.left), 10) + (((((d.getTime() - prevTime)/1000.0) * speed) * xRatio) * xNeg);
                yMove = parseFloat(trimString(img.style.top), 10) + (((((d.getTime() - prevTime)/1000.0) * speed) * yRatio) * yNeg);


                img.style.left = xMove + 'px'
                img.style.top = yMove + 'px'

            }

            prevTime = new Date();
            prevTime = prevTime.getTime();


            function trimString(s)
            {
                return s.substring(0, s.length - 2)
            }


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

