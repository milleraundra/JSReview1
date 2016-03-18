var apiKey = require('./../.env').apiKey;

exports.getRepositories = function(username){
  //call the header
  // var header = curl -I 'https://api.github.com/users/' + username + '/repos?access_token=' + apiKey
  // $.get(curl -I 'https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(header) {
  //   //search for first page=2
  //   var search = 'page=';
  //   if (header.search(search) !== -1) {
  //     //remove the first instance of page=
  //     var newLink = string.remove(search, '');
  //     //search new link for index of page= for new page number
  //     var lastPageIndex = string.search('page=');
  //     var pageNumber = string.substr(lastPageIndex + 5, 1);
  //     console.log(pageNumber);
  //   }
  // }).fail(function(error) {
  //   alert(error.responseJSON.message);
  // });

  $.get('https://api.github.com/users/' + username + '/repos?sort=created&access_token=' + apiKey).then(function(response) {

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
