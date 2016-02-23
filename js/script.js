

//---------------------------------------------


jQuery( window ).load(function() {
	jQuery('#home-slideshow li:first').addClass('current');

	//inserts a div inside sub-menu for design purposes
	jQuery('.sub-menu').prepend('<div id="tri-up"></div>');

	// calls function 
	jQuery(".sub-menu *").bold("painters", "bold");// 'painters' is the specified string, bold is the class
	jQuery(".sub-menu *").bold("ceramics", "bold");
	jQuery(".sub-menu *").bold("writers", "bold");
	jQuery(".sub-menu *").bold("musicians", "bold");
	jQuery(".sub-menu *").bold("drawing", "bold");

	setInterval('rotateImages()', 5000);// interval time for slideshow on front page

});

//the function below was leveraged from http://www.gotoquiz.com/web-coding/programming/javascript/highlight-words-in-text-with-jquery/
// this function finds specific strings, wraps them in a div with a specified class
jQuery.fn.bold = function (str, className) {
    var regex = new RegExp(str, "gi");
    return this.each(function () {
        jQuery(this).contents().filter(function() {
            return this.nodeType == 3 && regex.test(this.nodeValue);
        }).replaceWith(function() {
            return (this.nodeValue || "").replace(regex, function(match) {
                return "<span class=\"" + className + "\">" + match + "</span>";
            });
        });
    });
};


//set up the slideshow on front page
function rotateImages(){
    $current = jQuery('#home-slideshow li.current');
    $next = ($current.next().length > 0) ? $current.next() : jQuery('#home-slideshow li:first');

    $current.removeClass('current').addClass('previous');
    $next.css('opacity', 0).addClass('current').animate({opacity: 1}, 1300, function(){
      $current.removeClass('previous');
      })
  }

