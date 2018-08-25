var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT messages.id, users.username, messages.roomname, messages.message FROM users, messages WHERE messages.userId = users.id;', (err, rows, fields) => {
        if (err) { return callback(err); }
        callback(null, rows);
      });
    }, // a function which produces all the messages
    post: function (messageObj, callback) {
      // find username Id
      //post username
      //then all this
      db.connection.query('SELECT * FROM users WHERE username = ?', messageObj.username, (err, rows, fields) => {
        if (err) { throw err; }
          
        // post message with userId
        var post = {
          userId: rows[0].id,
          roomname: messageObj.roomname,
          message: messageObj.message
        };
        // var post2 = [rows[0].id, messageObj.roomname, messageObj.message];
        db.connection.query('INSERT INTO messages SET ?', post, (err, rows, fields) => {
          if (err) { return callback(err); }
          callback(null, rows);
          
        });
        
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (name, callback) {
      db.connection.query('SELECT * FROM users WHERE username = ?', name, (err, rows, fields) => {
        if (err) { return callback(err); }
        callback(null, rows[0].id);
      });
    },
    post: function (name, callback) {
      db.connection.query('INSERT INTO users SET ?', {username: name}, (err, rows, fields) => {
        if (err) { console.log(err); }
        callback(null, true);
      });
    }
  }
};

