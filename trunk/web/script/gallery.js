function Gallery(ele) {
	this.ele = ele;
	this.images = [];
}
Gallery.prototype = {
	init: function() {
		this.ele.css('background', 'url(res/gallery_1.png) no-repeat center center');
		alert(this.ele.get(0))
	},
	addImage: function(url) {
		this.images.push({url: url});
	}
}
