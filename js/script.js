
  $('section.popup-banner .close-icon').on('click',function(){
   $('section.popup-banner').css({
     'opacity':'0',
     'visibility':'hidden'
   });
  });

  /*== Hero Button Append JS ==*/
  var resizeTimer;
  $(window).resize(function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
          if ($(window).width() <= 767) {
            $('.hero-button ').slice().insertAfter('.banner-section .right-col .image');
          } 
          else {
            $('.hero-button ').slice().insertAfter('.heading.pb-5');
          }
      });
  });