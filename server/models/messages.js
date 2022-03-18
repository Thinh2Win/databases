var db = require('../db');
// note module.exports is a special object that is able to export itself to other files? 
module.exports = {
  getAll: function (callback) {
    db.connection.query(
      'SELECT * FROM messages',
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  }, // a function which produces all the messages
  create: function (req, callback) {
    db.connection.query (
      `INSERT INTO messages (txt) Values(${req.body.text})`,
      function (err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );

  } // a function which can be used to insert a message into the database
};
