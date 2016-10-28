
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
