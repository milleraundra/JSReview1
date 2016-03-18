var apiKey = require('./../.env').apiKey;

exports.getRepositories = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {
    console.log(response);
    $('#publicRepos').empty();

    response.forEach(function(single_repository) {
      //debugger;
      if (single_repository.description === "") {
        $('#publicRepos').append(
          "<li class='collection-item'><span class='title'>Repository: <a href=" + single_repository.html_url + " target='_blank'>" + single_repository.name + "</a></span><p>Language: " + single_repository.language + "</p></li>");

      } else {
        $('#publicRepos').append(
          "<li class='collection-item'><span class='title'>Repository: <a href=" + single_repository.html_url + "target='_blank'>" + single_repository.name + "</a></span><p>Language: " + single_repository.language + "<br>Description: " + single_repository.description + "</p></li>");
      }
    });
  }).fail(function(error) {
    alert(error.responseJSON.message);
  });
};
