var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, messages) => {
      if (err) {
        console.log('error with controller messages get');
        throw (err);
      } else {
        res.writeHead(200, 'Content-Type: application/json');
        res.end(null, JSON.stringify(messages));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req, (err) => {
      if (err) {
        console.log('error with controller message post');
      } else {
        res.writeHead(201, 'Content-Type: application/json');
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
