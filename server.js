const express = require('express');
const path = require('path');
const app = express();

const PORT = 2125;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

require('./app/public/routes/apiRoutes.js')(app);
require('./app/public/routes/htmlRoutes.js')(app);



app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})