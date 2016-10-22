
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
