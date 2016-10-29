function placeInRadial(img, rotationOffset, distance)
{

    var r = rotationOffset - 90;
    var coords = radialPoint(r , {x:207, y:127.5}, distance);
    img.style.left = coords.x - (img.width/2) + 'px';
    img.style.top = coords.y - (img.height/2) + 'px';

    img.setAttribute("radial-distance", distance);
    img.setAttribute("radial-rotation", rotationOffset);

}


function radialPoint(rotation, center, distance)
{
    return {x:calculateX(rotation, center.x, distance),
        y:calculateY(rotation, center.y, distance)};
    function calculateX(rotation, center, distance)
    {
         return center + Math.cos(rotation/180*Math.PI)*distance;
    }
    function calculateY(rotation, center, distance)
    {
        return center + Math.sin(rotation/180*Math.PI)*distance;
    }
}

