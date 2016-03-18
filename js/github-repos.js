var apiKey = require('./../.env').apiKey;

exports.getRepositories = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    console.log(response);
    $('#publicRepos').empty();

    response.forEach(function(single_repository) {
      $('#publicRepos').append("<li><a href=" + single_repository.html_url + " target='_blank'>" + single_repository.name + "</a><small> (" + single_repository.language + ")</small>");

      if (single_repository.description === "") {
        $('#publicRepos').append("</li>");
      } else {
        $('#publicRepos').append("<ul><li>" + single_repository.description + "</li></ul></li>");
      }
    });
  }).fail(function(error) {
    alert(error.responseJSON.message);
  });
};
