/*
*   PROJECT:     SCROLL DETECT
*   VERSION:     1.0
*   URL PROJECT: https://github.com/JorgeAndradeNeto/scroll-detect
*
*   AUTHOR:      JORGE ANDRADE NETO
*   URL AUTHOR:  https://github.com/JorgeAndradeNeto
*   FROM:        BELÉM - PARÁ - BRAZIL
*/

jQuery(document).ready(function ($) {
	var lst = 0;
 	$( window ).scroll(function(event) {
    	var st = $(this).scrollTop();
		if(st > lst){
			console.log("DOW");
		} else {
            console.log("UP");
		}
		lst = st;
	});
});