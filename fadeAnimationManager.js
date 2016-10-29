function showImage(elem, otherElems, idLookup)
{
    var elements = [elem, otherElems[0], otherElems[1],
        ];
    var starting = [$( elem ).css("opacity")*100, $( otherElems[0] ).css("opacity")*100, $( otherElems[1] ).css("opacity")*100,
        ];
    var goal = [100, 10, 10
        ];
    var functions = [
    function(element, current){
        element.style.opacity  = current/100;
    },
    function(element, current){
        element.style.opacity  = current/100;
    },
    function(element, current){
        element.style.opacity  = current/100;
    }];

    animate(elements, starting, goal, 5, 3, functions, idLookup);

}

function hideImage()
{
    var elements = [document.getElementById("expdlso1").getElementsByClassName("switchimg")[0], document.getElementById("expdlso2").getElementsByClassName("switchimg")[0], document.getElementById("expdlso3").getElementsByClassName("switchimg")[0],
        ];
    var starting = [$( elements[0] ).css("opacity")*100, $( elements[1] ).css("opacity")*100, $( elements[2] ).css("opacity")*100,
        ];
    var goal = [0, 0, 0
        ];
    var functions = [
    function(element, current){
        element.style.opacity  = current/100;
    },
    function(element, current){
        element.style.opacity  = current/100;
    },
    function(element, current){
        element.style.opacity  = current/100;
    }];

    animate(elements, starting, goal, 5, 2.5, functions, inSocialAnimationRunning);

}

function showSocial(elem) {

    var otherElems = [document.getElementById("expdlso1"), document.getElementById("expdlso2"), document.getElementById("expdlso3")];
    for(var i=0; i<3; i++) {
        if(otherElems[i].id == elem.id)
        {
            otherElems.splice(i,1);
            break;
        }
    }

	for(var i=0; i<otherElems.length; i++) {

	    otherElems[i] = otherElems[i].getElementsByClassName("switchimg")[0]
	}

	showImage(elem.getElementsByClassName("switchimg")[0], otherElems, inSocialAnimationRunning);

}
