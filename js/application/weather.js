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