let employeeList = require('../../data/employees.js');

module.exports = function (app) {

    //This pulls the employee list for the api
  app.get('/api/employees', function (req, res) {
    res.json(employeeList);
  });
  app.post('/api/employees', function (req, res) {
      employeeList.push(req.body);

    res.end();
  });
}
