


var api = function() {
    this.jsonFriends = function(app, friends) {
            app.get("/api/friends", function(req, res) {
                res.json(friends);
            });
        },
        this.postUser = function(app, friends) {
            app.post("/api/friends", function(req, res) {
                var newUser = req.body;
                var curUserIndex = 0;
                var totDiffs = [];
                while (curUserIndex < friends.length) {
                    var totalDifference = 0;
                    for (var i = 0; i < newUser.scores.length; i++) {
                        totalDifference += Math.abs(parseInt(friends[curUserIndex].scores[i]) - parseInt(newUser.scores[i]));
                    }
                    totDiffs.push(totalDifference);
                    curUserIndex++;
                }
                var lowest = totDiffs[0];
                for (var i = 0; i < totDiffs.length; i++) {
                    if (totDiffs[i] < lowest) {
                        lowest = totDiffs[i];
                    }
                }
                var bestMatch = totDiffs.indexOf(lowest);
                res.send(friends[bestMatch]);
                friends.push(newUser);
            });
        };
}
module.exports = api;