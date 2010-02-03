$('body').ready(function() {
	gallery.onload = function() {
		var more = $('#gallery .section .more');
		more.trigger = $('#gallery .section .more a');
		more.menu = $('#gallery .section .menu');
		more.menu.hide();
		more.trigger.click(function() {
			more.menu.toggle();
			clearInterval(gallery.timer);
		});
	}

	$('.content-panel .figure a, #thumbFigures a').lightBox({
		imageLoading: 'lib/lightbox/images/lightbox-ico-loading.gif',
		imageBtnClose: 'lib/lightbox/images/lightbox-btn-close.gif',
		imageBtnPrev: 'lib/lightbox/images/lightbox-btn-prev.gif',
		imageBtnNext: 'lib/lightbox/images/lightbox-btn-next.gif'
	});

	var anchors = $('.content-panel .nav li a');
	anchors.click(function() {
		for (var i = 0; anchor = anchors[i]; i++) {
			$($(anchor).attr('href')).hide();
			$(anchor.parentNode).removeClass('selected');
		}
		$($(this).attr('href')).show();
		$(this.parentNode).addClass('selected');
		return false;
	});
})

