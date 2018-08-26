// var models = require('../models');
var db = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.sync()
        .then(()=> {
          return db.Message.findAll();
        })
        .then(messages => {
          console.log('messages', messages);
          res.json(messages);
        });
      // models.messages.get((err, success) => {
      //   if (err) { res.sendStatus(400); }
      //   var data = {
      //     results: success
      //   };
      //   res.send(data);
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread((user, created) => {
          db.Message.create({
            userid: user.get('id'),
            message: req.body.message,
            roomname: req.body.roomname
          }).then(message => res.sendStatus(201));
        });
      
      
      
      // var message = req.body;
      // var { username } = message;
      // models.users.post(username, (err, success) => {
      //   if (err) { res.sendStatus(400); }
      //   models.messages.post(message, (err, success) => {
      //     if (err) { res.sendStatus(400); }
      //     res.sendStatus(200);
      //   });
      // });
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}}).spread((user, created) => {
        res.sendStatus(created ? 201 : 200);
      });
      // var user = req.body.username;
      // models.users.post(user, (err, success) => {
      //   if (err) { res.sendStatus(400); }
      //   res.sendStatus(200);
      // });
      
    }
  } 
};

