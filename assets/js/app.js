$(document).foundation();

$('body').removeClass('fade-out');

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});

$('.carousel').flickity({
// cellAlign: 'left',
// wrapAround: true,
pageDots: false,
imagesLoaded: true,
// percentPosition: false,
arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});

// Sections
  var s = new sections();

  s.setSectionCallback('welcome', al.startAnimation, al.stopAnimation);

  var didScroll = false;
  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval(function() {
    if ( didScroll ) {
      didScroll = false;
      s.scrolled();
    }
  }, 250);
  
// Click event for the donate buttons.
  $(".button.donate").click(function( event ) {
    event.preventDefault();

    $('div#donateform').show();

    s.scrollToSection('donate');

  });