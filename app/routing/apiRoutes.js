// ===============================================================================
// ROUTING
// ===============================================================================
var friendData = require("../data/friends");



module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware



    var diff = [];
    var userScores = req.body.scores;
    var matchIndex;
    var length = friendData.length;

    for (i = 0; i < length; i++) {
      var dataScores = friendData[i].scores;
      var subtract = [];
      for (j = 0; j < dataScores.length; j++) {
        subtract.push(Math.abs(userScores[j] - dataScores[j]));
      };
      function getSum(total, num) {
        return total + num;
      }
      diff.push(subtract.reduce(getSum));
    };

    var minimum = Math.min(...diff);

    matchIndex = diff.indexOf(minimum);
  
    friendData.push(req.body);

    res.json(friendData[matchIndex]);



  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function () {
    // Empty out the arrays of data
    friendsData = [];

    console.log(tableData);
  });
};

