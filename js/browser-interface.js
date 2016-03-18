var getUsername = require('./../js/github-user.js').getUsername;

$(document).ready(function(){

  $('#search').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    getUsername(username);
  });
  
});
