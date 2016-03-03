function galleryHover(){
	jQuery('.gallery-thumbs li').mouseenter( function(){
		//grab class name
		var imgClass = this.className;
		//make sure all images are showing
		jQuery('.gallery-img li').show();
		// hide all imgs not of the same class as thumb
		jQuery('.gallery-img li' ).not('.' + imgClass).hide();
	});
			
}