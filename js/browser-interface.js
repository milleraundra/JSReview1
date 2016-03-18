var getUsername = require('./../js/github-user.js').getUsername;

$(document).ready(function(){

  $('#publicRepos').hide();

  $('#search').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#publicRepos').show();
    getUsername(username);
  });

});
