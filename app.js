$(document).ready(function(){
  var $app = $('#app');
  $app.html('');
  // App Title
  var $title = $('<h1>Twiddler</h1>');
  // Append title to the DOM
  $title.appendTo($app);
  // Set a click event listener on the h1 element
  $title.on("click", function(event) {
    console.log(event);
    alert('Title of this page is: ' + event.target.innerText);
  });
  var index = streams.home.length - 1;
  while(index >= 0){
    // most recent tweet that got pushed into the streams.home array
    var tweet = streams.home[index];
    // UI element ($ in front to notify human programmers that it is related to jQuery and not the backend)
    var $tweet = $('<div class="tweet"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($app);
    index -= 1;
  }
});

