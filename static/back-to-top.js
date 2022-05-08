$(document).ready(function () {
  var x = document.getElementById('topButton');
  var btn = $("#back-to-top");

  window.onscroll = function () {
      if (document.documentElement.scrollTop > (x.getBoundingClientRect().top) / 2) {
        x.style.visibility = 'visible';
        x.style.animation = 'fadeIn linear 0.5s 0s';
      } else {
        x.style.animation = 'fadeOut linear 0.4s';
         if (document.documentElement.scrollTop < (x.getBoundingClientRect().top)) {
          x.style.visibility = 'hidden';
        }
      }
  };

  btn.click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
  });
});

