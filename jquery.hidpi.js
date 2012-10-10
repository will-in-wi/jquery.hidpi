(function( $ ) {
	$.fn.hidpi = function(hidpi_attr, normal_attr) {
		if (hidpi_attr === undefined) {
			hidpi_attr = 'data-src-hidpi';
		}

		if (normal_attr === undefined) {
			normal_attr = 'data-src';
		}
		return this.each(function(){
			if (window.devicePixelRatio > 1) {
				$(this).attr('src', $(this).attr(hidpi_attr));
			} else {
				$(this).attr('src', $(this).attr(normal_attr));
			}
		});
	};
})( jQuery );