(function($) {

    "use strict";
	
	$('.primary-menu').slicknav();

	$('.primary-menu').slicknav({
		label: 'xxxxxxxxxxxxxxs',
		brand: "xxxxxxxxxxxxxxs",
		duration: 1000,
		showChildren: true,
		easingOpen: "easeOutBounce",
		prependTo:'#primary-menu',
		appendTo:'#primary-menu'
	});

  // Setting default easing
  jQuery.easing.def = "easeInOutExpo";

  // Slick initializer function
  $(".panels-carousel").slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });


  
  $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	$('.primary-menu li.item-has-children').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});



// Preloader
// Change delay and fadeOut speed (in miliseconds)
$(window).load(function(){
  $(".preloader").delay(250).fadeOut(500);
});

})(jQuery);