var apiKey = require('./../.env').apiKey;

exports.getUsername = function() {
  $.get('https://api.github.com/users/milleraundra?access_token=' + APIkey).then(function(response){
    //set path to return info
    console.log(response);
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};
