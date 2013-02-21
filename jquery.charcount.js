/**
jquery charCount - Simple dynamic character count for a textarea
https://github.com/dogawaf/jquery.charcount.js

Copyright 2013, Rémy DANIEL <dogawaf@no-log.org>
Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
;(function($) {

	$.fn.charCount = function(option){

		// default configuration properties
		var defaults = {
			allowed: 500,
			warning: 10,
			cssWarning: 'warning',
			cssExceeded: 'error',
			counterText: '',
			errorWrapperSelector: '.input'
		};

		var options = $.extend(defaults, option);

		var calculate = function(){
			var $this = $(this),
			count = $this.val().length,
			available = options.allowed - count,
			$counter = $this.next(),
			$container = $this.closest(options.errorWrapperSelector);

			if(available <= options.warning && available >= 0){
				$counter.addClass(options.cssWarning);
			} else {
				$counter.removeClass(options.cssWarning);
			}
			if(available < 0){
				$container.addClass(options.cssExceeded);
			} else {
				$container.removeClass(options.cssExceeded);
			}
			$counter.html(options.counterText + available);
		};

		return this.each(function() {

			var $this = $(this),
			handler = $.proxy(calculate, this);

			$this
				.on('keyup.charCount', handler)
				.on('change.charCount', handler);

			//start
			handler();
		});
	};

})(jQuery);
