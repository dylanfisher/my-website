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

//JQuery Twitter Feed. Coded by Tom Elliott @ www.webdevdoor.com (2013) based on https://twitter.com/javascripts/blogger.js
//Requires JSON output from authenticating script: http://www.webdevdoor.com/php/authenticating-twitter-feed-timeline-oauth/

$(document).ready(function () {
  var displaylimit = 100;
  var twitterprofile = "Dylan Fisher";
  var screenname = "xverdxse";
  var showdirecttweets = false;
  var showretweets = true;
  var showtweetlinks = true;
  var showprofilepic = true;
  var showtweetactions = false;
  var showretweetindicator = true;
  var expanded_url;

  var headerHTML = '';
  var loadingHTML = '';
  // headerHTML += '<a href="https://twitter.com/" target="_blank"><img src="images/twitter-bird-light.png" width="34" style="float:left;padding:3px 12px 0px 6px" alt="twitter bird" /></a>';
  // headerHTML += '<h1>'+screenname+' <span style="font-size:13px"><a href="https://twitter.com/'+twitterprofile+'" target="_blank">@'+twitterprofile+'</a></span></h1>';
  // loadingHTML += '<div id="loading-container"><img src="images/ajax-loader.gif" width="32" height="32" alt="tweet loader" /></div>';

  $('#twitter-feed').html(headerHTML + loadingHTML);

  $.getJSON('private/get-tweets1.1.php', function(feeds) {
    //alert(feeds);
    var feedHTML = '';
    var displayCounter = 1;
    for (i=0; i<feeds.length; i++) {
      var tweetscreenname = feeds[i].user.name;
      var tweetusername = feeds[i].user.screen_name;
      var profileimage = feeds[i].user.profile_image_url_https;
      var status = feeds[i].text;
      var isaretweet = false;
      var isdirect = false;
      var tweetid = feeds[i].id_str;

      //If the tweet has been retweeted, get the profile pic of the tweeter
      if(typeof feeds[i].retweeted_status != 'undefined'){
        profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
        tweetscreenname = feeds[i].retweeted_status.user.name;
        tweetusername = feeds[i].retweeted_status.user.screen_name;
        tweetid = feeds[i].retweeted_status.id_str;
        status = feeds[i].retweeted_status.text;
        isaretweet = true;
      }

      // Set links to use their expanded format
      if(feeds[i].entities.urls.length){
        for (var j=0; j<feeds[i].entities.urls.length; j++) {
          expanded_url = feeds[i].entities.urls[j].expanded_url;
        }
      } else {
        // Check if there are image URLs
        if(typeof feeds[i].entities.media != 'undefined'){
          for (var k=0; k<feeds[i].entities.media.length; k++) {
            expanded_url = feeds[i].entities.media[k].media_url + ":large";
          }
        } else {
          expanded_url = '';
        }
      }

      //Check to see if the tweet is a direct message
      if (feeds[i].text.substr(0,1) == "@") {
        isdirect = true;
      }

      console.log(feeds[i]);

      //Generate twitter feed HTML based on selected options
      if (((showretweets === true) || ((isaretweet === false) && (showretweets === false))) && ((showdirecttweets === true) || ((showdirecttweets === false) && (isdirect === false)))) {
        if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {
          if (showtweetlinks === true) {
            status = addlinks(status);
          }

          if (displayCounter == 1) {
            feedHTML += headerHTML;
          }

          feedHTML += '<div class="twitter-article" id="tw'+displayCounter+'">';
          // feedHTML += '<div class="twitter-pic"><a href="https://twitter.com/'+tweetusername+'" target="_blank"><img src="'+profileimage+'"images/twitter-feed-icon.png" width="42" height="42" alt="twitter icon" /></a></div>';
          feedHTML += '<div class="twitter-text"><span class="tweet-time">'+relative_time(feeds[i].created_at)+'</span> '+status;

          if ((isaretweet === true) && (showretweetindicator === true)) {
            feedHTML += '<div id="retweet-indicator"></div>';
          }
          if (showtweetactions === true) {
            feedHTML += '<div id="twitter-actions"><div class="intent" id="intent-reply"><a href="https://twitter.com/intent/tweet?in_reply_to='+tweetid+'" title="Reply"></a></div><div class="intent" id="intent-retweet"><a href="https://twitter.com/intent/retweet?tweet_id='+tweetid+'" title="Retweet"></a></div><div class="intent" id="intent-fave"><a href="https://twitter.com/intent/favorite?tweet_id='+tweetid+'" title="Favourite"></a></div></div>';
          }

          feedHTML += '</div>';
          feedHTML += '</div>';
          displayCounter++;
        }
      }
    }

    $('#twitter-feed').html(feedHTML);

    //Add twitter action animation and rollovers
    if (showtweetactions === true) {
    $('.twitter-article').hover(function(){
    $(this).find('#twitter-actions').css({'display':'block', 'opacity':0, 'margin-top':-20});
    $(this).find('#twitter-actions').animate({'opacity':1, 'margin-top':0},200);
    }, function() {
    $(this).find('#twitter-actions').animate({'opacity':0, 'margin-top':-20},120, function(){
    $(this).css('display', 'none');
    });
    });

    //Add new window for action clicks

    $('#twitter-actions a').click(function(){
    var url = $(this).attr('href');
    window.open(url, 'tweet action window', 'width=580,height=500');
    return false;
    });
    }


  }).error(function(jqXHR, textStatus, errorThrown) {
    var error = "";
    if (jqXHR.status === 0) {
      error = 'Connection problem. Check file path and www vs non-www in getJSON request';
    } else if (jqXHR.status == 404) {
      error = 'Requested page not found. [404]';
    } else if (jqXHR.status == 500) {
      error = 'Internal Server Error [500].';
    } else if (exception === 'parsererror') {
      error = 'Requested JSON parse failed.';
    } else if (exception === 'timeout') {
      error = 'Time out error.';
    } else if (exception === 'abort') {
      error = 'Ajax request aborted.';
    } else {
      error = 'Uncaught Error.\n' + jqXHR.responseText;
    }
    alert("error: " + error);
  });


  //Function modified from Stack Overflow
  function addlinks(data) {
  //Add link to all http:// links within tweets
  data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s<\>]*[^.,;'">\:\s<\>\)\]\!])/g, function(url) {
    return '<a href="'+expanded_url+'"  target="_blank">'+expanded_url+'</a>';
  });

  //Add link to @usernames used within tweets
  data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
    return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
  });
  //Add link to #hastags used within tweets
  data = data.replace(/\B#([_a-z0-9]+)/ig, function(reply) {
    return '<a href="https://twitter.com/search?q='+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
  });
  return data;
  }


  function relative_time(time_value) {
    var values = time_value.split(" ");
    time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
    var shortdate = time_value.substr(4,2) + " " + time_value.substr(0,3);
    delta = delta + (relative_to.getTimezoneOffset() * 60);

    if (delta < 60) {
      return '1m';
    } else if(delta < 120) {
      return '1m';
    } else if(delta < (60*60)) {
      return (parseInt(delta / 60)).toString() + 'm';
    } else if(delta < (120*60)) {
      return '1h';
    } else if(delta < (24*60*60)) {
      return (parseInt(delta / 3600)).toString() + 'h';
    } else if(delta < (48*60*60)) {
  //return '1 day';
  return shortdate;
  } else {
      return shortdate;
    }
  }

});

