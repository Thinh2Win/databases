var mysql = require('mysql2');
// we are requiring something so that indicates that we must export something later
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
// the database is its own server, so we can't specify a port ex.3000

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});
// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

exports.connection = connection;


