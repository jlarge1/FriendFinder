var friendData = require("../data/friends");



module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
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

  app.post("/api/clear", function () {
    // Empty out the arrays of data
    friendsData = [];

    console.log(tableData);
  });
};

