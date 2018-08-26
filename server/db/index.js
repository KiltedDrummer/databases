var Sequelize = require('sequelize');
var mysql = require('mysql');

var db = new Sequelize('chat', 'student', 'student', {host: 'localhost'});

var Message = db.define('Message', {
  message: Sequelize.STRING,
  roomname: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

var User = db.define('user', {
  username: Sequelize.STRING
});


Message.belongsTo(User);
User.hasMany(Message);

User.sync();
Message.sync();

db.sync({ force: true });
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.User = User;
exports.Message = Message;

// exports.connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'student',
//   password: 'student',
//   database: 'chat'
// });

