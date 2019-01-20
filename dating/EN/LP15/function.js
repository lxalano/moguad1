$(document).ready(function() {

      $('.next').on('click', function(e) {
        e.preventDefault();
        goNext($(this));
      });

      $('.btn__redirect').on('click', function() {
        $('.stepbox').animate({
          bottom: '-200%'
        }, 500);
      });

      function goNext(self) {

        if ($(document).width() < 992) {
          self.closest('.stepbox').animate({
            bottom: '-200%'
          }, 600);
        } else {
          self.closest('.stepbox').animate({
            left: '-200%'
          }, 600);
        }

        setTimeout(function() {
          self.closest('.step').hide().next().show();

          if ($(document).width() < 992) {
            self.closest('.stepbox').animate({
              bottom: '0'
            }, 600);
          } else {
            self.closest('.stepbox').animate({
              left: '0'
            }, 600);
          }

          $('.step__crumbs li.active').removeClass('active').next().addClass('active');
        }, 1000);

        setTimeout(function() {
          $('.bg__item.active')
            .removeClass('active')
            .hide()
            .next()
            .fadeIn()
            .addClass('active');
        }, 1600);
      }
    });