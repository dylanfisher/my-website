$(function() {
  // say hi
  console.log('hi there');

  // animated elephant favicon
  var frames = 8,
      frame = 0;
  var anim = setInterval(function() {
    frame++;
    if(frame === frames - 1){
      frame = 0;
    }
    document.getElementById('favicon').setAttribute('href', 'images/elephant/' + frame + '.png');
  }, 400);

  $(document).on('click', '.twitter-image', function(){
    var url = $(this).attr('src');
    var container = $(this).closest('.twitter-article').attr('id');
    if ($(this).hasClass('open')) {
      // Do nothing
    } else {
      $(this).addClass('open');
      $('body').prepend('<div class="overlay"><img data-id="' + container + '" src="' + url + '"></div>');
      $('#wrapper').addClass('blur');
    }
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