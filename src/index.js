const express = require('express'),
      path = require('path'),
      morgan = require('morgan');
     // mysql = require('mysql'),npm
     // myConnection = require('express-myconnection');
      

const app = express();



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// middlewares
//app.use(morgan('dev'));
/*app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'sapanam',
  password: '',
  database: 'panam_db',
}, 'single'));
*/

//use mysql;
//update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';

app.use(express.urlencoded({extended: false}));

// routes
// importing routes
const PanamRoutes = require('./app/routes/wandelRoutes');
app.use('/', PanamRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));


//console.log('>>'+path.join(__dirname, 'assets'));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});