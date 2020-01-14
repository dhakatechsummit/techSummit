(function ($) {
    "use strict";


  // JQuery for countdown timer...
  var second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  month = day *30;

  var countDown = new Date('Jan 30, 2020 00:00:00').getTime(),
  x = setInterval(function () {

    var now = new Date().getTime(),
          distance = countDown - now;

          var countMonths = Math.floor(distance / (month));


          var countDays = Math.floor((distance % (month)) / (day));

          var countHours = Math.floor((distance % (day)) / (hour));
          var countMinutes = Math.floor((distance % (hour)) / (minute));
          var countSeconds = Math.floor((distance % (minute)) / second);

      $('#months').text(countMonths),
      $('#days').text(countDays),
          $('#hours').text(countHours),
          $('#minutes').text(countMinutes),
          $('#seconds').text(countSeconds);


          var monthsContainer = $('#months');
          var daysContainer = $('#days');
          var hoursContainer = $('#hours');
          var minutesContainer = $('#minutes');
          var secondsContainer = $('#seconds');


          if (parseInt(monthsContainer.text()) < 10) {
            monthsContainer.addClass('add-zero');
          } else {
              monthsContainer.removeClass('add-zero');
          }
          if (parseInt(daysContainer.text()) < 10) {
              daysContainer.addClass('add-zero');
          } else {
              daysContainer.removeClass('add-zero');
          }
          if (parseInt(hoursContainer.text()) < 10) {
              hoursContainer.addClass('add-zero');
          } else {
              hoursContainer.removeClass('add-zero');
          }
          if (parseInt(minutesContainer.text()) < 10) {
              minutesContainer.addClass('add-zero');
          } else {
              minutesContainer.removeClass('add-zero');
          }
          if (parseInt(secondsContainer.text()) < 10) {
              secondsContainer.addClass('add-zero');
          } else {
              secondsContainer.removeClass('add-zero');
          }


  }, second);


}(jQuery));
