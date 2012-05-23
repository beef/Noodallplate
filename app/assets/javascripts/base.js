// -------------- BASE.JS --------------
// Basic, App wide scripts and plugin options

// -------------- JQUERY START --------------
$(document).ready(function () {

// STYLING FIX'S

// IE FIX'S

}); //eo: Document Ready


// -------------- COMMON FUNCTIONS/TOOLS/PLUGINS --------------

// SLIDES.JS SLIDE SHOW
// $(function(){
//   $('.hero-panel').slides({
//   preload: true,
//   preloadImage: '/images/loading.gif',
//   effect:'slide',
//   hoverPause: false,
//   generatePagination: false,
//   slideSpeed: 800,
//   generateNextPrev: true
//   });
//   $('.js-needed').hide();
// });

// ADDING BODY IMAGES
// $(".content-image").each(function(){
//   image = $(this);
//   image.wrap('<a class="lightbox image-wrap" rel="body-images" target="_blank" title="'+ image.attr('title') +'" href="'+   image.attr('longdesc') +'" />');
//   image.after('<span class="zoom">&nbsp;</span>');
// });

// FANCYBOX
// $('a.lightbox, .gallery ul li a').fancybox({
//   'autoScale'       : true,
//   'centerOnScroll'  : true,
//   'overlayOpacity'  : "0.85", 
//   'overlayColor'    : "#2d2d2d",
//   'padding'         : 0,
//   'titleShow'       : true,
//   'titlePosition'   : 'outside',
//   'transitionIn'    : 'fade',
//   'transitionOut'   : 'fade'
// });

// JCAROUSEL LITE 
// $(".component.gallery.large .carousel").each(function(index, gallery) {
//   gallery = $(gallery);
//   if (gallery.find('li').length > 1) {
//     gallery.prepend("<a class='carousel-control prev'>Backward</a>");
//     gallery.append("<a class='carousel-control next'>Forward</a>");
//     gallery.jCarouselLite({
//       btnNext: gallery.find('a.next'),
//       btnPrev:  gallery.find('a.prev'),
//       visible: 2,
//       circular: true
//     });
//   }
// });

// FLASH MESSAGES
// $('#flash').delay(4000).slideUp(400);