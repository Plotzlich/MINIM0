$(document).ready(function () {
  $('.fa-bars').click(function (e) {
    $(this).toggleClass('active');
      $('.nav_menu').toggle();
        });

        $('.close').click(function(){
          $('.nav_menu').hide();
        })
    });