
var inTechSubAnimationRunning = {value: 0 };
var inTechAnimationRunning = {value: 0 };
var inSportSubAnimationRunning = {value: 0 };
var inSportAnimationRunning = {value: 0 };
var inSocialAnimationRunning = {value: 0 };
var prSoftAnimationRunning = {value: 0};
var prSoftAnimationRadialRunning = {value: 0};
var prWebAnimationRunning = {value: 0};
var prWebAnimationRadialRunning = {value: 0};


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
