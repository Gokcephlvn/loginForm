var express = require('express');
var app = express();
var loginController = require('./controller/loginController');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
const api = express.Router();
api.get('/records', require('./controller/showRecordsController'))
app.use('/api/v1/', api);
loginController(app);
app.listen(8000);