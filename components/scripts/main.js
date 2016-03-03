

jQuery( window ).load(function() {
	jQuery('#home-slideshow li:first').addClass('current');

	//inserts a div inside sub-menu for design purposes
	jQuery('.sub-menu').prepend('<div id="tri-up"></div>');

	// calls function 
	jQuery(".sub-menu *").bold("painter’s", "bold");// 'painters' is the specified string, bold is the class
	jQuery(".sub-menu *").bold("ceramics", "bold");
	jQuery(".sub-menu *").bold("writers", "bold");
	jQuery(".sub-menu *").bold("musicians", "bold");
	jQuery(".sub-menu *").bold("drawing", "bold");
	jQuery('h1').bold("painter’s", "bold");

	setInterval('rotateImages()', 5000);// interval time for slideshow on front page
	galleryHover();
});