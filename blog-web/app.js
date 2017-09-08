var mongoose = require('mongoose');
var express = require('express');
var routes = require('./router/router');
var environment = require('./environment/environment');
// var api = require('./models/api');
var bodyParser = require('body-parser');
// var environment = require('./environment/environment');

var cors = require('cors');



mongoose.connect(environment.database);
mongoose.connection.on('open', function () {
    console.error('链接mongo成功');
    var app = express();
   

    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(routes);
    app.listen(environment.port, function (err) {
        console.log('Server is running on port ' + environment.port);
    });
});