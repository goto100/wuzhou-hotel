function Gallery(ele, box, triggers) {
	this.ele = ele;
	this.box = box;
	this.triggers = triggers;
	this.images = [];
	this.current = 0;
	this.previous = 0;
	this.timer = null;
}
Gallery.prototype = {
	init: function(index) {
		if (!index) index = 0;
		var gallery = this;
		this.change(index);
		this.timer = setInterval(function() {
			var index = (gallery.current == gallery.triggers.length - 1)? 0 : gallery.current + 1;
			gallery.change(index);
		}, 5000);
		this.triggers.each(function(i, trigger){
			trigger = $(trigger);
			trigger.index = i;
			trigger.bind('click', function(e) {
				clearInterval(gallery.timer);
				gallery.change(i);
				return false;
			});
		});
	},
	change: function(i) {
		this.previous = this.current;
		this.current = i;
		var gallery = this;
		var trigger = $(this.triggers[this.current]);
		var item = this.images[this.current];
		$(this.triggers[this.previous]).removeClass('selected');
		trigger.addClass('selected');
		var image = new Image();
		image.onload = function() {
			gallery.ele.css('background', 'url(' + item.url + ') no-repeat center center');
			gallery.box.empty();
			gallery.box.html(item.box.html());
			if (gallery.onload) gallery.onload();
		}
		image.src = gallery.images[gallery.current].url;
	},
	addImage: function(url, box) {
		this.images.push({url: url, box: box});
	}
}

$('body').ready(function() {

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