$(function(){
  var weather;
  $.getJSON('private/weather.php', function(data, response) {
    weather = data.ForecastIOConditionsraw_data;
    setWeather();
  });

  function setWeather(){
    // console.log(weather);

    var temp = String(weather.temperature).split('.')[0] + '&#176;';
    var localTime = new Date(parseInt(weather.time + '000'));
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July",
                       "August", "September", "October", "November", "December" ];
    month = monthNames[localTime.getMonth()];
    var localDate = month + ' ' + localTime.getDate() + ', ' + localTime.getFullYear();

    $('#temperature').html(temp);
    $('#date').html(localDate);

    // Icons
    var ci = weather.icon;
    var icon = $('#icon');
    if (ci == 'clear-day'){
      icon.html('<span title="Clear day">&#9728;</span>');
    } else if (ci == 'clear-night'){
      icon.html('<span title="Clear night">&#9790;</span>');
    } else if (ci == 'rain'){
      icon.html('<span title="Rain">&#9730;</span>');
    } else if (ci == 'snow'){
      icon.html('<span title="Snow">&#10052;</span>');
    } else if (ci == 'sleet'){
      icon.html('<span title="Sleet">&#9730; &#10053</span>');
    } else if (ci == 'wind'){
      icon.html('<span title="Wind">&#8779;</span>');
    } else if (ci == 'fog'){
      icon.html('<span title="Fog">&#9618;</span>');
    } else if (ci == 'cloudy'){
      icon.html('<span title="Cloudy">&#9729;</span>');
    } else if (ci == 'partly-cloudy-day'){
      icon.html('<span title="Partly cloudy">&#9728; &#9729;</span>');
    } else if (ci == 'partly-cloudy-night'){
      icon.html('<span title="Partly cloudy">&#9790; &#9729;</span>');
    } else {
      icon.html('<span>&#10005;</span>');
    }
  }
});