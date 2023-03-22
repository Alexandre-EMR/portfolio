$(document).ready(function() {
    const animateElements = function() {
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();
  
      $(".grid-item, .animated-title, .animated-subtitle").each(function() {
        const positionFromTop = $(this).offset().top;
  
        if (positionFromTop - scrollTop < windowHeight - 100) {
          $(this).addClass("visible");
        }
      });
    };
  
    $(window).scroll(function() {
      animateElements();
    });
  
    animateElements();
});
