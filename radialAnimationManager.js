

function showSoftRadial()
{
    var otherElems = [document.getElementById("radprsoftmod1"),document.getElementById("radprsoftmod2"),document.getElementById("radprsoftmod3"),document.getElementById("radprsoftmod4") ]
    showRadial(document.getElementById("radprsoftimg"), otherElems, prSoftAnimationRunning);
}

function showWebRadial()
{
    var otherElems = [document.getElementById("radprwebmod1"),document.getElementById("radprwebmod2"),document.getElementById("radprwebmod3")]
    showRadial(document.getElementById("radprwebimg"), otherElems, prWebAnimationRunning);
}

function hideSoftRadial()
{
    var otherElems = [document.getElementById("radprsoftmod1"),document.getElementById("radprsoftmod2"),document.getElementById("radprsoftmod3"),document.getElementById("radprsoftmod4") ]
    hideRadial(document.getElementById("radprsoftimg"), otherElems, prSoftAnimationRunning);
}

function hideWebRadial()
{
    var otherElems = [document.getElementById("radprwebmod1"),document.getElementById("radprwebmod2"),document.getElementById("radprwebmod3")]
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

    for(var i=0; i<otherElems.length; i++)
    {
        elements.push(otherElems[i]);
        starting.push($( otherElems[i] ).css("opacity")*100);
        goal.push(100);
        functions.push(function(element, current){
           element.style.opacity  = current/100;
        });

        elements.push(otherElems[i]);
        starting.push(otherElems[i].radialDistance);
        goal.push(110);
        functions.push(function(element, current){
            placeInRadial(element, element.radialRotation, current );
        });
    }

    animate(elements, starting, goal, 5, 3, functions, idLookup);

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

    for(var i=0; i<otherElems.length; i++)
    {
        elements.push(otherElems[i]);
        starting.push($( otherElems[i] ).css("opacity")*100);
        goal.push(0);
        functions.push(function(element, current){
           element.style.opacity  = current/100;
        });

        elements.push(otherElems[i]);
        starting.push(otherElems[i].radialDistance);
        goal.push(90);
        functions.push(function(element, current){
            placeInRadial(element, element.radialRotation, current );
        });
    }

    animate(elements, starting, goal, 5, 3, functions, idLookup);

}