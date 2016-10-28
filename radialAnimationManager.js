
var softElems;
var webElems;
var softExpanded = false;
var webExpanded = false;

function showSoftRadial()
{
    softElems  = [document.getElementById("radprsoftmod1"),document.getElementById("radprsoftmod2"),document.getElementById("radprsoftmod3"),document.getElementById("radprsoftmod4")];
    var otherElems = softElems;
    showRadial(document.getElementById("radprsoftimg"), otherElems, prSoftAnimationRunning);
}

function showWebRadial()
{
    webElems  = [document.getElementById("radprwebmod1"),document.getElementById("radprwebmod2"),document.getElementById("radprwebmod3")];
    var otherElems = webElems;
    showRadial(document.getElementById("radprwebimg"), otherElems, prWebAnimationRunning);
}

function hideSoftRadial()
{
    var otherElems = softElems;
    hideRadial(document.getElementById("radprsoftimg"), otherElems, prSoftAnimationRunning);
}

function hideWebRadial()
{
    var otherElems = webElems;
    hideRadial(document.getElementById("radprwebimg"), otherElems, prWebAnimationRunning);
}

function showRadial(elem, otherElems, idLookup)
{
    var elements = [elem
        ];
    var starting = [$( elem ).width()
        ];
    var goal = [160
        ];
    var functions = [
    function(element, current){
        element.width  = current;
    }];

    animateRadial(elements, starting, goal, functions, idLookup, otherElems, 110, 100);

}

function hideRadial(elem, otherElems, idLookup)
{
    var elements = [elem
        ];
    var starting = [$( elem ).width()
        ];
    var goal = [225
        ];
    var functions = [
    function(element, current){
        element.width  = current;
    }];

    animateRadial(elements, starting, goal, functions, idLookup, otherElems, 90, 0);
}

function animateRadial(elements, starting, goal, functions, idLookup, otherElems, distGoal, opGoal)
{
    for(var i=0; i<otherElems.length; i++)
    {
        elements.push(otherElems[i]);
        starting.push($( otherElems[i] ).css("opacity")*100);
        goal.push(opGoal);
        functions.push(function(element, current){
           element.style.opacity  = current/100;
        });

        elements.push(otherElems[i]);
        starting.push(parseInt(otherElems[i].getAttribute("radial-distance")));
        goal.push(distGoal);
        functions.push(function(element, current){
            placeInRadial(element, parseInt(element.getAttribute("radial-rotation")), current );
        });
    }

    animate(elements, starting, goal, 5, 3, functions, idLookup);
}