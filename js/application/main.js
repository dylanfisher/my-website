(function(){
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
})();