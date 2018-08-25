var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, success) => {
        if (err) res.sendStatus(400);
        res.send(success);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      models.messages.post(message, (err, success) => {
        if (err) res.sendStatus(400);
        res.sendStatus(200);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req)
    },
    post: function (req, res) {
      var user = req.body.username;
      models.users.post(user);
      res.sendStatus(200);
    }
  }
};

