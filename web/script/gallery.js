function Gallery(ele, triggers) {
	this.ele = ele;
	this.triggers = triggers;
	this.images = [];
}
Gallery.prototype = {
	init: function() {
		var gallery = this;
		this.ele.css('background', 'url(res/splash_1.png) no-repeat center center');
		this.triggers.each(function(i, trigger){
			trigger = $(trigger);
			trigger.bind('click', function(e) {
				trigger.addClass('selected');
				var image = new Image();
				image.onload = function() {
					gallery.ele.css('background', 'url(' + gallery.images[i].url + ') no-repeat center center');
				}
				image.src = gallery.images[i].url;
				return false;
			});
		})
	},
	addImage: function(url) {
		this.images.push({url: url});
	}
}
