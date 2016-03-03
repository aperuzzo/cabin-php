

//set up the slideshow on front page
function rotateImages(){
    $current = jQuery('#home-slideshow li.current');
    $next = ($current.next().length > 0) ? $current.next() : jQuery('#home-slideshow li:first');

    $current.removeClass('current').addClass('previous');
    $next.css('opacity', 0).addClass('current').animate({opacity: 1}, 1300, function(){
      $current.removeClass('previous');
      })
  }

