var apiKey = require('./../.env').apiKey;

exports.getUsername = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    //set path to return info
    console.log(response);
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};
