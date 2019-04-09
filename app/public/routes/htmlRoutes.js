const path = require('path')
module.exports = function (app) {
    //Route to point the user to the survey page
    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname,'../survey.html'));
    });
    //Route to point to the home page in any scenario
    app.get('/', function (res, req){
        res.sendFile(path.join(__dirname,'../home.html'))
    })

  }