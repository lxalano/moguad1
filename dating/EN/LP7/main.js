$(document).ready(function() {
    $('.next').on('click', function(e) {
      e.preventDefault();
      goNext($(this));
    });

    function goNext(self) {
      self.closest('.item').hide().next().show().addClass('animated flipInY');
    }
  });