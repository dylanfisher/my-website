// JQuery Twitter Feed. Coded by Tom Elliott @ www.webdevdoor.com (2013) based on https://twitter.com/javascripts/blogger.js
// Requires JSON output from authenticating script: http://www.webdevdoor.com/php/authenticating-twitter-feed-timeline-oauth/
$(document).ready(function () {
    var displaylimit = Infinity; // This number is dependent on the settings in get-tweets1.1.php! Use get-tweets1.1.php to limit number of tweets.
    var twitterprofile = "xverdxse";
    var screenname = "Dylan Fisher";
    var showdirecttweets = false;
    var showretweets = false;
    var showtweetlinks = true;
    var showprofilepic = false;
    var showtweetactions = false;
    var showretweetindicator = false;

    var headerHTML = '';
    var loadingHTML = '';
    headerHTML += '<h2 class="title">Feed</h2>';
    loadingHTML += '<div id="loading-container" class="loading-container">Loading...</div>';

    $('#twitter-feed').html(loadingHTML);

    $.getJSON('private/get-tweets1.1.php',
        function(feeds) {
          // console.log(feeds);
           //alert(feeds);
            var feedHTML = '';
            var displayCounter = 1;
            for (var i=0; i<feeds.length; i++) {
                var tweetscreenname = feeds[i].user.name;
                var tweetusername = feeds[i].user.screen_name;
                var profileimage = feeds[i].user.profile_image_url_https;
                var status = feeds[i].text;
                var isaretweet = false;
                var isdirect = false;
                var tweetid = feeds[i].id_str;
                var media = feeds[i].entities.media;
                var twitterImage;

                if(typeof media != 'undefined'){
                  for (var j = 0; j < media.length; j++) {
                    twitterImage = '<img class="twitter-image" src="' + media[j].media_url + ':large' + '">';
                  }
                } else {
                  twitterImage = '';
                }

                //If the tweet has been retweeted, get the profile pic of the tweeter
                if(typeof feeds[i].retweeted_status != 'undefined'){
                   profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
                   tweetscreenname = feeds[i].retweeted_status.user.name;
                   tweetusername = feeds[i].retweeted_status.user.screen_name;
                   tweetid = feeds[i].retweeted_status.id_str;
                   status = feeds[i].retweeted_status.text;
                   isaretweet = true;
                 }

                 //Check to see if the tweet is a direct message
                 if (feeds[i].text.substr(0,1) == "@") {
                     isdirect = true;
                 }

                // console.log(feeds[i]);

                 //Generate twitter feed HTML based on selected options
                 if (((showretweets === true) || ((isaretweet === false) && (showretweets === false))) && ((showdirecttweets === true) || ((showdirecttweets === false) && (isdirect === false)))) {
                    if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {
                        if (showtweetlinks === true) {
                            status = addlinks(status);
                        }

                        if (displayCounter === 1) {
                            feedHTML += headerHTML;
                        }

                        feedHTML += '<div class="twitter-article" id="tw'+displayCounter+'">';
                        // feedHTML += '<div class="twitter-pic"><a href="https://twitter.com/'+tweetusername+'" target="_blank"><img src="'+profileimage+'"images/twitter-feed-icon.png" width="42" height="42" alt="twitter icon" /></a></div>';
                        feedHTML += '<div class="twitter-date"><p><span class="tweet-time"><a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'" target="_blank">'+relative_time(feeds[i].created_at)+'</a></span></p></div>';
                        feedHTML += '<div class="twitter-text"><p>'+status+'</p>';
                        feedHTML += twitterImage;

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
            // alert("error: " + error);
    });


    //Function modified from Stack Overflow
    function addlinks(data) {
        //Add link to all http:// links within tweets
        data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s<\>]*[^.,;'">\:\s<\>\)\]\!])/g, function(url) {
            return '<a href="'+url+'" >'+url+'</a>';
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
      var shortdate = values[1] + " " + values[2] + ", " + values[5];
      delta = delta + (relative_to.getTimezoneOffset() * 60);

      if (delta < 60) {
        return '1 minute ago';
      } else if(delta < 120) {
        return '1 minute ago';
      } else if(delta < (60*60)) {
        return (parseInt(delta / 60)).toString() + ' minutes ago';
      } else if(delta < (120*60)) {
        return '1 hour ago';
      } else if(delta < (24*60*60)) {
        return (parseInt(delta / 3600)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
        //return '1 day';
        return shortdate;
      } else {
        return shortdate;
      }
    }

});