
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
// Projects - Web Modules
    $('#radprwebmod1').mouseenter(function() {
        if(webExpanded.value)
        {
            focusRadial(this, webElems, prWebAnimationRadialRunning);
        }
    });
    $('#radprwebmod2').mouseenter(function() {
        if(webExpanded.value)
        {
            focusRadial(this, webElems, prWebAnimationRadialRunning);
        }
    });
    $('#radprwebmod3').mouseenter(function() {
        if(webExpanded.value)
        {
            focusRadial(this, webElems, prWebAnimationRadialRunning);
        }
    });
    $('#radprwebmod1').mouseleave(function() {
        unfocusRadials(webElems, prWebAnimationRadialRunning);
    });
    $('#radprwebmod2').mouseleave(function() {
        unfocusRadials(webElems, prWebAnimationRadialRunning);
    });
    $('#radprwebmod3').mouseleave(function() {
        unfocusRadials(webElems, prWebAnimationRadialRunning);
    });
// Projects - Web Modules
    $('#radprsoftmod1').mouseenter(function() {
        if(softExpanded.value)
        {
            focusRadial(this, softElems, prSoftAnimationRadialRunning);
        }
    });
    $('#radprsoftmod2').mouseenter(function() {
        if(softExpanded.value)
        {
            focusRadial(this, softElems, prSoftAnimationRadialRunning);
        }
    });
    $('#radprsoftmod3').mouseenter(function() {
        if(softExpanded.value)
        {
            focusRadial(this, softElems, prSoftAnimationRadialRunning);
        }
    });
    $('#radprsoftmod4').mouseenter(function() {
        if(softExpanded.value)
        {
            focusRadial(this, softElems, prSoftAnimationRadialRunning);
        }
    });
    $('#radprsoftmod1').mouseleave(function() {
        unfocusRadials(softElems, prSoftAnimationRadialRunning);
    });
    $('#radprsoftmod2').mouseleave(function() {
        unfocusRadials(softElems, prSoftAnimationRadialRunning);
    });
    $('#radprsoftmod3').mouseleave(function() {
        unfocusRadials(softElems, prSoftAnimationRadialRunning);
    });
    $('#radprsoftmod4').mouseleave(function() {
        unfocusRadials(softElems, prSoftAnimationRadialRunning);
    });

});