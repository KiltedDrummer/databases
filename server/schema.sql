DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   roomname varchar(255),
--   PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userId int NOT NULL,
  roomname varchar(255),
  message varchar(500),
  createdAt date,
  updatedAt date,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) references users(id) ON delete cascade
  -- FOREIGN KEY (roomId) references rooms(id) ON delete cascade
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

