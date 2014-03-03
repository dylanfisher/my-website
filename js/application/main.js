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

  $('#emoji-toggle').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).html('<img src="images/smiley-sad.svg" title="Turn emoji on">');
      $('#head-title').html('Dylan Fisher');
      $('#emoji-container').html('');
      clearInterval(emojiInterval);
    } else {
      $(this).addClass('active');
      $(this).html('<img src="images/smiley.svg" title="Turn emoji off">');
      addEmoji();
    }
  });

  $(document).on('click', '#emoji-container', function(){
    $('#emoji-container').html('');
  });

  var emojiLength = emojiArray.length;
  function randomEmoji(){
    var rand = Math.floor(Math.random() * emojiLength);
    var emoji = decodeURI( emojiArray[rand] );
    return emoji;
  }

  var emojiInterval;
  function addEmoji(){
    if($(window).width() > 850){
      var timer;
      emojiInterval = setInterval(function(){
        emoji = randomEmoji();
        $('#head-title').html(emoji);
        randX = Math.floor(Math.random() * $(document).width() - 50);
        randY = Math.floor(Math.random() * $(document).height()) - 50;
        $('#emoji-container').append('<div style="top:' + randY + 'px; left:' + randX + 'px;">' + emoji + '</div>');
      }, 2000);
    }
  }

  // Start and stopp emoji if mouse isn't moving
  var mouseMoving = false;
  $(document).mousemove(function() {
    clearTimeout(mouseMoving);
    clearInterval(emojiInterval);
    $('#head-title').html('Dylan Fisher');
    mouseMoving = setTimeout(function() {
      if($('#emoji-toggle.active').length){
        addEmoji();
      }
    }, 2000);
  });

});