// Dropdown menus in the top horinzontal navigation bar
$(document).ready(function() {
  $('#navigation > ul li').hover(function() {
    $(this).addClass('ie-over');
  }, function() {
    $(this).removeClass('ie-over');
  });
});
