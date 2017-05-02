"use strict";

window.onload = function () {
	jQuery(document).ready(function() {
		// $('#slider').slick({
		//   	lazyLoad: 'ondemand',
  // 			slidesToShow: 3,
  // 			slidesToScroll: 1
		// });

		$('#slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});


// 		$('#slider').slick({
	//   infinite: true,
	//   slidesToShow: 3,
	//   slidesToScroll: 3
	// });

	// $('.div_td').slick();
	});
}