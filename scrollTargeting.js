function scrollTargeting(region, level) {
	$(document).on({
		focus: function() { if (level > 1) scrollLock($(this)); },
		mouseenter: function() { if (level == 1 || level == 3) scrollLock($(this)); },
		mouseleave: function() { if ( (!$(this).is(':focus') && level == 3) || (level == 1) ) scrollLock(); },
		blur: function() { if (level > 1) scrollLock(); }
	}, region);

	var scrollLock = function(region) {
		if ( typeof(region) != 'undefined' && region !== null ) {
			// Lock
			$('html').attr({'style': 'overflow: hidden !important; background-attachment: fixed !important;'});
		} else {
			// Release
			$('html').attr({'style': 'overflow: visible !important; background-attachment: scroll !important;'});
		}
	};
}