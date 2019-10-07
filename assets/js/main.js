$( document ).ready(function() {

  mobileNav();
  smoothScroll(1000);

  $(".welcome-note").fitText(1.2, { minFontSize: '22px', maxFontSize:'60px'});
  $(".work-head").fitText(1.2, { minFontSize: '20px', maxFontSize:'50px'});
  $("h2").fitText(1.2, { minFontSize: '15px', maxFontSize:'50px'});
  $(".work-detail").fitText(1.2, { minFontSize: '10px', maxFontSize:'18px'});
});

function mobileNav(){
  $('.mobile-nav-toggle').on('click',function(){
    var status = $(this).hasClass('is-open');
    $(".mob-nav-wrap").fadeToggle();
    if(status){ $('.mobile-nav-toggle, .mob-nav-wrap').removeClass('is-open');}
    else { $('.mobile-nav-toggle, .mob-nav-wrap').addClass('is-open');}
  });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
	    var target = $( $(this).attr('href') );
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

