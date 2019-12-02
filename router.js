var PaulController = require('./Controllers/PaulController');
var LeoController = require('./Controllers/LeoController');
var KrazController = require('./Controllers/KrazController');
var YangController = require('./Controllers/YangController');
var RamanController = require('./Controllers/RamanController');

// Routes
module.exports = function(app){  
    // Main Routes
    app.get('/',      PaulController.PaulIndex);    
    app.get('/Paul',      PaulController.PaulIndex);
    app.get('/Leo',      LeoController.LeoIndex);
    app.get('/Kraz',      KrazController.KrazIndex);
    app.get('/Yang',      YangController.YangIndex);
    app.get('/Raman',  	  RamanController.RamanIndex);
};