"use strict";


// Слайдер для фото 
window.onload = function () {
	jQuery(document).ready(function() {
		$('#slider').slick({
	 		slidesToShow: 3,
	  		slidesToScroll: 1,
	  		autoplay: true,
	  		autoplaySpeed: 2000,
		});
	});
}

// Быстрая кнопка наверх
$(document).ready(function(){ 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
	});
});