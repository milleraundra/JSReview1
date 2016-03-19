var apiKey = require('./../.env').apiKey;
var getRepositories = require('./github-repos.js').getRepositories;

exports.getUsername = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#fullName').text(response.name);
    $('#foundUser').text("Username: " + response.login);
    $('#totalRepos').text("Total Repositories: " + response.public_repos);
    getRepositories(username);

  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};
