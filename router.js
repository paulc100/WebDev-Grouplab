var PaulController = require('./Controllers/PaulController');
var PaulController = require('./Controllers/PaulController');
var PaulController = require('./Controllers/PaulController');
var PaulController = require('./Controllers/PaulController');
var PaulController = require('./Controllers/PaulController');
var RamanController = require('./Controllers/RamanController');

// Routes
module.exports = function(app){  
    // Main Routes
    app.get('/',      PaulController.PaulIndex);    
    app.get('/Paul',      PaulController.PaulIndex);
    app.get('/Leo',      PaulController.PaulIndex);
    app.get('/Kraz',      PaulController.PaulIndex);
    app.get('/Yang',      PaulController.PaulIndex);
    app.get('/Raman,'  	  RamanController.RamanIndex);
};
