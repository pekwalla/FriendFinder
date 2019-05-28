var html = function() {
    this.home = function(app, path) {
        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });
    },
    this.survey = function(app, path) {
        app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        });
    }
}

module.exports = html;