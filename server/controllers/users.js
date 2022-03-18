var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, users) => {
      if (err) {
        // want to let the client know theres an error so we need to use response.send
        res.status(500).send(err);
      } else {
        //res.send will parse objects, arrays, and strings, buffers but not numbers
        res.send(users);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req, (err) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send('message sent');
      }
    });
  }
};
