$(function() {
  // say hi
  console.log('hi there');

  // Random colored favicon
  var frames = 72,
      frame = 0;

  // Scroll up when checking the weather
  $('#weather').click(function(){
    $('html, body').animate({scrollTop: 0}, 200);
  });

  window.setTimeout(function(){
    frame = Math.floor(Math.random() * frames);
    document.getElementById('favicon').setAttribute('href', 'images/rainbow/rainbow' + frame + '.gif');
  }, 15000);

  // Switch link style with regular style on hover
  $(document).on('mouseenter', 'a', function(){
    $('body').addClass('link-active');
  });
  $(document).on('mouseleave', 'a', function(){
    $('body').removeClass('link-active');
  });

  $(document).on('click', '.overlay', function(){
    var id = $(this).find('img').data('id');
    var image = document.getElementById(id);
    $(this).closest('.overlay').remove();
    $(image).find('img').removeClass('open');
    if ($('.overlay').length){
      // Do nothing
    } else {
      $('#wrapper').removeClass('blur');
    }
  });

});
