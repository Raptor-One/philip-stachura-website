function placeInRadial(img, rotationOffset)
{

    var r = convertToRotation(0 + rotationOffset);

   var id = setInterval(frame, 100);
   function frame(){
        var coords = radialPoint(r , {x:174.5, y:91}, 110);
        img.style.left = coords.x + 'px';
        img.style.top = coords.y + 'px';
        r += convertToRotation(10);
    }

    function convertToRotation(r)
    {
        return r/180*Math.PI;
    }
}


function radialPoint(rotation, center, distance)
{
    return {x:calculateX(rotation, center.x, distance),
        y:calculateY(rotation, center.y, distance)};
    function calculateX(rotation, center, distance)
    {
         return center + Math.cos(rotation)*distance;
    }
    function calculateY(rotation, center, distance)
    {
        return center + Math.sin(rotation)*distance;
    }
}

