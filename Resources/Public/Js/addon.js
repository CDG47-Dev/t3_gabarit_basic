$(document).ready(function() {
	/* Bootstrap 3 Carousel with Play Pause button 
	https://codepen.io/itsthomas/pen/bEZBNa
	*/
    $('div[id^=carousel-]').carousel({
        interval:3000,
        pause: "false"
    });
    $('#playButton').click(function () {
        $('div[id^=carousel-]').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('div[id^=carousel-]').carousel('pause');
    });
	
	
	/* Accès Direct */
	  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
		 isClosed = false;

		trigger.click(function () {
		  hamburger_cross();      
		});

		function hamburger_cross() {

		  if (isClosed == true) {          
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			trigger.children(".glyphicon").removeClass('glyphicon-menu-right');
			trigger.children(".glyphicon").addClass('glyphicon-menu-left');
			isClosed = false;
		  } else {   
			overlay.show();
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			trigger.children(".glyphicon").removeClass('glyphicon-menu-left');
			trigger.children(".glyphicon").addClass('glyphicon-menu-right');			
			isClosed = true;
		  }
	  }
	  
	  $('[data-toggle="offcanvas"]').click(function () {
			$('#wrapper').toggleClass('toggled');
	  });
});