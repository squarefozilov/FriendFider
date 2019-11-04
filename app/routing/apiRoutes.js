var path = require('path');
// Import data
var friends = require('../data/friends.js');
var path = require('path');

// Export API routes
module.exports = function(app) {

// Displays all characters  
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
app.post("/api/characters", function(req, res) {
    console.log('-------------');
    var newCharacter = req.body;
  
    var userResponses = newCharacter.answers;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
   // newCharacter.routeName = newCharacter.name.replace(/\s+ /g, "").toLowerCase();
    //console.log(newCharacter);
    console.log(newCharacter.name);
  
      var matchName = '';
          var matchImage = '';
          var totalDifference = 100;
    for (var i = 0; i < friends.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));
  
      // Compute differenes for each question
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].answers[j] - userResponses[j]);
        //diff += Math.abs(friendList[i].friendList[j] - );
      }
      // console.log('diff = ' + diff);
  
      // If lowest difference, record the friend match
      if (diff < totalDifference) {
        // console.log('Closest match found = ' + diff);
        // console.log('friendList name = ' + friendList[i].name);
        // console.log('friendList image = ' + friendList[i].photo);
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
        console.log(matchName);
      }
    }
    console.log(newCharacter)
    friends.push(newCharacter);
    console.log("111111111111111111111111111111111");
    console.log(matchImage);
    console.log(matchName);
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  
     /*var machingUser = JSON.stringify(newCharacter.answers);
       characters.forEach(function(val,id,array){
         
       if(machingUser == JSON.stringify(val.answers))
       {
         console.log("user----------------- Match");
         res.json(val);
      }
      else
      {
        console.log('Look forward');
        //res.json("--");
           
      }
       
      });
  
      */
  
   // console.log(machingUser);
  
   // characters.push(newCharacter);
  
   
    // res.json(characters);
    //res.(newCharacter);
  });
};