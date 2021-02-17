$(document).ready(function(){
  // Select already existing elements
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $feed = $('<div id="feed"></div>');
  var $updateFeed = $('<button id="update-feed">Update Feed</button>');

  // Create event handler functions
  var renderFeed = function() {
    $feed.empty();
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      // Tweets UI Components
      var $profilePhoto = $('<img class="profile-photo" src="./assets/img/' + tweet.user + '.png">')
      var $username = $('<span class="username">@' + tweet.user + '</span>');
      var $message = $('<p class="message">' + tweet.message + '</p>');
      var $timestamp = $('<span class="timestamp">' + jQuery.timeago(tweet.created_at) + '</span>');
      // Icons
      var $comment = $('<i class="icon comment far fa-comment"></i>');
      var $retweet = $('<i class="icon retweet fas fa-retweet"></i>');
      var $like = $('<i class="icon like far fa-heart"></i>');
      var $share = $('<i class="icon share far fa-share-square"></i>');

      $tweet.append($profilePhoto, $username, $message, $timestamp, $comment, $retweet, $like, $share);
      $tweet.appendTo($feed);
      index -= 1;
    }
    $('.username').on('click', handleUsernameClick);
  };

  var renderUserFeed = function(name) {
    $feed.empty();
    index = streams.users[name].length - 1;
    while(index >= 0){
      tweet = streams.users[name][index];
      var $tweet = $('<div class="tweet"></div>');
      // Tweets UI Components
      var $profilePhoto = $('<img class="profile-photo" src="assets/img/' + tweet.user + '.png">')
      var $username = $('<span class="username">@' + tweet.user + '</span>');
      var $message = $('<p class="message">' + tweet.message + '</p>');
      var $timestamp = $('<span class="timestamp">' + jQuery.timeago(tweet.created_at) + '</span>');
      // Icons
      var $comment = $('<i class="icon comment far fa-comment"></i>');
      var $retweet = $('<i class="icon retweet fas fa-retweet"></i>');
      var $like = $('<i class="icon like far fa-heart"></i>');
      var $share = $('<i class="icon share far fa-share-square"></i>');

      $tweet.append($profilePhoto, $username, $message, $timestamp, $comment, $retweet, $like, $share);
      $tweet.appendTo($feed);
      index -= 1;
    }
  };

  var handleUpdateFeedClick = function(event) {
    renderFeed();
    if ($updateFeed.text() === 'Back') {
      $updateFeed.text('Update Feed');
    }
  }
  var handleUsernameClick = function(event) {
    var name = event.currentTarget.innerText.slice(1);
    renderUserFeed(name);
    $updateFeed.text('Back');
  };

  // Set event listeners
  $updateFeed.on('click', handleUpdateFeedClick);
  renderFeed();

  // Append new HTML elements to the DOM
  $title.appendTo($app);
  $updateFeed.appendTo($app);
  $feed.appendTo($app);

});

