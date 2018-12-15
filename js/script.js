<!--Javascript taget fra https://www.codingforums.com/javascript-programming/222935-automatically-changing-text-daily-code.html-->
var scheduleDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
onload = function () {
    var today = new Date();
    var DOW = today.getDay();
    document.getElementById(scheduleDays[DOW]).style.display = 'block';
}


/*****mobile menu*****/

function openSlideMenu() {
    document.getElementById('menumobile').style.width = '250px';
    document.getElementById('contentmobile').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('menumobile').style.width = '0';
    document.getElementById('contentmobile').style.marginLeft = '0';
}


(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */


    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };




})(jQuery);


var win = $(window);

var allMods = $(".module");

allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });


});

/*video hover effekt

var figure = $("#video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('doc', this).get(0).play(); 
}

function hideVideo(e) {
    $('doc', this).get(0).pause(); 
}*/
'use strict';

// scroll-eventlistener 
window.addEventListener("scroll", function () {
    console.log('nu scrolles der ...'); // test 

    $("video").prop('muted', true); //muted
    // hvis erJegHer er synlig, så ... 
    if (elFllVsbl(video)) {
        console.log(elFllVsbl(video)); // sender true nå video er visible 

        if (!(video.curentTime > 0)) {
            video.load(); // load the videovideo.play(); // play audio 
            video.play();
        }
    } else {
        console.log(elFllVsbl(video)); // test 
        video.pause();

    }
})

// funktionen tester om videoen er synlig 
// og returnerer true eller false 
function elFllVsbl(el) {
    return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}
