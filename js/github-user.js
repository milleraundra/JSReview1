var apiKey = require('./../.env').apiKey;
var getRepositories = require('./github-repos.js').getRepositories;

exports.getUsername = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log("inside getUsername");
    $('#foundUser').text(response.login);
    console.log(response.login);
    $('#fullName').text(response.name);
    console.log(response.name);
    //run getRepositories
    getRepositories(username);

  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};
