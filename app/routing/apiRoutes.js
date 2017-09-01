var path = require('path');

module.exports(app) {
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname + '/app/public/survey.html');
    });
}