var apiKey = require('./../.env').apiKey;

exports.getRepositories = function(username){
  console.log("inside of getRepositories");
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    $('#publicRepos').empty();
    response.forEach(function(single_repository) {
      $('#publicRepos').append("<li><a href=" + single_repository.html_url + " target='_blank'>" + single_repository.name + "</a><small> (" + single_repository.language + ")</small></li>");
      console.log("yes");
    });
  }).fail(function(error) {
    alert(error.responseJSON.message);
  });
};
