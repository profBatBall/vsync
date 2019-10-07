
;(function($){
	$.fn.accordion = function(opts){
		var defaults = {
				max: "620px",
				min: "140px",
				speed: "1000",
				lazyload:true
		}

		var opts = $.extend(defaults, opts);

		this.each(function(){
			var t = $(this),
					m = t.children(),
					c = m.children();

			m.find(".active a").hide();
			m.on("mouseenter","li",function(){

				if(opts.lazyload == true && typeof($(this).attr("data-src")) !== "undefined"){
				  var src = $(this).attr("data-src");
				  $(this).css("background-image","url(" + src +")").removeAttr("data-src");
				}

				$(this).addClass('active')
							.animate({width:opts.max},opts.speed)
							.children().fadeOut(opts.speed)
							.parent().siblings().removeClass('active')
							.animate({width:opts.min},opts.speed)
							.children().show(opts.speed);

			})
		})
	}

})(jQuery);
