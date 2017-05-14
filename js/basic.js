
//maybe changes title & favicon on tab away? YESSSSSSS!!!
$(function() {
// Get page title
  var pageTitle = $("title").text();

// Change page title  and favicon on blur
$(window).blur(function() {
  $("title").text("Where are you!?!");
  $("#favicon").attr("href","img/wtf.ico");
});

// Change page title back on focus
$(window).focus(function() {
  $("title").text(pageTitle);
  $("#favicon").attr("href","img/supe_favicon.ico");
});
});

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});

// Trying to pulsate down arrow
/*
    $( document ).mousemove(function() {
      $( "#bobarrow" ).toggle( "pulsate" );
});
*/
  $(document).mousemove(function pulse(back) {
      $("#bobarrow").animate(
        {
             'font-size': (back) ? '75px' : '25px', opacity: (back) ? 1 : 0.5
        }, 100, function(){pulse(!back)
                          });
                        });


//looping through portfolio images
var image = [
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/graveyard.jpeg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/thetruth.jpg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/restart.jpeg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/random.jpeg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/paparazzi.jpg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/portfolio-1.jpg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/portfolio-2.jpg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/portfolio-3.jpg',
'file:///C:/Users/Ryan/Dropbox/Scrivener/portfolio/img/portfolio-4.jpg',
]
/*
var image = new Array();
for(int i=0;i<20;i++){
  image[i] = new Image();
  image[i].src = "images/names" + i + ".jpg";
}
*/

$(document).mousemove(function(e){
  var xPos = e.pageX;
  xPos = Math.floor(xPos/100);
  $(".img-portfolio").attr('src', image[xPos]);
});

// Disable Google Maps scrolling
var onMapMouseleaveHandler = function(event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
        var that = $(this);
        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);
        // Enable scrolling zoom
        that.find('iframe').css("pointer-events", "auto");
        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    }
    // Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);
