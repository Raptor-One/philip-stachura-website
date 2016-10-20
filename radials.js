function placeInRadial(img, rotationOffset, distance)
{

    var r = rotationOffset - 90;
    var coords = radialPoint(r , {x:169.5, y:90}, distance);
    img.style.left = coords.x + 'px';
    img.style.top = coords.y + 'px';

    img.radialDistance = distance;
    img.radialRotation = rotationOffset;

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

