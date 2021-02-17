$(document).ready(function(){
  // Select already existing elements
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $feed = $('<div id="feed"></div>');
  var $updateFeed = $('<button id="update-feed" type="button">Update Feed</button>');

  // Create event handler functions
  var renderFeed = function() {
    $feed.html('');
    var index = streams.home.length - 1;
    var iconsPath = 'assets/icons/placeholder.png';
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var $iconsPath = 'assets/icons/placeholder.png';
      // Tweets UI Components
      var $profilePhoto = $('<img class="profile-photo">').attr('src', tweet.profilePhotoURL);
      var $username = $('<span class="username"></span>').text('@' + tweet.user);
      var $message = $('<p class="message"></p>').text(tweet.message);
      var $timestamp = $('<span class="timestamp"></span>').text(tweet.created_at);
      // Icons
      var $comment = $('<img class="icon comment">').attr('src', iconsPath);
      var $retweet = $('<img class="icon retweet">').attr('src', iconsPath);
      var $like = $('<img class="icon like">').attr('src', iconsPath);
      var $share = $('<img class="icon share">').attr('src', iconsPath);

      $tweet.append($profilePhoto, $username, $message, $timestamp, $comment, $retweet, $like, $share);
      $tweet.appendTo($feed);
      index -= 1;
    }
  }

  // Set event listeners
  renderFeed();
  $updateFeed.on("click", renderFeed);

  // Append new HTML elements to the DOM
  $title.appendTo($app);
  $updateFeed.appendTo($app);
  $feed.appendTo($app);
});

