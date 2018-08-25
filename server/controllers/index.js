var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, success) => {
        if (err) res.sendStatus(400);
        var data = {
          results: success
        };
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body)
      var message = req.body;
      var { username } = message;
      models.users.post(username, (err, success) => {
        if (err) { res.sendStatus(400); }
        models.messages.post(message, (err, success) => {
          if (err) { res.sendStatus(400); }
          res.sendStatus(200);
        });
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
      models.users.post(user, (err, success) => {
        if (err) res.sendStatus(400);
        res.sendStatus(200);
      });
      
    }
  }
};

