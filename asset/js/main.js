$(document).ready(function () {

	var $items = JSON.parse(items);

    var swiper_options = {
		pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		paginationClickable: true,
		keyboardControl: true,
		mousewheelControl: true,
//      hashnav: true,
        preloadImages: false,
        lazyLoading: true,
		onInit: function(swiper) {

            $slide = $(swiper.slides[0]).find('.bg');
            $slide.css('background-image', 'url('+$slide.data('path')+'/'+$slide.data('image')+'?v='+$slide.data('utime')+')');

            $(swiper.slides[0]).find('a').css('opacity','1').addClass('zoomIn');
		},
		onSlideChangeStart: function(swiper) {
			$slide = $(swiper.slides[swiper.activeIndex]).find('.bg');console.log($slide.data('path'));
            $slide.css('background-image', 'url('+$slide.data('path')+'/'+$slide.data('image')+'?v='+$slide.data('utime')+')');
			swiper.disableMousewheelControl();
		},
		onSlideChangeEnd: function(swiper) {
			setTimeout(function(){
            	swiper.enableMousewheelControl();
            }, 1000);
		},
		onTransitionEnd: function(swiper) {

            var count = swiper.slides.length;

            for(var i=0; i<count; i++) {
                $(swiper.slides[i]).find('a').css('opacity','0').removeClass('zoomIn');
            }

            $(swiper.slides[swiper.activeIndex]).find('a').css('opacity','1').addClass('zoomIn');
		}
    };

	var swiper = new Swiper('.swiper-container', $.extend(swiper_options, swiper_options_custom));
});
