


function expandTech(elem) {

    var otherElems = [document.getElementById("expdlintech1"), document.getElementById("expdlintech2"), document.getElementById("expdlintech3")];
	for(var i=0; i<3; i++) {
		if(otherElems[i].id == elem.id)
		{
			otherElems.splice(i,1);
			break;
		}
	}

	expand(elem, otherElems, inTechSubAnimationRunning);

}

function shrinkTech() {

    var otherElems = [document.getElementById("expdlintech1"), document.getElementById("expdlintech2"), document.getElementById("expdlintech3")];

    shrink(otherElems, inTechSubAnimationRunning);
}

function showLineTech() {

	var elemLine = [document.getElementById("expdlintechhr"), document.getElementById("expdlintechtr")];

	showLine(elemLine, inTechAnimationRunning);
}

function hideLineTech() {

	var elemLine = [document.getElementById("expdlintechhr"), document.getElementById("expdlintechtr")];

	hideLine(elemLine, inTechAnimationRunning);
}


function showLineSport() {

	var elemLine = [document.getElementById("expdlinsporthr"), document.getElementById("expdlinsporttr")];

	showLine(elemLine, inSportAnimationRunning);
}

function hideLineSport() {

	var elemLine = [document.getElementById("expdlinsporthr"), document.getElementById("expdlinsporttr")];

	hideLine(elemLine, inSportAnimationRunning);
}



function showLine(elemLine, idLookup) {
	var lineStart = [$( elemLine[0] ).width() / $(elemLine[0]).parent().width() * 100, $( elemLine[1] ).height()];
	var lineGoal = [90, 220]
	var functions = [function(element, current){
    	    element.style.width = current + '%';
    	    },function(element, current){
                element.style.height = current + 'px';
            }];
    elemLine[0].style.display = "block";
	animate(elemLine, lineStart, lineGoal, 15, 15,  functions, idLookup);

}

function hideLine(elemLine, idLookup) {

	var lineStart = [$( elemLine[0] ).width() / $(elemLine[0]).parent().width() * 100, $( elemLine[1] ).height()];
	var lineGoal = [0, 195]
	var functions = [function(element, current){
    	    element.style.width = current + '%';
    	    },function(element, current){
                 element.style.height = current + 'px';
             }];

	animate(elemLine, lineStart, lineGoal, 15, 15,  functions, idLookup);
	setTimeout(function () {
        elemLine[0].style.display = "none";
        },(100/5)*5);

}



function expandSport(elem) {

    var otherElems = [document.getElementById("expdlinsport1"), document.getElementById("expdlinsport2"), document.getElementById("expdlinsport3")];
	for(var i=0; i<3; i++) {
		if(otherElems[i].id == elem.id)
		{
			otherElems.splice(i,1);
			break;
		}
	}

	expand(elem, otherElems, inSportSubAnimationRunning);

}

function shrinkSport() {

    var otherElems = [document.getElementById("expdlinsport1"), document.getElementById("expdlinsport2"), document.getElementById("expdlinsport3")];

    shrink(otherElems, inSportSubAnimationRunning);
}



function expand(elem, otherElems, idLookup)
{
	var elements = [elem, otherElems[0], otherElems[1],
	    elem.getElementsByTagName("img")[0], otherElems[0].getElementsByTagName("img")[0], otherElems[1].getElementsByTagName("img")[0]
	    ];
	var starting = [$( elem ).width(), $( otherElems[0] ).width(), $( otherElems[1] ).width(),
        $( elem.getElementsByTagName("img")[0] ).width(), $( otherElems[0].getElementsByTagName("img")[0] ).width(), $( otherElems[1].getElementsByTagName("img")[0] ).width()
        ];
	var goal = [175, 138, 138,
	    150, 113, 113
	    ];
    var functions = [
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    }];

    animate(elements, starting, goal, 30, 18, functions, idLookup);

}

function shrink(otherElems, idLookup)
{
	var elements = [otherElems[0], otherElems[1], otherElems[2],
	    otherElems[0].getElementsByTagName("img")[0], otherElems[1].getElementsByTagName("img")[0], otherElems[2].getElementsByTagName("img")[0]
	    ];
	var starting = [$( otherElems[0] ).width(), $( otherElems[1] ).width(), $( otherElems[2] ).width(),
	    $( otherElems[0].getElementsByTagName("img")[0] ).width(), $( otherElems[1].getElementsByTagName("img")[0] ).width(), $( otherElems[2].getElementsByTagName("img")[0] ).width()
	    ];
	var goal = [150, 150, 150,
	    125, 125, 125
	    ];
    var functions = [
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    },
    function(element, current){
        element.style.width = current + 'px';
    }];

    animate(elements, starting, goal, 30, 18, functions, idLookup);

}