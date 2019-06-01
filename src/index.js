const express = require('express');
const app = express();
const morgan = require('morgan');

// setting
app.set('port', process.env.PORT || 3001)
app.set('json spaces', 2);

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//

// routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//APP FROM https://www.youtube.com/watch?v=bK3AJfs7qNY