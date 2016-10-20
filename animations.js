
$(document).ready(function(){
// Interests Technology
    $('#expdlintech1').mouseenter(function() {
        expandTech(this);
    });
    $('#expdlintech2').mouseenter(function() {
        expandTech(this);
    });
    $('#expdlintech3').mouseenter(function() {
        expandTech(this);
    });
    $('#expdlintech').mouseenter(function() {
        showLineTech();
     });
    $('#expdlintech').mouseleave(function() {
        shrinkTech();
        hideLineTech();
    });
// Interests - Sports
    $('#expdlinsport1').mouseenter(function() {
        expandSport(this);
    });
    $('#expdlinsport2').mouseenter(function() {
        expandSport(this);
    });
    $('#expdlinsport3').mouseenter(function() {
        expandSport(this);
    });
    $('#expdlinsport').mouseenter(function() {
        showLineSport();
     });
    $('#expdlinsport').mouseleave(function() {
        shrinkSport();
        hideLineSport();
    });
// Social Media
    $('#expdlso1').mouseenter(function() {
        showSocial(this);
    });
    $('#expdlso2').mouseenter(function() {
        showSocial(this);
    });
    $('#expdlso3').mouseenter(function() {
        showSocial(this);
    });
    $('#expdlso').mouseleave(function() {
        hideImage();
    });
// Projects
    $('#radprsofttd').mouseenter(function() {
        showSoftRadial();
    });
    $('#radprsofttd').mouseleave(function() {
        hideSoftRadial();
    });
    $('#radprwebtd').mouseenter(function() {
        showWebRadial();
    });
    $('#radprwebtd').mouseleave(function() {
        hideWebRadial();
    });

});
$('#poj').mouseleave(function(event) {
	shrink(this);
});
$('#poj').mouseenter(function(event) {
	expand(this);
});

var inTechSubAnimationRunning = {value: 0 };
var inTechAnimationRunning = {value: 0 };
var inSportSubAnimationRunning = {value: 0 };
var inSportAnimationRunning = {value: 0 };
var inSocialAnimationRunning = {value: 0 };
var prSoftAnimationRunning = {value: 0};
var prWebAnimationRunning = {value: 0};


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

function showLineSport() {

	var elemLine = [document.getElementById("expdlinsporthr"), document.getElementById("expdlinsporttr")];

	showLine(elemLine, inSportAnimationRunning);
}

function hideLineSport() {

	var elemLine = [document.getElementById("expdlinsporthr"), document.getElementById("expdlinsporttr")];

	hideLine(elemLine, inSportAnimationRunning);
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
        console.log(i);
        elements.push(otherElems[i]);
        starting.push($( otherElems[i] ).css("opacity")*100);
        goal.push(100);
        functions.push(function(element, current){
           element.style.opacity  = current/100;
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
        console.log(i);
        elements.push(otherElems[i]);
        starting.push($( otherElems[i] ).css("opacity")*100);
        goal.push(0);
        functions.push(function(element, current){
           element.style.opacity  = current/100;
        });
    }

    animate(elements, starting, goal, 5, 3, functions, idLookup);

}

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

    animate(elements, starting, goal, 5, 3, functions, idLookup);

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

    animate(elements, starting, goal, 5, 3, functions, idLookup);

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
	animate(elemLine, lineStart, lineGoal, 5, 5,  functions, idLookup);

}

function hideLine(elemLine, idLookup) {

	var lineStart = [$( elemLine[0] ).width() / $(elemLine[0]).parent().width() * 100, $( elemLine[1] ).height()];
	var lineGoal = [0, 195]
	var functions = [function(element, current){
    	    element.style.width = current + '%';
    	    },function(element, current){
                 element.style.height = current + 'px';
             }];

	animate(elemLine, lineStart, lineGoal, 5, 5,  functions, idLookup);
	setTimeout(function () {
        elemLine[0].style.display = "none";
        },(100/5)*5);

}

function animate(elements, start, end, update, speed, functions, idLookup)
{
    var id = setInterval(frame, update);
    var overrides = 1;
    var currents = [];
    var completion= 0 ;

    function frame() {
        if(idLookup.value == 0  || idLookup.value == id)
        {
            overrides = 0;
            idLookup.value = id;
            if (completion > 100 || idLookup.value != id) {
                idLookup.value = id;
                clearInterval(id);

            } else {

                completion += speed;
                for(var i=0;i<elements.length; i++)
                {
                    currents[i] = ((completion/100) * (end[i] - start[i])) + start[i];
                }

                for(var i=0;i<currents.length; i++)
                {
                    functions[i](elements[i], currents[i]);
                }

            }

        }
        else
        {
            if(overrides > 0)
            {
                idLookup.value = id;
                overrides = 0;
            }
            else
            {
                clearInterval(id);
            }

        }
    }

}
