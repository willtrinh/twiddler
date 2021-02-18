$(document).ready(function(){
  // Select already existing elements
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements
  var $title = $('<a href="index.html"><h1 class="header">Twiddler_</h1></a>');
  var $container = $('<div class="container-fluid"></div>');
  var $feed = $('<div id="feed" class="col-8"></div>');
  var $updateFeed = $('<button class="btn btn-block" id="update-feed">Update Feed</button>');
  var $friendsList = $('<div class="btn-block" id="friends-list">Friends<hr></div>');
  var $friends = $('<ul id="friends"></ul>');
  var $row = $('<div class="row"></div>');
  var $leftSection = $('<div class="col-4"></div>');
  // Create event handler functions
  var renderFeed = function(name) {
    $feed.empty();
    if (typeof name === 'string'){
      for (var user in streams.users){
        if (name === user) {
          var index = streams.users[name].length - 1;
          while (index >= 0) {
            var tweet = streams.users[name][index];
            var $tweet = $('<div class="tweet"></div>');
            // Tweets UI Components
            var $profilePhoto = $('<img class="profile-photo" src="assets/img/' + user + '.png">')
            var $username = $('<span class="username">@' + user + '</span>');
            var $message = $('<p class="message">' + tweet.message + '</p>');
            var $timestamp = $('<span class="timestamp">' + jQuery.timeago(tweet.created_at) + '</span><br><hr>');
            // Icons
            var $comment = $('<i class="icon comment far fa-comment"></i>');
            var $retweet = $('<i class="icon retweet fas fa-retweet"></i>');
            var $like = $('<i class="icon like far fa-heart"></i>');
            var $share = $('<i class="icon share far fa-share-square"></i>');

            $tweet.append($profilePhoto, $username, $message, $timestamp, $comment, $retweet, $like, $share);
            $tweet.appendTo($feed);
            index -= 1;
          }
        }
      }
    } else {
      var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweet"></div>');
        // Tweets UI Components
        var $profilePhoto = $('<img class="profile-photo" src="./assets/img/' + tweet.user + '.png">')
        var $username = $('<span class="username">@' + tweet.user + '</span>');
        var $message = $('<p class="message">' + tweet.message + '</p>');
        var $timestamp = $('<span class="timestamp">' + jQuery.timeago(tweet.created_at) + '</span><br><hr>');

        // Icons
        var $comment = $('<i class="icon comment far fa-comment"></i>');
        var $retweet = $('<i class="icon retweet fas fa-retweet"></i>');
        var $like = $('<i class="icon like far fa-heart"></i>');
        var $share = $('<i class="icon share far fa-share-square"></i>');

        $tweet.append($profilePhoto, $username, $message, $timestamp, $comment, $retweet, $like, $share);
        $tweet.appendTo($feed);
        index -= 1;
      }
    }
    $('.username').on('click', handleUsernameClick);
    $('#friends li').on('click', handleUsernameClick);
  };

  // var renderUserFeed = function(name) {
  //   $feed.empty();
  //   index = streams.users[name].length - 1;
  //   while(index >= 0){
  //     tweet = streams.users[name][index];
  //     var $tweet = $('<div class="tweet"></div>');
  //     // Tweets UI Components
  //     var $profilePhoto = $('<img class="profile-photo" src="assets/img/' + tweet.user + '.png">')
  //     var $username = $('<span class="username">@' + tweet.user + '</span>');
  //     var $message = $('<p class="message">' + tweet.message + '</p>');
  //     var $timestamp = $('<span class="timestamp">' + jQuery.timeago(tweet.created_at) + '</span>');
  //     // Icons
  //     var $comment = $('<i class="icon comment far fa-comment"></i>');
  //     var $retweet = $('<i class="icon retweet fas fa-retweet"></i>');
  //     var $like = $('<i class="icon like far fa-heart"></i>');
  //     var $share = $('<i class="icon share far fa-share-square"></i>');

  //     $tweet.append($profilePhoto, $username, $message, $timestamp, $comment, $retweet, $like, $share);
  //     $tweet.appendTo($feed);
  //     index -= 1;
  //   }
  // };
  var renderFriends = function() {
    for (var user in streams.users) {
      var $li = $('<li class="friend"></li>');
      $li.text('@' + user);
      $li.appendTo($friends);
    }
  };

  var handleUpdateFeedClick = function(event) {
    if ($updateFeed.text() === 'Back') {
      $updateFeed.text('Update Feed');
    }
    renderFeed();
  }
  var handleUsernameClick = function(event) {
    var name = event.currentTarget.innerText.slice(1);
    $updateFeed.text('Back');
    renderFeed(name);

  };

  // Set event listeners
  renderFeed();
  renderFriends();
  $updateFeed.on('click', handleUpdateFeedClick);


  // Append new HTML elements to the DOM
  $friends.appendTo($friendsList);
  $updateFeed.appendTo($leftSection);
  $friendsList.appendTo($leftSection);
  $leftSection.appendTo($row);
  $feed.appendTo($row);
  $title.appendTo($app);
  $row.appendTo($container);
  $container.appendTo($app);

});

