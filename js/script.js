$(function(){
	//DOM READY 

'use strict'
$( ".btn" ).button();

    var slide = function(){
        var $slideshow = $('.gallery-img');



        /* Slick namespace check */
        if( $().slick ){

            $slideshow.slick();

        }


    }();

});



