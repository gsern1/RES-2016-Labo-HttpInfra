$(function() {
  console.log("Loading meetings");

  function loadMeetings(){
        $.getJSON( "/api/meetings/", function( meetings ){
          console.log(meetings);
          var message = "No meeting scheduled";
          if ( meetings.length > 0) {
                message = meetings[0].adress + " " + meetings[0].city + " " + meetings[0].country + " " + meetings[0].date;
          }
          $(".intro-text").text(message);
        });
  };

loadMeetings();
setInterval(loadMeetings, 2000);

});