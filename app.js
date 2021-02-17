$(document).ready(function(){
  var $app = $('#app');
  $app.html('');
  // App Title
  var $title = $('<h1>Twiddler</h1>');
  $title.appendTo($app);

  // Update Feed Button
  var $updateFeed = $('<button id="update-feed" type="button">Update Feed</button>');
  $updateFeed.appendTo($app);

  // Feed
  var $feed = $('<div id="feed"></div>');
  $feed.appendTo($app);

  $updateFeed.on("click", function() {
    // remove all previously existing tweets from feed
    $feed.html('');
    // create and append new tweets to the feed
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($feed);
      index -= 1;
    }
  });
});

